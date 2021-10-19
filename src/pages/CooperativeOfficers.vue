<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <CooperativeOfficers />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import CooperativeOfficers from '../uscmpc/CooperativeOfficers'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            CooperativeOfficers,
            FooterTwo,
        }
    }
</script>

