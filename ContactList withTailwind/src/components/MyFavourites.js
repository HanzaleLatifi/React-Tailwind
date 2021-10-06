import getAllContacts from "../services/getAllContacts"
import {useEffect , useState} from 'react'
import userimg from '../assets/userImg.png'


function MyFavourites() {
    const [contacts, setContacts] = useState(null);
    
    
    useEffect(() => {
       const getContacts=async()=>{
       const {data}=await getAllContacts();
       setContacts(data)
       }
       try {
           getContacts();
           
       } catch (error) {
           
       }
    }, [])

    
    return (
        
        <section>
            <h3 className="heading">MyFavourites</h3>
            <div className="grid md:grid-cols-4 grid-flow-row gap-2 w-full  md:w-5/6 md:h-96 mx-auto shadow-xl px-4 py-8  overflow-auto " >
                
                {contacts ? contacts.map((contact)=> {
                    if(contact.isFavorite){
                    return (
                        <div className="flex flex-col items-center  px-4 w-56 border-2 shadow-md text-lg font-semibold  ">
                            <img src={userimg} className="w-24 h-24"/>
                            <p>{contact.name}</p>
                            <p>{contact.phone}</p>
                            

                        </div>
                    )} else{
                        <p className="text-center text-xl py-10">Favorite list is empty ...!</p>

                    }
                
                }) : <p >loading</p>}
            </div>

        </section>
    )
}

export default MyFavourites
