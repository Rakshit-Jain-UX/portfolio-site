<script>
	import "../app.css";
	let { children } = $props();
	import Header from "../Components/Header.svelte";
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
</div>
