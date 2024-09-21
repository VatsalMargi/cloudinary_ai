"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const handlesignup = () => {
  router.push("/sign-up");
};
const handlesignin = () => {
  router.push("/sign-in");
};
const router = useRouter();
          
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


import Link from 'next/link';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
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
            <Link href="/signin">
              <a className="text-gray-600 hover:text-gray-900 px-4 py-2">Sign In</a>
            </Link>
            <Link href="/signup">
              <a className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-8">
          Discover the Power of AI with Helper.ai
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          At Helper.ai, we’re transforming how you manage multimedia content. Crop images with AI precision, compress videos without losing quality, and streamline your workflow—all with just a few clicks. Explore the next generation of media editing.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/signup">
            <a className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </a>
          </Link>
          <Link href="/features">
            <a className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition duration-300">
              Learn More
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Photo Cropping</h2>
            <p className="text-gray-600 text-lg">
              Say goodbye to manual cropping. Helper.ai’s AI accurately crops your photos while keeping the subject in focus. Save time and get perfect results every time.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Video Compression</h2>
            <p className="text-gray-600 text-lg">
              Compress your videos without losing quality. Helper.ai ensures your videos are smaller, optimized, and ready for sharing without sacrificing the clarity you need.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <img
            src="/media-ai.png"
            alt="AI Media Illustration"
            className="mx-auto w-full max-w-lg"
          />
        </div>
      </main>

      <footer className="bg-white py-8 shadow-inner mt-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 Helper.ai. Redefining media editing with AI.</p>
        </div>
      </footer>
    </div>
  );
}

