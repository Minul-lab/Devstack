import type { cardProps } from "./technologyCard";
interface StackItemProps {
  technology: cardProps;
}
function Item({technology}:StackItemProps) {
  return (
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
  );
}

export default Item;
