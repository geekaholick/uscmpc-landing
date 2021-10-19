<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <CooperativeProfile />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import CooperativeProfile from '../uscmpc/CooperativeProfile'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            CooperativeProfile,
            FooterTwo,
        }
    }
</script>

