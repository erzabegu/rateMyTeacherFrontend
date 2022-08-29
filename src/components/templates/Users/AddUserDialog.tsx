import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { ActionMeta, OnChangeValue } from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import { addUsers, getUserRoles, modifyUsers } from '../../../services';
import { getUsers, register } from '../../../services/Users/UsersService';
import { UserType } from '../../../types';
import { CheckInputs, DefaultInput, SelectInput } from '../../atoms';
import { injectStyle } from "react-toastify/dist/inject-style";

interface Props {
    show?: boolean;
    setShow?: any;
    rowToEdit?: any;
    setRowToEdit?: any;
    onClose(): void;
    setUsers: any;
}

const AddUserDialog = ({ show, setShow, rowToEdit, setRowToEdit, onClose, setUsers }: Props) => {
    const [user, setUser] = useState<UserType>(initialUserType)
    const [userRoles, setUserRoles] = useState<Array<any>>([])

    if (typeof window !== "undefined") {
        injectStyle();
    }

    useEffect(() => {
        rowToEdit && setUser(rowToEdit)
    }, [rowToEdit])

    useEffect(() => {
        getUserRoles().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, userRoleName }) => ({ name: userRoleName, value: _id }))
            setUserRoles(t)
        })
    }, [])

    const _addUser = (data: any) => {
        console.log(data, 'data')
        if (data.firstName !== "" && data.lastName !== "" && data.password !== "" && data.userRoleName !== "" && data.userName !== "" && data.email !== "") {
            if (!data?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                console.log('hiiiiiiiiiiiiii')
                toast.warning("Invalid email")
            }
            else if (data?.password.length < 6) {
                toast.warning("Password must have more than 6 characters")
            }
            else {
                register(data).then((res: any) => {

                    console.log(res)
                    if (res.response?.data?.message === "Email has been taken") {
                        toast.warning("Email already exists")
                    }
                    else if (res?.statusText === "Created") {
                        toast.success("You registered successfuly")
                        // navigate('/login');
                        getUsers().then((res) => {
                            setUsers(res?.data)
                            setUser(initialUserType)
                            setShow(false)
                        })
                    }
                })
            }
        }
        else if (data.firstName === "" || data.lastName === "" || data.password === "" || data.userRoleName === "" || data.userName === "" || data.email === "") {
            toast.warning("All data are mandatory")
        }

    }

    const _modifyUser = (data: any) => {
        if (data.firstName !== "" && data.lastName !== "" && data.password !== "" && data.userRoleName !== "" && data.userName !== "" && data.email !== "") {
            modifyUsers(data._id, data).then((res) => {
                toast.success("Successfuly modified")
            })
        }
        else {
            toast.success("All are mandatory fields")
        }
    }

    return (<>
        <ToastContainer />
        <Modal show={show} onHide={() => setShow(false)} backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                {rowToEdit ? <h5>Edit User</h5> : <h5>Add User</h5>}
            </Modal.Header>
            <Modal.Body>
                <DefaultInput
                    type={'text'}
                    placeholder='Name'
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='lastName'
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='userName'
                    value={user.userName}
                    onChange={(e) => setUser({ ...user, userName: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='Email'
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                {!rowToEdit && <DefaultInput
                    type='text'
                    placeholder='password'
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />}
                <SelectInput
                    value={user.userRoleName}
                    options={!rowToEdit ? [{ name: "", value: "" }, { name: "admin", value: "admin" }, { name: "user", value: "user" }] : [{ name: "admin", value: "admin" }, { name: "user", value: "user" }]}
                    onChange={(e: any) => {
                        console.log(e.target.options[e.target.selectedIndex].innerHTML)
                        setUser({ ...user, userRoleName: e.target.options[e.target.selectedIndex].innerHTML })
                    }} />
            </Modal.Body>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={() => {
                    _modifyUser(user)
                    onClose();
                }}>
                    Save Changes

                </Button>}
                {!rowToEdit &&
                    <Button variant="secondary" onClick={() => {
                        _addUser(user)
                        // register(user)
                        // setUser(initialUserType)
                        // setShow(false)
                    }}>
                        add
                    </Button>}
                <Button variant="secondary" onClick={() => {
                    setUser(initialUserType)
                    setShow(false)
                }}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal></>
    )
}

const initialUserType: UserType = {
    firstName: "",
    userName: "",
    lastName: "",
    userRoleName: "",
    password: "",
    email: "",
}

export default AddUserDialog