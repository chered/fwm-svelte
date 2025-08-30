<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores'; // Import SvelteKit's page store for active link highlighting

    // Define your menu items
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/about/contact' }, // Example of a nested page
    ];
</script>
<div class="flex md:flex-row flex-col items-center">
    <img class="logo" src="{base}/logo.jpeg" alt="Fourwebminds Technology" />
    <nav class="main-nav flex-1">
        <ul class="nav-list">
            {#each menuItems as item}
                <li class="nav-item">
                    <a
                        href={item.path}
                        class="nav-link"
                        class:active={$page.url.pathname === item.path}
                        aria-current={$page.url.pathname === item.path ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
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
        display: flex;
        justify-content: center;
        flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    }

    .nav-item {
        margin: 0 15px;
    }

    .nav-link {
        text-decoration: none;
        font-size: 1.1em;
        padding: 8px 15px;
        border-radius: 5px; /* Rounded link buttons */
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
        display: block; /* Make the whole padding area clickable */
    }

    .nav-link:hover {
        background-color: #34495e; /* Slightly lighter dark blue-grey */
        color: #ffffff;
        transform: translateY(-2px); /* Slight lift effect */
    }

    .nav-link.active {
        background-color: #007bff; /* Highlight active link with blue */
        color: white;
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0, 123, 255, 0.4);
    }
    
    /* Responsive adjustments for smaller screens */
    @media (max-width: 600px) {
        .nav-list {
            flex-direction: column; /* Stack links vertically */
            align-items: center; /* Center items */
        }

        .nav-item {
            margin: 10px 0; /* More vertical space */
            width: 100%; /* Full width for stacked items */
            text-align: center;
        }

        .nav-link {
            padding: 12px 20px; /* Larger touch targets */
            font-size: 1em;
        }
    }
</style>