import GithubIcon from "@/images/icons/github.svg";
import LinkedInIcon from "@/images/icons/linkedIn.svg";

export default function SiteFooter({}) {
  return (
    <footer className="w-full bg-blue-dark text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-script text-2xl">Ryan G</div>
          <div className="flex">
            <GithubIcon className="fill-white w-10 h-10" />
            <LinkedInIcon className="fill-white w-10 h-10" />
          </div>
          <div className="">&copy; Ryan Griffiths, 2025</div>
        </div>
      </div>
    </footer>
  );
}
