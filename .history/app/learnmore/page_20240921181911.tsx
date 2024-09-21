import Link from 'next/link';

export default function LearnMore() {
    const router = useRouter();
  const handlesignup = () => {
    router.push("/sign-up");
  };
  const handlesignin = () => {
    router.push("/sign-in");
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-800">Helper.ai</a>
          </Link>
          <div>
            <Link href="/signin">
              <a className="text-gray-600 hover:text-gray-900 px-4 py-2">Sign In</a>
            </Link>
            <Link href="/signup">
              <a className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
            </Link>
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
        <Link href="/signup">
          <a className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </a>
        </Link>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 Helper.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
