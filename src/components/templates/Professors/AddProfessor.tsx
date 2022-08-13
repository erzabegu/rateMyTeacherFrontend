import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Container } from 'react-bootstrap';
import { getSchools, getDepartments, addProfessors, modifyProfessors } from '../../../services';
import { DefaultInput, SelectInput } from '../../atoms';
import { CustomMultiselect } from '../../atoms/CustomMultiselect';
import { ActionMeta, OnChangeValue } from 'react-select';
import { getOneSchool } from '../../../services/Schools/schoolsService';
import { current } from '@reduxjs/toolkit';

interface Props {
    show: boolean;
    handleClose(): void;
    handleShow(): void;
    rowToEdit?: any
}

const AddProfessor = ({ show, handleClose, handleShow, rowToEdit }: Props) => {

    const [editableRow, setEditableRow] = useState<any>(initialProfessorType);
    const [departments, setDepartments] = useState<any>([]);
    const [schools, setSchools] = useState<any>([]);
    const [schoolToRequest, setSchoolToRequest] = useState<any>();
    const [list, setList] = useState<Array<any>>([]);

    useEffect(() => {
        getSchools().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, schoolName }) => ({ name: schoolName, value: _id }))
            setSchools(t)
        })
    }, [])

    useEffect(() => {
        rowToEdit && setEditableRow(rowToEdit)
    }, [rowToEdit])

    useEffect(() => {
        schoolToRequest && getOneSchool(schoolToRequest).then((res: any) => {
            setDepartments(res.data.departments)
        })
    }, [schoolToRequest])


    const _selectNewOption = (userList: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => ({ ...currentUserDetails, departments: userList }))
    }

    const _removeSelectedOption = (userListFiltered: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => ({ ...currentUserDetails, departments: userListFiltered }))
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
                <SelectInput options={schools} value={editableRow.schoolId} onChange={(e: any) => {
                    setSchoolToRequest(e.target.value)
                    setEditableRow({ ...editableRow, schoolId: e.target.value, schoolName: e.target.options[e.target.selectedIndex].innerHTML })
                }} />
                {<CustomMultiselect
                    label='Departments'
                    options={departments}
                    value={editableRow.departments}
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
                    }} />}
            </Container>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={() => {
                    modifyProfessors(editableRow._id, editableRow)
                    handleClose()
                }}>
                    edit
                </Button>}
                {!rowToEdit && <Button variant="primary" onClick={() => {
                    addProfessors(editableRow)
                    handleClose()
                }}>
                    add
                </Button>}
                <Button variant="secondary" onClick={() => {
                    handleClose()
                }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const initialProfessorType: any = {
    // _id: -1,
    professorName: '',
    schoolName: '',
    departments: []
}

export default AddProfessor