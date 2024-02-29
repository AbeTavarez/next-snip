import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
  <div>
    <h1>Home Page</h1>

    {snippets.map((snippet) => (
      <div key={snippet.id}>
        {snippet.title}
      </div>
    ))}
  </div> 
  );
}
