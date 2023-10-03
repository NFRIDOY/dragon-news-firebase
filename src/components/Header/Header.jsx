import { useEffect } from "react";
import Time from "../time/time";

const {day, thisMonthName, year} = Time


export default function Header() {
    
    return (
        <div>
            <header className="text-center space-y-4">
                <h1 style={{ fontFamily: "'old-english-text-mt-regular', sans-serif" }} className="text-6xl">The Dragon News</h1>
                <h4 className="text-[18px]">Journalism Without Fear or Favour</h4>
                <h3 className="text-xl text-gray-500"><time>{
                    day + " " + thisMonthName + ", " + year
                    // + day + " " + month + " " + year + " Time:" + hour + ":" + minute + ":" + second
                    // " " + hour + ":" + minute + ":" + second
                }</time></h3>
                {/* <h1>
                        {
                            useEffect(()=>{
                                hour + ":" + minute + ":" + second
                            },[second])
                        }
                    </h1> */}
            </header>
        </div>
    )
}
