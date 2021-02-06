import React from "react"
import styles from "../styles/projects.module.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Image from "../components/image.js"

//what does hot reload mean
//what the difference between class and function and when to use which

export default ({data}) => {
	return (
		<Layout>
			<div className={styles.projects}>
				<h1><Link to="/dataviz" className={styles.linkStyle}>CPU/GPU Data Visualization</Link></h1>
			<Image 
		      	fileName="heatmap.png"
		      	alt="A heatmap or matrix of CPU and GPU brand names"/>
		  	<div className={styles.bottomGap}></div>
			<div className={styles.projects}>
				<h1><Link to="/winged" className={styles.linkStyle}>Drawing App for the Disabled</Link></h1>
			</div>
			<Image 
		      	fileName="test-screen.png"
		      	alt="A screen of a desktop app"/>
		    <div className={styles.bottomGap}></div>
			<div className={styles.projects}>
				<h1><a href="https://trangrei.github.io/final-project-artistic-rendering/index.html">Watercolor Simulation Drawing App</a></h1>
			</div>
			<Image
		      	fileName="banner.png"
		      	style={{"position": "relative"}}
		      	alt="A screen of a desktop app"/>
            </div>
		</Layout>
	)
}

