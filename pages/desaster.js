import styles from "./index.module.css"
import {useRouter} from "next/router";
import {Button} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function DesasterPage() {
    const router = useRouter()

    return (
        <div className={styles.posts}>
            <h1 style={{color: 'red'}}>Desaster:</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Link href={`/`}><Button>Zum Start</Button></Link>
            <br/>
            <br/>
            <div>
                <hr style={{color: "blue", height: "5px"}}/>
                <p>Kunde</p>
            </div>
            <br/>
            <br/>
            <div>
                <hr style={{color: "red", height: "5px"}}/>
                <p>Desaster</p>
            </div>
            <br/>
            <br/>
            <div>
                <hr style={{color: "pink", height: "5px"}}/>
                <p>System</p>
            </div>
            <br/>
            <br/>
            <div>
                <hr style={{color: "green", height: "5px"}}/>
                <p>Unternehmen</p>
            </div>
        </div>
    )
}