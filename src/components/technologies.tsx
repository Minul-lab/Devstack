import {useEffect,useState } from "react"
import type { cardProps } from "./technologyCard";
import Card from "./technologyCard";
import YourStack from "./yourStack";







function Technologies(){
    const [technologies, setTechnologies] = useState<cardProps[]>([]);
    const [stack,setStack] = useState<cardProps[]>([])
    const handleAdd = (technology: cardProps) => {
      setStack([...stack, technology]);
    };    
    useEffect(()=>{
        async function fetchData() {
            const res = await fetch("/Data/technologies.json");
            const data = await res.json()
            setTechnologies(data);  
            
            
        }
        fetchData();
    },[])
    // console.log(technologies)
    
    return (
      <div className="flex-col max-w-7xl m-auto py-5">
        <div className="flex-col">
          <h1 className="text-5xl my-3 text-slate-900 font-bold">
            Explore Technologies
          </h1>
          <p className="font-bold text-slate-400 my-3">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <div className="grid grid-cols-3 gap-4 ">
            {technologies.map((technology) => {
              return (
                <Card key={technology.id} {...technology} onAdd={handleAdd} />
              );
            })}
          </div>
          <YourStack stack={stack}/>
          
        </div>
      </div>
    );
}
export default Technologies