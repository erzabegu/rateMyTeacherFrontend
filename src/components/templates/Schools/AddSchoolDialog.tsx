import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { ActionMeta, OnChangeValue } from 'react-select';
import { getDepartments } from '../../../services';
import { addSchool, getSchools, modifySchool } from '../../../services/Schools'
import { SchoolType } from '../../../types';
import { DefaultInput } from '../../atoms';
import { CustomMultiselect } from '../../atoms/CustomMultiselect';



interface Props {
    show?: boolean;
    setShow?: any;
    rowToEdit?: any;
    setRowToEdit?: any;
    onClose(): void;
    setSchools: any;
}

const AddSchoolDialog = ({ show, setShow, rowToEdit, setRowToEdit, onClose, setSchools }: Props) => {
    const [school, setSchool] = useState<SchoolType>(initialSchoolType);
    const [departments, setDepartments] = useState<any>([]);

    useEffect(() => {
        rowToEdit && setSchool(rowToEdit)
    }, [rowToEdit])


    useEffect(() => {
        getDepartments().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, departmentName }) => ({ label: departmentName, value: _id }))
            setDepartments(t)
        })
    }, [])


    const selectNewOption = (userList: OnChangeValue<any, any>) => {
        setSchool(currentUserDetails => {
            return { ...currentUserDetails, departments: [...userList] }
        })
    }

    const removeSelectedOption = (userListFiltered: OnChangeValue<any, any>) => {
        setSchool(currentUserDetails => ({ ...currentUserDetails, departments: userListFiltered }))
    }


    const _addSchool = (school: SchoolType) => {
        if (school.schoolName !== '' && school.schoolLocation !== "" && school.schoolZip !== "") {
            console.log('erza')
            addSchool(school).then(() => {
                getSchools().then((res: any) => setSchools(res.data))
            })
        }
        else {


        }
    }

    const _modifySchool = (school: SchoolType, schoolID: any) => {
        schoolID && modifySchool(school, schoolID).then(() => {
            getSchools().then((res: any) => setSchools(res.data))
        })
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                {rowToEdit ? <h5>Edit school</h5> : <h5>Add school</h5>}
            </Modal.Header>
            <Modal.Body>
                <DefaultInput
                    type={'text'}
                    placeholder='School Name'
                    value={school.schoolName}
                    onChange={(e) => setSchool({ ...school, schoolName: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='School Zip'
                    value={school.schoolZip}
                    onChange={(e) => setSchool({ ...school, schoolZip: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='School Location'
                    value={school.schoolLocation}
                    onChange={(e) => setSchool({ ...school, schoolLocation: e.target.value })} />
                <CustomMultiselect
                    label='Departments'
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
                    }} />

            </Modal.Body>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={() => {
                    _modifySchool(school, school._id)
                    onClose();
                }}>
                    Save Changes

                </Button>}
                {!rowToEdit &&
                    <Button variant="secondary" onClick={() => {
                        _addSchool(school)
                        setSchool(initialSchoolType)
                        setShow(false)
                    }}>
                        add
                    </Button>}

            </Modal.Footer>
        </Modal>

    )
}

const initialSchoolType: SchoolType = {
    schoolName: '',
    schoolZip: '',
    schoolLocation: '',
    departments: []
}

export default AddSchoolDialog;
