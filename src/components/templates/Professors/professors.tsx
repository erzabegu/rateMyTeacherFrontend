import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { getProfessors, getSchools } from '../../../services'
import { addSchool } from '../../../services/Schools/schoolsService';
import { CustomTable } from '../../molecules/Table'
import AddProfessor from './AddProfessor';

const Professors = () => {

    const [professors, setProfessors] = useState<Array<any>>([]);
    const [schools, setSchools] = useState<Array<any>>([]);

    useEffect(() => {
        getProfessors().then((res: any) => {
            setProfessors(res.data)
        })
        getSchools().then((res: any) => {
            setSchools(res.data);
        })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'ProfessorName',
                accessor: 'professorName',
            },
            {
                Header: 'schoolName',
                accessor: 'schoolName',
            },

        ],
        []
    )

    const data = React.useMemo(() => professors, [professors]);
    const [rowToEdit, setRowToEdit] = useState<any>()
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setRowToEdit(undefined)
        setShow(false)
    };
    const handleShow = () => setShow(true);
    return <>
        <h1 onClick={handleShow}>Add</h1>
        {show && <AddProfessor rowToEdit={rowToEdit} show={show} handleShow={handleShow} handleClose={handleClose}></AddProfessor>}
        <CustomTable
            data={data}
            columns={columns}
            showRowToEdit={(row: any) => {
                setRowToEdit(row)
                handleShow();
            }}
        />
    </>

}

export default Professors