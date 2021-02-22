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
				<Link to="/dataviz" className={styles.linkStyle}><h1>CPU/GPU Data Visualization</h1></Link>
			<Image 
		      	fileName="heatmap.png"
		      	alt="A heatmap or matrix of CPU and GPU brand names"/>
		  	<div className={styles.bottomGap}></div>
			<div className={styles.projects}>
				<Link to="/winged" className={styles.linkStyle}><h1>Drawing App for the Disabled</h1></Link>
			</div>
			<Image 
		      	fileName="test-screen.png"
		      	alt="A screen of a desktop app"/>
		    <div className={styles.bottomGap}></div>
			<div className={styles.projects}>
				<Link to="/watercolor" className={styles.linkStyle}><h1>Watercolor Simulation Drawing App</h1></Link>
			</div>
			<Image
		      	fileName="banner.png"
		      	style={{"position": "relative"}}
		      	alt="A screen of a desktop app"/>
            </div>
		</Layout>
	)
}

