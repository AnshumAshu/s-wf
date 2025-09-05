import React from "react";
import rupee from "../Images/Home/rupee.png";
import trust from "../Images/Home/trust.png";
import con from "../Images/Home/convieniance.png";
import eco from "../Images/Home/eco.png";

const Third = () => {
  const features = [
    { name: "Save Money", description: "Sell scrap and earn instantly.", img: rupee },
    { name: "Trusted Service", description: "Reliable and verified buyers.", img: trust },
    { name: "Convenient", description: "Sell items from your home.", img: con },
    { name: "Eco-Friendly", description: "Recycle to help the environment.", img: eco },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black">
            Why Sell&Well ?
          </h1>
          <p className="lg:w-2/3 mx-auto text-3xl leading-relaxed text-gray-500">
            Sell&Well makes recycling easy, safe, and profitable. Earn money while helping the environment.
          </p>
        </div>

        {/* Features / Boxes */}
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/4">
              <div className="h-full bg-green-500 rounded-lg flex flex-col items-center justify-center p-6">
                <img
                  src={feature.img}
                  alt={feature.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h2 className="text-white text-lg font-medium mb-2 text-center">
                  {feature.name}
                </h2>
                <p className="text-white text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Third;
