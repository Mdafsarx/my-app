import Image from "next/image";
import leftSideIcons from "../../../../public/images/Group 352.png";
import RightSideIcons from "../../../../public/images/Group 351.png";
import Dashboard from "../../../../public/images/dashboard.png";
import Dashboard_Small_Device from "../../../../public/images/dashboard.png";
import DashboardChart from "../../../../public/images/dashboard-chart.png";
import DashboardChart_Small_Device from "../../../../public/images/dashboard-chart_small_device.png";

const Banner = () => {
  return (
    <div className="px-2 md:px-6">
      <div className="bg-[#6334E3] rounded-xl md:rounded-3xl">
        <div className="flex items-center justify-between w-full p-6 md:p-20">
          {/* left-side icons */}
          <figure className="hidden md:block">
            <Image
              width={500}
              height={500}
              src={leftSideIcons}
              alt="left-side-icons"
              className="w-full h-96"
            />
          </figure>
          {/* content */}
          <div className="text-white flex flex-col items-center space-y-2.5">
            <h1
              className="hidden md:block text-7xl font-bold text-center"
              style={{ lineHeight: "6.5rem" }}
            >
              <span className="border-2 border-r-0 rounded-l-full py-2 pl-4 md:pl-12 border-gray-400 border-opacity-55">
                O
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-45">
                m
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-35">
                n
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-25">
                i
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-20">
                -
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-15">
                C
              </span>
              hannel Messaging <br /> Platform Co
              <span className="border-y-2 py-2 border-gray-400 border-opacity-15">
                n
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-20">
                n
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-25">
                e
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-35">
                c
              </span>
              <span className="border-2 border-l-0 rounded-r-full py-2 pr-4 md:pr-12 border-gray-400 border-opacity-45">
                t
              </span>
            </h1>
            <h1
              className="block md:hidden text-xl font-black text-center"
              style={{ lineHeight: "3rem" }}
            >
              <span className="border-2 border-r-0 rounded-l-full py-2 pl-4 md:pl-12 border-gray-400 border-opacity-55">
                O
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-45">
                m
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-35">
                n
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-25">
                i
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-20">
                -
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-15">
                C
              </span>
              hannel Messaging <br /> Platform Co
              <span className="border-y-2 py-2 border-gray-400 border-opacity-15">
                n
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-20">
                n
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-25">
                e
              </span>
              <span className="border-y-2 py-2 border-gray-400 border-opacity-35">
                c
              </span>
              <span className="border-2 border-l-0 rounded-r-full py-2 pr-4 md:pr-12 border-gray-400 border-opacity-45">
                t
              </span>
            </h1>
            <p className="text-sm md:text-base text-center pb-4">
              Communicate with every customer no matter what platform
              they&apos;re on. Plus, you&apos;ll receive <br /> dedicated
              support from UniEngage.
            </p>
            <button className="hidden md:block text-[#6D39F9] bg-white px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
            {/* for small device */}
            <div className="flex md:hidden items-center gap-5">
              <button className="text-white border border-white text-sm px-5 py-2 rounded-md">
                Get Started
              </button>
              <button className="text-[#6D39F9] border border-white text-sm bg-white px-5 py-2 rounded-md">
                Book Demo
              </button>
            </div>
          </div>
          {/* left-side icons */}
          <figure className="hidden md:block">
            <Image
              width={500}
              height={500}
              src={RightSideIcons}
              alt="left-side-icons"
              className="w-full h-96"
            />
          </figure>
        </div>
        {/* dashboard */}
        <div className="hidden md:flex items-center justify-center relative">
          <Image src={Dashboard} alt="dashboard" className="rounded-t-3xl" />
          <Image
            src={DashboardChart}
            alt="dashboard-chart"
            className="absolute top-12 right-[19rem] "
          />
        </div>
        <div className="flex md:hidden px-5 pt-14 relative">
          <Image
            src={Dashboard_Small_Device}
            alt="dashboard"
            className="rounded-t-xl h-[11rem]"
          />
          <Image
            src={DashboardChart_Small_Device}
            alt="dashboard-chart"
            className="absolute top-20 right-[0.50px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
