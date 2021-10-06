import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex flex-col  items-center mt-10">
            <p className="text-xl">error 404</p>
            <p className="text-2xl">Page Not Found !</p>
            <Link to="/" className="text-2xl mt-20 bg-red-800 p-4  text-white">Back To Home</Link>
        </div>
    )
}

export default NotFound
