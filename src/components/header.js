import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

export default function Header() {
	return (
		<div className={styles.header}>
	        <div className={styles.initials}><Link to="/" className={styles.linkStyle}>TRL</Link></div>
	        <div className={styles.pages}>
	          <h2><Link to="/about" className={styles.linkStyle}>About</Link></h2>
	          <h2><Link to="/projects" className={styles.linkStyle}>Projects</Link></h2>
	          <h2><Link to="/resume" className={styles.linkStyle}>Resume</Link></h2>
	        </div>
	    </div>
    )
}