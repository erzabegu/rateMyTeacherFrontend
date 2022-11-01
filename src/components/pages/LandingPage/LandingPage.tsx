import React, {useEffect, useState} from 'react'
import {getProfessorByName, getProfessors, getSchools, getUsers} from '../../../services'
import {LandingTemplate} from '../../templates'

const LandingPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [professorsToRender, setProfessorsToRender] = useState<Array<any>>([]);

    const [p, setP] = useState<number>(0);
    const [s, setS] = useState<number>(0);
    const [u, setU] = useState<number>(0);
    useEffect(() => {
       getProfessorByName(searchTerm).then((res: any) => setProfessorsToRender(res?.data))
    }, [searchTerm])

    useEffect(() => {
            getProfessors().then((res: any) => setP(res.data.length))
            getSchools().then((res: any) => setS(res.data.length))
            getUsers().then((res: any) => setU(res.data.length))
        },
        [])

    const statistics = [{
        iconName: 'professor',
        end: p && p,
        iconText: 'Professors'
    },
        {
            iconName: 'schools',
            end: s,
            iconText: 'Schools'
        },
        {
            iconName: 'users',
            end: u,
            iconText: 'Users'
        }]


    return <LandingTemplate statistics={statistics} searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                            professorsToRender={professorsToRender}/>
}

export default LandingPage