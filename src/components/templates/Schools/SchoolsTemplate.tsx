import React, { useEffect, useState } from 'react'
import { getSchools } from '../../../services'
import { CustomTable } from '../../molecules/Table'
import { PlusCircle } from 'react-bootstrap-icons'
import AddSchoolDialog from './AddSchoolDialog';
import ShowDepartments from './ShowDepartments';

const SchoolsTemplate = () => {

    const [schools, setSchools] = useState<Array<any>>([]);
    const [show, setShow] = useState(false);
    const [showDepartments, setShowDepartments] = useState<boolean>(false);
    const [rowToEdit, setRowToEdit] = useState();
    const [departments, setDepartments] = useState<any>([]);


    useEffect(() => {
        getSchools().then((res: any) => {
            setSchools(res.data)
        })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'schoolName',
                accessor: 'schoolName',
            },
            {
                Header: 'schoolLocation',
                accessor: 'schoolLocation'
            },
            {
                Header: 'schoolZip',
                accessor: 'schoolZip'
            },
        ],
        []
    )
    const data = React.useMemo(() => schools, [schools]);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setRowToEdit(undefined)
        setShow(false)
    };

    return <>
        <PlusCircle color={"#283779"} height={20} width={20} style={{margin:'5px'}} onClick={() => {
            setRowToEdit(undefined);
            setShow(true);
        }} />

        <AddSchoolDialog
            show={show}
            handleClose={handleClose}
            rowToEdit={rowToEdit}
            setSchools={setSchools} />
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

export default SchoolsTemplate