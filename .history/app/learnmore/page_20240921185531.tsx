"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const handlesignup = () => {
  router.push("/sign-up");
};
const handlesignin = () => {
  router.push("/sign-in");
};
export default function LearnMore() {
    const router = useRouter();
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center p-6">
          
          <button
              className="text-2xl font-bold text-gray-800"
              onClick={()=>{
                router.push("/")
              }}
            >
              Helper.ai
            </button>
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

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Discover Helper.ai</h1>
        <p className="text-lg text-gray-600 mb-8">
          Helper.ai is a cutting-edge SaaS platform that leverages advanced artificial intelligence to enhance your multimedia content. Our suite of tools includes AI-powered photo cropping, ensuring your images maintain their focal points seamlessly. Additionally, we offer efficient video compression services, allowing you to reduce file sizes without compromising on quality.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Experience the future of content editing with Helper.ai—where AI meets creativity.
        </p>
        <button
              className="text-gray-600 hover:text-gray-900 px-4 py-2"
              onClick={handlesignup}
            >
              Get Started
            </button>
      </main>

      
    </div>
  );
}
