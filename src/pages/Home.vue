<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <!-- slider section -->
        <Banner />

        <!-- Main services section -->
        <Services />

        <!-- why choose us section -->
        <About />

        <!-- about app -->
        <CounterUp/>

        <!-- Testimonial section -->
        <!-- <TestimonialFour testimonialStyle="testimonial-five" /> -->

        <!-- team section -->
        <!-- <TeamDoctor /> -->

        <!-- download section -->
        <!-- <DownloadFour /> -->

        <!-- policy section -->
        <!-- <Policy /> -->

        <!-- call to action -->
        <!-- <CallToAction /> -->

        <!-- department section -->
        <!-- <Department /> -->

        <!-- Blog section -->
        <Blog />

        <!-- google map section -->
        <GoogleMap />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import Banner from '../uscmpc/Banner'
    import Services from '../uscmpc/Services'
    import About from '../uscmpc/About'
    import CounterUp from '../uscmpc/CounterUp'
    import GoogleMap from '../uscmpc/GoogleMap'
    import Footer from '../uscmpc/Footer'

    // import TestimonialFour from '../components/TestimonialFour'
    // import TeamDoctor from '../components/TeamDoctor'
    // import DownloadFour from '../components/DownloadFour'
    // import Policy from '../components/Policy'
    // import CallToAction from '../components/CallToAction'
    // import Department from '../components/Department'
    import Blog from '../components/Blog'

    export default {
        name: 'app',
        components: {
            NavBar,
            Banner,
            Services,
            About,
            CounterUp,
            // TestimonialFour,
            // TeamDoctor,
            // DownloadFour,
            // Policy,
            // CallToAction,
            // Department,
            Blog,
            GoogleMap,
            Footer,
        }
    }
</script>

