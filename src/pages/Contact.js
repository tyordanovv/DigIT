import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import TextField from "../components/TextField"
import NavBar from "../components/NavBar"

function Contact() {
    return(
        <dev>
            <NavBar />
            <TextField text="Start your digital jorney now with us."/>
            <ContactForm />
            <Footer />
        </dev>
    )
}

export default Contact