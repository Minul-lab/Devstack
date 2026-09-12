function YourStack(){
    return (
      <div className="bg-white border border-slate-400 rounded-xl w-2xs flex-col p-4">
        <h1 className="text-lg font-bold">Your Stack</h1>
        <h4 className="text-slate-400 my-1.5">2 Technology Selected</h4>
        <div className="flex w-full justify-between  bg-white border border-slate-400 items-center  rounded-xl p-3 my-2">
          <div className=" flex gap-2">
            <img
              className="w-6"
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt=""
            />
            <div>
              <p className="font-bold">React</p>
              <p className="text-sm text-slate-500">Frontend</p>
            </div>
          </div>

          <button className="font-bold text-lg text-slate-500">x</button>
        </div>
        <div className="flex w-full justify-between  bg-white border border-slate-400 items-center  rounded-xl p-3 my-2">
          <div className=" flex gap-2">
            <img
              className="w-6"
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt=""
            />
            <div>
              <p className="font-bold">React</p>
              <p className="text-sm text-slate-500">Frontend</p>
            </div>
          </div>

          <button className="font-bold text-lg text-slate-500">x</button>
        </div>
        <button className="px-6 py-1.5 rounded-lg font-semibold text-[#FF5722] bg-white  border-[#FF5722] border-2 w-full my-2">
          Remove All
        </button>
      </div>
    );
}
export default YourStack;