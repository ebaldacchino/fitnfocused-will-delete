import React from 'react';
const url = `../../functions/instagram`;

function useInstagram() {
	const [posts, setPosts] = React.useState([]); 
	React.useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => setPosts(data));
	}, []);
}

function Instagram() {
	const gramz = useInstagram(); 
	console.log(gramz)
	return (
		<div>
			{/* {gramz.length > 0 &&
				gramz.map((gram) => (
					<a key={gram.id} href={gram.url}>
						<img src={gram.thumbnail} alt={gram.caption} />
					</a>
				))} */}
		</div>
	);
}

export default Instagram;
