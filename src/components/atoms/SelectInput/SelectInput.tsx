import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    options: Array<any>;
    onChange?(e: any): void;
    value?: any;
}

const SelectInput = ({ options, onChange, value }: Props) => {
    return (
        <Form.Select style={{ width: '200px' }} onChange={onChange} value={value}>
            {options.map((option, index) => <option value={option.value} key={index}>{option.name}</option>)}
        </Form.Select>
    )
}

export default SelectInput