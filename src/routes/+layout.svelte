<script>
	import Menu from '../components/Menu.svelte';
	import '../app.css';
		let { children } = $props();
</script>

{@render children()}
