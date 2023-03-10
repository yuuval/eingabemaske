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
            <h1 style={{color: 'pink'}}>Projekt wird ausgeliefert</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image width="320" height="239" src={"/411780.png"}></Image>
            <h1 style={{color: 'pink'}}>Akzeptiert vom Kunden?</h1>
            <div>
                <Link href={`/abgabe`}><Button>Ja</Button></Link>
                <Link href={`/second`}><Button>Nein</Button></Link>
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