import { useEffect, useState } from "react";
import Time from "../time/time";

const { thisDayOfWeek, day, thisMonthName, year, hour, minute, second } = Time


export default function Header() {

    let today = new Date();


    const [seconds, setSeconds] = useState(second)

    useEffect(() => {



        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // if(seconds>=60) {
        //     setSeconds(0)
        // }

        return () => clearInterval(intervalId);

    }, [])

    // const myTime = {
    //     hour
    // }
    return (
        <div>
            <header className="text-center space-y-4">
                <h1 style={{ fontFamily: "'old-english-text-mt-regular', sans-serif" }} className="text-6xl">The Dragon News</h1>
                <h4 className="text-[18px]">Journalism Without Fear or Favour</h4>
                <h3 className="text-xl text-gray-500"><time>{
                    thisDayOfWeek + ", " + " " + thisMonthName + " " + day + ", " + year
                    // + day + " " + month + " " + year + " Time:" + hour + ":" + minute + ":" + second
                    // " " + hour + ":" + minute + ":" + second
                }</time></h3>

            </header>
        </div>
    )
}
