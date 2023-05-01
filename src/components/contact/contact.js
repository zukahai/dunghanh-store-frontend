import React from 'react';
import './contact.scss';

class ContactComponent extends React.Component {
    componentDidMount() {
        document.title = "Contact"
    }
    render() {
        return (
            <>
                <div className="contact-container">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required rows={6}></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                </div>
            </>
        );
    }
}

export default ContactComponent;