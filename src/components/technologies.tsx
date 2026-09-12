import {useEffect,useState } from "react"
import type { cardProps } from "./technologyCard";
import Card from "./technologyCard";
import YourStack from "./yourStack";




function Technologies(){
    const [technologies, setTechnologies] = useState<cardProps[]>([]);
    
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
      <div>
        <h1>Explore Technologies</h1>
        <div className="grid grid-cols-3 gap-4 max-w-7xl m-auto">
          {technologies.map((technology) => {
            return <Card {...technology} />;
          })}
        </div>
        <YourStack></YourStack>
      </div>
    );
}
export default Technologies