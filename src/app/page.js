"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  function handelButton(){
    router.push("/account")
  }
  return (
    <div>
      <main className="min-h-screen flex items-center justify-center flex-col "> 
        <h1>Main page</h1>
        <Link href={"/products"}>Go to product page</Link>
        <Link href={"cart"}>Cart Page</Link>
        <button className="text-blue-400" onClick={handelButton}>Go to account page</button>
      </main>
    </div>
  );
}
