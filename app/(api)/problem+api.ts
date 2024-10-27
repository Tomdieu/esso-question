export async function POST(request: Request) {
  try {
    return Response.json({ data: "Hello" }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
