import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'

interface Props {
    onClose?(): void;
    showDepartments: boolean;
    setShowDepartments: any;
    departments: Array<any>;
}

const ShowDepartments = ({ onClose, showDepartments, setShowDepartments, departments }: Props) => {
    useEffect(() => {
        console.log(departments)
    }, [departments])
    return (
        <Modal show={showDepartments} onHide={() => setShowDepartments(false)}>
            {departments && departments.map((department, key) => {
                return <h5 key={key}>{department.label}</h5>
            })}
        </Modal>
    )
}

export default ShowDepartments