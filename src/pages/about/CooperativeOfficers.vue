<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <CooperativeOfficers />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import CooperativeOfficers from '../../uscmpc/CooperativeOfficers'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            CooperativeOfficers,
            Footer,
        }
    }
</script>

