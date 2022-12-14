import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { getDepartments } from '../../../services'
import { CustomTable } from '../../molecules/Table';
import AddDepartmentsDialog from './AddDepartmentsDialog';
import {PlusCircle} from "react-bootstrap-icons";

const DepartmentsTemplate = () => {

    const [departments, setDepartments] = useState<Array<any>>([]);

    const [show, setShow] = useState(false);
    const [rowToEdit, setRowToEdit] = useState();
    const handleShow = () => setShow(true);


    useEffect(() => {
        getDepartments().then((res: any) => setDepartments(res.data))
    }, [])


    const columns = React.useMemo(
        () => [
            {
                Header: 'departments',
                accessor: 'departmentName'
            }
        ],
        []
    )

    const data = React.useMemo(() => departments, [departments]);
    return (
        <>
            <PlusCircle color={"#283779"} height={20} width={20} style={{margin:'5px'}} onClick={() => {
                setRowToEdit(undefined);
                setShow(true);
            }} />
            <AddDepartmentsDialog show={show} onClose={() => {
                setRowToEdit(undefined)
                setShow(false)
            }} setShow={setShow} rowToEdit={rowToEdit} setRowToEdit={setRowToEdit} setDepartments={setDepartments} />
            <CustomTable data={data} columns={columns} showRowToEdit={(row: any) => {
                setRowToEdit(row)
                handleShow();
            }} />
        </>
    )
}

export default DepartmentsTemplate