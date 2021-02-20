import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

export default function Header() {
	return (
		<div className={styles.header}>
	        <div className={styles.initials}><Link to="/" className={styles.linkStyle}>TRL</Link></div>
	        <div className={styles.pages}>
	          <p><Link to="/about" className={styles.linkStyle}>About</Link></p>
	          <p><Link to="/projects" className={styles.linkStyle}>Projects</Link></p>
	          <p><a href="https://drive.google.com/file/d/1DZ2nI14a6NPrv-8pAxArlQJ_PPHnyl41/view?usp=sharing">Resume</a></p>
	          {/*<p><Link to="/resume" className={styles.linkStyle}>Resume</Link></p>*/}
	        </div>
	    </div>
    )
}