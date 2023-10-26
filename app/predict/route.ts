import { NextResponse } from 'next/server'



type Input = {
	image: string
}

export async function POST(request: Request) {
	

	const req = await request.json()

	const { imageUrl, name2 , name3 } = req
	// start the image generation process
	const initResponse = await fetch('https://api.replicate.com/v1/predictions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
		},
		body: JSON.stringify({
			version:
				'435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117',
			input: {
				image: imageUrl,
				prompt:
                name2 === 'Gaming Room'
						? 'a room for gaming with gaming computers, gaming consoles, and gaming chairs'
						: name2
						? `a ${name3.toLowerCase()} ${name2.toLowerCase()}`
						: `a ${name3.toLowerCase()} ${name2.toLowerCase()}`,
				a_prompt:
					'best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning',
				n_prompt:
					'longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality',
			},
		}),
	})

	type InitResponseJSON = {
		completed_at: null
		created_at: Date
		error: null
		id: string
		input: Input
		logs: null
		metrics: {}
		output: null
		started_at: null
		status: string
		version: string
	}

	const initResponseJson: InitResponseJSON = await initResponse.json()

	const { id } = initResponseJson

	// poll the API every 1 sec until the image is ready
	let predictedImageUrls = null

	type ImageResponseJSON = Pick<
		InitResponseJSON,
		'id' | 'input' | 'output' | 'status'
	>

	while (!predictedImageUrls) {
		let imageResponse = await fetch(
			`https://api.replicate.com/v1/predictions/${id}`,
			{
				headers: {
					Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
				},
			},
		)
		let imageResponseJson: ImageResponseJSON = await imageResponse.json()
		console.log('imageResponseJson', JSON.stringify(imageResponseJson))
		if (imageResponseJson.status === 'succeeded') {
			predictedImageUrls = imageResponseJson.output
		} else if (imageResponseJson.status === 'failed') {
			throw new Error('Image generation failed')
		} else {
			await new Promise(resolve => setTimeout(resolve, 1000))
		}
	}

	// return the image
	console.log('predictedImageUrl', predictedImageUrls)
	return NextResponse.json({
		predictedImageUrl: predictedImageUrls[1] ?? 'Failed to generate image',
	})
}