<template>
    <section class="video-section section-padding fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">HISTORY</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="bestapp-content-inner">
                        <div class="bestapp-content-text pb-0">
                            <p class="new-p">The USC-Multipurpose Cooperative has its roots from the USC Faculty and Employees Credit Cooperative, Inc. (USC FECCI) which was founded by Professor Moises S. Soriaga in 1963 with the assistance of the following:</p>
                            <br>
                            <ul class="video-list video-list__style-2 new-ul">
                                <li>•Mr. Jose V. Arias</li>
                                <li>•Atty. Catalino Doronio</li>
                                <li>•Mrs. Rosario de Veyra</li>
                                <li>•Mrs. Rebecca Galeos</li>
                                <li>•Mr. Vicente Gorre </li>
                                <li>•Dr. Alfredo Ordona</li>
                                <li>•Dr. Felix Savellon</li>
                                <li>•Dr. Protasio Solon</li>
                                <li>•Dean Jose Tecson</li>
                                <li>•Atty. Arsenio Villanueva</li>
                            </ul>
                            <br>
                            <p class="new-p">Below are the important dates to remember when milestones in the life of the cooperative were achieved:</p>
                            <p class="new-p"><strong>September 21, 1963:</strong> Application to form a credit cooperative was filed with the Cooperative Administrative Office (CAO) with the above mentioned persons as incorporators. The total number of members as of this date was 283 with the total Fixed Deposits of P 1,061.25.</p>
                            <p class="new-p"><strong>June 5, 1964:</strong> Application was approved by the CAO under Registration No. 000967.</p>
                            <p class="new-p"><strong>April 11, 1975:</strong> USC FECCI was re-registered with the Department of Local Government and Community Development under Re-Registration No. FF-021 RR.</p>
                            <p class="new-p"><strong>March, 1976:</strong> USC FECCI was accepted as a member of PHILCUL (now PFCCI), the national federation of credit cooperative in the Philippines.</p>
                            <p class="new-p"><strong>September 15, 1983:</strong> A retirement benefit system for members was set up.</p>
                            <p class="new-p"><strong>October 16, 1985:</strong> USC FECCI was awarded the honor of FIRST RUNNER –UP Credit Cooperative of 1985 in Region VII by the Ministry of Food and Agriculture.</p>
                            <p class="new-p"><strong>March 10, 1986:</strong> A computer was installed by MICROCHIPS to facilitate the recording process.</p>
                            <p class="new-p"><strong>September 27, 1995:</strong> The USC Credit Cooperative was registered under CDA Registration No. CEB-A-057.</p>
                            <p class="new-p"><strong>April 13, 2007:</strong> The USC Credit Cooperative had its Amended Articles of Cooperation and By-Laws approved under CDA Registration No. CEB-A-428.</p>
                            <p class="new-p"><strong>2010:</strong> The USC Credit Cooperative became USC-Multipurpose Cooperative when its Amended Articles of Cooperation and By-Laws were approved by the CDA with registration number.</p>
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
    .new-ul {
        columns: 2;
        padding: 0px 20px;
    }
</style>
