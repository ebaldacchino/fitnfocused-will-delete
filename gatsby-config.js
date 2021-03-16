module.exports = {
	siteMetadata: {
		title: `Fit 'n' Focused`,
		description: `Geelong's best kid-friendly fitness classes!`,
		author: 'Edward Baldacchino',
		twitterUsername: '@john_doe',
		image: '/images/twitter-img.png',
		siteUrl: 'https://fitnfocused.netlify.app',
	},
	plugins: [
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: ' http://fitnfocused.local/graphql',
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://fitnfocused.netlify.app',
				sitemap: 'https://fitnfocused.netlify.app/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/', disallow: ['/cancellations'] }],
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: ['/cancellations'],
			},
		},
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [{ family: 'Open Sans' }, { family: 'Roboto Condensed' }],
				},
			},
		},
		{
			resolve: `gatsby-source-google-reviews`,
			options: {
				apiKey: `A54762F28864403090085B2B4455F447`,
				placeId: `ChIJTadL1YoU1GoREFFaGouSyxQ`,
			},
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `619232183`,
				// access_token: '51f761bd3d2aa14832906a3b41d0c660',
				// instagram_id: 'fitnfocusedpt',
				// paginate: 100,
				// maxPosts: 1000,
				// hashtags: true,
			},
		},
	],
};
