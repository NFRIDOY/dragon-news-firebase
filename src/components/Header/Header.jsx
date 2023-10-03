import { useEffect } from "react";


export default function Header() {
    // let time = new Date().getTime();
    // let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    // let [hour, minute, second] = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" })
    // let [dayName, month, day, year, allTime] = new Date()


    // .toLocaleTimeString("en-US")
    // .split(/:| /);

    const today = new Date();
    console.log(today);
    const year = today.getFullYear();
    let month = today.getMonth(); // Months start at 0!
    let day = today.getDate();



    const mounthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // let thisMonth = parseInt(month) + 1;
    let thisMonth = parseInt(month);
    console.log(month);
    let thisMonthName = mounthNames.at(thisMonth)
    
    // const 
    
    // console.log(mounthNames.at(0));
    console.log(mounthNames.at(month));
    console.log(mounthNames.at(thisMonth));
    console.log(typeof (thisMonth));
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
