<template>
    <!-- Scroll-top -->
    <button class="scroll-top scroll-to-target" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>
        <!-- Scroll-top-end-->
        <!-- main-area -->
        <main>
            <!-- breadcrumb-area -->
            <section class="breadcrumb-area breadcrumb-bg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <div class="breadcrumb-content">
                                <span class="sub-title">Welcome Our Property</span>
                                <h2 class="title">Get In Touch</h2>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="breadcrumb-right text-end">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->
            <!-- contact-area -->
            <div class="contact-area pt-120 pb-90">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact-video">
                                <img src="~/assets/img/images/video_img02.jpg" alt="">
                                <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i class="fas fa-play"></i></a>
                            </div>
                            <div class="contact-content">
                                <div class="section-title">
                                    <span class="sub-title">catch us here</span>
                                    <h2 class="title">The feeling is mutual. These are the <br> best ways to make it happen.</h2>
                                </div>
                                <div class="contact-info-wrap">
                                    <div class="row align-items-center">
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="contact-info-item">
                                                <span>Become a client</span>
                                                <h4 class="title">info@landiox-works.com <br> 720.797.2031</h4>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="contact-info-item">
                                                <span>Media inquiries</span>
                                                <h4 class="title">info@landiox-media.com <br> 720.797.2031</h4>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="contact-info-item">
                                                <span>General</span>
                                                <h4 class="title">info@landiox-gen.com <br> 720.797.9999</h4>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="contact-info-item">
                                                <a href="#" class="btn">Get Direction</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- contact-area-end -->
            <!-- cta-area -->
            <section class="cta-area contact-form-area">
                <div id="contact-map-two">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd"
                        allowfullscreen loading="lazy"></iframe>
                </div>
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-xl-5 col-lg-6">
                            <div class="cta-content">
                                <div class="section-title mb-50">
                                    <span class="sub-title">call to action</span>
                                    <h2 class="title">Schedule A Visit</h2>
                                </div>
                                <form action="#" class="cta-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <label for="name"><i class="fas fa-user"></i></label>
                                                <input type="text" id="name" placeholder="Full name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <label for="number"><i class="fas fa-phone"></i></label>
                                                <input type="text" id="number" placeholder="890 90">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <label for="email"><i class="fas fa-envelope"></i></label>
                                                <input type="email" id="email" placeholder="Email address">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <label for="subject"><i class="fas fa-book"></i></label>
                                                <input type="text" id="subject" placeholder="Subject">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-grp">
                                        <label for="message"><i class="fas fa-pen"></i></label>
                                        <textarea id="message" name="message" placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit" class="submit-btn">Submit Request</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- cta-area-end -->
        </main>
        <!-- main-area-end -->
</template>