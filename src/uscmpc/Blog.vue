<template>
    <section class="latest-blog-area section-padding section" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-5 text-center">
                        <h2 class="title">LATEST NEWS</h2>
                        <p class="paragraph">Be informed on the the movement of the cooperative.</p>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div v-for="blog in blogs" :key="blog.id" class="col-lg-4">
                    <div class="blog-item">
                        <div class="blog-thumb">
                            <a href="#">
                                <img :src="blog.thumb" alt="blog thumb">
                            </a>
                            <div class="date-comment">
                                <span class="date">{{ blog.date }}</span>
                                <!-- <span class="comment"><i :class="blog.icon"></i>{{ blog.comment }}</span> -->
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span><i class="fa fa-folder"></i><a href="#">anything</a>, <a href="#">blog</a></span>
                                <span><i class="fa fa-user"></i><a href="#">USC MPC</a></span>
                            </div>
                            <h4 class="news-title"><a href="#">{{ blog.title }}</a></h4>
                            <p>{{ blog.desc }}</p>
                            <a class="blog-btn" :href="blog.link">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Blog',
        data (){
            return {
                blogs: [
                    {
                        thumb: require("../assets/img/home-uscmpc/blog/1.jpg"), 
                        date: '14 SEP', 
                        icon: 'fa fa-comment', 
                        comment: '12', 
                        title: 'The new cooperative building.', 
                        desc: 'On going construction of the new building. Soon to be enjoyed at the early of 2022.', 
                        link:'https://www.facebook.com/groups/347906875621343/posts/1241262492952439'
                    },
                    {
                        thumb: require("../assets/img/home-uscmpc/blog/2.jpg"), 
                        date: '19 SEP', 
                        icon: 'fa fa-comment', 
                        comment: '32', 
                        title: 'Let us talk: Gender Sensitivity', 
                        desc: 'The Gender and Development (GAD) committee has successfully conducted webinar training series on gender awarness and developmnet.', 
                        link:'https://www.facebook.com/groups/347906875621343/posts/1223406161404739/'
                    },
                    {
                        thumb: require("../assets/img/home-uscmpc/blog/3.png"), 
                        date: '16 MAR', 
                        icon: 'fa fa-comment', 
                        comment: '10', 
                        title: 'Online PNB registration', 
                        desc: 'An oportunity to open your PNB account online which could address the cooperative members who do not have PNB account yet.', 
                        link:'https://www.facebook.com/groups/347906875621343/posts/1258059157939439/'
                    },
                ]
            }
        }
    }
</script>
