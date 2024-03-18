import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl bold'>Snippets</h1>
        <Link href={"/snippets/new"} className='p-2 border rounded'>
          New
        </Link>
      </div>

      {snippets.map((snippet) => (
        <div className='flex flex-col gap-3' key={snippet.id}>
          <Link
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
            className='flex justify-between items-center p-2 border rounded'
          >
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
