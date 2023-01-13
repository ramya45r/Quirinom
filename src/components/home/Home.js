import React from "react";
import poster from "../../img/poster.png";
const HomePage = () => {
  return (
    <>
      <section className="pb-10 w-full bg-gray-800">
        <div className="container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
                Create posts to here
              </h2>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                className="w-full mt-20"
                src="https://tse3.mm.bing.net/th?id=OIP.2krpUfhxuCEdHxL0MtQNhwHaE8&pid=Api&P=0"
                alt={poster}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
