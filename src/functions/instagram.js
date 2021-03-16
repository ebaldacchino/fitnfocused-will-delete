require('isomorphic-fetch');

const url = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"619232183","first":12}`;

const cache = {
	lastFetch: 0,
	posts: [],
};

async function getPosts() { 
	const timeSinceLastFetch = Date.now() - cache.lastFetch;
	if (timeSinceLastFetch <= 1800000) {
		return cache.posts;
	}
	const data = await fetch(url).then((res) => res.json());
	const posts = slimUpPosts(data);
	cache.lastFetch = Date.now();
	cache.posts = posts;
	return posts;
}

function slimUpPosts(response) {
	return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
		thumbnail: edge.node.thumbnail_src,
		url: `https://instagram.com/p/${edge.shortcode}`,
		caption: edge.node.edge_media_to_caption.edges[0].node.text,
		id: edge.node.id,
	}));
}

exports.handler = async (event, context, callback) => {
	console.log('export handler');
	const posts = await getPosts();
	callback(null, {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(posts),
	});
}; 