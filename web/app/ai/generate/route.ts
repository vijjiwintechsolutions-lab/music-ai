import { POST as generatePOST } from "@/app/api/ai/generate/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return generatePOST(request as never);
}
