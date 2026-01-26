//import { proficiencyList } from "@/lib/proficiencyList";


//const progressVal = proficiencyList.flatMap((tech) => tech.progressValue.map((progVal) => progVal))
export default function ProgressBar({ value, max, children }:{ value:number; max: number; children?:React.ReactNode}){
    return (
        <div>  
                <progress id="temp" className="h-2" value={value} max={max} />
                {children}
        </div>
    )
}
