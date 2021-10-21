<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <Services />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import Services from '../../uscmpc/OtherServices'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            Services,
            Footer,
        }
    }
</script>

