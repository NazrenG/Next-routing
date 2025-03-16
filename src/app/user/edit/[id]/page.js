"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPage() {
  const [data, setData] = useState({ name: "", username: "" }); 
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((user) => {
          setData({ name: user.name, username: user.username });
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [id]);
  const EditUser = async (event) => {
    event.preventDefault(); 
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert(responseData.message);
        router.push("/");  
      } else {
        alert(responseData.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }  
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Card</h2>
        <form className="flex flex-col gap-4" onSubmit={EditUser}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Usename
            </label>
            <input
              value={data.username}
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Edit Card
          </button>
        </form>
      </div>
    </div>
  );
}
