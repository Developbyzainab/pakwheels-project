"use client";

import Image from "next/image";
import Link from "next/link";

const tips = [
  {
    title: "How Cold Weather Cuts EV Range in Pakistan",
    image: "/op1.jpg",
    tag: "PAKISTAN",
    author: "Ayesha Habib",
    date: "Jan 13, 2025",
    link: "/post/1",
  },
  {
    title: "Emergency Car Evacuation Guide For Pakistani Drivers 2025",
    image: "/op2.png",
    tag: "GUIDES",
    author: "Ayesha Habib",
    date: "Nov 27, 2025",
    link: "/post/2",
  },
  {
    title: "How To Extend Life Of Your Car Battery: 8 Expert Tips",
    image: "/op3.jpg",
    tag: "GUIDES",
    author: "Maryam Akhtar",
    date: "Nov 26, 2025",
    link: "/post/3",
  },
  {
    title: "Winter Car Care Tips – Save Fuel, Protect Engine",
    image: "/op4.png",
    tag: "GUIDES",
    author: "Maryam Akhtar",
    date: "Oct 15, 2025",
    link: "/post/4",
  },
  {
    title: "How To Buy A Used Car – A Complete Guide",
    image: "/op5.jpg",
    tag: "GUIDES",
    author: "Ahsan Tahir",
    date: "Dec 14, 2024",
    link: "/post/5",
  },
  {
    title: "Simple Road Rules For Female Scooter Riders",
    image: "/op6.png",
    tag: "GUIDES",
    author: "Ahsan Tahir",
    date: "Oct 19, 2024",
    link: "/post/6",
  },
  {
    title: "Tips To Improve Mileage Of Honda CG 125",
    image: "/op7.jpg",
    tag: "TIPS & ADVICE",
    author: "Maryam Akhtar",
    date: "Oct 12, 2024",
    link: "/post/7",
  },
  {
    title: "How Do You Spot Legitimate Looking Fake Engine Oil?",
    image: "/op8.jpg",
    tag: "TIPS & ADVICE",
    author: "Ahsan Tahir",
    date: "Sep 17, 2024",
    link: "/post/8",
  },
];

const opinions = [
  {
    title: "Why EV Leadership Alone Won’t Secure China’s Dominance",
    image: "/op9.png",
    tag: "INTERNATIONAL",
    author: "Ayesha Habib",
    date: "Dec 29, 2025",
    link: "/opinion/1",
  },
  {
    title: "Honda’s New Civic Teaser: Hybrid Or Petrol?",
    image: "/op10.jpg",
    tag: "OPINIONS",
    author: "Ayesha Habib",
    date: "Dec 27, 2025",
    link: "/opinion/2",
  },
  {
    title: "From Rolls-Royce To Mercedes: Timeless Rides",
    image: "/op11.png",
    tag: "LISTS",
    author: "Ahsan Tahir",
    date: "Dec 26, 2025",
    link: "/opinion/3",
  },
  {
    title: "Electric Cars Will Replace Gas Vehicles. But When?",
    image: "/op1.jpg",
    tag: "FEATURED",
    author: "Asad Ali",
    date: "Dec 24, 2025",
    link: "/opinion/4",
  },
  {
    title: "Your Favorite Suzuki Might Be Gone",
    image: "/op12.jpg",
    tag: "OPINIONS",
    author: "Asad Ali",
    date: "Dec 19, 2025",
    link: "/opinion/5",
  },
  {
    title: "ADAS: Helpful Safety Tech Or Driver Headache?",
    image: "/op13.jpg",
    tag: "GENERAL",
    author: "Ayesha Habib",
    date: "Dec 11, 2025",
    link: "/opinion/6",
  },
  {
    title: "PHEVs & REEVs In Pakistan 2025",
    image: "/op14.jpg",
    tag: "ANALYSIS",
    author: "Ahsan Tahir",
    date: "Dec 10, 2025",
    link: "/opinion/7",
  },
  {
    title: "Why Pakistani Cars Still Lack Essential Safety",
    image: "/op15.jpg",
    tag: "GENERAL",
    author: "Ayesha Habib",
    date: "Nov 27, 2025",
    link: "/opinion/8",
  },
];

const Card = ({ item }) => (
  <Link href={item.link} className="group block">
    <div className="relative">
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={260}
        className="w-full h-[190px] object-cover"
      />
      <span className="absolute bottom-2 left-2 bg-red-700 text-white text-xs px-2 py-1">
        {item.tag}
      </span>
    </div>

   <h3 className="mt-3 text-sm font-semibold leading-snug transition-colors duration-200 group-hover:text-red-700">

      {item.title}
    </h3>

    <p className="text-xs text-gray-500 mt-1">
      {item.author} &nbsp;•&nbsp; {item.date}
    </p>
  </Link>
);

export default function TipsOpinionsSection() {
  return (
    <div className="max-w-7xl mx-15 px-4 py-10 ">

      {/* Tips & Advice */}
      <Section title="Tips & Advice" data={tips} />

      {/* Opinions */}
      <Section title="Opinions" data={opinions} />

    </div>
  );
}

const Section = ({ title, data }) => (
  <div className="mb-14">
    <div className="flex items-center gap-3 mb-6">
      <span className="w-3 h-3 bg-red-700"></span>
     <h2 className="text-xl font-bold transition-colors duration-200 hover:text-red-700 cursor-pointer">
  {title}
</h2>

      <div className="flex-1 h-[2px] bg-gray-300"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  </div>
);
