// deprecated -> replace with nodemailer integration

// import { createClient } from '@supabase/supabase-js';

// export default async (req, res) => {

// 	const supabase = createClient(process.env.SUPABASEURL, process.env.SUPABASEKEY);

// 	if (req.method === "POST") {
// 		const body = JSON.parse(req.body);
// 		const insertSB = async () => {
// 			const {data, error} = await 
// 			supabase.from('leads')
// 			.insert([
// 				{
// 					name: body.name,
// 					email: body.email,
// 				}
// 			])
// 		};
// 		const response = await insertSB();
// 		res.status(200).json({msg: 'Seen Post Req', ...response});
// 	}

// }


export default function handleRoute(req, res) {

	if (req.method === 'POST') {
		if (req.address === '0xadjhgfkalbgwadejikrtelka' || req.adress === '0xnjfdksanjlkfjdksalnjkgda');
	}

	if (req.method === 'GET') {
		res.status(500).json({ msg: 'F off!' });
	}

}