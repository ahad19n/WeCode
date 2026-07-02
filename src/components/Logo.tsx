import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="group inline-block transition duration-300 hover:scale-[1.03]"
    >
      <div
        className="

        px-4 
        py-1.5
        rounded-sm
      "
      >
        <span
          className="
            text-[52px]
            leading-none
            font-mono
            tracking-tight
            font-medium
            select-none
          "
        >
          <span className="text-black dark:text-white">we</span>
          <span className="text-[#d31773]">code</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;