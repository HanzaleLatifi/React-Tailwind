import React from 'react'
import {Link} from 'react-router-dom'
import { FaAccessibleIcon, FaUserFriends } from "react-icons/fa"
import { FaUserPlus } from "react-icons/fa"
import { RiUserStarFill} from "react-icons/ri"

function Home() {
    return (
        <section>
            <h3 className="heading">Wellcome Back ...!</h3>
            <div className="grid md:grid-cols-3 grid-flow-row md:gap-2 gap-4 md:w-5/6 md:h-96 mx-auto my-auto shadow-xl md:px-8 md:py-8 py-4 px-4 ">
                <Link to="/contactlist">
                    <div className="box">
                        <FaUserFriends className="w-24 h-24 md:h-32 md:w-32"/>
                        <p>Contact List</p>
                    </div>
                </Link> 
                 <Link to="/add">
                    <div className="box">
                        <FaUserPlus className="w-24 h-24 md:h-32 md:w-32"/>
                        <p>Add Contact</p>

                    </div>
                </Link> 
                 <Link to="/myfavourites">
                    <div className="box">
                    <RiUserStarFill className="w-24 h-24 md:h-32 md:w-32"/>
                    <p>Favourites</p>
                    </div>
                </Link>



            </div>
            
            

        </section>
    )
}

export default Home;
