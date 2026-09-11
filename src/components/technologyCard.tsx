interface cardProps {
    id: string
    name:string
    category:string
    description:string
    icon:string
    rating:number
    difficulty:string
    badge:string

}


function Card() {
  return (
    <section className="bg-white border border-slate-600 rounded-xl w-2xs flex-col p-2">
      <div className="flex justify-between items-center mx-2 my-2">
        <img
          className="w-6"
          src="https://icon.icepanel.io/Technology/svg/React.svg"
          alt="logo"
        />
        <p className="text-pink-600 bg-pink-100 p-1 rounded-full">Popular</p>
      </div>
      <div className="flex-col p-2">
        <h1 className="text-lg font-bold">React</h1>
        <p className="text-slate-600 my-1.5">
          A declarative, component-based JavaScript library for building modern
          user interfaces.
        </p>
        <div className="flex justify-between items-center mx-1.5 my-3">
          <p className="text-sm text-slate-600 bg-slate-200 p-1 rounded-sm">
            Frontend
          </p>
          <p className="text-sm text-slate-600">Beginner Friendly</p>
          <p className="text-sm text-slate-600">
            <i className="fa-solid fa-star text-amber-400"></i>Stars
          </p>
        </div>
        <button className="bg-black text-white text-lg font-bold w-full  my-2 rounded-md p-2">
          Add to stack
        </button>
      </div>
    </section>
  );
}

export default Card;
