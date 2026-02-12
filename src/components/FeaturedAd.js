import Image from "next/image";

export default function FeaturedAd() {
  return (
    <div className="border border-green-500 rounded-md p-4 mb-4 bg-white 
    flex flex-col md:flex-row 
    items-start md:items-center 
    justify-between 
    mt-6 
    w-full overflow-hidden">

      {/* LEFT SIDE TEXT */}
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
          Get Your Ad Featured for more Calls <br /> and to Sell Quicker
        </h2>

        <div className="mt-4 text-gray-700 text-sm space-y-2">
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-lg">✔</span>
            Sell up to <span className="font-bold">10x faster</span>
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-lg">✔</span>
            Get your Ad noticed by <span className="font-bold">50 lac+ Buyers</span>
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-lg">✔</span>
            Standout with the <span className="font-bold">Feature Ad tag</span>
          </p>
        </div>

        <button className="bg-green-600 text-white px-6 py-2 rounded mt-5 text-sm">
          Learn More
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative shrink-0 mt-4 md:mt-0">
        <Image
          src="/i.png"
          width={260}
          height={140}
          alt="Car"
          className="max-w-full h-auto"
        />
      </div>

    </div>
  );
}
