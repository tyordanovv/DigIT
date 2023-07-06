import React, { useState } from 'react';

function ContactForm(){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here, you can perform further actions like sending the form data to a server
  
      // Reset the form fields
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    };
    return(
        <div className="flex flex-col relative">
            {/* heading of the contact form */}
            <div className="text-black text-3xl font-bold text-center py-10">
                Write us an e-mail
            </div>
            <div className="flex flex-col md:flex-row">
                {/* contact form */}
                <div className="flex-1 p-6">
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            type='text'
                            id='name'
                            value={name}
                            onChange={handleNameChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"

                        />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone:</label>
                        <input 
                            type='text'
                            id='phone'
                            value={phone}
                            onChange={handlePhoneChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"

                        />
                    </div>
                    <div>
                        <label htmlFor='email'>E-mail:</label>
                        <input 
                            type='text'
                            id='email'
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    <div>
                        <label htmlFor='message'>Message:</label>
                        <input 
                            type='textarea'
                            id='message'
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    {/* submit button */}
                    <button type="submit" className="border border-gray-300 rounded px-4 py-2 float-right" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                {/* contact data */}
                <div className="flex-1 p-6">
                    <h2>Address</h2>
                    <p>Burgas, Bulgaria</p>
                    <h2>Contacts</h2>
                    <p>+359 88 8888888</p>
                    <p>+359 88 8888888</p>
                    <p>info@digit-solutions.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;