import { run } from "@/src/services/mongoDb/mongoDbService";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await run();

  // const res = await fetch('https://data.mongodb-api.com/...', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'API-Key': process.env.DATA_API_KEY!,
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  // const data = await res.json()

  return Response.json({ message: "Hello World!" });
}
