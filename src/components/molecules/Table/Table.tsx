import React, { useState } from 'react'
import { FileEarmark, PencilSquare } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import { useTable } from 'react-table'


interface Props {
    columns: Array<any>,
    data: Array<any>,
    setRowToEdit?: any,
    includeEdit?: boolean,
    show?: boolean;
    setShow?: any;
    setShowDetails?: any;
    showRowToEdit(row?: any): void;
    showSchoolDepartments?(row?: any): void;
}

const CustomTable = ({ columns, data, setRowToEdit, includeEdit, setShow, setShowDetails, showRowToEdit, showSchoolDepartments }: Props) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <Table {...getTableProps()} striped bordered hover>
            <thead>
                {headerGroups.map((headerGroup: any, key: number) => (
                    <>
                        <tr key={key} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any, key: any) => (
                                <th key={key} {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            {/* {includeEdit && <th>
                                edit
                            </th>}
                            <th>Details</th> */}
                            {(showSchoolDepartments) && <th>
                                departments
                            </th>}
                            {(showRowToEdit) && <th>
                                edit
                            </th>}
                        </tr>
                    </>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any, key: number) => {
                    prepareRow(row)
                    return (
                        <tr key={key} {...row.getRowProps()}>
                            {row.cells.map((cell: any, key: number) => {
                                return <td key={key} {...cell.getCellProps()} >{cell.render('Cell')}</td>
                            })}
                            {(showSchoolDepartments) && <td onClick={() => {
                                showSchoolDepartments(row.original)
                            }}>
                                <FileEarmark />
                            </td>}
                            {(showRowToEdit) && <td onClick={() => {
                                showRowToEdit(row.original)
                            }}>
                                <PencilSquare />
                            </td>}
                            {/* <td onClick={() => {
                                    setRowToEdit(row.original)
                                    setShow(true)
                                }}>Edit </td>
                                {<td onClick={() => {
                                    setShowDetails(true)
                                    setRowToEdit(row.original)
                                }}>
                                    details
                                </td>} */}
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

export default CustomTable