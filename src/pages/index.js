import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
	<img src="imgs/mangagirl_in_green_wind.jpg" class="image" alt="girl in green wind drawing"/>
		<div class="fixed-top">
			<ul class="nav flex-column">
					<li class="nav-item">
						<a class="nav-link" href="about.html"><div class="head">about me</div></a>
					</li>
					<li class="nav-item">
							<a class="nav-link" href="projects.html"><div class="head">projects</div></a>
					</li>
					<li class="nav-item">
							<a class="nav-link" href="arts.html"><div class="head">arts</div></a>
					</li>
					<li class="nav-item">
							<a class="nav-link" href="writing.html"><div class="head">writing</div></a>
					</li>
			</ul>
		</div>
)

export default IndexPage