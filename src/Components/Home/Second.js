import React from "react";

const Second = () => {
  return (
    <div className="container mx-auto py-10 px-4 bg-gray-300 width-full rounded-lg mb-10">
      {/* Heading */}
      <h2 className=" font-bold text-5xl text-center mb-10">
        How it Works
      </h2>

      {/* Boxes */}
      <div className="flex flex-wrap -mx-2">
        {/* Box 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-green-500 rounded-lg flex flex-col items-center justify-start p-6 h-full">
            <p className="text-white font-bold text-2xl mb-4 text-center">
              Schedule a Pickup
            </p>
            <img
              src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421"
              alt="image1"
              className="object-contain w-32 h-32 mt-2"
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-green-500 rounded-lg flex flex-col items-center justify-start p-6 h-full">
            <p className="text-white font-bold text-2xl mb-4 text-center">
              Pickup at your doorstep
            </p>
            <img
              src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Street_food_re_uwex_1_tHCc3auJgJY.png?updatedAt=1628624814853"
              alt="image2"
              className="object-contain w-32 h-32 mt-2"
            />
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-green-500 rounded-lg flex flex-col items-center justify-start p-6 h-full">
            <p className="text-white font-bold text-2xl mb-4 text-center">
              Get Paid Instantly
            </p>
            <img
              src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Credit_card_payments_re_qboh_1_Sop8u3hvUiX.png?updatedAt=1628624812461"
              alt="image3"
              className="object-contain w-32 h-32 mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
