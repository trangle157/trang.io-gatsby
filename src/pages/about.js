import React from "react"
import styles from "../styles/about.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "../components/image.js"

export default function About() {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.textStuff}>
					<h1>Hi, I'm glad we've met.</h1>
						<body>I am a graduate from the Immersive UX/UI program at UC Berkeley Extension and hold a Bachelors' in Mathematics and Statistics. I love talking about data, playing with colors and visual design, and learning about users' needs and perspectives.</body>
						<body>I want to keep learning and leveraging my knowledge of the world towards improving lives for those who are less fortunate. I want everyone, from all origins and backgrounds, to be able to have a sweet taste of life.</body>
						<body>My focus is on coding beautiful UIs. I am currently using React.js and Gatsby.js for coding web interfaces and I'm picking up D3.js for my dataviz project.</body>
						<body>Design-wise, I am comfortable with Figma, Sketch and XD.</body>
						<body>In my free time, you'd see me sketching down portraits, writing my comic book ideas, and doing yoga. If you have time, I'd love to walk you around my <a href="https://purplecrab.tumblr.com/"><u>tumblr.</u></a></body>
				</div>
				<Image style={{width: "80vw"}, {"align-self": "center"}} fileName="Trang-Instagram.jpg" alt="my instagram photo"/>
			</div>
		</Layout>
	)
}