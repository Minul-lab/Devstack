import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between p-4 max-w-7xl mx-auto items-center lg:items-start py-12 lg:py-24">
        <div className="flex-col  ">
          <img className="my-4 mx-auto lg:mx-0" src={logo} alt="" />
          <p className="my-4 mx-auto text-center lg:mx-0 text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software
          </p>
          <ul className="flex items-center justify-center lg:justify-start gap-2.5 text-sm text-slate-500">
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-lg text-slate-900 font-bold">Product</h1>
          <p className="text-sm text-slate-500">home</p>
          <p className="text-sm text-slate-500">Technologies</p>
          <p className="text-sm text-slate-500">Projects</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-lg text-slate-900 font-bold">Company</h1>
          <p className="text-sm text-slate-500">About</p>
          <p className="text-sm text-slate-500">Contact</p>
          <p className="text-sm text-slate-500">Careers</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-lg text-slate-900 font-bold">Legal</h1>
          <p className="text-sm text-slate-500"> Privacy Policy</p>
          <p className="text-sm text-slate-500">Terms of Service</p>
        </div>
      </div>
      <div className="flex justify-between max-w-7xl m-auto mb-12 py-8 p-4">
        <p className="text-sm text-slate-500">
          © 2026 DevStack All rights Reserver
        </p>
        <p className="text-sm text-slate-500">Privacy Terms</p>
      </div>
    </div>
  );
}

export default Footer;
