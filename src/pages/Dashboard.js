import React, {useEffect} from 'react'
import { useKeycloak } from "@react-keycloak/web";
import {BiLogOut} from 'react-icons/bi'
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    const { keycloak, initialized } = useKeycloak();
    // useEffect(() => {
    //     console.log('hiiii')
    //     if (!keycloak.authenthicated) {
    //     navigate('/');
    //   }}, [])
    
    return (
    <>
        <div className='flex justify-between items-center p-7'>
            <p>Welcome, {keycloak.tokenParsed.preferred_username}</p>
            <button
                className=" flex items-center bg-blue-400 text-white p-3 rounded"
                onClick={() => keycloak.logout()}
            >
                Logout <BiLogOut className="ml-1"/>
            </button>
        </div>
    </>
    )
}

export default Dashboard