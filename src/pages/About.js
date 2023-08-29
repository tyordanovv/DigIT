import Nav from "../components/header/Nav"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import AboutField from "../components/aboutpage/AboutField"

function About() {
    return(
        <>
            <Nav />
            <TextField text="Start your digital jorney now with us."/>
            <AboutField />
            <Footer />
        </>
    )
}
export default About