import React, { useEffect, useState } from 'react'
import { getProfessorByName } from '../../../services'
import { LandingTemplate } from '../../templates'

const LandingPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [professorsToRender, setProfessorsToRender] = useState<Array<any>>([]);

    useEffect(() => {
        searchTerm && getProfessorByName(searchTerm).then((res: any) => setProfessorsToRender(res?.data))
    }, [searchTerm])

    const statistics = [{
        iconName: 'professor',
        end: 45356,
        iconText: 'Professors'
    },
    {
        iconName: 'schools',
        end: 432,
        iconText: 'Schools'
    },
    {
        iconName: 'ratings',
        end: 52625,
        iconText: 'Ratings'
    },
    {
        iconName: 'users',
        end: 4432,
        iconText: 'Users'
    }]

    return <LandingTemplate statistics={statistics} searchTerm={searchTerm} setSearchTerm={setSearchTerm} professorsToRender={professorsToRender} />
}

export default LandingPage