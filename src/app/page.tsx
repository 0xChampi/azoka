import React from "react";
import Nav from "./components/Nav";
import Panel from "./components/Panel";
import ThreeSections from "./components/ThreeSections";
import Image from "next/image";
import Buy from "./components/Buy";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen"> {/* Centralize content vertically and horizontally */}
        <Panel />
       <Buy />
      </div>
      {/* <ThreeSections /> */}



    </>
  );
}
