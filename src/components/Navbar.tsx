import logo from "../assets/logo-text.png";
function Navbar() {
  return (
    <nav className=" items-center px-6 py-4 sticky top-0 bg-white/80">
      <div className="flex justify-between max-w-7xl items-center mx-auto">
        <div>
          <img className="w-32" src={logo} alt="Devstack" />
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Home
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Technologies
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Projects
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              About
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button>Sign In</button>
          <button className="bg-[#D91B7E] text-white font-medium text-sm px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
