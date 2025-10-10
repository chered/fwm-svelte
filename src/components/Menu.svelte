<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { Hamburger } from 'svelte-hamburgers';

    let isMenuOpen = false;

    // Define your menu items
    const menuItems = [
        { name: 'Portfolio', path: '#Porfolio' },
        { name: 'Contact', path: 'https://docs.google.com/forms/d/1C5oHMI02X88A4kdsGdYrgqqPJR5BfWaciMJEVA6wpcw/viewform?edit_requested=true' },
    ];
</script>

<div class="flex flex-col md:flex-row items-center justify-between p-4">
    <a href="/"><img class="logo" src="{base}/logo.jpeg" alt="Fourwebminds Technology" /></a>
    
    <div class="md:hidden">
        <Hamburger bind:open={isMenuOpen} on:click={() => isMenuOpen = !isMenuOpen} />
    </div>

    <nav class="hidden md:flex flex-1 justify-center">
        <ul class="nav-list flex">
            {#each menuItems as item}
                <li class="nav-item">
                    <a href={item.path}
                       class="text-slate-600 hover:bg-[#00385e] hover:text-white px-3 py-2 rounded-md font-medium transition-colors"
                       target={item.path.startsWith('http') ? '_blank' : ''}
                       rel={item.path.startsWith('http') ? 'noopener noreferrer' : ''}>
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>

    {#if isMenuOpen}
        <nav class="md:hidden flex-1">
            <ul class="nav-list flex flex-col items-center mt-4">
                {#each menuItems as item}
                    <li class="nav-item">
                        <a href={item.path}
                           on:click={() => isMenuOpen = false}
                           class="text-slate-600 hover:bg-[#00385e] hover:text-white px-3 py-2 rounded-md font-medium transition-colors w-full text-center">
                            {item.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    {/if}
</div>

<style>
    .logo {
        max-width: 100%;
        height: auto;
        display: block;
    }

    .nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-item {
        margin: 0 15px;
    }

</style>