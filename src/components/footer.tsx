import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <div>
      <div className="flex justify-between p-4 max-w-7xl m-auto items-center py-24">
        <div className="flex-col  ">
          <img className="my-4" src={logo} alt="" />
          <p className="my-4 text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software
          </p>
          <ul className="flex gap-2.5 text-sm text-slate-500">
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg text-slate-900 font-bold">Product</h1>
          <p className="text-sm text-slate-500">home</p>
          <p className="text-sm text-slate-500">Technologies</p>
          <p className="text-sm text-slate-500">Projects</p>
        </div>
        <div>
          <h1 className="text-lg text-slate-900 font-bold">Company</h1>
          <p className="text-sm text-slate-500">About</p>
          <p className="text-sm text-slate-500">Contact</p>
          <p className="text-sm text-slate-500">Careers</p>
        </div>
        <div>
          <h1 className="text-lg text-slate-900 font-bold">Legal</h1>
          <p className="text-sm text-slate-500"> Privacy Policy</p>
          <p className="text-sm text-slate-500">Terms of Service</p>
        </div>
      </div>
      <div className="flex justify-between max-w-7xl m-auto py-8 p-4">
        <p className="text-sm text-slate-500">
          2026 DevStack All rights Reserver
        </p>
        <p className="text-sm text-slate-500">Privacy Terms</p>
      </div>
    </div>
  );
}

export default Footer;
