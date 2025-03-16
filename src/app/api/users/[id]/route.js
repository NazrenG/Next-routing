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

export async function PUT(req, { params }) {
  const userId = params.id;

  const body = await req.json();
  console.log(userId);

  return new Response(
    JSON.stringify({
      message: `User  is updated succesfull`,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
