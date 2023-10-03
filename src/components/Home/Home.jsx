import CenterSection from "../CenterSection/CenterSection";
import LeftSection from "../LeftSection/LeftSection";
import RightSection from "../RightSection/RightSection";


export default function Home() {
    return (
        <div>
            <main className="grid grid-cols-3">
                <LeftSection></LeftSection>
                <CenterSection></CenterSection>
                <RightSection></RightSection>
                
            </main>
        </div>
    )
}
