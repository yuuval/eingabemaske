import styles from "./index.module.css"
import {useRouter} from "next/router";
import {Button} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function ThirdPage() {
    const router = useRouter()

    return (
        <div className={styles.posts}>
            <h1 style={{color: 'pink'}}>Produkt wurde ausgeliefert</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image width="320" height="239" src={"/checkmark-color-icon-successfully-tested-tick-mark-quality-assurance-approved-verification-and-validation-quality-badge-isolated-illustration-vector.jpg"}></Image>
            <div>
                <Link href={`/`}><Button>Start</Button></Link>
            </div>
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