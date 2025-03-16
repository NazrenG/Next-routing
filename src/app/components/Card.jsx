"use client";
import Link from "next/link";
export default function Card({ card }) {
  const DeleteUser = async ({ id }) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert(response);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-full max-w-md mx-auto">
      <div>
        <p className="text-lg font-semibold text-gray-800">{card.name}</p>
        <p className="text-gray-600">{card.username}</p>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          onClick={() => DeleteUser(card.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
        <Link href="/user/edit">
          <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
}
