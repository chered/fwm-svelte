<script>
    // You could also fetch features from an API or prop
    const features = [
        { icon: '✨', title: 'Intuitive Design', description: 'Easy to use interfaces.' },
        { icon: '⚡', title: 'Blazing Fast', description: 'Powered by SvelteKit.' },
        { icon: '🤝', title: 'Collaborative', description: 'Work together seamlessly.' },
        { icon: '🔒', title: 'Secure', description: 'Your data is safe with us.' },
    ];
</script>

<section class="features-section">
    <h2>Our Key Features</h2>
    <div class="features-grid">
        {#each features as feature}
            <div class="feature-item">
                <span class="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        {/each}
    </div>
</section>