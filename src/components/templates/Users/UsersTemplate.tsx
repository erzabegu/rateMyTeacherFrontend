import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { getProfessors, getUserRoles, getUsers } from '../../../services'
import { CustomTable } from '../../molecules/Table'
import AddUserDialog from './AddUserDialog';

const Users = () => {

    const [users, setUsers] = useState<Array<any>>([]);
    const [userRole, setUserRole] = useState<any>();

    useEffect(() => {
        getUsers().then((res: any) => {
            setUsers(res.data)
        })
        Promise.all([getUsers(), getUserRoles()]).then((res: any) => {
            setUsers(res[0].data)
            setUserRole(res[1].data)
        })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'name',
                accessor: 'name',
            },
            {
                Header: 'surname',
                accessor: 'surname',
            },
            {
                Header: 'RoleId',
                accessor: 'RoleID',
            },
            {
                Header: 'email',
                accessor: 'email',
            },
            {
                Header: 'password',
                accessor: 'password',
            }
        ],
        []
    )

    const data = React.useMemo(() => users, [users]);
    const [show, setShow] = useState(false);
    const [rowToEdit, setRowToEdit] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <div onClick={() => {
            setRowToEdit(undefined)
            setShow(true)
        }}>+</div>
        <AddUserDialog show={show} onClose={() => {
            setRowToEdit(undefined)
            setShow(false)
        }} setShow={setShow} rowToEdit={rowToEdit} setRowToEdit={setRowToEdit} setSchools={setUsers} />

        <CustomTable data={data} columns={columns} showRowToEdit={(row: any) => {
            setRowToEdit(row)
            handleShow();
        }} />
    </>

}

export default Users