<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <Savings />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import Savings from '../../uscmpc/Savings'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            Savings,
            Footer,
        }
    }
</script>

