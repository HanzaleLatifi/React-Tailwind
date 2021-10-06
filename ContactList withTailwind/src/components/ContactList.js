import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import deleteOneContact from '../services/deleteOneContact';
import getAllContacts from '../services/getAllContacts';
import Contact from './Contact';
import { FaUserPlus } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import putOneContact from '../services/putOneContact';


function ContactList() {

    const [contacts, setContacts] = useState(null);
    const [allContacts,setAllContacts]=useState([])
    const [search,setSearch]=useState("")



    useEffect(() => {
        const getContacts = async () => {
            const { data } = await getAllContacts()
            setContacts(data)
            setAllContacts(data)
        }
        try {
            getContacts()
        } catch (error) {
        }
    }, [])

    const deleteHandler = async (id) => {
        await deleteOneContact(id)
        const filter = contacts.filter(c => c.id !== id);
        setContacts(filter)

    }
    const addToFavorite=async(id)=>{
        const index = contacts.findIndex(c => c.id === id);
        const newContact={...contacts[index]};
        newContact.isFavorite=!newContact.isFavorite;
        const updateContact = [...contacts];
        updateContact[index] = newContact;
        setContacts(updateContact)
        setAllContacts(updateContact);
        
       await putOneContact(id,newContact)

        
    }
    const searchHandler=(e)=>{
        setSearch(e.target.value)
        if(e.target.value!==""){
            const filter=contacts.filter(c=>{
                return Object.values(c).join(" ").toLowerCase().includes(e.target.value.toLowerCase())
            })
            setContacts(filter)
        }else{
            setContacts(allContacts)
        }
       

    }

    return (
        <section className="w-full min-h-screen flex flex-col">
            <h3 className="heading">Contact List</h3>
            <div className=" flex justify-between md:p-4 p-2 items-center md:w-5/6 w-full mx-auto ">
                <div className="flex items-center md:text-xl text-base ">
                    <BiSearch  />
                    <input value={search} onChange={searchHandler} type="search" className="input w-28 md:w-auto" placeholder="Search here..."  ></input>
                </div>
                <Link to="/add" className="inline-flex items-center text-base  md:text-xl hover:text-red-800 "> <FaUserPlus className="md:mx-2 mx-1  " /> Add Contact</Link>
            </div>
            <div className="flex flex-col w-full md:w-5/6 md:h-96 mx-auto shadow-xl md:px-4 px-2 md:py-8 py-4  overflow-auto " >
                {contacts ? contacts.map(contact => {
                    return <Contact key={contact.id} contact={contact} onDelete={deleteHandler} onFavorite={addToFavorite} />
                }) : <p>Loading</p>}
            </div>

        </section>
    )
}

export default ContactList
