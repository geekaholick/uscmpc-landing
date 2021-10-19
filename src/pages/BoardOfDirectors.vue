<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <BoardOfDirectors />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import BoardOfDirectors from '../uscmpc/BoardOfDirectors'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            BoardOfDirectors,
            FooterTwo,
        }
    }
</script>

