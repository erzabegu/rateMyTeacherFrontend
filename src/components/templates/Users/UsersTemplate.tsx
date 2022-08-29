import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { getProfessors, getUserRoles, getUsers } from '../../../services'
import { CustomTable } from '../../molecules/Table'
import AddUserDialog from './AddUserDialog';

const Users = () => {

    const [users, setUsers] = useState<Array<any>>([]);
    const [userRole, setUserRole] = useState<any>();

    useEffect(() => {
        getUsers().then((res: any) => setUsers(res.data))
        getUserRoles().then((res: any) => setUserRole(res.data))
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'name',
                accessor: 'firstName',
            },
            {
                Header: 'surname',
                accessor: 'lastName',
            },
            {
                Header: 'RoleId',
                accessor: 'userRoleName',
            },
            {
                Header: 'email',
                accessor: 'email',
            },
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
        }} setShow={setShow} rowToEdit={rowToEdit} setRowToEdit={setRowToEdit} setUsers={setUsers} />

        <CustomTable data={data} columns={columns} showRowToEdit={(row: any) => {
            setRowToEdit(row)
            handleShow();
        }} />
    </>

}

export default Users