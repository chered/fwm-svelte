<script>
    // You can define props if you want to make this section reusable with different content
    export let title = 'Seamless WordPress Solutions.';
    export let subtitle = ' Get a beautiful, functional website without the technical hassle.';
    export let description = 'Beyond Just Building: Web Solutions That Endure. Get a stunning website with reliable, continuous support for peace of mind and lasting growth.';
    export let ctaText = 'Get Started Now';
</script>
<style>
    .white {
        color: #fff;
    }
    .hero-section {
        background-image: url('/hero.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }
    .hero-section:before {
        background: rgb(0 0 0 / 72%);
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .hero-content {
        position: relative;
    }
</style>
<section class="hero-section flex items-center justify-center text-3xl font-semibold h-screen">
    <div class="hero-content white container w-[70%] mx-auto">
        <p class="text-xl">{subtitle}</p>
        <h1 class="text-5xl my-2">{title}</h1>
        <h2 class="text-2xl my-3">{description}</h2>
        <button class="cta-button py-2 px-4 rounded-md mt-5 bg-[#1665d0] hover:bg-[#00385e]"><a href="https://docs.google.com/forms/d/1C5oHMI02X88A4kdsGdYrgqqPJR5BfWaciMJEVA6wpcw/preview" target="_blank">Contact Us</a></button>
    </div>
</section>