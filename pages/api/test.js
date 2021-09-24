import { getSortedPosts } from "../../lib/posts";

export default function handleRequest(req, res) {

	const data = getSortedPosts();

	console.log(JSON.parse(req.body));

	const incomingData = JSON.parse(req.body);

	if ((req.method === 'POST') && (incomingData.membership === true)) {
		res.status(200).json({ msg: data });
	}

}