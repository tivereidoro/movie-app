import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/public/logo.svg";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col gap-7 bg-[#ececed] border border-gray-300 p-8 md:p-12 rounded-xl shadow-lg w-[400px] max-[340px]:max-w-64 max-[450px]:max-w-80 text-center">
        <div className="flex flex-col items-center justify-center pb-6">
          <Link href="#">
            <Image
              src={mainLogo}
              width={120}
              alt="viablestack logo"
              className="flex"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 max-[340px]:text-xl max-[450px]:text-2xl">
            Welcome!
          </h1>
          <p className="text-gray-600">Register to access your account</p>
        </div>
        <div className="mb-6">
          <button
            type="button"
            className="w-full bg-[#071C42] hover:bg-[#071C42]/60 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
        <p className="text-sm text-gray-500">Put auth signup details here</p>
        <p>
          Already have an account? &nbsp;{" "}
          <Link href="/sign-in" className="text-[#071C42] hover:underline">
            Sign in.
          </Link>
        </p>
      </div>
    </div>
  );
}
