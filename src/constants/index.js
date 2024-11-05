import {
	mobile,
	backend,
	creator,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	web,
	flutter,
	mongodb,
	git,
	figma,
	docker,
	meta,
	forexplain,
	hemmx,
	YoutubeClone,
	portfolio,
	erp,
	tesla,
	shopify,
	carrent,
	jobit,
	exotask,
	tripguide,
	threejs,
	Avatars,
	freelancer,
	firebase,
	GainzAi,
	FiveMlogo,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Mobile Developer",
		icon: mobile,
	},
	{
		title: "Next Js Developer",
		icon: web,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "instractour programming",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "mobile",
		icon: flutter,
	},
	{
		name: "firebase",
		icon: firebase,
	},
];

const experiences = [
	{
		title: "Web Developer",
		company_name: "Freelance Project",
		icon: freelancer,
		iconBg: "#fff",
		date: "March 2020 - Present",
		points: [
			"Developing and maintaining web applications using HTML, CSS, and JavaScript.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: "Flutter Developer",
		company_name: "Gainz AI @UK",
		icon: GainzAi,
		iconBg: "#fff",
		date: "April 2024 - Present",
		points: [
			"Implementing new features and enhancing the UI of AI applications.",
			"Collaborating with the team to train AI models and improve user experience.",
			"Developing chat features to allow users to interact with their favorite avatars.",
		],
	},
	{
		title: "Instructor Programming",
		company_name: "Hemmx Academy",
		icon: hemmx,
		iconBg: "#E6DEDD",
		date: "Jan 2022 - Jul 2023",
		points: [
			"Teaching kids aged 9 to 15 years how to build games using the Scratch platform.",
			"Instructing students on creating mobile apps using MIT App Inventor.",
			"Introducing students to Arduino concepts and guiding them in building projects.",
			"Facilitating learning of web development fundamentals including HTML, CSS, and JavaScript.",
		],
	},
	{
		title: "Frontend Team Lead",
		company_name: "FiveM",
		icon: FiveMlogo,
		iconBg: "#383E56",
		date: "Jan 2024 - Jul 2024",
		points: [
			"Implementing advanced features and strategic enhancements within a complex ERP system to improve operational efficiency and user experience.",
			"Organizing and managing the project's folder structure for optimal workflow, while effectively distributing tasks among team members to ensure timely completion.",
			"Identifying, diagnosing, and fixing bugs promptly, in addition to integrating third-party APIs to enhance system functionality and interoperability.",
			"Adhering to the Software Development Life Cycle (SDLC) principles and best practices in B2B business environments to deliver high-quality software solutions.",
		],
	},
];

// const testimonials = [
// 	{
// 		testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
// 		name: "Sara Lee",
// 		designation: "CFO",
// 		company: "Acme Co",
// 		image: "https://randomuser.me/api/portraits/women/4.jpg",
// 	},
// 	{
// 		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
// 		name: "Chris Brown",
// 		designation: "COO",
// 		company: "DEF Corp",
// 		image: "https://randomuser.me/api/portraits/men/5.jpg",
// 	},
// 	{
// 		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
// 		name: "Lisa Wang",
// 		designation: "CTO",
// 		company: "456 Enterprises",
// 		image: "https://randomuser.me/api/portraits/women/6.jpg",
// 	},
// ];

const projects = [
	{
		name: "ERP Management System",
		description: "A comprehensive e-commerce platform built with React and TypeScript, featuring a shopping cart where users can add and remove items. The project utilizes Tailwind CSS for styling and integrates MUI and Ant Design for UI components.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "mui",
				color: "blue-text-gradient",
			},
			{
				name: "antd",
				color: "red-text-gradient",
			},
		],
		image: erp,
	},
	{
		name: "Youtube Clone",
		description: "A fully functional YouTube clone built with React, allowing users to search and select video categories. When watching a video, recommended videos are displayed on the right side, providing a seamless viewing experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: " youtube api",
				color: "pink-text-gradient",
			},
		],
		image: YoutubeClone,
	},
	{
		name: "Gainz AI",
		description: "An AI chat app developed with Flutter, featuring specialized avatars for different fields such as fitness, basketball, football, and tennis. The app offers an enhanced user interface for a better user experience, integrates APIs to improve functionality, and includes new features to expand capabilities.",
		tags: [
			{
				name: "flutter",
				color: "blue-text-gradient",
			},
			{
				name: "cubit",
				color: "green-text-gradient",
			},
			{
				name: "mobile development",
				color: "pink-text-gradient",
			},
		],
		image: Avatars,
	},
];

export { services, technologies, experiences, projects };
