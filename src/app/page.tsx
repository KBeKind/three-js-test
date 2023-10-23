import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="bg-green-500 p-4">
        <p className="text-3xl m-4">MENU</p>

        <Link
          className="m-4 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/basic"
        >
          threejs basic start
        </Link>
        <Link
          className="m-4 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/usingcomponents"
        >
          threejs using react components
        </Link>
        <Link
          className="m-4 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/discovertutorial"
        >
          discover threejs tutorial
        </Link>
      </div>
    </div>
  );
};

export default Home;
