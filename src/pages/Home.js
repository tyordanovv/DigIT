import NavBar from "../components/header/NavBar"
import HeroImage from "../components/homepage/HeroImage"
import Footer from "../components/footer/Footer"
import SummaryFrame from "../components/homepage/SummaryFrame"
import AboutSummary from "../components/homepage/AboutSummary"

function Home() {
    return(
        <dev>
            <NavBar />
            <HeroImage />
            <SummaryFrame title={"About us"}>
                <AboutSummary />
            </SummaryFrame>
            <SummaryFrame title={"Our Services"}>
            </SummaryFrame>
            <Footer />
        </dev>
    )
}
export default Home