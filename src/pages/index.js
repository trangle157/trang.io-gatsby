import React from 'react';
import styles from "../styles/index.module.css";
import background from "../../assets/imgs/girlinpj.png";
import "../styles/custom.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<img src={background}/>
			<h1>Hi, I'm Trang</h1>
		</div>
	)
}