import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description:
    "Quick start your Next.js project with a single command. This boilerplate includes TypeScript, ESLint, Prettier, and Tailwind CSS.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="w-full flex-grow px-4">{children}</div>
      <Footer />
    </>
  );
}
