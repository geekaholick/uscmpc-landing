<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <AwardsDistinctions />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import AwardsDistinctions from '../uscmpc/AwardsDistinctions'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            AwardsDistinctions,
            FooterTwo,
        }
    }
</script>

