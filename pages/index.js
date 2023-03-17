import styles from "./index.module.css"
import {useRouter} from "next/router";
import {Button} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function IndexPage() {
    const router = useRouter()

    return (
        <div className={styles.posts}>
            <h1 style={{color: 'blue'}}>Kunde schickt Anfrage Per:</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image width="320" height="239" src={"/email-icon--endless-icons-20.png"}></Image>
            <h1 style={{color: 'blue'}}>Wurde das Mail erfolgreich eingereicht?</h1>
            <div>
                <Link href={`/first`}><Button>Ja</Button></Link>
                <Link href={`/desaster`}><Button>Nein</Button></Link>
            </div>
            <h1>Ben</h1>
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
