import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Container } from 'react-bootstrap';
import { getSchools, getDepartments, addProfessors, modifyProfessors, getProfessors } from '../../../services';
import { DefaultInput, SelectInput } from '../../atoms';
import { CustomMultiselect } from '../../atoms/CustomMultiselect';
import { ActionMeta, OnChangeValue } from 'react-select';
import { getOneSchool } from '../../../services/Schools/schoolsService';
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast, ToastContainer } from 'react-toastify';

interface Props {
    show: boolean;
    handleClose(): void;
    rowToEdit?: any;
    setProfessors?: any;
}

const AddProfessor = ({ show, handleClose, rowToEdit, setProfessors }: Props) => {

    const [editableRow, setEditableRow] = useState<any>(initialProfessorType);
    const [departments, setDepartments] = useState<any>([]);
    const [schools, setSchools] = useState<any>([]);
    const [schoolToRequest, setSchoolToRequest] = useState<any>();

    if (typeof window !== "undefined") {
        injectStyle();
    }

    useEffect(() => {
        getSchools().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, schoolName }) => ({ name: schoolName, value: _id }))
            setSchools(t)
        })
        getDepartments().then((res: any)=>{
            //@ts-ignore
            const t = res.data.map(({ _id, departmentName }) => ({ label: departmentName, value: _id }))
            setDepartments(t)
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


    const _addProfessor = (data: any) => {
        console.log(data, 'dataa')
        if (data.professorName !== "" && data.schoolName !== "" && data.departments.length > 0) {
            addProfessors(data).then((res: any) => {
                if (res.statusText === "Created") {
                    getProfessors().then((res: any) => {
                        setProfessors(res.data)
                        handleClose();
                    })
                }
            })
        }
        else {
            toast.warning("All fields are mandatory")
        }
    }

    const _modifyProfessor = (data: any) => {
        if (data.professorName !== "" && data.schoolName !== "" && data.departments.length > 0) {
            modifyProfessors(data._id, data).then((res: any) => {
                getProfessors().then((res: any) => {
                    setProfessors(res.data)
                    handleClose();
                })
            })
        }
        else {
            toast.warning("All fields are mandatory")
        }
    }

    const _selectNewOption = (userList: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => ({ ...currentUserDetails, departments: userList }))
    }


    const removeSelectedOption = (userListFiltered: OnChangeValue<any, any>) => {
        setEditableRow((currentUserDetails: any) => ({ ...currentUserDetails, departments: userListFiltered }))
    }

    return (
        <>
            <ToastContainer />
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
                    <SelectInput
                        options={schools}
                        value={editableRow.schoolId}
                        onChange={(e: any) => {
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
                                    return removeSelectedOption(userList);
                                case "clear":
                                    return removeSelectedOption([]);
                                default:
                                    return null;
                            }
                        }} />}
                </Container>
                <Modal.Footer>
                    {rowToEdit && <Button variant="primary" onClick={() => {
                        _modifyProfessor(editableRow)
                    }}>
                        edit
                    </Button>}
                    {!rowToEdit && <Button variant="primary" onClick={() => {
                        _addProfessor(editableRow)
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
        </>
    )
}

const initialProfessorType: any = {
    // _id: -1,
    professorName: '',
    schoolName: '',
    departments: []
}

export default AddProfessor