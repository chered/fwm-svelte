<script>
    // You can define props if you want to make this section reusable with different content
    export let title = 'Welcome to Our Awesome App!';
    export let subtitle = 'Build amazing things with SvelteKit.';
    export let ctaText = 'Get Started Now';
</script>

<section class="hero-section">
    <div class="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button class="cta-button">{ctaText}</button>
    </div>
</section>