import React from "react"
import styles from "../styles/dataviz.module.css"
import Layout from "../components/layout"
import Image from "../components/image.js"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import scatterplot from '../../public/assets/imgs/scatterplot.gif'
import treemap from '../../public/assets/imgs/treemap.gif'

export default ({data}) => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1>CPU/GPU Data Visualization (ongoing project)</h1>
					<body><a href="https://github.com/trangrei/DataViz-Proj"><u>Project Github link</u></a></body>
					<body>Building a PC is all fun and games until we realize there is bottleneck 😎</body>
					<h2>Solo project</h2>
					<h2>Roles performed:</h2>
						<ul>
							<li>Frontend engineer</li>
							<li>Desperate PC builder</li>
						</ul>
					<h2>Tools used</h2>
						<ul>
							<li>Python (Selenium, Pandas, Seaborn)</li>
							<li>Tableau</li>
							<li>Pen and paper</li>
							<li>(Incoming) D3.js</li>
						</ul>
				<h1>Problem statement</h1>
					<body>When we buy or build a PC, there are many CPU-GPU combinations. We can extend our budget and buy the best CPUs and GPUs, but <b>the most expensive CPU-GPU pair does not necessarily mean better performance.</b></body>
					<body><a href="https://www.tomshardware.com/reviews/game-performance-bottleneck-cpu-gpu,5503-11.html"><u>Tom's hardware</u></a> has performed a few tests of different types of CPU pairing with one type of GPU (the test varies by the GPU type we pair the CPUs with). "Balance is the goal here," written Paul Alcorn, the Deputy Managing Editor for Tom's Hardware U.S. Different tasks and games will also result in different performances, making it harder for users to make choices that fit their budget and use goals.</body>
					<body><i><b>Fun fact:</b> each fall, Intel launches a new processor model in the “TickTock” mechanism: a shrinking in processor’s size or introducing a new processor. That’s a lot information to consume if we don’t keep up with releases!</i>
					</body>
					<body>Here comes data visualization. Seeing something in picture is one of the fastest ways to absorb information and make decisions. As someone who recently built her PC, I was excited to learn more about why and how computer parts work together, and how I can leverage this immense amount of data into digestible visualizations for anyone starting out in their PC career.</body>
					<body>This project, therefore, aims to <b>make it easier for a PC novice to decide which CPU-GPU pairings are suitable for their needs, and how much of an upgrade is necessary and worthwhile for their budget.</b></body>
					<body>Dr. Yu Wang at Harvard University also did <a href="https://yuemmawang.github.io/publications/wang-taco2019.pdf"><u>research</u></a> on how to predict computers' future performances with future parts based on the parts already manufactured and workloads already measured. My project, however, is only to visualize the CPU-GPU pairings and the gaming performance scores and let the users see the extensive list of choices.</body>
				<h1>Potential audience</h1>
					<body>My audience are potential PC buyers/PC builders who want to make choices on CPUs and GPUs that best suit their needs.</body>
					<body>The <b>audience</b> is assumed to be someone <b>who has little to no experience with computers</b> and would rather not having to read hours of technical articles back and forth to compare between computer parts.</body>
				<h1>Approach</h1>
					<body>My goal at first is to find a public dataset with users' computer performances measured by workloads and computer resources (RAM, CPU) utilized. However, most of the datasets are from public computers or supercomputers used for heavy task loads.</body>
					<body>I want to find <b>datasets that look at users' individual use, as each user's computer parts and workloads are different from another's</b>. Having case-by-case data in visualization form will give potential users more information to choose from and factors to consider. Users need to consider the type of workload for their PCs and also budget factor while choosing computer parts.</body>
					<h2>Data</h2>
						<body>I used data from <a href="https://userbenchmark.com"><u>UserBenchmark.com</u></a>, a website that measures PCs' performances using their site's testing tool (I was inspired by Dr. Wang's research which used data from <a href="https://geekbench.com"><u>Geekbench.com</u></a>.) An example of such measurement is as follows:</body>
				<Image 
			      	fileName="pc-measure.png"
			      	alt="One user's PC measurements"
			    />
			    <div class="tinyText">One example of user's performance result, dynamically added to the list of scores measured on userbenchmark.com</div>
			    	<body>The <a href="https://docs.google.com/spreadsheets/d/1iFdH1usGYRanLGSk-mYMK5MuES02Z8Ui35Qt8xHs6SM/edit?usp=sharing"><u>dataset</u></a> have 1024 observations of users from all around the world, 253 CPU brands, 178 GPU brands, and distinct user IDs.</body>
			    	<body>The three measurement categories are gaming, desktop, and work station rating. Gaming, well, is gaming. Desktop is for a normal usage of streaming music, editing documents, etc..., and Work Station is heavy workload with video editing, design softwares, etc...</body>
				<h2>Metrics</h2>
				<body>To narrow down a 1024-row dataset of hundreds of pairings between CPUs and GPUs, we’d focus on the AMD Ryzen CPUs and Nvidia’s GPUs. The reason I chose the Ryzen 5 is because it is a decent CPU with good price to quality ratio.</body>
				<body>The baseline comparison for PC performance is a combination of the NVidia RTX 2060S and the Intel Core i5-9600K. This combination will receive a game rating of approximately 100%. Depending on other PC parts, the scores will vary. </body>
				<Image 
			      	fileName="gaming-base-score.png"
			      	alt="A screenshot of how the PC scores are calculated"/>
				<h2>Visualization choices</h2>
				<body>The purpose of the visualization is for users to be able to see different CPU-GPU combinations, thus an interactive visualization would be fitting. A comprehensive plot of different CPU-GPU pairings is also a good strategy.</body>
				<h3>Scatterplot</h3>
				<body>Ah, here comes the scatterplot, the first plot I ever learned to make in my Stats class. However, we don't want to just have a plot of <code>y = ax + b</code>, but a plot with two qualitative, categorical variables (CPU names and GPU names) and two quantitative, numeric variables (desktop rating and game rating). We only care about gaming rating as mentioned in the metrics section, but well, the more variables, the more fun we have.</body>
				<Image 
			      	fileName="scatterplot.jpg"
			      	alt="A screen of a desktop app"
			    />
			    <div class="tinyText">Scatterplot of PC's desktop and gaming rating plotting against CPU and GPU combinations (created in Tableau)</div>
				<body>An insight we can see here is that there is a gap between a PC's desktop rating and gaming rating, and the more advanced the GPU, the smaller the gap.</body>
				<body>This plot also shows that a newer, higher-priced GPU does not mean a good gaming performance. For example, the Nvidia GTX 1650 and Nvidia GTX 1650 (Super) shows to have better gaming rating than the Nvida GTX 1660.</body>
				<body>Let's take a look at a slightly similar case. We have two GPU, the GTX 1070 and the GTX 1060, measured against the same set of CPUs. Different GPUs show to have varied performance depending on the CPUs they are paired with.</body>
				<Image 
			      	fileName="gtx-1060.png"
			      	alt="measurement"/>
			    <div class="tinyText">Tom's Hardware speed measurements of GTX 1060 against different CPUs during Hitman (2016 game)</div>
			    <Image 
			      	fileName="gtx-1070.png"
			      	alt="measurement"/>	
			    <div class="tinyText">Tom's Hardware speed measurements of GTX 1070 against different CPUs during Hitman (2016 game)</div>		
			    <body>With this interactive visualization, users wouldn't have to go through various tech articles and compare performances of different PC builds. Instead, they can just hover over a data point and see the normalized rating of each CPU and GPU combination.</body>
			    <img src={scatterplot} alt="scatter plot of CPU and GPU combos"/>
			    <div class="tinyText">How users would use the data viz to check the scores of CPU-GPU pairings</div>
			  	<body><b>How this plot can be improved: </b>instead of having users scrolling down the plot to see their favorite combo, we can have a search bar that jumps straight to the combination they want to check out.</body>
				<h3>Treemap</h3>
				<body>I also experimented with <a href="https://www.fusioncharts.com/resources/chart-primers/treemap-chart"><u>treemaps</u></a> as they are great for categorical data with one or two numerical variables. They are great when we have space constraints or want to see a big picture of the dataset. Here, it helps us see the CPU-GPU combo trends and scores simultaneously.</body>
				<body>In this treemap, each big square bounded by white space groups the same GPU type with different CPUs (for example, one square is the RTX 3090, and another is the GTX 1050-Ti, and so on...).</body>
				<body>The darker the blue, the higher the rating (normalized). The bigger the square, the more popular the GPU.</body>
				<body>Through this treemap, we can also see how popular each combination is.</body>
				<Image 
			      	fileName="treemap.png"
			      	alt="A screen of a desktop app"/>
			    <div class="tinyText">Treemap plotted in Tableau</div>
				<body>Similar to the scatterplot above, users can also hover over the treemap and see the PC builds they are interested in.</body>
				<img src={treemap} alt="treemap of PC ratings"/>
				<div class="tinyText">How users can utilize the treemap to check out a CPU-GPU combo</div>
				<body><b>How to improve </b>: add annotations (names) on each cube so that the GPU names aren't repeated.</body>
				<h3>Heatmap</h3>
				<body>Finally, the heatmap. This is the only map that I had to code for (besides the process of scraping data), which is why I want to continue this project in D3.js to create nice plots and also practice my coding skills. </body>
				<body>For this heatmap, I will focus on the Ryzen 5 CPU with both AMD and Nvidia GPUs. This is for demonstration purpose, and the smaller subset will show the result somewhat clearer and easier to grasp.</body>
				<Image
			      	fileName="heatmap.png"
			      	alt="A screen of a desktop app"/>
			    <div class="tinyText">Ryzen 5 CPU and multiple GPUs heatmap (created using Python's Seaborn package)</div>
			    <body>Let me point out some interesting results from this heatmap. For most cases, the numbers make sense (the better and newer CPUs and GPUs, the better the performance), but there are some interesting cases. For example, the Ryzen 5 2600 did kinda better than the Ryzen 5 3600 when used with the Nvidia RTX 3070. These are around the same price at the moment, so the upgrade might not make much sense.</body>
			    <body>In other cases, however, even if increasing a CPU or GPU capacity will raise our performance, we would like to know, <b>"by how much?"</b>. It is the marginal cost and benefit that we want to inform users of, so they can decide whether to upgrade their CPU/GPU. </body>
				<h1>Biases - Not all PCs are made equal</h1>
				<body>The biggest bias this project might have is the limited number of cases in each combination (hello, what are the chances of us encountering a user that has the RTX 3090 and a Ryzen 9 among 1000 independent observations?) and the other factors of a PC build.</body>
				<body>In this dataset, I only extracted data for CPUs and GPUs (which play the biggest role in the gaming ratings), but having non-biased, extensive research and consideration for all counfounding variables would be necessary to show the accurate data and best advise our users in making buying decisions.</body>
				<h1>Key Takewaways</h1>
				<ul>
					<li>Combinations of computer parts are not straightforward (newer and more expensive model combinations are not necessarily better)</li>
					<li>Research by Dr. Yu Emma Wang at Harvard University shows that workload also matters. And yes, workloads, by all means, matter.</li>
					<li>PC performances are based on workload, CPU and GPU specs, bottleneck, and other factors (SSD 5%, RAM 7%, etc…). Having a non-biased and clear measuring methods will make it transparent for users as in how these metrics is used.</li>
					<li>Communication matters! Since my goal is to inform users who are new to building computers of the marginal cost and benefit without having to rack their brains reading many tech articles, I want to be mindful of my words and sentences to make it as comprehensible as possible. Afterall, buidling PCs is an enjoyable (though a bit stressful, to me, at least) process that I hope anyone could enjoy.</li>
				</ul>
				<h1>Future works</h1>
				<body>More work needs to be done to increase the usability of the visualizations, including: </body>
				<ul>
					<li>Creating interactive visualizations that utilize the whole PC build dataset. Users can search for a brand name or a performance score and see the builds available.</li>
					<li>Concatenating pricing data from computer manufacturers and visualize the marginal cost to upgrade between computer parts. This will help users to make better choices based on their budget.</li>
					<li>Using public data from PC manufacturer to inform users of the product's tech specs.</li>
				</ul>
				<br/>
				<body>Too many work, too little time! As I finished writing this case study, I'm going back to working on this project immediately :). Stay tuned!</body>
			</div>
		</Layout>
	)
}