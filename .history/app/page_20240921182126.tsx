"use client";
import { useRouter } from "next/navigation";

// export default function Home() {
//   const router=  useRouter();
//   const handlesignup = ()=>{
//     router.push("/sign-up")
//   }
//   const handlesignin = () =>{
//     router.push("/sign-in")
//   }
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h6>Helper.ai</h6>
//       <button classname =  "text-gray-600 hover:text-gray-900 px-4 py-2"
//       onClick={handlesignup}
//       >Sign-up</button>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//       onClick={handlesignin}
//       >Sign-in</button>
//     </main>
//   );
// }

import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const handlesignup = () => {
    router.push("/sign-up");
  };
  const handlelearn = () => {
    router.push("/sign-up");
  };
  const handlesignin = () => {
    router.push("/sign-in");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <div className="text-2xl font-bold text-gray-800">Helper.ai</div>
          <div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handlesignin}
            >
              Sign-in
            </button>
            <button
              className="text-gray-600 hover:text-gray-900 px-4 py-2"
              onClick={handlesignup}
            >
              Sign-up
            </button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Helper.ai
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Crop your photos using AI and compress your videos with ease!
        </p>

        <div className="flex space-x-4">
        <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handlesignin}
            >
              Sign-in
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handlesignin}
            >
              Learn More
            </button>
        </div>
      </main>

      {/* <footer className="w-full py-6 bg-white text-center">
        <p className="text-gray-500">© 2024 Helper.ai. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
