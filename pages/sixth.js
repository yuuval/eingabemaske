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
            <h1 style={{color: 'pink'}}>Projekt wird für die Lieferung vorbereitet</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image width="320" height="239" src={"/702455.png"}></Image>
            <h1 style={{color: 'pink'}}>Probleme aufgetaucht bei der Vorbereitung?</h1>
            <div>
                <Link href={`/second`}><Button>Ja</Button></Link>
                <Link href={`/seventh`}><Button>Nein</Button></Link>
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