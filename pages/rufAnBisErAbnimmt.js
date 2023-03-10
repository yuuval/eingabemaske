import styles from "./index.module.css"
import {useRouter} from "next/router";
import {Button} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function RufAnBisErAbnimmtPage() {
    const router = useRouter()

    return (
        <div className={styles.posts}>
            <h1 style={{color: 'green'}}>Ruf an bis er abnimmt (7 Tage Zeit):</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image width="320" height="239" src={"/email-icon--endless-icons-20.png"}></Image>
            <h1 style={{color: 'green'}}>Hat Kunde angenommen?</h1>
            <div>
                <Link href={`/third`}><Button>Ja</Button></Link>
                <Link href={`/desaster`}><Button>Nein</Button></Link>
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