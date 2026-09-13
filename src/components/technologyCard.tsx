

export interface cardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
  
}
interface CardProps extends cardProps {
  onAdd: (technology: cardProps) => void;
  isAdded?: boolean;
}

function Card(props: CardProps) {
  
  return (
    <section
      className={`bg-white rounded-xl w-[90%] lg:w-xs mx-auto flex-col p-2 transition ${
        props.isAdded ? "border-2 border-[#FF5722]" : "border border-slate-600"
      }`}
    >
      <div className="flex justify-between items-center mx-2 my-2">
        <img className="w-6" src={props.icon} alt="logo" />
        <p className="text-pink-600 text-sm bg-pink-100 p-1 rounded-xl">
          {props.badge}
        </p>
      </div>
      <div className="flex-col p-2">
        <h1 className="text-lg font-bold">{props.name}</h1>
        <p className="text-slate-600 my-1.5">{props.description}</p>
        <div className="flex justify-between items-center mx-1.5 my-3">
          <p className="text-sm text-slate-600 bg-slate-200 p-1 rounded-sm">
            {props.category}
          </p>
          <p className="text-sm text-slate-600">{props.difficulty}</p>
          <p className="text-sm text-slate-600">
            <i className="fa-solid fa-star text-amber-400"></i>
            {props.rating}
          </p>
        </div>
        <button
          onClick={() => props.onAdd(props)}
          
          className={`px-4 py-2 rounded-lg font-semibold border-2 transition w-full ${
            props.isAdded
              ? "border-[#FF5722] text-[#FF5722] bg-white cursor-not-allowed"
              : "bg-slate-900 text-white hover:bg-white hover:border-[#FF5722] hover:text-[#FF5722] "
          }`}
        >
          {props.isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </section>
  );
}

export default Card;
