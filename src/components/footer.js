import React from "react"
import styles from "../styles/footer.module.css"

export default function Footer() {
	return (
		<footer>
			<hr/><body style={{"text-align" : "center"}}>&copy; Copyright {new Date().getFullYear()} Trang Le. Made with <a href="https://gatsbyjs.com/"><u>Gatsby.js</u></a>💜</body>
		</footer> 
	)
}