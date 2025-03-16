import Link from "next/link";
import  Card  from "./components/Card";
export default async function Home() {
  const users = await fetch("http://localhost:3000/api/users");
  const response = await users.json();
  const data = response.users;
  console.log(data);
  return (
    <div className="grid grid-cols-3 p-10 gap-5">
      <h1 className="font-bold text-4xl col-span-3 mb-5">Cards</h1>
      <Link   href={`user/add`}>   <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
          Add new user
        </button></Link>
   
      {data.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
