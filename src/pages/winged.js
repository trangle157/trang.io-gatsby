import React from "react"
import styles from "../styles/winged.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

export default ({data}) => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1>henlo</h1>
			</div>
		</Layout>
	)
}