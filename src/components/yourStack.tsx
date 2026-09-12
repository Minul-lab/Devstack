import Item from "./stackItem";
import type { cardProps } from "./technologyCard";


function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: {
  stack: cardProps[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}) {
  return (
    <div className="bg-white border border-slate-400 rounded-xl w-2xs flex-col p-4 self-start">
      <h1 className="text-lg font-bold">Your Stack</h1>
      <h4 className="text-slate-400 my-1.5">
        {stack.length === 0
          ? "No technologies selected"
          : `${stack.length} Technology${stack.length > 1 ? "ies" : ""} Selected`}
      </h4>

      {stack.length === 0 ? (
        <p className="text-slate-400 text-center py-6">Your stack is empty</p>
      ) : (
        stack.map((technology) => (
          <Item
            key={technology.id}
            technology={technology}
            onRemove={onRemove}
          />
        ))
      )}

      <button
        className="px-6 py-1.5 rounded-lg font-semibold text-[#FF5722] bg-white  border-[#FF5722] border-2 w-full my-2"
        onClick={onRemoveAll}
      >
        Remove All
      </button>
    </div>
  );
}
export default YourStack;
