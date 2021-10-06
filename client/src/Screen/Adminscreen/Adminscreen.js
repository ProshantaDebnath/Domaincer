import React, { useEffect } from 'react';
import '../Adminscreen/Adminscreen.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import Userslist from '../Userslist/Userslist';
import Jobslist from '../Jobslist/Jobslist';
import Addjob from '../Addjob/Addjob';
import Applicantdetails from '../Applicantdetails/Applicantdetails';


export default function Adminscreen() {

    const userstate = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {

        if (!currentUser.isAdmin) {

            window.location.href = '/home'
        }

    }, [])


    return (
        <div>

            <div className='row justify-content-center p-3'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>Recruiter Panel</h2>

                    <ul className='adminpanel'>
                        <li><Link to={'/admin/userslist'}>Users List</Link></li>
                        <li><Link to={'/admin/jobslist'}>Jobs List</Link></li>
                        <li><Link to={'/admin/addjob'}>Add Job</Link></li>
                        <li><Link to={'/admin/applicantdetails'}>Applicant Details</Link></li>
                    </ul>

                    <Switch>
                        <Route path='/admin' exact component={Userslist} />
                        <Route path='/admin/userslist' exact component={Userslist} />
                        <Route path='/admin/jobslist' exact component={Jobslist} />
                        <Route path='/admin/addjob' exact component={Addjob} />
                        <Route path='/admin/applicantdetails' exact component={Applicantdetails} />
                    </Switch>

                </div>

            </div>


        </div>
    );
}
