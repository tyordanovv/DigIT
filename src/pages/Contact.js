import ContactForm from "../components/contactpage/ContactForm"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import NavBar from "../components/header/NavBar"

function Contact() {
    return(
        <dev>
            <NavBar />
            <TextField text="Do not hesitate to contact us right now."/>
            <ContactForm />
            <Footer />
        </dev>
    )
}

export default Contact