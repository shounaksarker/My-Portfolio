import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="max-h-[5%] footer py-2 px-8 bg-neutral text-neutral-content flex justify-around items-center">
      <h5 className="text-md">&copy; Shounak</h5>
      <div className=" flex">
        <button><Link href='/'><BsFacebook className="mr-4" /></Link></button>
        <button><Link href='/'><BsInstagram className="mr-4" /></Link></button>
        <button><Link href='/'><BsGithub className="mr-4" /></Link></button>
      </div>
    </footer>
  );
};

export default Footer;
