import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin2Fill} from 'react-icons/ri'
import {VscStarEmpty} from 'react-icons/vsc'
import {VscStarFull} from 'react-icons/vsc'

function Contact({ contact, onDelete , onFavorite }) {
    return (

        <div className="flex items-center px-4 w-full  my-2 border-b-2 border-red-800 text-base  md:text-lg md:font-semibold hover:border-yellow-600  " >
            <Link to={{ pathname: `/user/${contact.id}`, state: { contact: contact } }} className=" w-1/3">
                <div className="flex items-center">
                    <AiOutlineUser />
                    <p className="mx-2 ">{contact.name}</p>
                </div>
            </Link>

            <Link to={{ pathname: `/user/${contact.id}`, state: { contact: contact } }} className="w-1/3 ">
                <p className="text-center md:tracking-wide ">{contact.phone}</p>
            </Link>

            <div className="w-1/3 text-center flex justify-end " >
                <button onClick={() => onDelete(contact.id)} ><RiDeleteBin2Fill className="hover:text-red-800"/></button>
                <Link to={`/edit/${contact.id}`} className="mx-4">
                    <button><MdModeEdit className="hover:text-blue-800"/></button>
                </Link>
                <button onClick={()=>onFavorite(contact.id)}>{contact.isFavorite? <VscStarFull /> :<VscStarEmpty className="hover:text-yellow-600"/>}</button>

            </div>

        </div>

    )
}

export default Contact
