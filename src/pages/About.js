import NavBar from "../components/header/NavBar"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import AboutField from "../components/aboutpage/AboutField"

function About() {
    return(
        <dev>
            <NavBar />
            <TextField text="Start your digital jorney now with us."/>
            <AboutField />
            <Footer />
        </dev>
    )
}
export default About