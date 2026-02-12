// src/components/BrowseMoreUsedCars.jsx

export default function BrowseMoreUsedCars() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 mt-10 mb-20">

      <h2 className="text-[22px] font-semibold text-gray-900 mb-6">
        Browse More Used Cars
      </h2>

      {/* =============== SECTION 1 =============== */}
      <SectionBlock
        title="View Cars by Make"
        items={[
          "Suzuki Cars Lahore (3500+)", "Honda Cars Lahore (2800+)", "Toyota Cars Lahore (2800+)",
          "Daihatsu Cars Lahore (630+)", "Hyundai Cars Lahore (520+)", "KIA Cars Lahore (500+)",
          "Nissan Cars Lahore (450+)", "Haval Cars Lahore (250+)", "Mercedes Benz Cars Lahore (190+)",
          "Changan Cars Lahore (180+)", "MG Cars Lahore (170+)", "Mitsubishi Cars Lahore (170+)",
          "Audi Cars Lahore (120+)", "BMW Cars Lahore (80+)", "FAW Cars Lahore (50+)",
          "Chevrolet Cars Lahore (30+)", "Lexus Cars Lahore (30+)", "Mazda Cars Lahore (30+)",
          "Peugeot Cars Lahore (30+)", "JAC Cars Lahore (20+)",
        ]}
      />

      {/* =============== SECTION 2 =============== */}
      <SectionBlock
        title="View Cars by Model"
        items={[
          "Civic Lahore (1100+)", "City Lahore (1000+)", "Corolla Lahore (850+)",
          "Mehran for sale in Lahore (820+)", "Cultus Lahore (720+)", "Alto for sale in Lahore (560+)",
          "Suzuki Wagon R Lahore (420+)", "KIA Sportage Lahore (250+)", "Toyota Raize Lahore (240+)",
          "Swift Lahore (220+)", "Santor for sale in Lahore (220+)", "Haval H6 Lahore (200+)",
          "Prado Lahore (190+)", "Vitz Lahore (180+)", "Toyota Yaris Sedan Lahore (170+)",
          "Land Cruiser Lahore (160+)", "MG HS Lahore (150+)", "Fortuner Lahore (150+)",
          "Bolan for sale in Lahore (150+)", "Hyundai Tucson Lahore (140+)",
        ]}
      />

      {/* =============== SECTION 3 =============== */}
      <SectionBlock
        title="View Cars by Version"
        items={[
          "Mehran VXR Lahore (800+)", "Honda Civic 1.8 Lahore (680+)", "Civic VTi Oriel Lahore (600+)",
          "Mehran VX Lahore (470+)", "Civic VTi Lahore (460+)", "Altis Lahore (380+)",
          "Honda City idsi Lahore (240+)", "GLi Lahore (220+)", "Honda City Prosmetic Lahore (190+)",
          "Civic EXi Lahore (190+)", "City Aspire Lahore (170+)", "Toyota Corolla Altis X Lahore (150+)",
          "Civic Turbo Lahore (150+)",
        ]}
      />

      {/* -------------------------------------------------- */}
      {/* 🔥 NEW SECTIONS YOU REQUESTED */}
      {/* -------------------------------------------------- */}

      {/* =============== SECTION 4 =============== */}
      <SectionBlock
        title="View Cars by City"
        items={[
          "Cars for sale in Karachi (13800+)", "Cars for sale in Islamabad (9800+)", "Cars for sale in Rawalpindi (4500+)",
          "Cars for sale in Peshawar (2200+)", "Cars for sale in Faisalabad (2100+)", "Cars for sale in Multan (1600+)",
          "Cars for sale in Gujranwala (1400+)", "Cars for sale in Sialkot (980+)", "Cars for sale in Sargodha (700+)",
          "Cars for sale in Hyderabad (650+)", "Cars for sale in Abbottabad (620+)", "Cars for sale in Wah Cantt (570+)",
          "Cars for sale in Bahawalpur (460+)", "Cars for sale in Quetta (430+)", "Cars for sale in Mardan (400+)",
          "Cars for sale in Sheikhupura (220+)", "Cars for sale in Kasur (70+)", "Cars for sale in Hafizabad (70+)",
          "Cars for sale in Narowal (50+)", "Cars for sale in Nankana Sahib (30+)",
        ]}
      />

      {/* =============== SECTION 5 =============== */}
      <SectionBlock
        title="View Cars by City Area"
        items={[
          "Cars in Johar Town Lahore (1000+)", "Cars in DHA Defence Lahore (590+)", "Cars in Bahria Town Lahore (350+)",
          "Cars in Allama Iqbal Town Lahore (290+)", "Cars in Gulberg Lahore (260+)", "Cars in Jail Road Lahore (240+)",
          "Cars in Cantt Lahore (240+)", "Cars in Model Town Lahore (210+)", "Cars in Faisal Town Lahore (190+)",
          "Cars in Wapda Town Lahore (170+)", "Cars in Sabzazar Scheme Lahore (170+)", "Cars in Valencia Housing Society Lahore (150+)",
          "Cars in Samanabad Lahore (130+)", "Cars in DHA Phase 6 Lahore (110+)", "Cars in Shahdara Lahore (100+)",
          "Cars in Shadbagh Lahore (90+)", "Cars in Gulshan Ravi Lahore (90+)", "Cars in Askari-X Lahore (90+)",
          "Cars in Al Rehman Garden Lahore (90+)", "Cars in Maulana Shaukat Ali Road Lahore (90+)",
        ]}
      />

      {/* =============== SECTION 6 =============== */}
      <SectionBlock
        title="View Cars by Engine Capacity"
        items={[
          "1000cc Cars Lahore (2400+)", "1300cc Cars Lahore (1700+)", "1.5 Cars Lahore (1600+)",
          "660cc Cars Lahore (1500+)", "1.8 Cars Lahore (1100+)", "800cc Cars Lahore (900+)",
          "2.0 Cars Lahore (590+)", "1.6 Cars Lahore (550+)", "1.2 Cars Lahore (290+)",
        ]}
      />
    </div>
  );
}

function SectionBlock({ title, items }) {
  return (
    <div className="mb-10">

      <h3 className="text-[20px] font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        gap-y-2 gap-x-10 text-[12px] text-blue-400">

        {items.map((item, i) => {
          const match = item.match(/(.*)\((.*)\)/); // separate text + number

          return (
            <p key={i} className="cursor-pointer  hover:text-black">
              {match ? (
                <>
                  <span>{match[1]}</span>
                  <span className="text-gray-500">({match[2]})</span>
                </>
              ) : (
                item
              )}
            </p>
          );
        })}
      </div>

      <div className="w-full border-b border-gray-200 mt-6"></div>
    </div>
  );
}
