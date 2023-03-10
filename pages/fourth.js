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
            <h1 style={{color: 'green'}}>Herstellung des Produktes</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image width="320" height="239" src={"/1433114.png"}></Image>
            <h1 style={{color: 'green'}}>Hat es beim Projekt Schwierigkeiten / Fragen beim herstellen?</h1>
            <div>
                <Link href={`/second`}><Button>Ja</Button></Link>
                <Link href={`/fifth`}><Button>Nein</Button></Link>
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