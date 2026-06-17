const web3FormsAccessKey =
  process.env.WEB3FORMS_ACCESS_KEY ??
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

function getString(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (getString(formData, "botcheck")) {
    return Response.json({ success: true });
  }

  const name = getString(formData, "name");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const message = getString(formData, "message");

  if (!name || !email || !phone || !message) {
    return Response.json({ success: false }, { status: 400 });
  }

  if (!web3FormsAccessKey || web3FormsAccessKey === "YOUR_ACCESS_KEY_HERE") {
    return Response.json({ success: false }, { status: 500 });
  }

  return Response.json({ success: true, accessKey: web3FormsAccessKey });
}
