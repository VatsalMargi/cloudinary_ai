"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router=  useRouter();
  const handlesignup = ()=>{
    router.push("/sign-up")
  }
  const handlesignin = () =>{
    router.push("/sign-in")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h6>Helper.ai</h6>
      <button 
      onClick={handlesignup}
      >Sign-up</button>
      <button
      onClick={handlesignin}
      >Sign-in</button>
    </main>
  );
}
