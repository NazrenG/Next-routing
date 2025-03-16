export async function DELETE(req, { params }) {
  const userId = await params.id;
  console.log(userId);

  return new Response(
    JSON.stringify({ message: `User with id: ${userId} is deleted` }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export async function PUT(req, { param }) {
  const userId = await param.id;
  const body = await req.json();
  console.log(userId);

  return new Response(
    JSON.stringify({
      message: `User with id: ${userId} is updated with ${body.data}`,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
