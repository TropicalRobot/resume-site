import GithubIcon from "@/images/icons/github.svg";
import LinkedInIcon from "@/images/icons/linkedIn.svg";

export default function SiteFooter({}) {
  return (
    <footer className="w-full bg-blue-dark text-white py-10 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex flex-col gap-4">
              <div className="font-script text-2xl">Ryan G</div>
              <div className="flex items-center space-x-2">
                <a href="https://github.com/TropicalRobot" target="_blank">
                  <GithubIcon className="fill-white w-10 h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-griffiths-04649075/"
                  target="_blank"
                >
                  <LinkedInIcon className="fill-white w-10 h-10" />
                </a>
              </div>
              <div className="mb-0">
                &copy; Ryan Griffiths {new Date().getFullYear()}
              </div>
            </div>
            <a
              className="text-xs"
              href="https://storyset.com/education"
              target="_blank"
            >
              Illustrations by Storyset
            </a>
          </div>
          <div>
            <nav className="flex flex-col items-end gap-2">
              <a href="#" className="text-lg font-bold">
                About
              </a>
              <a href="#" className="text-lg font-bold">
                Work
              </a>
              <a href="#" className="text-lg font-bold">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
