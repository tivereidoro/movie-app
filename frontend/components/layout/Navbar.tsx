import React from "react";

export default function Navbar() {
  return (
    <nav className="max-w-5xl px-4 lg:px-0 py-4 w-full mx-auto">
      <div className="flex justify-between">
        <div>
          <h1>Logo</h1>
        </div>

        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
