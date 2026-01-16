import Cards from "@/components/Cards";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
      <button className="bg-blue-400 p-2.5 rounded m-2">
        <Link href="/login">Login</Link>
      </button>
      <button className="bg-blue-400 p-2.5 rounded m-2">
        <Link href="/register">Register</Link>
      </button>
      {/*<Cards 
        userId={1}
        id={1}
        title="សួស្តី Bomnorng"
        body="Default Description"
      />*/}
    </div>
    </div>
  );
}
