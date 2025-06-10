import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 max-w-5xl  w-full mx-auto pt-6 border-t border-[#EEEEF0] flex justify-between pb-5">
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 font-medium text-[0.8125rem] items-center"
      >
        Custom Boilerplate
        <span className="text-[#5E5F6E]">
          {" "}
          | &nbsp; {new Date().getFullYear()}
        </span>
      </Link>

      <ul className="flex gap-2 ml-auto">
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-[0.8125rem] rounded-full px-3 py-2 hover:bg-gray-100"
          >
            Support and Feedback{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="12" height="12" rx="3" fill="#EEEEF0" />
              <path
                d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25"
                stroke="#9394A1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
