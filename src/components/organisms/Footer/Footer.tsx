import React from 'react'
import {
    Book,
    EnvelopeFill,
    GeoAltFill,
    TelephoneFill
} from "react-bootstrap-icons";
import styles from './index.module.scss'
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const today = new Date();
    return <>
        <div className={styles.wrapper}>
            <div style={{minWidth: '300px'}}><h4><Book color={'#FF5420'} onClick={() => navigate('/')}/> Rate teacher
            </h4>
                <hr/>
                <p>Rate teacher is the best <br/>platform to improve <br/>the quality in education</p>
            </div>
            <div style={{minWidth: '300px'}}>
                <h4>Departments</h4>
                <hr/>
                <ul className={styles.ul}>
                    <span className={styles.span}>Math</span>
                    <span className={styles.span}>Physics</span>
                    <span className={styles.span}>Chemistry</span>
                    <span className={styles.span}>Chemistry</span>
                </ul>
            </div>
            <div style={{minWidth: '300px'}}><h4>Address</h4>
                <hr/>
                <pre><GeoAltFill color={'#FF5420'}/> University “Isa Boletini”- Mitrovica</pre>
                <pre><TelephoneFill color={'#FF5420'}/> +383 28 515 516</pre>
                <pre><EnvelopeFill color={'#FF5420'}/>  info@umib.net</pre>
            </div>
        </div>
        <div className='d-flex align-items-center py-1 justify-content-center mt-5'>
            <span>©{today.getFullYear()} All Rights Reserved</span>
        </div>
    </>
}

export default Footer