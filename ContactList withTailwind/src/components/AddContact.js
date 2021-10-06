import { useState } from 'react'
import addOneContact from '../services/addOneContact'
import userimg from "../assets/userImg.png"

function AddContact({ history }) {

    const [contact, setContact] = useState({ name: "", phone: "" , isFavorite:false })

    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {

        if (contact.name === "") {
            alert("Enter name")
            return
        }

        e.preventDefault();
        try {
            await addOneContact(contact)
        } catch (error) {
        }
        history.push('/contactlist')



    }
    return (
        <section>
            <h3 className="heading">Add New Contact</h3>
            <form onSubmit={submitHandler} className="md:w-2/6 w-5/6 flex flex-col items-center text-xl mx-auto px-4 py-8 mt-8 shadow-xl space-y-8">
               
                <img src={userimg} className="w-24 h-24 " />

                <div className="flex flex-col w-full ">
                    <label className="text-base opacity-50" >Full Name</label>
                    <input value={contact.name} onChange={changeHandler} name="name" className="input"></input>
                </div>
                <div className="flex flex-col w-full " >
                    <label className="text-base opacity-50">Phone Number</label>
                    <input value={contact.phone} onChange={changeHandler} name="phone" className="input" type="number"></input>
                </div>
                <button className="text-white bg-red-800 px-2 py-1 w-full transition-all hover:bg-red-600 " type="submit" >ADD</button>
            </form>
        </section>
    )
}

export default AddContact
