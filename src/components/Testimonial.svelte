<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition'; 

    const testimonials = [
        { id: 1, quote: "Sherwin developed uHoo's website and picked new things up rather quickly to make sure the site was done based on the specified design. He has a good sense of responsibility and made sure that things move based on the schedule. Somebody you can count on to just dive in and start doing.", name: "Dustin Jefferson S. Onghanseng", title: "CEO - uHoo Inc." },
        { id: 2, quote: "Sherwin worked with us while I was at Siru Mobile, helping us develop our website. Cooperation with Sherwin was great and the communication worked very well. I strongly recommend Sherwin as a colleague and it is a joy working with him!", name: "Fredrik B. Mattsson", title: "Project Manager (formerly) - Siru Mobile" },
        { id: 3, quote: "Sherwin has been nothing but amazing to work with. We worked on a project together and he went above and beyond the scope to accommodate the situation. I couldn’t recommend him enough on all counts (professionally, talent level, and communication). I look forward to the next project we get to work together on.", name: "Steven Werley", title: "Steven Werley Consulting" },
        { id: 4, quote: "Sherwin is a thoughtful, creative and quick results producer! It is a pleasure working with him and we're lucky to have his legendary mind on our side! I highly recommend Sherwin's work!!!", name: "Christopher Lochhead", title: "Top 5 Business Podcaster | Niche Down & Play Bigger Author | 3X CMO | Category Designer w/ Whisky stained brain" },
        { id: 5, quote: "Sherwin was a part-time web developer for our company for a couple of years. His work ethic and timeliness were always terrific. He responded quickly to emails, task, and updates. Sherwin submitted daily reports on this progress and made up lost time on weekends if needed. Very hard to find workers like this who are honest and self-motivated like Sherwin is.", name: "Ikaika Kimura", title: "Managing Member at KiMedia Inc." },
    ];

    let currentTestimonialIndex = 0;
    const slideDuration = 4000;
    let interval;

    // Reactive state for the current testimonial object
    $: currentTestimonial = testimonials[currentTestimonialIndex];

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    }

    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    }
    
    // Resets the auto-advance timer
    function resetTimer() {
        clearInterval(interval);
        interval = setInterval(nextTestimonial, slideDuration);
    }
    
    // Handles user clicks (next/prev) and resets the timer
    function handleNextPrevClick(direction) {
        if (direction === 'next') {
            nextTestimonial();
        } else {
            prevTestimonial();
        }
        resetTimer();
    }

    // Lifecycle hooks for auto-advance
    onMount(() => {
        resetTimer();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<section class="testimonial-section">
    <h2 class="text-2xl"><strong>What Clients Say</strong></h2>

    <div class="testimonial-container">
        <button 
            class="arrow-btn left-arrow" 
            on:click={() => handleNextPrevClick('prev')}
            aria-label="Previous testimonial"
        >
            &lt;
        </button>

        <div class="testimonial-card">
            {#key currentTestimonial.id}
                <div class="transition-content" transition:fade={{ duration: 300 }}>
                    <blockquote class="quote">
                        "{currentTestimonial.quote}"
                    </blockquote>
            
                    <div class="reviewer-info">
                        <p class="name">{currentTestimonial.name}</p>
                        <p class="title">{currentTestimonial.title}</p>
                    </div>
                </div>
            {/key}
        </div>
        
        <button 
            class="arrow-btn right-arrow" 
            on:click={() => handleNextPrevClick('next')}
            aria-label="Next testimonial"
        >
            &gt;
        </button>
    </div>
</section>

<style>
    /* --------------------------------------------------------------------- */
    /* CORE LAYOUT & FIXES */
    /* --------------------------------------------------------------------- */
    .testimonial-card {
        flex-grow: 1; 
        max-width: 600px; 
        margin: 0 auto; 
        padding: 40px; 
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        
        /* FIX 1: Equal Height (Critical to prevent jump/stutter) */
        min-height: 380px; 
        
        /* FIX 2: Positioning anchor for absolute content */
        position: relative; 
    }

    .transition-content {
        /* FIX 3: Absolute positioning to prevent stacking/overlap during fade */
        position: absolute;
        top: 50%;           
        left: 50%;          
        transform: translate(-50%, -50%);
        width: 90%;         
        max-width: 520px;   
        text-align: center; 
    }
    
    /* ----------------------------------------------------- */
    /* GENERAL STYLING */
    /* ----------------------------------------------------- */
    .testimonial-section {
        padding: 40px 20px;
        text-align: center;
        background-color: #f7f7f7;
    }

    .testimonial-container {
        max-width: 850px;
        margin: 20px auto;
        display: flex; 
        align-items: center;
        position: relative; 
    }

    /* Arrow Button Styling - Color is #1665d0 */
    .arrow-btn {
        position: absolute; 
        top: 50%;
        transform: translateY(-50%);
        background: #1665d0; /* Requested Blue Color */
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        z-index: 10;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
    }

    .arrow-btn:hover {
        background: #1152a4; /* Darker hover shade */
    }

    .left-arrow {
        left: 0;
        margin-left: -10px; 
    }

    .right-arrow {
        right: 0;
        margin-right: -10px; 
    }

    /* Content Styling */
    .quote {
        font-size: 1em;
        font-style: italic;
        margin-bottom: 20px;
    }
    .name {
        font-weight: bold;
        margin: 0;
    }
    .title {
        color: #777;
        font-size: 0.9em;
        margin: 0;
    }
</style>