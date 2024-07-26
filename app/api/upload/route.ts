import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { NextResponse } from "next/server";
import { Readable } from "stream";
import { Buffer } from "buffer";

export async function POST(request: Request) {
  try {
    // Read the file from the request
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Convert buffer to Blob
    const blob = new Blob([fileBuffer]);

    // console.log(fileBuffer,blob);

    // Initialize PDFLoader
    const loader = new PDFLoader(blob);

    // Load PDF from buffer and extract text
    const documents = await loader.load();
    let fullpage = "";
    // console.log(documents[0].pageContent);

    for (let document in documents) {
      fullpage += documents[document].pageContent;
    }

    const vercelUrl =
      process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

    console.log(vercelUrl);

    // https://bolajibada-gs1t8eict-mobolajis-projects-591f2fcd.vercel.app

    const response = await fetch(`${vercelUrl}/api/retrieval/ingest/`, {
      method: "POST",
      body: JSON.stringify({
        text: fullpage,
      }),
    });

    console.log(response);

    return NextResponse.json({ fullpage });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
