import React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import styles from './index.module.scss'


interface Props extends ButtonProps {
    title: string;
}

const MyButton = ({ title, ...props }: Props) => {
    return <Button className={styles.custom} {...props}>{title}</Button>
}

export default MyButton