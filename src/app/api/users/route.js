export async function GET() {
  const users = [
    { id: 1, name: "Alice Johnson", username: "alice_j" },
    { id: 2, name: "Bob Smith", username: "bob_smith" },
    { id: 3, name: "Charlie Brown", username: "charlie_b" },
    { id: 4, name: "David Williams", username: "david_w" },
    { id: 5, name: "Emma Davis", username: "emma_d" },
    { id: 6, name: "Frank Miller", username: "frank_m" },
    { id: 7, name: "Grace Lee", username: "grace_l" },
    { id: 8, name: "Henry Wilson", username: "henry_w" },
    { id: 9, name: "Isla Martinez", username: "isla_m" },
    { id: 10, name: "Jack Taylor", username: "jack_t" },
  ];
  return new Response(
    JSON.stringify(
      { users: users },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  );
}

export async function POST(req) {
  const users = [{ name: "Nezrin", username: "NazreenG" }];

  const newUser = await req.json();
  users.push(newUser);

  return new Response(
    JSON.stringify({ message: "User added successfully!", users }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
