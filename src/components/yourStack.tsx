import Item from "./stackItem";
import type { cardProps } from "./technologyCard";


function YourStack({stack}:{stack:cardProps[]}) {
  return (
    <div className="bg-white border border-slate-400 rounded-xl w-2xs flex-col p-4 self-start">
      <h1 className="text-lg font-bold">Your Stack</h1>
      <h4 className="text-slate-400 my-1.5">
        {stack.length} Technology Selected
      </h4>

      {stack.map((technology) => {
        return <Item technology={technology} />;
      })}

      <button className="px-6 py-1.5 rounded-lg font-semibold text-[#FF5722] bg-white  border-[#FF5722] border-2 w-full my-2">
        Remove All
      </button>
    </div>
  );
}
export default YourStack;
