import React from "react";
import styles from "./Svelte.module.css";
import Image from "next/image";

export default function Svelte() {
    return (
        <a href="https://gbs-svelte-block.netlify.app/" target="_blank">
            <div className={styles.banner}>
                <div style={{ display: "flex" }}>
                    <Image
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/747px-Svelte_Logo.svg.png"
                        }
                        alt="svelte logo"
                        width={40}
                        height={30}
                    />
                    Svelte
                </div>
                <div style={{ fontSize: "0.6rem" }}>Version of building block is now available. Give it a try.</div>
            </div>
        </a>
    );
}
