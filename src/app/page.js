import Image from "next/image";
// import logo from 'public/breathefree-logo-new3.png'
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1E5FE] flex flex-col items-center justify-center text-center p-4">
      <div className="space-y-8 ">
        {/* Welcome Text */}
        <p className="text-[#000000] text-6xl font-normal">Welcome to</p>

        {/* Logo and Tagline */}
        <div className="space-y-2">
          <img src='/breathefree-logo-new3.png' className="w-[922px] h-[178px]" />
          <p className="text-[#000000] text-7xl font-semibold">
            Learn, Track, Adhere
          </p>
        </div>

        {/* Pinwheel Image */}
        <div className="py-8">
          {/* <svg
            viewBox="0 0 100 100"
            className="w-32 h-32 mx-auto text-green-400"
          >
            <g transform="translate(50,50)">
              {[0, 72, 144, 216, 288].map((rotation, i) => (
                <path
                  key={i}
                  d="M0,-30 C10,-25 10,-10 0,0 C-10,-10 -10,-25 0,-30"
                  transform={`rotate(${rotation})`}
                  fill="currentColor"
                  opacity="0.8"
                />
              ))}
            </g>
          </svg> */}
        </div>

        {/* Main Heading */}
        <div className="space-y-2 ">
          <h2 className="text-8xl font-normal">
            Your Lung Health <br /> Journey Starts Here!
          </h2>
        </div>

        {/* CTA Button */}
        <button
          className="bg-green-500  text-6xl text-white px-8 py-8 rounded-full 
                         hover:bg-green-600 transition-colors duration-300"
        >
          Explore now
        </button>
      </div>
    </div>
  );
}
