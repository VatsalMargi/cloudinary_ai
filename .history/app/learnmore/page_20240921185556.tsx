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
              className="text-2xl font-bold text-gray-800"
              onClick={()=>{
                router.push("/")
              }}
            >
              Helper.ai
            </button>
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

