import { useState } from "react"

export interface cardProps {
    id: string
    name:string
    category:string
    description:string
    icon:string
    rating:number
    difficulty:string
    badge:string

}


function Card(props:cardProps) {
  const [isStacked, setIsStacked] = useState(false)
  const handleClick = () => {
    setIsStacked(true)
  }
  return (
    <section className="bg-white border border-slate-600 rounded-xl w-xs flex-col p-2">
      <div className="flex justify-between items-center mx-2 my-2">
        <img
          className="w-6"
          src={props.icon}
          alt="logo"
        />
        <p className="text-pink-600 text-sm bg-pink-100 p-1 rounded-xl">{props.badge}</p>
      </div>
      <div className="flex-col p-2">
        <h1 className="text-lg font-bold">{props.name}</h1>
        <p className="text-slate-600 my-1.5">
          {props.description}
        </p>
        <div className="flex justify-between items-center mx-1.5 my-3">
          <p className="text-sm text-slate-600 bg-slate-200 p-1 rounded-sm">
            {props.category}
          </p>
          <p className="text-sm text-slate-600">{props.difficulty}</p>
          <p className="text-sm text-slate-600">
            <i className="fa-solid fa-star text-amber-400"></i>{props.rating}
          </p>
        </div>
        <button className={`bg-black text-white text-lg font-bold w-full  my-2 rounded-md p-2`} disabled={isStacked} onClick={handleClick}> 
          {isStacked===true? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </section>
  );
}

export default Card;
