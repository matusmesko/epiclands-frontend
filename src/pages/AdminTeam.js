import React, {useEffect, useState} from 'react';
import {graphqlCalls} from "../api/graphqlCalls";
import "../styles/AdminTeam.css"
import SmallHeader from "../components/SmallHeader";

const AdminTeam = () => {

    const [owners, setOwners] = useState([])
    const[loading, setLoading] = useState(true)

    const getOwners = async () => {
        const response = await graphqlCalls(`{getOwners{uuid username primary_group}}`)
        setOwners(response.getOwners)
    }

    const getData = async () => {
        getOwners()
    }

    useEffect(() => {
        getData().then(() => {
            setLoading(false)
        })
    }, [])




    if (loading) {
        return (
            <div className={"loading-container"}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div>
            <SmallHeader title={"Admin Team"}/>

            {
                owners.map((owner) => {

                    return (
                        <div>
                            <img src={`https://visage.surgeplay.com/full/${owner.uuid}`} alt=""/>
                            <h3>{owner.username}</h3>
                            <p>{owner.uuid}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AdminTeam;