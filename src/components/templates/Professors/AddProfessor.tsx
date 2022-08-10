import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Container } from 'react-bootstrap';
import { getSchools, getDepartments } from '../../../services';
import { DefaultInput } from '../../atoms';
import { CustomMultiselect } from '../../atoms/CustomMultiselect';
import { ActionMeta, OnChangeValue } from 'react-select';

interface Props {
    show: boolean;
    handleClose(): void;
    handleShow(): void;
    rowToEdit?: any
}

const AddProfessor = ({ show, handleClose, handleShow, rowToEdit }: Props) => {

    const [editableRow, setEditableRow] = useState<any>(initialProfessorType);
    const [departments, setDepartments] = useState<any>();
    const [schools, setSchools] = useState<any>();

    useEffect(() => {
        // getSchools().then((res: any) => { console.log(res.data) })
        getDepartments().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, departmentName }) => ({ label: departmentName, value: _id }))
            setDepartments(t)
        })
        getSchools().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, schoolName }) => ({ label: schoolName, value: _id }))
            setSchools(t)
        })
    }, [])

    useEffect(() => {
        rowToEdit && setEditableRow(rowToEdit)
    }, [rowToEdit])

    const selectNewOption = (userList: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => {
            return { ...currentUserDetails, departments: [...userList] }
        })
    }
    const _selectNewOption = (userList: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => {
            return { ...currentUserDetails, schools: [...userList] }
        })
    }

    const _removeSelectedOption = (userListFiltered: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => ({ ...currentUserDetails, schools: userListFiltered }))
    }


    const removeSelectedOption = (userListFiltered: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => ({ ...currentUserDetails, departments: userListFiltered }))
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Container>
                <DefaultInput
                    type={'text'}
                    placeholder='Professor Name'
                    value={editableRow.professorName}
                    onChange={(e: any) => setEditableRow({ ...editableRow, professorName: e.target.value })} />
                <DefaultInput
                    type={'text'}
                    placeholder='School Name'
                    value={editableRow.schoolName}
                    onChange={(e: any) => setEditableRow({ ...editableRow, schoolName: e.target.value })} />
                <CustomMultiselect
                    label='Schools'
                    options={schools}
                    value={editableRow.schools}
                    name={''}
                    onChange={(userList: OnChangeValue<any, any>, actionMeta: ActionMeta<any>) => {
                        switch (actionMeta.action) {
                            case "select-option":
                                return _selectNewOption(userList);
                            case "remove-value":
                                return _removeSelectedOption(userList);
                            case "clear":
                                return removeSelectedOption([]);
                            default:
                                return null;
                        }
                    }} />
                <CustomMultiselect
                    label='Departments'
                    options={departments}
                    value={editableRow.departments}
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
                    }} />
            </Container>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={handleClose}>
                    edit
                </Button>}
                {!rowToEdit && <Button variant="primary" onClick={handleClose}>
                    add
                </Button>}
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const initialProfessorType: any = {
    _id: -1,
    professorName: '',
    schools: [],
    departments: []
}

export default AddProfessor