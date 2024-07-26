"use server";

import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export default async function pdfLoader(formData: any) {
    console.log(formData);
    
//   const blob = new Blob([formData.file], { type: file.type });
  const loader = new PDFLoader(formData[0]);
  console.log(loader);

  const docs = await loader.load();
  return docs;
}
