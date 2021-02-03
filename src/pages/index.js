import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styles from "../styles/index.module.css"
import "../styles/global.css"
import Layout from "../components/layout"
import Image from "../components/image.js"

//why is it export default data here
//ah nvm maybe sth to do with the API
export default ({ data }) => {
  return (
    <Layout>
	    <div className = {styles.container}>
		    <Image 
		      	fileName="cover.png"
            style={{width : "100vw"}}
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
        </div>
	    </div>
    </Layout>
  )
}

