import Navigation from './Navigation'
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact (props) {
    return (
        <div className="contact-container">
            <Navigation />
            <div className="contact-content">
                <ContactForm />
            </div>
    </div>
    )
}