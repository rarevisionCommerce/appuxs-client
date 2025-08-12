import Parner from "../../assets/AuAxBg.jpg";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <main className="mx-auto container flex flex-col py-7">
      {/* Section Title */}
      <div className="mb-7">
        <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-3">
          Our <span className="text-yellow-500">Partners</span>
        </h2>
        <div className="h-[5px] rounded-full w-28 mb-3 bg-gradient-to-r from-transparent to-dark"></div>
      </div>

      {/* Scrolling Logos */}
	  <div className="flex">
		<Marquee direction="left" speed={50} pauseOnHover={true} gradient={false}>
        <div className="flex gap-10 items-center justify-center">
          <div>
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              src={Parner}
              alt="Partner logo"
            />
          </div>
          <div>
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              src={Parner}
              alt="Partner logo"
            />
          </div>          
        </div>
      </Marquee>
	  <Marquee direction="left" speed={50} pauseOnHover={true} gradient={false}>
        <div className="flex gap-10 items-center justify-center">
          <div>
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              src={Parner}
              alt="Partner logo"
            />
          </div>
          <div>
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              src={Parner}
              alt="Partner logo"
            />
          </div>          
        </div>
      </Marquee>
	  <Marquee direction="left" speed={50} pauseOnHover={true} gradient={false}>
        <div className="flex gap-10 items-center justify-center">
          <div>
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              src={Parner}
              alt="Partner logo"
            />
          </div>
          <div>
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              src={Parner}
              alt="Partner logo"
            />
          </div>          
        </div>
      </Marquee>

	  </div>
      
      
    </main>
  );
};

export default Partners;
