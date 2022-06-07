import React from 'react'
import emailjs from '@emailjs/browser';
import {FadeTransform} from 'react-animation-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faSquarePen,faMarker } from '@fortawesome/free-solid-svg-icons'
import './ConnectForm.css';
const ConnectForm = () => {
    const[enteredName,setEnteredName]=React.useState("");
    const[enteredEmail,setEnteredEmail]=React.useState("");
    const[enteredFeedBack,setEnteredFeedBack]=React.useState();
    const[isValid,setIsValid]=React.useState(true);
    const[isSend,setIsSend]=React.useState(false);

    const nameChangeHandler=(event)=>{
        setIsSend(false);
        setEnteredName(event.target.value);
    }
    const feedBackChangeHandler=(event)=>{
        setIsSend(false);
        setEnteredFeedBack(event.target.value);
    }
    const emailChangeHandler=(event)=>{
        setIsSend(false);
        setEnteredEmail(event.target.value);
    }
    const sendClickHandler=(event)=>{
        event.preventDefault();
        let validation=false;
        if(enteredName.trim().length===0 || enteredEmail.trim().length===0)
        {
            validation=true;
            setIsValid(false);
            
        }
        console.log("validtion check "+ validation)
        if(!validation)
        {
            
            var params = {
                to_name: enteredName,
                from_name: enteredEmail,
                message: enteredFeedBack
                };
            emailjs.init("JNT40Ky6ogHb0QDIr");
            emailjs.send( 'ikay3737@gmail.com','template_y56havl', params );
            setIsValid(true);
            setIsSend(true);
        }

    }
  return (
    <FadeTransform in transformProps={{
        enter:"scale(0.7)",
        exitTransform:"scale(0.4)"
        }}>
    <section class="mb-4 connect-section text-white">

    <h2 class="h1-responsive font-weight-bold purple text-center my-4">Get In Touch</h2>
    <p class="text-center w-responsive mx-auto mb-5">I'm currently available for freelance projects or full-time work. If you're interested in working with me, please get in touch by sending your project query below. Or feel free to just say hi. I like that too.</p>
        <form>
            <br/>
            {!isValid && <span className='text-danger'>**Please Fill in all the Details</span>}
            {isSend && <span className='text-success'>Thank you, Message Successfully Sent</span>}
    <div class="row mt-3">

        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row mb-3">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" required id="name" onChange={nameChangeHandler} value={enteredName} name="name" class="form-control"/>
                            <FontAwesomeIcon icon={faUser}/><label for="name" class="p-3"> Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" onChange={emailChangeHandler} value={enteredEmail} required id="email" name="email" class="form-control"/>
                            <FontAwesomeIcon icon={faEnvelope}/><label for="email" class="p-3">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text"  id="subject" name="subject" class="form-control"/>
                            <FontAwesomeIcon icon={faSquarePen}/><label for="subject" class="mb-3 p-3">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" onChange={feedBackChangeHandler} value={enteredFeedBack} required id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <FontAwesomeIcon icon={faMarker}/><label for="message" className='mt-3 p-3'>Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <button class="btn btn-primary w-25" type="submit" onClick={sendClickHandler}>Send</button>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Lahore, Pakistan</p>
                </li>

                <li><i class="fas text-white fa-phone mt-4 fa-2x"></i>
                    <p>+ 92 2300 5535337</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>ikay3737@gmail.com</p>
                </li>
            </ul>
        </div>
      

    </div>
    </form>
</section>
</FadeTransform>
  )
}

export default ConnectForm
