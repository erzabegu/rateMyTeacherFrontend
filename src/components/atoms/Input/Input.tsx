import React from "react";
import { Form, FormControlProps } from "react-bootstrap";
import styles from './index.module.scss'

interface Props extends FormControlProps { }

const DefaultInput = (props: Props) => {
    return <Form.Control className={styles.defaultInput} {...props}  />
}

export default DefaultInput;