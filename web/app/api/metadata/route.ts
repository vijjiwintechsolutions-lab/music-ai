import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MUSICBRAINZ_API =
  "https://musicbrainz.org/ws/2";

const COVER_ART_API =
  "https://coverartarchive.org";

const USER_AGENT =
  "MarketAI/1.0 (https://github.com/vijjiwintechsolutions-lab/music-ai)";

interface MusicBrainzArtist {
  id?: string;
  name?: string;
  disambiguation?: string;
  country?: string;
  type?: string;
}

interface MusicBrainzRecording {
  id?: string;
  title?: string;
  length?: number | null;
  "artist-credit"?: Array<{
    artist?: MusicBrainzArtist;
    name?: string;
  }>;
  releases?: Array<{
    id?: string;
    title?: string;
    date?: string;
    country?: string;
  }>;
}

interface MusicBrainzResponse {
  recordings?: MusicBrainzRecording[];
  count?: number;
}

interface CoverArtImage {
  id?: number;
  image?: string;
  thumbnails?: {
    small?: string;
    large?: string;
  };
  front?: boolean;
  back?: boolean;
}

interface CoverArtResponse {
  images?: CoverArtImage[];
}

function clean(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function escapeMusicBrainzQuery(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

function getCoverArt(
  releaseId: string,
): CoverArtImage | null {
  return null;
}

async function fetchJson<T>(
  url: string,
): Promise<T> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `External API returned HTTP ${response.status}.`,
    );
  }

  return (await response.json()) as T;
}

async function searchRecordings(
  title: string,
  artist: string,
): Promise<MusicBrainzResponse> {
  const parts: string[] = [
    `recording:"${escapeMusicBrainzQuery(title)}"`,
  ];

  if (artist) {
    parts.push(
      `artist:"${escapeMusicBrainzQuery(artist)}"`,
    );
  }

  const query = encodeURIComponent(parts.join(" AND "));

  const url =
    `${MUSICBRAINZ_API}/recording` +
    `?query=${query}` +
    "&fmt=json" +
    "&limit=5" +
    "&inc=artists+releases";

  return fetchJson<MusicBrainzResponse>(url);
}

async function fetchCoverArt(
  releaseId: string,
): Promise<CoverArtResponse | null> {
  if (!releaseId) {
    return null;
  }

  try {
    return await fetchJson<CoverArtResponse>(
      `${COVER_ART_API}/release/${encodeURIComponent(
        releaseId,
      )}`,
    );
  } catch {
    return null;
  }
}

function selectFrontCover(
  images: CoverArtImage[],
): CoverArtImage | null {
  if (!images.length) {
    return null;
  }

  return (
    images.find((image) => image.front === true) ||
    images[0] ||
    null
  );
}

export async function GET(
  request: NextRequest,
) {
  const { searchParams } = new URL(
    request.url,
  );

  const title = clean(
    searchParams.get("title"),
  );

  const artist = clean(
    searchParams.get("artist"),
  );

  if (!title) {
    return NextResponse.json(
      {
        success: false,
        error: "Song title is required.",
      },
      { status: 400 },
    );
  }

  if (title.length > 200) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Song title must be 200 characters or less.",
      },
      { status: 400 },
    );
  }

  if (artist.length > 200) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Artist name must be 200 characters or less.",
      },
      { status: 400 },
    );
  }

  try {
    const musicBrainz =
      await searchRecordings(title, artist);

    const recordings =
      Array.isArray(musicBrainz.recordings)
        ? musicBrainz.recordings
        : [];

    if (recordings.length === 0) {
      return NextResponse.json({
        success: true,
        found: false,
        source: "MusicBrainz",
        query: {
          title,
          artist,
        },
        results: [],
      });
    }

    const results = await Promise.all(
      recordings.slice(0, 5).map(
        async (recording) => {
          const artistCredits =
            Array.isArray(
              recording["artist-credit"],
            )
              ? recording["artist-credit"]
              : [];

          const release =
            Array.isArray(recording.releases) &&
            recording.releases.length > 0
              ? recording.releases[0]
              : null;

          const releaseId =
            release?.id || "";

          const coverArt =
            await fetchCoverArt(releaseId);

          const frontCover =
            selectFrontCover(
              Array.isArray(coverArt?.images)
                ? coverArt.images
                : [],
            );

          return {
            recordingId:
              recording.id || "",
            title:
              recording.title || title,
            lengthMs:
              typeof recording.length ===
              "number"
                ? recording.length
                : null,
            artists: artistCredits
              .map((credit) => ({
                id:
                  credit.artist?.id || "",
                name:
                  credit.artist?.name ||
                  credit.name ||
                  "",
                country:
                  credit.artist?.country ||
                  "",
                type:
                  credit.artist?.type ||
                  "",
              }))
              .filter(
                (item) => item.name,
              ),
            release: release
              ? {
                  id: release.id || "",
                  title:
                    release.title || "",
                  date:
                    release.date || "",
                  country:
                    release.country || "",
                }
              : null,
            coverArt: frontCover
              ? {
                  image:
                    frontCover.image || "",
                  small:
                    frontCover.thumbnails
                      ?.small || "",
                  large:
                    frontCover.thumbnails
                      ?.large || "",
                }
              : null,
          };
        },
      ),
    );

    return NextResponse.json({
      success: true,
      found: results.length > 0,
      source: "MusicBrainz",
      coverArtSource:
        "Cover Art Archive",
      query: {
        title,
        artist,
      },
      count: results.length,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Metadata lookup failed.",
      },
      { status: 502 },
    );
  }
}
