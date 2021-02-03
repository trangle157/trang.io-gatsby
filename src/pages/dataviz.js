import React from "react"
import styles from "../styles/dataviz.module.css"
import Layout from "../components/layout"
import Image from "../components/image.js"

export default ({data}) => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1>CPU/GPU Data Visualization</h1>
				<body>Building a PC is all fun and games until you realize there is bottleneck 😎</body>
				<h1>Problem statement</h1>
				<body>Many CPU/GPU combination but better CPU with the same GPU does not mean better performance</body>
				<body>Cite paper by Harvard. Improve performance, but by how much?</body>
				<body>Better for price consideration</body>
				<body>Cite tomshardware measurement</body>
				<h1>Potential audience</h1>
				<body>Potential computer buyers/computer builders who want to make choices on which CPU and GPU suits their needs</body>
				<h1>Approach</h1>
				<body>How to show combination of CPU/GPU and the ratings in exploratory phase, after that the users can dynamically choose the pair of CPU/GPU they are interested in</body>
				<h2>Data</h2>
				<body>UserBenchmark (a website to measure PC performance</body>
				<body>780 observations</body>
				<h2>Visualization choices</h2>
				<h3>Scatterplot</h3>
				<body>Technologies: Python (Pandas, Seaborn, Selenium)</body>
				<div className={styles.scatterplot}>
					<Image 
				      	fileName="scatterplot.png"
				      	alt="A screen of a desktop app"/>
					<body>Good for gaming but not sure good for desktop</body>
				</div>
				<h3>Treemap</h3>
				<body>Tableau</body>
				<div className={styles.treemap}>
					<Image 
				      	fileName="treemap.png"
				      	alt="A screen of a desktop app"/>
					<body>Point is to see the different combination</body>
					<body>Each big cube is the same GPU against different CPU</body>
					<body>To do: add annotations so that the same GPU name does not get repeated</body>
				</div>
				<h3>Heatmap</h3>
				<body>Python</body>
				<div className={styles.heatmap}>
					<Image
				      	fileName="heatmap.png"
				      	alt="A screen of a desktop app"/>
					<body>Not always the best combination: CPU A and GPU B</body>
				</div>
				<div className={styles.chordDiagram}>
				</div>
			</div>
		</Layout>
	)
}