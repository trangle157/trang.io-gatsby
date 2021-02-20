import React from "react"
import styles from "../styles/about.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About() {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.textStuff}>
					<h1>Hi, I'm glad we've met.</h1>
						<p>I am here to create products that people love, be it through coding, researching, drawing, painting, or designing.</p>
						<p>I am a May 2021 graduate from the Immersive UX/UI program at UC Berkeley Extension and hold a Bachelors' in Mathematics and Statistics.</p>
						<p>I want to keep learning and leveraging my knowledge of the world towards improving lives for those who are less fortunate. I want everyone, from all origins and backgrounds, to be able to have a sweet taste of life.</p>
						<p>My journey started with art. I started drawing in kindergarten and writing my own manga in first grade. Drawing, painting and writing help extend my artistic horizon and help me find the beauty in words and pictures.</p>
						<p>When I got to college, however, I was super excited during this Calculus I class I thought I'd hate. The logic and concepts of Math were introduced to me in a new light, and then entered the Discrete Math class which changed my view of math forever. I decided then to major in something I find challenging but enlightening (yes, that's what math is to me) (fun fact: I really like Probability! Probability problems are so fun, full of surprises and both intuitive and counterintuitive).</p>
						<p>During this time, I still created artworks and wrote articles for my school newspaper and became the assistant editor of the Features section. I got to interview people on campus, from visiting cholars to professors to art students, about their life journeys and how they got to where they were. Whether it is art or writing, I realized that <b>my work means the most to me when it is focused on people, either to inspire them, listen to their voices, unite them or understand their perspectives</b>.</p>
						<p>Somehow, all my journeys connect together and bring me to UX Design.</p>
						<p>My dream is to design and code beautiful UIs, but my strength lies in UX research. Interviewing and talking to others became natural to me, and I enjoy visualizing datasets and leverage my statistics skills to have generate deep insights on users' sentiments and needs.</p>
						<p>I am currently using React.js and Gatsby.js for coding web interfaces and I'm picking up D3.js for my data visualization project.</p>
						<p>Design-wise, I am comfortable with Figma, Sketch and XD.</p>
						<p>In my free time, you'd see me sketching down portraits, writing my comic book ideas, and doing yoga. If you have time, I'd love to walk you around my <a href="https://purplecrab.tumblr.com/"><u>tumblr.</u></a></p>
				</div>
			</div>
		</Layout>
	)
}