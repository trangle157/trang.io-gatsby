import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

const IndexPage = () => (
	<div style= {{maxWidth: `100%`}}> 
		<Image />
	</div>
	<Link to="/aboutme/">about me</Link>
)

export default IndexPage