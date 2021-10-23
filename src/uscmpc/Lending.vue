<template>
    <section class="service-hosting section-padding" id="service">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">LENDING</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem <br>consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <!-- regular loan -->
            <div class="row">
                <div class="col-12">
                    <div class="title-style-8 text-center">
                        <h4>REGULAR LOAN</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(loan, regular_Loans) in regular_Loans" :key="regular_Loans" class="col-lg-4 col-md-6">
                    <div class="service-hosting-item">
                        <div class="icon">
                            <img :src="loan.icon" alt="service icon">
                        </div>
                        <div class="content">
                            <div class="title">
                                <h6>{{ loan.title }}</h6>
                            </div>
                            <p>{{ loan.purpose }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- special loan -->
            <div class="row">
                <div class="col-12">
                    <div class="title-style-8 text-center">
                        <h4>SPECIAL LOAN</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(loan, special_Loans) in special_Loans" :key="special_Loans" class="col-lg-4 col-md-6">
                    <div class="service-hosting-item">
                        <div class="icon">
                            <img :src="loan.icon" alt="service icon">
                        </div>
                        <div class="content">
                            <div class="title">
                                <h6>{{ loan.title }}</h6>
                            </div>
                            <p>{{ loan.purpose }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'ScreenshotTwo',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/screenshot-bg.jpg')})`
                },
                swiperOption: {
                    speed: 600,
                    loop: true,
                    slidesPerView: 3,
                    effect: 'coverflow',
                    // grabCursor: true,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: -25,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                     breakpoints: {
                         768: {
                            spaceBetween: 60
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                },
                regular_Loans:[
                    {
                        title: "Agricultural",
                        purpose: "Purchase and/or redemption of  agricultural lots and agri-business  such as farms inputs, livestock and  poultry raising, aqua-culture and  horti-culture",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Appliance", 
                        purpose: "Purchase of home appliances, furniture and fixtures",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Business",
                        purpose: "Extended to members who are into business engagements which include commercial, service and purchase of vehicle for business purposes",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Commodity",
                        purpose: "Purchase of goods for household consumption and for payment of utilities and services",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Educational",
                        purpose: "School related and professional advancement",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Lot Acquisition(REM)",
                        purpose: "Purchase of lot",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Housing",
                        purpose: "Construction, renovation or repair, and other housing related expenses",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Medical/Health Care",
                        purpose: "For hospitalization, purchase of medicine, payment of health care insurance premiums, and other medical, dental & optical related expenses",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Pre-need Plans",
                        purpose: "Purchase of life and non-life insurance, memorial plans, memorial lots and funeral related expenses including cost of cremation and purchase of urn and columbary",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Redemption",
                        purpose: "Payment of loans with other financial institutions",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Travel/Vacation",
                        purpose: "For domestic and international travel",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Vehicle(purchase of personal service vehicles)",
                        purpose: "Brand new",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Vehicle(purchase of personal service vehicles)",
                        purpose: "Pre-owned",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },

                ],
                special_Loans:[
                    {
                        title: "Assurance(show money) Loan thru PNB Certification",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Back-to-Back", 
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Cash Gaan",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Calamity and Disaster Loan",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Coop Mart Loan",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Hospital Admission  Loan",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Purchase Order (PO)  Loan",
                        purpose: "lorem itsumalorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Special Occasion Loan",
                        purpose: "lorem itsum, lorem itsum lorem itsumlorem itsumnses",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Death of a direct beneficiary and immediate family member",
                        purpose: "lorem itsum, mlorem itsumd funeral lorem itslorem itsumlorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Death of anyone not included in the above category",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Loans Secured by other cash flow(not retirement)",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                    {
                        title: "Loans Secured on retirement cash flow",
                        purpose: "lorem itsum",
                        icon: require('../assets/img/hosting/icon/1.png'),
                    },
                ],
            }
        }
    }

</script>

<style lang="scss">
     @import '../assets/scss/variables.scss';
    .service-hosting-item {
        border: 1px dashed #e1e1e1;
        margin-top: 70px;
        padding: 12px 11px;
        position: relative;
        .icon {
            left: 50%;
            margin-left: -32px;
            position: absolute;
            top: -32px;
            img {
                background: #fff;
                border: 3px solid #e1e1e1;
                border-radius: 50%;
                height: 65px;
                width: 65px;
            }
        }
        .content {
            background: #f9f9f9;
            padding: 45px 15px;
            text-align: center;
            .title {
                display: inline-block;
                margin-bottom: 40px;
                padding: 0 50px;
                position: relative;
                z-index: 2;
                &:before {
                    border-bottom: 4px double #46A3DA;
                    content: "";
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: -4px;
                    width: 100%;
                    z-index: -1;
                }
            }
            h6 {
                background: #f9f9f9;
                color: #46A3DA;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 2px;
                padding: 0 15px;
                text-transform: uppercase;
                z-index: 2;
            }
            p {
                color: black;
                font-size: 13px;
            }
        }
    }
</style>