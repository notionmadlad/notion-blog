import fs from "node:fs";

export default function(htmlContent: string) {
  const base64EncodedHtml = Buffer.from(htmlContent).toString('base64')
  const dataUrl = `data:text/html;base64,${base64EncodedHtml}`

  return dataUrl;
}