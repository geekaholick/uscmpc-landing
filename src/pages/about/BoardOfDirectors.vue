<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <BoardOfDirectors />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import BoardOfDirectors from '../../uscmpc/BoardOfDirectors'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            BoardOfDirectors,
            Footer,
        }
    }
</script>

