import Image from "next/image";

export default function InspectionBanner() {
  return (
    <div className="border border-blue-300 rounded-md p-6 
    flex flex-col md:flex-row 
    items-start md:items-center 
    justify-between 
    bg-white mt-6 mb-6 
    w-full overflow-hidden">

      {/* LEFT SIDE TEXT */}
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-semibold">
          <span className="text-blue-700">PakWheels</span>{" "}
          <span className="text-red-600">Car Inspection</span>
        </h2>

        <p className="text-gray-600 mt-1">
          Inspect the car on 200+ checkpoints
        </p>

        {/* CHECKPOINT LIST */}
        <div className="flex flex-wrap gap-4 text-green-600 mt-3 text-sm font-medium">
          <span>✔ Engine</span>
          <span>✔ Suspension</span>
          <span>✔ Exterior</span>
          <span>✔ Interior</span>
        </div>

        {/* BUTTON */}
        <button className="bg-green-600 text-white px-5 py-2 rounded mt-4 text-sm">
          Learn More
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative shrink-0 mt-4 md:mt-0">
        <Image
          src="/img1.png"
          width={260}
          height={140}
          alt="Car"
          className="max-w-full h-auto"
        />
      </div>

    </div>
  );
}
