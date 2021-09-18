import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = 'service_id1';
    const templateID = 'template_id1';
    const userID = 'user_BD8Q2ywK6m2g5iq5ec6jj';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description:data.description
            },
            userID
        )
        r.target.reset();
    }

    
    const sendEmail=(serviceID,templateID, variales, userID)=> {    

    emailjs.send(serviceID,templateID, variales, userID)
      .then(() => {
          setSuccessMessage("Email sent successfully");
      }).catch (err=> console.log(err));
    }
    
    return (  
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form to describe your project. I will contact you as soon as possible.</p>
                <span className="success-message">{successMessage} </span>
            </div>
            <div className="container">
                <form onSubmit={ handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                            <input className="form-control"
                                type="text"
                                id="name"
                                placeholder="Name"
                                name="name"
                                {...register("name", {
                                    required: "Please enter your Name",
                                    maxLength: {
                                    value: 20,
                                    message:
                                    "Please enter a name with fewer than 20 characters",
                                    },
                                })}
                                
                            />
                        {errors.name && (
                            <span className="error-message">{errors.name.message} </span>
                        )}
                        <input className="form-control"
                            type="text"
                            id="phone"
                            placeholder="Phone No.."
                            name="phone"
                            {...register("phone", {
                                    required: "Please enter Phone No",
                                    
                                })}    
                        />
                        {errors.phone && (
                            <span className="error-message">{errors.phone.message} </span>
                        )}
                        <input className="form-control"
                            type="text"
                            id="email"
                            placeholder="E-mail"
                            name="email"
                            {...register("email", {
                                    required: "Please enter E-mail",
                                    
                            })} 
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email.message} </span>
                        )}
                        <input className="form-control"
                            type="text"
                            id="subject"
                            placeholder="Subject"
                                name="subject"
                               {...register("subject", {
                                    required: "Please enter Subject",
                                    
                            })}  
                            />
                            {errors.subject && (
                            <span className="error-message">{errors.subject.message} </span>
                            )}
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea className="form-control"
                            id="description"
                            type="text"
                            placeholder="Describe your project"
                            name="description"
                            {...register("description", {
                                    required: "Please enter Description",
                                    
                            })}  
                            />
                            {errors.description && (
                            <span className="error-message">{errors.description.message} </span>
                            )}
                        <button className="btn-main-offer contact-btn" type="submit" >
                            Contact Me
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Contacts;
