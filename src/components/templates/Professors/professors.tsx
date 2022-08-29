import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import { getProfessors, getSchools } from '../../../services'
import { addSchool } from '../../../services/Schools/schoolsService';
import { CustomTable } from '../../molecules/Table'
import ShowDepartments from '../Schools/ShowDepartments';
import AddProfessor from './AddProfessor';

const Professors = () => {

    const [professors, setProfessors] = useState<Array<any>>([]);
    const [schools, setSchools] = useState<Array<any>>([]);
    const [showDepartments, setShowDepartments] = useState<boolean>(false);
    const [departments, setDepartments] = useState<any>([]);


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
        <PlusCircle color={"#283779"} height={20} width={20}
            onClick={() => {
                setRowToEdit(undefined);
                setShow(true);
            }} />
        {show && <AddProfessor
            rowToEdit={rowToEdit}
            show={show}
            handleClose={handleClose}
            setProfessors={setProfessors} />
        }
        <ShowDepartments
            onClose={() =>
                setShowDepartments(true)
            }
            setShowDepartments={setShowDepartments}
            showDepartments={showDepartments}
            departments={departments}
        />
        <CustomTable
            data={data}
            columns={columns}
            showRowToEdit={(row: any) => {
                setRowToEdit(row)
                handleShow();
            }}
            showSchoolDepartments={(row: any) => {
                setDepartments(row.departments)
                setShowDepartments(true)
            }}
        />
    </>

}

export default Professors