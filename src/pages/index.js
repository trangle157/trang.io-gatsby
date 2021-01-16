import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styles from "../styles/index.module.css"
import Layout from "../components/layout"

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "cover-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletImage: file(relativePath: { eq: "cover-tablet.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "cover.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
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

  return (
    <Layout>
	    <div className = {styles.container}>
		    <Img 
		    	className = {styles.coverPhoto}
		      	fluid={sources}
		      	style={{"position": "relative"}}
		      	object-fit = "none"
		      	alt="A drawing of a girl"/>
		    <div className = {styles.topChunk}>
    			<h1 className={styles.introText}>
    			  	This is Trang.<br/>I bring art to heal the world.
    		  </h1>
  		    <div className={styles.socialMediaBar}>
  			    <img className={styles.icon} src="assets/imgs/icons/dribbble.svg"/>
    				<img className={styles.icon} src="assets/imgs/icons/linkedin.svg"/>
    				<img className={styles.icon} src="assets/imgs/icons/github.svg"/>
    				<img className={styles.icon} src="assets/imgs/icons/email.svg"/>
  		    </div>
          <div className={styles.pages}>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Resume</h2>
          </div>
			  </div>
	    </div>
    </Layout>
  )
}

