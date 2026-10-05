const lines = [
  "HYPERTHINK SYSTEMS",
  "AI in a Box — Overview",
  "",
  "Enterprise AI. Packaged. Private. Production-ready.",
  "",
  "A pre-integrated private AI platform that brings compute, AI software,",
  "data integration, and enterprise control into one deployable environment.",
  "",
  "THE FOUNDATION",
  "Compute  /  AI software  /  Data + integration  /  Control",
  "",
  "DEPLOYMENT",
  "Run fully on-premise or self-hosted in a dedicated cloud environment.",
  "",
  "RUNTIME CONTROL",
  "Identity  >  Policy  >  Guardrail  >  Tool call  >  Audit",
  "",
  "ENGAGEMENT",
  "Architect  >  Deploy  >  Secure and govern  >  Scale",
  "",
  "India  |  Qatar  |  UAE  |  Saudi Arabia",
  "hyperthinksys.com  |  info@hyperthinksys.com",
];

function escapePdf(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function createPdf() {
  const text = lines
    .map((line, index) => {
      const size = index === 0 ? 10 : index === 1 ? 27 : ["THE FOUNDATION", "DEPLOYMENT", "RUNTIME CONTROL", "ENGAGEMENT"].includes(line) ? 11 : 10;
      const leading = index === 1 ? 39 : 23;
      const color = index === 1 ? "0.76 0.15 0.16" : "0.04 0.11 0.33";
      return `${color} rg /F1 ${size} Tf ${index === 0 ? "" : `0 -${leading} Td`} (${escapePdf(line)}) Tj`;
    })
    .join("\n");
  const stream = `BT\n70 755 Td\n${text}\nET`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`).join("");
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}

export function GET() {
  return new Response(createPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="hyperthink-ai-in-a-box-overview.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
