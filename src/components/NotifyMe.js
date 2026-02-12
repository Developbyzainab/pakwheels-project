import { Bell } from "lucide-react";

export default function NotifyMe() {
  return (
    <div className="bg-[#eaf0fb] border border-gray-300 rounded-md 
    p-6 mt-6 mb-6 
    w-full overflow-hidden">

      <div className="flex items-center gap-2 mb-1">
        <Bell className="w-5 h-5 text-blue-800" />
        <h2 className="text-lg font-semibold text-blue-900">Notify Me</h2>
      </div>

      <p className="text-gray-600 mb-5">
        Receive email notifications for the latest ads matching your search criteria
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        {/* EMAIL INPUT */}
        <input
          type="email"
          placeholder="Type your email address"
          className="w-full sm:w-[300px] rounded-md border border-gray-300 px-4 py-3 bg-white outline-none text-sm"
        />

        {/* DROPDOWN */}
        <select
          className="w-full sm:w-[200px] rounded-md border border-gray-300 px-4 py-3 bg-white text-gray-700 text-sm outline-none"
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>

        {/* SUBMIT BUTTON */}
        <button className="bg-[#4db9e8] text-white px-10 py-3 rounded-md text-sm w-full sm:w-auto">
          Submit
        </button>

      </div>
    </div>
  );
}
