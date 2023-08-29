import ContactForm from "../components/contactpage/ContactForm"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import Nav from "../components/header/Nav"

function Contact() {
    return(
        <div>
            <Nav />
            <TextField text="Do not hesitate to contact us right now."/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact