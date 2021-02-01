import React from "react"
import styles from "../styles/global.css"
import Header from "./header.js"

export default function Layout({children}) {
	return (
		<div style={{margin: `0 0`, padding: `0 0`, height: `100vh`}}>
		    <Header/>
			{children}
		</div>
	)
}