import React from "react"
import styles from "../styles/winged.module.css"
import Layout from "../components/layout"
import Image from "../components/image.js"

export default ({data}) => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1>Project Summary</h1>
				<ul>Solo project</ul>
				<h1>Problem statement</h1>
				<body>Disabilities have long brought about bad effects to adults emotionally and physically</body>
				<body>There are a lot of disabled artists out there who want to be able to draw. However, most of them use other parts of their bodies (such as their mouths and legs), which will greatly cause pain and discomfort.</body>
				<body>Based on the concept of art therapy, art is a means for users to feel the freedom to express themselves and create something new. It is especially helpful when users are bound by illnesses and feel less in control of their health. </body>
				<body>“Art provides unlimited possibilities for personal, academic, and professional success.” - Christopher and Diana Reeve Foundation</body>
				<Image fileName="disabledartists.png" style={{"width" : "100%"}} alt="Image of disabled artists in the news"/>
				<div className='tinyText'>Disabled Artists in the News</div>
				<div className='tinyText'>Source: <a href="https://mfpausa.com/"/>Mouth and Foot Painting Artists</div>
				<h1>Audience</h1>
				<body>Those with arm or hand disabilities</body>
				<h1>Challenges and How Might We (HMWs)</h1>
				<ol>
					<li>
						HMW help the users navigate the interface with minimal discomfort and muscle pain?
					</li>
					<li>
						HMW create the user interface (UI) as minimalistic as possible?
					</li>
					<li>
						HMW make the options and the icons easier to click?
					</li>
					<li>
						HMW move the canvas to adjust to the users’ hand placement?
					</li>
					<li>
						HMW create independence for the users when they use our app?
					</li>
					<li>
						HMW help users boost their creativity, and more importantly, their self-esteem?
					</li>
				</ol>
				<body>
					There has been <a href="http://chris-creed.com/papers/creed-assets14-tools%20-for-disabled-artists.pdf">research</a> on a software that utilizes the leap motion controller to enable users to draw using hand gestures in midair (researched on by Dr. Chris Creed at University of Birmingham), but the interface in the app was too complicated for users to navigate.
				</body>
				<body>
					In this case study, I will propose a solution for HMWs 1-5, and leave 6) and 7) for further research and design iterations
				</body>
				<Image fileName="leapmotionsdk.png"
					style={{"position" : "relative"}}
					object-fit = "none"
					alt = "The leap motion controller visualization"
					/>
				<div class="tinyText">The leap motion controller</div>
				<div class="tinyText">Source: https://www.ultraleap.com/tracking/</div>
				<h1>Approach</h1>
				<ul>
					<li>Minimalist interface</li>
					<li>Leap motion controller</li>
					<li>Optimized wheelchair setup of the leap motion controller for each user</li>
					<li>Detect users’ hand parts to customize to physiological structures</li>
					<li>Voice command to minimize hand gestures and thus pain</li>
				</ul>
				<h1>Design Process</h1>
				<h2 style={{"text-align" : "center"}}>User Journey</h2>
				<Image fileName="user-journey.png" style={{ width: '100%' }} alt="" />
				<body>Explain the user journey</body>
				<h2 style={{"text-align" : "center"}}>Wireflow</h2>
				<body>Feedback loop thingy explained</body>
				<Image fileName="wireflow.png"
					alt = "User journey for the app"
				/>
				<h2 style={{"text-align" : "center"}}>Arising issues</h2>
				<Image fileName="handphysiology.png"
					style={{"position" : "relative"}}
					object-fit = "none"
					alt = "User journey for the app"
				/>
				<Image fileName="interactivity.png" style={{ width: '100%' }} alt="Design iteration" />
				<h1>Solutions</h1>
				<h2>Onboarding users by recommending the best device setup for them based on </h2>
				<Image fileName="detecthand.png" alt="Detect hand physiology"/>
				<Image fileName="button-placement.png" style={{width: '100%'}} alt="Button placement"/>
				<Image fileName="wheelchair.png" style={{width: '100%'}} alt="wheelchair setup"/>
				<h1>Summary - Takeaway</h1>
				<body>Making the app suitable for different hand structures is the main challenge but is the most interesting part about this project to maximize inclusivity</body>
				<body>Hand physiological structure</body>
				<body>Conduct more hand disabilities research</body>
				<body>Fit with most hand structures</body>
			</div>
		</Layout>
	)
}