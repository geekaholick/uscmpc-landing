<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <History />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import History from '../uscmpc/History'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            History,
            FooterTwo,
        }
    }
</script>

