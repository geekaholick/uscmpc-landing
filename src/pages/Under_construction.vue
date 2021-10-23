<template>
    <div class="error-not-found">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="error-inner text-center">
                        <div class="image">
                            <img src="../assets/img/underconstruction.jpg" alt="404">
                        </div>
                        <h1 class="heading-h3 text-white">Sorry for the inconvenience!!</h1>
                        <div class="error-text">
                            <p class="text-white">This page is under construction. You can either go back to the
                                last page or go to homepage.</p>
                            <div class="error-button-group">
                                <router-link class="btn-submit bg-wht" to="/">
                                    Go Back Previous
                                </router-link>
                                <router-link class="btn-submit" to="/">
                                    Go Back To Homepage
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UnderConstruction'
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/404.scss';
</style>