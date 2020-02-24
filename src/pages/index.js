import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"

const IndexPage = () => (
	<Layout>
		<div style= {{quality: `100`}}> 
			<Image />
		</div>
		<Link to="/aboutme/">about me</Link>
	</Layout>
)

export default IndexPage