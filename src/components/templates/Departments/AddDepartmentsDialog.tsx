import React, { useEffect, useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { addDepartments, getDepartments, modifyDepartments } from '../../../services/Departments/departmentServices';
import { DepartmentType } from '../../../types';
import { injectStyle } from "react-toastify/dist/inject-style";
import { DefaultInput } from '../../atoms';

interface Props {
    show?: boolean;
    setShow?: any;
    rowToEdit?: any;
    setRowToEdit?: any;
    onClose(): void;
    setDepartments: any;
}

function AddDepartmentsDialog({ show, setShow, rowToEdit, setRowToEdit, onClose, setDepartments }: Props) {
    const [department, setDepartment] = useState(initialDepartmentType);

    useEffect(() => {
        rowToEdit && setDepartment(rowToEdit)
    }, [rowToEdit])

    if (typeof window !== "undefined") {
        injectStyle();
    }


    const _addDepartment = (data: DepartmentType) => {
        console.log(data.departmentName.length)
        if (data.departmentName) {
            addDepartments(data).then(() => {
                getDepartments().then((res: any) => (setDepartments(res.data)))
                setDepartment(initialDepartmentType)
                setShow(false)
            })
        }
        else {
            //REFACTOR
            toast.warning("Required field")
        }
    }

    const _modifyDepartment = (id: string, data: DepartmentType) => {
        if (data.departmentName) {
            modifyDepartments(id, data).then(() => {
                getDepartments().then((res: any) => setDepartments(res.data))
                onClose();
                setDepartment(initialDepartmentType)
            })
        }
        else {
            toast.warning("Required field")
        }
    }
    return (
        <> <ToastContainer /><Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <h5>Add department</h5>
            </Modal.Header>
            <Modal.Body>
                <DefaultInput
                    type={'text'}
                    placeholder='Department name'
                    value={department.departmentName}
                    onChange={(e) => setDepartment({ ...department, departmentName: e.target.value })} />
            </Modal.Body>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={() => {
                    _modifyDepartment(department?._id, department)

                }}>
                    Save Changes

                </Button>}
                {!rowToEdit &&
                    <Button variant="secondary" onClick={() => {
                        _addDepartment(department)

                    }}>
                        add
                    </Button>}

                <Button variant="secondary" onClick={() => {
                    setDepartment(initialDepartmentType)
                    setRowToEdit(undefined)
                    setShow(false)
                }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default AddDepartmentsDialog

const initialDepartmentType: any = {
    departmentName: ""
}