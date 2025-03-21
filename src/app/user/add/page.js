"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPage() {
  const [data, setData] = useState({ name: "", username: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const PostUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/api/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert(responseData.message);
        setData({ name: "", username: "" });
        router.push("/");
      } else {
        alert(responseData.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Add New Card
        </h2>
        <form className="flex flex-col gap-4" onSubmit={PostUser}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              type="text"
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              value={data.username}
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
              required
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {loading ? "Adding..." : "Add Card"}
          </button>
        </form>
      </div>
    </div>
  );
}
