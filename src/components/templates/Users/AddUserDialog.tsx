import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { ActionMeta, OnChangeValue } from 'react-select';
import { addUsers, modifyUsers } from '../../../services';
import { UserType } from '../../../types';
import { DefaultInput } from '../../atoms';

interface Props {
    show?: boolean;
    setShow?: any;
    rowToEdit?: any;
    setRowToEdit?: any;
    onClose(): void;
    setSchools: any;
}

const AddUserDialog = ({ show, setShow, rowToEdit, setRowToEdit, onClose, setSchools }: Props) => {
    const [user, setUser] = useState(initialUserType)
    const [userRoles, setUserRoles] = useState()

    useEffect(() => {
        rowToEdit && setUser(rowToEdit)
    }, [rowToEdit])

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                {rowToEdit ? <h5>Edit User</h5> : <h5>Add User</h5>}
            </Modal.Header>
            <Modal.Body>
                <DefaultInput
                    type={'text'}
                    placeholder='Name'
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='Surname'
                    value={user.surname}
                    onChange={(e) => setUser({ ...user, surname: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='Email'
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='Password'
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                {/* <CustomMultiselect
                    label='smth'
                    options={departments}
                    value={school.departments}
                    name={''}
                    onChange={(userList: OnChangeValue<any, any>, actionMeta: ActionMeta<any>) => {
                        switch (actionMeta.action) {
                            case "select-option":
                                return selectNewOption(userList);
                            case "remove-value":
                                return removeSelectedOption(userList);
                            case "clear":
                                return removeSelectedOption([]);
                            default:
                                return null;
                        }
                    }} /> */}
            </Modal.Body>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={() => {
                    modifyUsers(user._id, user)
                    onClose();
                }}>
                    Save Changes

                </Button>}
                {!rowToEdit &&
                    <Button variant="secondary" onClick={() => {
                        addUsers(user)
                        setUser(initialUserType)
                        setShow(false)
                    }}>
                        add
                    </Button>}

            </Modal.Footer>
        </Modal>
    )
}

const initialUserType: UserType = {
    _id: "",
    name: "",
    surname: "",
    roleId: "",
    email: "",
    password: "",
}

export default AddUserDialog