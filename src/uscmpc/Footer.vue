<template>
    <footer>
        <div class="footer-widget-area section-padding" :class="FooterStyle">
            <div class="container">
                <div class="row mtn-40">
                    <div class="col-lg-4">
                        <div class="widget-item">
                            <h5 class="widget-title">ABOUT US</h5>
                            <div class="widget-body">
                                <ul class="widget-info">
                                    <li><strong>Adddress :</strong><span>Joseph Watzlawik Bldg., Pelaez St., Cebu City</span></li>
                                    <li><strong>Phone 1 :</strong>(+63) 032 416 8032</li>
                                    <li><strong>Phone 2:</strong>(+63) 032 384 0024</li>
                                    <li><strong>Email :</strong>official.uscmpc@gmail.com</li>
                                    <li><strong>Office Hours:</strong>Mon-Sat 8:00 AM - 5:00 PM</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="widget-item">
                            <h5 class="widget-title">OUR SERVICE</h5>
                            <div class="widget-body">
                                <ul class="widget-info useful-link">
                                    <li><a href="#">Lending</a></li>
                                    <!-- <li><a href="#">Coop Education and Training</a></li> -->
                                    <li><a href="#">Investment</a></li>
                                    <!-- <li><a href="#">Transport Services</a></li> -->
                                    <li><a href="#">Consumer Store</a></li>
                                    <!-- <li><a href="#">Community Development</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="widget-item">
                            <h5 class="widget-title">OUR NEWSLETTER</h5>
                            <div class="widget-body newsletter-widget">
                                <p>Please subscribe below if you would like to keep updated.</p>
                                <form class="newsletter-form">
                                    <input type="text" class="newsletter-field" placeholder="Email Here">
                                    <button type="submit" class="subscribe-btn">SUBSCRIBE</button>
                                </form>
                                <ul class="footer-social-link">
                                    <li v-for="(social, socials) in socials" :key="socials">
                                        <a :href="social.url" target="_blank">
                                            <i :class=social.icon></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom light-blue-bg" :class="FooterStyle">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 order-2 order-md-1">
                        <div class="copyright">
                            <p>&copy; 2021 <b class="text-white">USC&amp;C MPC</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="#"><b>Gran, Gorii, Rex, and NJ</b></a></p>
                        </div>
                    </div>
                    <div class="col-md-6 order-1 order-md-2">
                        <div class="useful-link">
                            <a href="#">Our Team</a>
                            <a href="#">Sight Map</a>
                            <a href="http://event.uscmpc.com/login">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ["FooterStyle"],
    data () {
        return {
            socials: [
                {
                    icon: "fa fa-facebook",
                    url: "https://www.facebook.com/groups/347906875621343"
                },
                // {
                //     icon: "fa fa-twitter",
                //     url: "https://twitter.com/"
                // },
                // {
                //     icon: "fa fa-behance",
                //     url: "https://www.behance.net/"
                // },
                // {
                //     icon: "fa fa-dribbble",
                //     url: "https://dribbble.com/"
                // }
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/footer.scss';
</style>
