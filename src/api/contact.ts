export async function POST(req: Request, res: Response) {
  console.log("req", req);
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'API-Key': process.env.DATA_API_KEY!,
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  // const data = await res.json()

  return "Hello World!";
}
