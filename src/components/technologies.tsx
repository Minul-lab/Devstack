import {useEffect,useState } from "react"
import type { cardProps } from "./technologyCard";
import Card from "./technologyCard";
import YourStack from "./yourStack";
import { toast } from "react-toastify";







function Technologies(){
    const [technologies, setTechnologies] = useState<cardProps[]>([]);
    const [stack,setStack] = useState<cardProps[]>([])
    const [loading, setLoading] = useState(true);
    const handleAdd = (technology: cardProps) => {
      setStack((prevStack) => {
        const alreadyExists = prevStack.some(
          (item) => item.id === technology.id,
        );

        if (alreadyExists) {
          toast.warning(`${technology.name} is already in your Stack`)
          return prevStack;
        }
        toast.success(`${technology.name} added to your stack!`);

        return [...prevStack, technology];
      });
    };
    const handleRemove = (id: string) => {
      const technology = stack.find((item) => item.id === id);

      setStack(stack.filter((technology) => technology.id !== id));

      if (technology) {
        toast.info(`${technology.name} removed from your stack!`);
      }
    };
    const handleRemoveAll = () => {
      setStack([]);
      toast.info("All technologies removed from your stack!");
    };
    useEffect(()=>{
        async function fetchData() {
            const res = await fetch("/Data/technologies.json");
            const data = await res.json()
            setTechnologies(data);
             setLoading(false);
            
            
        }
        fetchData();
    },[])
    if (loading) {
      return <p className="text-center py-10">Loading technologies...</p>;
    }
    // console.log(technologies)
    
    return (
      <div className="flex-col max-w-7xl m-auto py-5">
        <div className="flex-col">
          <h1 className="text-3xl lg:text-5xl my-3 text-slate-900 font-bold text-center lg:text-left">
            Explore{" "}
            <span className="bg-linear-to-r from-[#FF5722] to-[#3c02a0] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
              Technologies
            </span>
          </h1>
          <p className="text-sm lg:text-base font-bold text-slate-400 my-3 text-center lg:text-left">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="grid grid-cols-1 w-full self-center mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {technologies.map((technology) => {
              return (
                <Card
                  key={technology.id}
                  {...technology}
                  onAdd={handleAdd}
                  isAdded={stack.some((item) => item.id === technology.id)}
                />
              );
            })}
          </div>
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    );
}
export default Technologies