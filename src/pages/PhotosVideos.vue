<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavBar />

        <PhotosVideos />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavBar from '../uscmpc/NavBar'
    import PhotosVideos from '../uscmpc/PhotosVideos'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavBar,
            PhotosVideos,
            FooterTwo,
        }
    }
</script>

