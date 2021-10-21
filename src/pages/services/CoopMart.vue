<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <!-- <BoardOfDirectors /> -->
        <CoopMart />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import CoopMart from '../../uscmpc/CoopMart'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            CoopMart,
            Footer,
        }
    }
</script>

