<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <PhotosVideos />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import NavBar from '../../uscmpc/NavBarTwo'
    import PhotosVideos from '../../uscmpc/PhotosVideos'
    import Footer from '../../uscmpc/Footer'

    export default {
        name: 'app',
        components: {
            NavBar,
            PhotosVideos,
            Footer,
        }
    }
</script>

