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
            <div className="container mx-auto h-screen grid grid-cols-2">
                <div className="grid gap-14">
                    <h1 className="flex items-end font-Zilla-Slab-Highlight" style={{fontSize: 70}}>
                        Need a Website Built?
                        <br/>
                        Want to Colaborate?
                        <br/>
                        or just want to say hi...
                    </h1>
                    <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">
                    If you are looking to have a Website or App built, please include those details and i will get back to you shortly to discuss further about it.
                    I love talking to people, and value communication with my Clients, so please don't hesitate to contact me.
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