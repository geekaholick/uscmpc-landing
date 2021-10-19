<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <!-- slider section -->
        <Banner />

        <!-- Medical info section -->
        <MedicalInfo/>

        <!-- why choose us section -->
        <About />

        <!-- about app -->
        <CounterUpTwo/>

        <!-- Service style -->
        <Service />

        <!-- Testimonial section -->
        <TestimonialFour testimonialStyle="testimonial-five" />

        <!-- team section -->
        <TeamDoctor />

        <!-- download section -->
        <DownloadFour />

        <!-- policy section -->
        <Policy />

        <!-- call to action -->
        <CallToAction />

        <!-- department section -->
        <Department />

        <!-- Blog section -->
        <Blog />

        <!-- google map section -->
        <GoogleMap />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import Banner from '../uscmpc/Banner'
    import About from '../uscmpc/About'
    import MedicalInfo from '../components/MedicalInfo'
    import CounterUpTwo from '../components/CounterUpTwo'
    import Service from '../components/Service'
    import TestimonialFour from '../components/TestimonialFour'
    import TeamDoctor from '../components/TeamDoctor'
    import DownloadFour from '../components/DownloadFour'
    import Policy from '../components/Policy'
    import CallToAction from '../components/CallToAction'
    import Department from '../components/Department'
    import Blog from '../components/Blog'
    import GoogleMap from '../components/GoogleMap'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            Banner,
            About,
            MedicalInfo,
            CounterUpTwo,
            Service,
            TestimonialFour,
            TeamDoctor,
            DownloadFour,
            Policy,
            CallToAction,
            Department,
            Blog,
            GoogleMap,
            FooterTwo,
        }
    }
</script>

