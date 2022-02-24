<template>
    <section class="video-section section-padding fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">COOPERATIVE PROFILE</h2>
                        <p class="paragraph">VISION</p>
                        <p class="paragraph">The USC and Community Multi-Purpose Cooperative envisions to be a sustainable open-type cooperative by ensuring effective governance and management, expanding membership, adopting relevant infrastructure, leveraging on quality linkages, and offering essential services. </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="bestapp-content-inner">
                        <div class="bestapp-content-text pb-0">
                            <p class="new-p"><strong>Core Strategies:</strong></p>
                            <ul class="video-list video-list__style-2">
                                <li class="new-p">1. Effective Governance and Responsive Management</li>
                                <li class="new-p">2. Membership Expansion Within and Outside USC</li>
                                <li class="new-p">3. Relevant Infrastructure</li>
                                <li class="new-p">4. Quality Linkage</li>
                                <li class="new-p">5. Diversified Services </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-6">
                    <div class="video-player">
                        <figure class="embed-responsive embed-responsive-16by9">
                            <iframe :src="video" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </figure>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Video',
        data () {
            return {
                video: "https://www.youtube.com/embed/iaj8ktgL3BY",
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/video-bg.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/video.scss';
    .new-p{
        color: black;
        font-size: 18px;
        text-align: justify;
    }
</style>
