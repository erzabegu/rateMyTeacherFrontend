import React, { useEffect, useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap';
import { addDepartments, getDepartments, modifyDepartments } from '../../../services/Departments/departmentServices';
import { DepartmentType } from '../../../types';
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


    const _addDepartment = (data: DepartmentType) => {
        console.log(data.departmentName.length)
        if (data.departmentName.length !== 0) {
            addDepartments(data).then(() => {
                getDepartments().then((res: any) => (setDepartments(res.data)))
            })
        }
        else {
            //REFACTOR
            console.log('all fields are mandatory')
        }
    }

    const _modifyDepartment = (id: string, data: DepartmentType) => {
        modifyDepartments(id, data).then(() => {
            getDepartments().then((res: any) => setDepartments(res.data))
        })
    }
    return (
        <><Modal show={show} onHide={() => setShow(false)}>
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
                    onClose();
                    setDepartment(initialDepartmentType)
                }}>
                    Save Changes

                </Button>}
                {!rowToEdit &&
                    <Button variant="secondary" onClick={() => {
                        _addDepartment(department)
                        setDepartment(initialDepartmentType)
                        setShow(false)
                    }}>
                        add
                    </Button>}
                <Button variant="primary" onClick={() => {
                    onClose();
                    setDepartment(initialDepartmentType)
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