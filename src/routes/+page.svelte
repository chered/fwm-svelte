<script>
    let name = 'Fourwebminds Technology'; // Declare a reactive variable
    // Import your section components
    import Header from "../components/Header.svelte";
    import Hero from "../components/Hero.svelte";
	import Menu from "../components/Menu.svelte";

</script>

<style>
    /* Styling for this component */
    h1 {
        color: #ff3e00; /* Svelte's signature orange */
        font-family: Arial, sans-serif;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 1.2em;
    }
</style>
<div class="layout-container">
    <header>
        <Menu />
    </header>
    <Header />
    <Hero />
</div>

