import ContactForm from "../components/contactpage/ContactForm"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import Nav from "../components/header/Nav"

function Contact() {
    return(
        <dev>
            <Nav />
            <TextField text="Do not hesitate to contact us right now."/>
            <ContactForm />
            <Footer />
        </dev>
    )
}

export default Contact