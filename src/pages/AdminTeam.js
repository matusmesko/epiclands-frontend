import React, {useEffect, useState} from 'react';
import {graphqlCalls} from "../api/graphqlCalls";
import "../styles/AdminTeam.css"
import SmallHeader from "../components/SmallHeader";

const AdminTeam = () => {

    const [owners, setOwners] = useState([])
    const [coOwners, setCoOwners] = useState([])
    const [traineeBuilders, setTraineeBuilders] = useState([])
    const [helpers, setHelpers] = useState([])
    const [builders, setBuilders] = useState([])
    const [eventers, setEventers] = useState([])
    const [mainHelpers, setMainHelpers] = useState([])
    const [traineeHelper, setTraineeHelper] = useState([])
    const [admins, setAdmins] = useState([])
    const [developers, setDevelopers] = useState([])
    const [mainBuilders, setMainBuilders] = useState([])
    const [mainDevelopers, setMainDevelopers] = useState([])
    const [mainTechnics, setMainTechnics] = useState([])
    const [technics, setTechnics] = useState([])
    const [testers, setTesters] = useState([])
    const [management, setManagement] = useState([])
    const[loading, setLoading] = useState(true)

    const getOwners = async () => {
        const response = await graphqlCalls(`{getOwners{uuid username primary_group}}`)
        setOwners(response.getOwners)
    }

    const getCoOwners = async () => {
        const response = await graphqlCalls(`{getCoOwners{uuid username primary_group}}`)
        setCoOwners(response.getCoOwners)
    }

    const getTraineeBuilders = async () => {
        const response = await graphqlCalls(`{getTraineeBuilders{uuid username primary_group}}`)
        setTraineeBuilders(response.getTraineeBuilders)
    }


    const getHelpers = async () => {
        const response = await graphqlCalls(`{getHelpers{uuid username primary_group}}`)
        setHelpers(response.getHelpers)
    }

    const getBuilders = async () => {
        const response = await graphqlCalls(`{getBuilders{uuid username primary_group}}`)
        setBuilders(response.getBuilders)
    }

    const getEventers = async () => {
        const response = await graphqlCalls(`{getEventers{uuid username primary_group}}`)
        setEventers(response.getEventers)
    }

    const getMainHelpers = async () => {
        const response = await graphqlCalls(`{getMainHelpers{uuid username primary_group}}`)
        setMainHelpers(response.getMainHelpers)
    }

    const getTraineeHelpers = async () => {
        const response = await graphqlCalls(`{getTraineeHelpers{uuid username primary_group}}`)
        setTraineeHelper(response.getTraineeHelpers)
    }

    const getAdmins = async () => {
        const response = await graphqlCalls(`{getAdmins{uuid username primary_group}}`)
        setAdmins(response.getAdmins)
    }

    const getDevelopers = async () => {
        const response = await graphqlCalls(`{getDevelopers{uuid username primary_group}}`)
        setDevelopers(response.getDevelopers)
    }

    const getMainBuilders = async () => {
        const response = await graphqlCalls(`{getMainBuilders{uuid username primary_group}}`)
        setMainBuilders(response.getMainBuilders)
    }

    const getMainDevelopers = async () => {
        const response = await graphqlCalls(`{getMainDevelopers{uuid username primary_group}}`)
        setMainDevelopers(response.getMainDevelopers)
    }

    const getMainTechnics = async () => {
        const response = await graphqlCalls(`{getMainTechnics{uuid username primary_group}}`)
        setMainTechnics(response.getMainTechnics)
    }

    const getTechnics = async () => {
        const response = await graphqlCalls(`{getTechnics{uuid username primary_group}}`)
        setTechnics(response.getTechnics)
    }

    const getTesters = async () => {
        const response = await graphqlCalls(`{getTesters{uuid username primary_group}}`)
        setTesters(response.getTesters)
    }

    const getManagement = async () => {
        const response = await graphqlCalls(`{getManagement{uuid username primary_group}}`)
        setManagement(response.getManagement)
    }



    const getData = async () => {
        getOwners()
        getCoOwners()
        getAdmins()
        getBuilders()
        getEventers()
        getHelpers()
        getTraineeHelpers()
        getTraineeBuilders()
        getMainHelpers()
        getDevelopers()
        getMainBuilders()
        getMainDevelopers()
        getMainTechnics()
        getTechnics()
        getTesters()
        getManagement()
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
        <>
            <SmallHeader title={"Admin Team"}/>
            <div className="adminteam-container">
                <div className="adminteam-content">
                    <h3>Majitelé Projektu</h3>
                    <section className={"owners-section"}>
                        {
                            owners.map((member) => {
                                return (
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${member.uuid}`} alt=""/>
                                        <p className={"nickname"}>{member.username}</p>
                                        <p className={"rank majitel"}>{member.primary_group}</p>
                                    </div>
                                )
                            })

                        }

                        {
                            coOwners.map((member) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${member.uuid}`} alt=""/>
                                        <p className={"nickname"}>{member.username}</p>
                                        <p className={"rank spmajitel"}>{member.primary_group}</p>
                                    </div>
                                )
                            })
                        }

                    </section>
                    <h3>Vedení Projektu</h3>
                    <section className={"management-section"}>
                        {
                            management.map((vedeni) => {
                                return (
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${vedeni.uuid}`} alt=""/>
                                        <p className={"nickname"}>{vedeni.username}</p>
                                        <p className={"rank vedeni"}>{vedeni.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h3>Developer Team</h3>
                    <section className={"developer-section"}>
                        {
                            mainDevelopers.map((developer) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${developer.uuid}`} alt=""/>
                                        <p className={"nickname"}>{developer.username}</p>
                                        <p className={"rank developer"}>{developer.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                        {
                            developers.map((developer) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${developer.uuid}`} alt=""/>
                                        <p className={"nickname"}>{developer.username}</p>
                                        <p className={"rank developer"}>{developer.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                        {
                            mainTechnics.map((developer) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${developer.uuid}`} alt=""/>
                                        <p className={"nickname"}>{developer.username}</p>
                                        <p className={"rank technik"}>{developer.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                        {
                            technics.map((developer) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${developer.uuid}`} alt=""/>
                                        <p className={"nickname"}>{developer.username}</p>
                                        <p className={"rank technik"}>{developer.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h3>Helper Team</h3>
                    <section className={"helper-section"}>
                        {
                            mainHelpers.map((helper) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${helper.uuid}`} alt=""/>
                                        <p className={"nickname"}>{helper.username}</p>
                                        <p className={"rank helper"}>{helper.primary_group}</p>
                                    </div>
                                )
                            })
                        }

                        {
                            helpers.map((helper) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${helper.uuid}`} alt=""/>
                                        <p className={"nickname"}>{helper.username}</p>
                                        <p className={"rank helper"}>{helper.primary_group}</p>
                                    </div>
                                )
                            })
                        }

                        {
                            traineeHelper.map((helper) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${helper.uuid}`} alt=""/>
                                        <p className={"nickname"}>{helper.username}</p>
                                        <p className={"rank helper"}>{helper.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h3>Builder Team</h3>
                    <section className={"builder-team"}>
                        {
                            mainBuilders.map((builder) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${builder.uuid}`} alt=""/>
                                        <p className={"nickname"}>{builder.username}</p>
                                        <p className={"rank builder"}>{builder.primary_group}</p>
                                    </div>
                                )
                            })
                        }

                        {
                            builders.map((builder) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${builder.uuid}`} alt=""/>
                                        <p className={"nickname"}>{builder.username}</p>
                                        <p className={"rank builder"}>{builder.primary_group}</p>
                                    </div>
                                )
                            })
                        }

                        {
                            traineeBuilders.map((builder) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${builder.uuid}`} alt=""/>
                                        <p className={"nickname"}>{builder.username}</p>
                                        <p className={"rank builder"}>{builder.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h3>Eventer Team</h3>
                    <section className={"eventer-team"}>
                        {
                            eventers.map((eventer) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${eventer.uuid}`} alt=""/>
                                        <p className={"nickname"}>{eventer.username}</p>
                                        <p className={"rank eventer"}>{eventer.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h3>Tester Team</h3>
                    <section className={"tester-team"}>
                        {
                            testers.map((tester) => {
                                return(
                                    <div className={"member"}>
                                        <img src={`https://visage.surgeplay.com/BUST/128/${tester.uuid}`} alt=""/>
                                        <p className={"nickname"}>{tester.username}</p>
                                        <p className={"rank tester"}>{tester.primary_group}</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            </div>
        </>
    );
};

export default AdminTeam;