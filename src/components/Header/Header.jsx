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
                {/* <h1 style={{ fontFamily: "'old-english-text-mt-regular', sans-serif" }} className="text-6xl">The Dragon News</h1> */}
                <div >
                    <img className="mx-auto pt-4" src="../../../src/assets/logo.png" alt="" />
                </div>
                <h4 className="text-[18px]">Journalism Without Fear or Favour</h4>
                <h3 className="text-xl text-gray-500"><time>{
                    thisDayOfWeek + ", " + " " + thisMonthName + " " + day + ", " + year
                    // + day + " " + month + " " + year + " Time:" + hour + ":" + minute + ":" + second
                    // " " + hour + ":" + minute + ":" + second
                }</time></h3>
                <div className="w-10/12 mx-auto flex justify-between items-center gap-3 bg-[#F3F3F3] py-3 text-lg">
                    <div className="ml-4 px-5 py-2 bg-[#D72050] text-white">Latest</div>
                    <marquee className="" behavior="scroll" direction="left" scrollamount="7">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto minima, voluptatibus eum odit quis itaque, laborum quae cumque nam unde harum ipsa molestias. Officiis in nam consequuntur labore a ipsum tempore iure beatae quas odio, quae id quibusdam nulla laudantium sunt. Eum ipsa doloribus temporibus illum nihil. Amet expedita repudiandae vitae sequi ad. Fugit reiciendis quae quo. Corrupti libero, esse facilis, facere aut dolorum ipsam aspernatur dolor officiis autem assumenda, at quae quasi atque adipisci modi ut perferendis repellendus laborum in iure alias nihil commodi. Mollitia saepe incidunt et deleniti quisquam ab excepturi hic culpa, harum earum atque corporis aliquam. Doloribus veritatis quos ad quia necessitatibus eligendi pariatur quae dolor vel cum et dignissimos delectus reiciendis, voluptatem asperiores dolorem excepturi ducimus eos aspernatur ipsam qui ut. Tempora veritatis soluta ex non eos optio, sint dolorem sapiente quod harum inventore ad iure. Esse consequatur non vitae dolorem amet dolorum inventore vero corrupti aspernatur neque aperiam maxime enim suscipit iste facilis libero nulla ipsam eveniet corporis, sed cum eius distinctio assumenda? Asperiores suscipit dignissimos, ut sed ad perspiciatis nesciunt provident. Facilis deleniti voluptatem non recusandae? Voluptate culpa eius cumque commodi ipsum nihil vitae odio consequatur eligendi reprehenderit? Explicabo numquam a, odio recusandae nam adipisci reiciendis, expedita hic cum tenetur molestias ex maxime veniam deserunt distinctio. Quaerat, officiis. Quae quisquam magnam delectus placeat, esse, id, quaerat dolorem mollitia voluptatibus laboriosam labore! Vitae eaque vero neque id ea perspiciatis non sint modi voluptatum minima quibusdam corrupti temporibus, eos accusamus ex enim dolorem quidem at vel dolorum architecto quis, sunt veritatis unde. Veniam, illum fugit expedita temporibus odit architecto dicta ducimus sit accusantium, sunt quos dolorum aspernatur? Voluptatum eligendi velit sunt soluta quasi laboriosam nihil delectus atque quam inventore odio, culpa natus? Mollitia sint vero debitis odio quibusdam vitae aliquid obcaecati incidunt expedita odit illum quasi hic accusantium pariatur autem delectus consequatur, impedit deleniti harum! Adipisci corrupti sit illum temporibus nostrum sequi facere incidunt dolorum accusantium minus optio fugiat quis quaerat corporis ducimus asperiores illo, ex suscipit quos ut eaque ab molestiae distinctio ratione! Dolorem laudantium sit eveniet architecto tenetur asperiores accusamus! Tempore quidem blanditiis officia, corporis atque beatae aliquam soluta alias magnam doloremque? Perferendis dolorum magnam inventore sint, nulla repellendus dolorem nihil doloribus quasi repudiandae recusandae officiis unde, at mollitia quibusdam quisquam aperiam! Praesentium laudantium reiciendis quibusdam veniam eos accusantium expedita sint ex voluptates eum ad, harum voluptatibus nesciunt eius temporibus quae, omnis veritatis facilis obcaecati consequuntur. Laboriosam excepturi, deleniti, tempora voluptates a sint autem commodi culpa molestiae delectus magni similique velit nam alias architecto, ad qui. Dignissimos, voluptate quaerat officiis nobis accusamus tempore, ea eius incidunt ipsum distinctio ex dolor vitae aliquid iusto? Totam numquam tenetur minima cupiditate omnis. Nemo harum dolorum ducimus, at eligendi cum quae provident, obcaecati, culpa fugit iure magni exercitationem animi illum dolorem aperiam cumque a neque sequi ipsam id. Voluptas culpa, eveniet quae ab accusantium sunt nam velit provident alias molestias repellat quam quasi? Quasi a adipisci alias veritatis quis, cupiditate amet rem repudiandae, recusandae, omnis debitis!</marquee>
                </div>

            </header >
        </div >
    )
}
