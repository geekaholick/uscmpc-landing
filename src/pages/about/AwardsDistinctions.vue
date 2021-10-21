<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <AwardsDistinctions />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import AwardsDistinctions from '../../uscmpc/AwardsDistinctions'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            AwardsDistinctions,
            Footer,
        }
    }
</script>

