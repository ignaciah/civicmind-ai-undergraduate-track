export default async function community(req) {
  const { need } = await req.json();

  const data = await fetch(`${DATA_URL}/resources.json`).then(r => r.json());
  return Response.json(data[need] || []);
}
