import Image from "next/image";
import SVGIcon from "@/app/components/SVGIcon";

export default function SiteHeader({}) {
  return (
    <header className="flex items-center justify-center fixed w-full z-50">
      <div className="bg-white/75 backdrop-blur-[3px] rounded-full p-[5px] w-[80%] mt-4 flex justify-between items-center border border-black/50">
        <div className="flex items-center">
          <div className="w-[42px] h-[42px] rounded-full bg-[#FFB69D] overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              width={42}
              height={42}
              alt="Picture of the author"
            />
          </div>
          <div className="ml-4 font-script text-2xl">Ryan G</div>
        </div>

        <div className="flex items-center">
          <nav className="flex items-center justify-center space-x-10 mr-12">
            <a href="#" className="text-lg font-bold">
              Home
            </a>
            <a href="#" className="text-lg font-bold">
              Portfolio
            </a>
            <a href="#" className="text-lg font-bold">
              Contact
            </a>
            <a href="#" className="text-lg font-bold">
              Blog
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/ryan-griffiths-04649075/"
              target="_blank"
            >
              <SVGIcon name="linkedIn" className="" size={43} />
            </a>
            <a href="https://github.com/TropicalRobot" target="_blank">
              <SVGIcon name="github" className="" size={43} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
