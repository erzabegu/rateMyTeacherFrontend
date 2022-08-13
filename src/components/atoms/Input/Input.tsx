import React from "react";
import { Form, FormControlProps } from "react-bootstrap";
import './style.scss'

interface Props extends FormControlProps { }

const DefaultInput = (props: Props) => {
    return <Form.Control className="defaultInput" {...props} style={{ margin: '4px' }} />
}

export default DefaultInput;