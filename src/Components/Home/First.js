import React from "react";

const First = () => {
	return (
		<div>
			<section className="text-green-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
					<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
						<h1 className="title-font font-bold text-6xl  text-black">
							Sell your recyclables online with Sell&Well!
						</h1>
						<p className="leading-relaxed mt-5 text-4xl font-semibold">
							“Turn your scrap into cash and help the planet at the same time.”
						</p>
					</div>
					<div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
						<h2 className="text-gray-900 text-lg font-medium title-font mb-5">
							nice to see you,</h2>
						<button className="text-white bg-green-500 border-0 py-3 px-9 focus:outline-none hover:bg-green-600 rounded text-lg mb-5">
							Schedule a Pickup
						</button>
                        <button className="text-white bg-green-500 border-0 py-3 px-9 focus:outline-none hover:bg-green-600 rounded text-lg">
							Check Pickups
						</button>
						<p className="text-xs text-gray-500 mt-3">
							Literally you probably haven't heard of them jean
							shorts.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default First;
