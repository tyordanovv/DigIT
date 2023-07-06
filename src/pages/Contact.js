import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import MainText from "../components/MainText"
import NavBar from "../components/NavBar"

function Contact() {
    return(
        <dev>
            <NavBar />
            <MainText text="Start your digital jorney now with us."/>
            <ContactForm />
            <Footer />
        </dev>
    )
}

export default Contact