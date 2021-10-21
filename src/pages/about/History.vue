<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <History />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import History from '../../uscmpc/History'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            History,
            Footer,
        }
    }
</script>

