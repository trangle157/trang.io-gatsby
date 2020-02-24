import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Image = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: {eq: ../../imgs/mangagirl_in_green_wind.jpg}) {
				childImageSharp {
					fluid(maxWidth: 100%) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
		`)
	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image