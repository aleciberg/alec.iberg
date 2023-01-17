<script>
	import { base } from '$app/paths';
</script>

<div class="about-me-container">
	<div class="image-container">
		<img class="image" src={`${base}/images/alec.png`} alt="Alec" />
	</div>
	<h1 class="outdoors">About Me</h1>
	<div>
		Hello, I am <span class={'outdoors'}>Alec Iberg</span> and I am a Full Stack Developer.
		<br />
		<br />
		I currently work at Array, as a Full Stack Developer, building FinTech tools. I currently work with{' '}
		<span class="target">
			JavaScript, TypeScript, Svelte, NodeJS, and GoLang{' '}
		</span>
		and very much enjoy this stack. I always find great satisfaction in seeing my work produce
		<span class="target">meaningful </span>
		and
		<span class="target"> measurable</span> results and I love being able to provide value to the
		FinTech space and improve access to credit for
		<span class="target">everyone.</span>{' '}
	</div>
	<br />
	<div>
		As for my personal life, I really enjoy the{' '}
		<span class="outdoors">outdoors</span>- you can usually find me camping, hiking, or backpacking
		on a weekend. I am fortunate enough to
		<span class="target"> live in Southern California</span> and be surrounded by some of our
		nation's best National Parks.{' '}
		<span class={'outdoors'}>Joshua Tree</span> is probably my favorite. Additionally, I am a huge
		College Football fan (GO BUCKS!), a big hockey fan, and I very much enjoy spending time with my
		dog,
		<span class={'outdoors'}> Juniper.</span> She is a 2 year old Border Collie with unlimited energy.
	</div>
</div>

<style>
	.target {
		color: #6f1d1b;
		font-weight: bold;
	}

	.outdoors {
		color: #57753f;
		font-weight: bold;
	}

	.about-me-container {
		/* height: 75vh; */
		width: 70%;
		margin-top: 10px;
		font-size: 20px;
		overflow: scroll;
	}

	.image {
		height: 200px;
		width: 200px;
		border-radius: 100px;
	}

	.image-container {
		text-align: center;
		margin-bottom: 20px;
	}
</style>
