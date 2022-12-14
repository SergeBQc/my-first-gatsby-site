// Step 1 : Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2 : Define your component
const AboutPage = () => {
	return (
		<Layout pageTitle="About Me">
			<p>Hi there! I'm proud of this site, wich I built with Gatsby.</p>
		</Layout>
	)
}

// Step 3 : Export your component
export const Head = ({ data }) => <Seo title="About Me"/>

export default AboutPage