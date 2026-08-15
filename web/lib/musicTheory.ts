export type ChordProgressionMood =
  | "happy"
  | "sad"
  | "romantic"
  | "energetic"
  | "epic"
  | "calm"
  | "dark"
  | "motivational"
  | "love"
  | "emotional"
  | "party"
  | "relaxing";

export interface ChordProgression {
  key: string;
  mode: "major" | "minor";
  mood: ChordProgressionMood;
  romanNumerals: string[];
  chords: string[];
  description: string;
}

const MAJOR_KEYS: Record<string, string[]> = {
  C: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
  "C#": ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
  Db: ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
  D: ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
  "D#": ["D#", "E#m", "F##m", "G#", "A#", "B#m", "C##dim"],
  Eb: ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"],
  E: ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
  F: ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
  "F#": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
  Gb: ["Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "Fdim"],
  G: ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
  "G#": ["G#", "A#m", "B#m", "C#", "D#", "E#m", "F##dim"],
  Ab: ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
  A: ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
  "A#": ["A#", "B#m", "C##m", "D#", "E#", "F##m", "G##dim"],
  Bb: ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
  B: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
};

const MINOR_KEYS: Record<string, string[]> = {
  Am: ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
  Bm: ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
  Cm: ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
  Dm: ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"],
  Em: ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
  Fm: ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"],
  Gm: ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"],
};

const MAJOR_PROGRESSIONS: Record<
  ChordProgressionMood,
  { roman: string[]; description: string }
> = {
  happy: {
    roman: ["I", "V", "vi", "IV"],
    description: "Bright, uplifting and familiar pop progression.",
  },
  sad: {
    roman: ["vi", "IV", "I", "V"],
    description: "Melancholic progression with a strong emotional pull.",
  },
  romantic: {
    roman: ["I", "vi", "IV", "V"],
    description: "Warm romantic progression suitable for love songs.",
  },
  energetic: {
    roman: ["I", "IV", "V", "vi"],
    description: "Driving progression with strong forward momentum.",
  },
  epic: {
    roman: ["I", "V", "vi", "iii", "IV"],
    description: "Expansive cinematic progression with emotional lift.",
  },
  calm: {
    roman: ["I", "IV", "ii", "V"],
    description: "Smooth and balanced progression for relaxed music.",
  },
  dark: {
    roman: ["vi", "IV", "ii", "V"],
    description: "Tense minor-colored movement while retaining a major center.",
  },
  motivational: {
    roman: ["I", "V", "IV", "I"],
    description: "Strong resolving progression for inspirational music.",
  },
  love: {
    roman: ["I", "vi", "IV", "V"],
    description: "Classic emotional progression for love themes.",
  },
  emotional: {
    roman: ["vi", "V", "IV", "I"],
    description: "Emotional descending movement with a strong resolution.",
  },
  party: {
    roman: ["I", "IV", "vi", "V"],
    description: "Catchy repeating progression for upbeat party tracks.",
  },
  relaxing: {
    roman: ["I", "vi", "IV", "V"],
    description: "Gentle repeating progression suitable for relaxed arrangements.",
  },
};

const MINOR_PROGRESSIONS: Record<
  ChordProgressionMood,
  { roman: string[]; description: string }
> = {
  happy: {
    roman: ["i", "VI", "III", "VII"],
    description: "A lighter minor progression with an uplifting movement.",
  },
  sad: {
    roman: ["i", "VI", "III", "VII"],
    description: "Classic melancholic minor progression.",
  },
  romantic: {
    roman: ["i", "iv", "VI", "V"],
    description: "Warm and dramatic minor progression.",
  },
  energetic: {
    roman: ["i", "VII", "VI", "VII"],
    description: "Driving minor progression with strong rhythmic potential.",
  },
  epic: {
    roman: ["i", "VII", "VI", "III"],
    description: "Cinematic minor progression with dramatic movement.",
  },
  calm: {
    roman: ["i", "III", "VII", "VI"],
    description: "Soft minor progression with a flowing character.",
  },
  dark: {
    roman: ["i", "VI", "iv", "V"],
    description: "Dark dramatic progression with strong tension.",
  },
  motivational: {
    roman: ["i", "VII", "III", "VI"],
    description: "Powerful minor progression with an uplifting destination.",
  },
  love: {
    roman: ["i", "VI", "III", "VII"],
    description: "Emotional minor progression for intimate love themes.",
  },
  emotional: {
    roman: ["i", "VII", "VI", "V"],
    description: "Deep emotional progression with descending tension.",
  },
  party: {
    roman: ["i", "VII", "VI", "VII"],
    description: "Energetic minor progression for modern dance arrangements.",
  },
  relaxing: {
    roman: ["i", "III", "VII", "VI"],
    description: "Smooth minor progression for chill and atmospheric tracks.",
  },
};

function normalizeKey(input: string): {
  key: string;
  mode: "major" | "minor";
} {
  const value = input.trim();

  const minorMatch = value.match(/^([A-Ga-g])([#b]?)(?:\s+minor|\s+m)?$/i);

  if (
    minorMatch &&
    /\b(minor|m)\b/i.test(value)
  ) {
    const key = `${minorMatch[1].toUpperCase()}${minorMatch[2] || ""}m`;

    if (MINOR_KEYS[key]) {
      return {
        key,
        mode: "minor",
      };
    }
  }

  const majorMatch = value.match(/^([A-Ga-g])([#b]?)/);

  if (majorMatch) {
    const key = `${majorMatch[1].toUpperCase()}${majorMatch[2] || ""}`;

    if (MAJOR_KEYS[key]) {
      return {
        key,
        mode: "major",
      };
    }
  }

  return {
    key: "C",
    mode: "major",
  };
}

function romanToIndex(roman: string): number {
  const normalized = roman
    .replace(/[^ivIV]/g, "")
    .toUpperCase();

  const map: Record<string, number> = {
    I: 0,
    II: 1,
    III: 2,
    IV: 3,
    V: 4,
    VI: 5,
    VII: 6,
  };

  return map[normalized] ?? 0;
}

export function suggestChordProgression(
  keyInput: string,
  moodInput: string = "happy",
): ChordProgression {
  const { key, mode } = normalizeKey(keyInput);

  const mood = (
    moodInput.trim().toLowerCase() || "happy"
  ) as ChordProgressionMood;

  const safeMood: ChordProgressionMood =
    mood in
    (mode === "major"
      ? MAJOR_PROGRESSIONS
      : MINOR_PROGRESSIONS)
      ? mood
      : "happy";

  const progression =
    mode === "major"
      ? MAJOR_PROGRESSIONS[safeMood]
      : MINOR_PROGRESSIONS[safeMood];

  const scale =
    mode === "major"
      ? MAJOR_KEYS[key]
      : MINOR_KEYS[key];

  const chords = progression.roman.map((roman) => {
    return scale[romanToIndex(roman)] || scale[0];
  });

  return {
    key,
    mode,
    mood: safeMood,
    romanNumerals: progression.roman,
    chords,
    description: progression.description,
  };
}

export function formatChordProgression(
  progression: ChordProgression,
): string {
  return `${progression.chords.join(" - ")} (${progression.romanNumerals.join(" - ")})`;
}

export function getSupportedChordKeys(): string[] {
  return [
    ...Object.keys(MAJOR_KEYS),
    ...Object.keys(MINOR_KEYS).map((key) =>
      key.replace(/m$/, ""),
    ),
  ];
}
