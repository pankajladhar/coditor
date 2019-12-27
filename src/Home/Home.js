import React from "react";
import CoditorLogo from "./../Components/CoditorLogo/CoditorLogo";
import Auth from "./../Auth/Auth";
import Instructions from "./../Components/Instructions/Instructions";


const Home = props => {
  return (
    <div className="home flex h-screen">
      <section className="w-2/5 p-12 pt-6 bg-white border-r border-gray-300 flex-shrink-0">
        <CoditorLogo name/>
        <Auth />
      </section>
      <section className="p-12 pt-6 border-gray-300 flex-grow">
        <h3 class="text-4xl mb-5 font-display text-indigo-900 font-extrabold">
          Instructions
        </h3>
        <Instructions />
      </section>
      <header></header>
    </div>
  );
};

export default Home;
