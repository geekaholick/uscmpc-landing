<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <CooperativeProfile />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import CooperativeProfile from '../../uscmpc/CooperativeProfile'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            CooperativeProfile,
            Footer,
        }
    }
</script>

