import React, {useState} from "react";
import '../../scss/Styles/Contact.scss';
import axios from 'axios';
import Popup from "../Popup";



const Contact = () => {
    const [box, setBox] = useState(false)
    const [feedbackMessage, setFeedBackMessage] = useState(1)
    const [input, setInput] = useState({
        name: '',
        email: '',
        feedback: ''
    })
    

      const handleClose = () => {
        setBox(false)
        setInput({
            name : '',
            email: '',
            feedback: ''
        })
      }
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        axios.post("http://localhost:8000/feedback", {input}).then((response) => {
            console.log(response.status + ' ' + response.statusText)
            if (response) setBox(true)
            if (response.status === 200) setFeedBackMessage(200)
            if (response.status !== 200) setFeedBackMessage(0)
        })  
    }



    return (
        <div className="contact" id="contacts">
            <h1 className="contact__text">Contact Form</h1>
            <div className="contact__form">
                    <input 
                        type="text" 
                        className="contact__input"
                        placeholder="Name" 
                        name="name" 
                        onChange={(e) => handleChange(e)}
                        value={input.name}
                        />

                    <input 
                        type="text" 
                        className="contact__input"
                        placeholder="Email" 
                        name="email" 
                        onChange={(e) => handleChange(e)}
                        value={input.email}
                         />

                    <textarea 
                        name="feedback" 
                        className="contact__textarea"
                        id="" 
                        placeholder="Message..." 
                        onChange={(e) => handleChange(e)}
                        value={input.feedback}
                        />

                    <button className="contact__button" onClick={(e) => handleClick(e)}>Submit</button>
            </div>
            {box ? 
            <Popup handleClose={handleClose} feedbackMessage={feedbackMessage}/> : ''
            }
        </div>
    )
}

export default Contact;