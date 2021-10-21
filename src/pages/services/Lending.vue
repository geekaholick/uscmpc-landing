<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <Lending />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import Lending from '../../uscmpc/Lending'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            Lending,
            Footer,
        }
    }
</script>

