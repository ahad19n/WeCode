import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="group inline-block transition duration-300 hover:scale-[1.03]"
    >
      <div
        className="
        bg-gradient-to-r
        from-[#d31773]
        via-[#cb297b]
        to-[#d31773]
        px-4 
        py-1.5
        rounded-sm
        shadow-sm
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
          <span className="text-white">we</span>
          <span className="text-[#222]">code</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;