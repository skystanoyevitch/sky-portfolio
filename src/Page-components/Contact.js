import React, { useState } from "react"

function Contact() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    // const handleChange = event => {
    //     setFirstName(event.target.first)
    //     setLastName(event.target.last)
    // }

    const handleSubmit = event =>{
        event.preventDefault();
        alert('A name was submitted: ' + firstName + " " + lastName);
    }
    return (
        <div className="w-screen h-screen">
            <div className="container mx-auto h-screen py-4 grid grid-cols-2">
                <div className="grid grid-cols-1">
                    <h1 className="flex justify-center items-center font-majorMonoDisplay" style={{fontSize: 70}}>
                        CONTACT ME
                    </h1>
                    <p className="text-center text-2xl font-montserrat">
                    Thanks for taking an interest in my portfolio, if you have any questions
                    or Inquiries , please feel free to ask using the form.
                    </p>
                </div>


                <div className="grid grid-cols-1">
                    <div className="flex justify-center items-center">
                        <form onSubmit={handleSubmit}>
                            <div className="flex">
                                <div className="flex flex-col pr-6">
                                    <label>
                                        First Name
                                    </label>
                                    <input
                                        type="text" 
                                        value={firstName} 
                                        onChange={(e) => setFirstName(e.target.value)} 
                                        name="first"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label>
                                        Last Name
                                    </label>
                                    <input
                                        type="text" 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)} 
                                        name="last"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex flex-col pt-6">
                                    <label>
                                        Email
                                    </label>
                                    <input
                                        type="text" 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)} 
                                        name="last"
                                    />
                                </div>
                                <div className="flex flex-col pt-6">
                                    <label>
                                        Subject
                                    </label>
                                    <input
                                        type="text" 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)} 
                                        name="last"
                                    />
                                </div>
                                <div className="flex flex-col pt-6">
                                    <label>
                                        Message
                                    </label>
                                    <input
                                        type="text" 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)} 
                                        name="last"
                                    />
                                </div>
                            </div>

                                
                            
                            <button 
                            type="submit" 
                            value="Submit"
                            >
                            Submit
                            </button>
                        </form>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Contact