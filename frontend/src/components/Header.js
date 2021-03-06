import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../css/header.css'

const Header = () => {

    let { user, logoutuser ,searchFriends} = useContext(AuthContext)
    return (
        <div className='headermain'>
            <div className='home'>
                <Link to="/">Home</Link><span> </span>
                <Link to="/addfriends" >Add Friend</Link>
                <Link to="/change_profile" >Change Profile</Link>
    
            
            </div>
            <div className='user'>


                <div className='insideUser'>
                    {user ? (

                        <span className="username"> {user && <span> <span className='main_username'></span> <span className="vspace"></span>

                            <Dropdown className='dropdown-list'>
                                <Dropdown.Toggle variant="alert" className='button'  
                                id="dropdown-basic-red">
                                    <img id="dp" src={require("../../../project" + user.profile_pic)} alt="This is the profile pic" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>{user.username}</Dropdown.Item>
                                    <Dropdown.Item onClick={logoutuser}>LOGOUT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </span>}

                         





                        </span>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}






                </div>
            </div>
        </div>
    )
}

export default Header