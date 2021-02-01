import React from "react"
import styles from "../styles/projects.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"

//what does hot reload mean
export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "AMD.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletImage: file(relativePath: { eq: "AMD.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "AMD.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileImageWinged: file(relativePath: { eq: "test-screen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletImageWinged: file(relativePath: { eq: "test-screen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImageWinged: file(
      relativePath: { eq: "test-screen.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileImageArt: file(relativePath: { eq: "web-banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletImageArt: file(relativePath: { eq: "web-banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImageArt: file(relativePath: { eq: "web-banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
//what the difference between class and function and when to use which

export default ({data}) => {
	const sources = [
	    {
	      ...data.mobileImage.childImageSharp.fluid,
	      media: `(max-width: 600px)`
	    },
	    {
	      ...data.tabletImage.childImageSharp.fluid,
	      media: `(max-width: 991px)`
	    },
	    {
	      ...data.desktopImage.childImageSharp.fluid,
	      media: `(min-width: 992px)`,
    	},
  	]
  	
  	const sourcesWinged = [
  		{
	      ...data.mobileImageWinged.childImageSharp.fluid,
	      media: `(max-width: 600px)`
	    },
	    {
	      ...data.tabletImageWinged.childImageSharp.fluid,
	      media: `(max-width: 991px)`
	    },
	    {
	      ...data.desktopImageWinged.childImageSharp.fluid,
	      media: `(min-width: 992px)`,
    	},
  	]

	const sourcesArt = [
  		{
	      ...data.mobileImageArt.childImageSharp.fluid,
	      media: `(max-width: 600px)`
	    },
	    {
	      ...data.tabletImageArt.childImageSharp.fluid,
	      media: `(max-width: 991px)`
	    },
	    {
	      ...data.desktopImageArt.childImageSharp.fluid,
	      media: `(min-width: 992px)`,
    	},
  	]

	return (
		<Layout>
			<div className={styles.projects}>
				<h1><Link to="/dataviz" className={styles.linkStyle}>CPU/GPU Data Visualization</Link></h1>
			</div>
			<Img 
		      	fluid={sources}
		      	style={{"position": "relative"}}
		      	object-fit = "none"
		      	alt="A heatmap or matrix of CPU and GPU brand names"/>
		      				<div className={styles.bottomGap}></div>
			<div className={styles.projects}>
				<h1>Drawing App for the Disabled</h1>
			</div>
			<Img 
		      	fluid={sourcesWinged}
		      	style={{"position": "relative"}}
		      	object-fit = "none"
		      	alt="A screen of a desktop app"/>
		      				<div className={styles.bottomGap}></div>
			<div className={styles.projects}>
				<h1>Watercolor Simulation Drawing App in GLSL and Processing</h1>
			</div>
			<Img 
		      	fluid={sourcesArt}
		      	style={{"position": "relative"}}
		      	object-fit = "none"
		      	alt="A screen of a desktop app"/>
		</Layout>
	)
}

