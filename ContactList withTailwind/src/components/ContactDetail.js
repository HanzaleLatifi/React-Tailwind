import { Link } from 'react-router-dom';

function ContactDetail(props) {
    const contact = props.location.state.contact;
    return (
        <div className="shadow-lg flex flex-col items-center mx-auto md:my-20 my-10 text-2xl space-y-8 p-6 md:w-2/6 w-5/6">
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <Link to="/contactlist" className="text-white bg-red-800 px-2 py-1 w-full text-center" > Back </Link>
        </div>
    )
}

export default ContactDetail
