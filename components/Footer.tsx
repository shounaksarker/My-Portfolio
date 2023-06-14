import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="max-h-[5%] footer py-2 px-8 bg-neutral text-neutral-content flex justify-around items-center">
      <h5 className="text-md">&copy; Shounak</h5>
      <div className=" flex">
        <button><Link href='https://www.facebook.com/shounak.sarker' target="_blank"><BsFacebook className="mr-4" /></Link></button>
        <button><Link href='https://www.linkedin.com/in/shounaksarker' target="_blank"><BsLinkedin className="mr-4" /></Link></button>
        <button><Link href='https://github.com/shounaksarker' target="_blank"><BsGithub className="mr-4" /></Link></button>
      </div>
    </footer>
  );
};

export default Footer;
