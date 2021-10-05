import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/userActions';
import './Navbar.css';

const Navbar = () => {

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Domaincer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {currentUser ? (<li className="nav-item">
                        <a className="nav-link" href="/" onClick={() => { dispatch(logoutUser()) }}>Logout</a>
                        </li>) :
                            (
                            <div>
                                <li className="nav-item ">
                                <a className="nav-link" href="/login">LogIn</a>
                            </li>
                            </div>)}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;