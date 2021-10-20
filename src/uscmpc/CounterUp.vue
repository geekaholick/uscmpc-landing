<template>
    <div  class="fun-fact-two">
        <div class="container">
            <div class="row mtn-40">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-funfact-two">
                        <div class="funfact-inner-two">
                            <div class="funfact-icon">
                                <i class="pe-7s-graph3"></i>
                            </div>
                            <div class="text">
                                <ICountUp
                                    :endVal="995"
                                />
                                <p>Total Members</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-funfact-two">
                        <div class="funfact-inner-two">
                            <div class="funfact-icon">
                                <i class="pe-7s-like2"></i>
                            </div>
                            <div class="text">
                                <ICountUp
                                    :endVal="765"
                                />
                                <p>Regular Members</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-funfact-two">
                        <div class="funfact-inner-two">
                            <div class="funfact-icon">
                                <i class="pe-7s-id"></i>
                            </div>
                            <div class="text">
                                <ICountUp
                                    :endVal="230"
                                />
                                <p>Associate Members</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-funfact-two">
                        <div class="funfact-inner-two">
                            <div class="funfact-icon">
                                <i class="pe-7s-medal"></i>
                            </div>
                            <div class="text">
                                <ICountUp
                                    :endVal="2"
                                />
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ICountUp from 'vue-countup-v2';
    export default {
        name: 'demo',
        components: {
            ICountUp
        },
        data() {
            return {
                delay: 300
            };
        }
    };
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/counterup.scss';
</style>
