<template>
    <!-- plan-area -->
    <section class="plan-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="section-title text-center mb-50">
                                <span class="sub-title">odious Plan</span>
                                <h2 class="title">Apartment Plans</h2>
                            </div>
                            <div class="plan-nav-wrap">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="apartment-tab" data-bs-toggle="tab" data-bs-target="#apartment" type="button"
                                            role="tab" aria-controls="apartment" aria-selected="true">Apartment</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="simplex-tab" data-bs-toggle="tab" data-bs-target="#simplex" type="button"
                                            role="tab" aria-controls="simplex" aria-selected="false">Simplex</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="duplex-tab" data-bs-toggle="tab" data-bs-target="#duplex" type="button"
                                            role="tab" aria-controls="duplex" aria-selected="false">Duplex</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="double-tab" data-bs-toggle="tab" data-bs-target="#double" type="button"
                                            role="tab" aria-controls="double" aria-selected="false">Double Height</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio" type="button"
                                            role="tab" aria-controls="studio" aria-selected="false">Studio</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button"
                                            role="tab" aria-controls="penthouse" aria-selected="false">Penthouse</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="apartment" role="tabpanel" aria-labelledby="apartment-tab">
                                    <div class="plan-nav-details">
                                        <div class="apartment-plan-nav">
                                            <ul class="nav nav-tabs" id="innermyTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="plan-tab" data-bs-toggle="tab" data-bs-target="#plan" type="button"
                                                        role="tab" aria-controls="plan" aria-selected="true">Plans</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab"
                                                        aria-controls="video" aria-selected="false">Video</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video360-tab" data-bs-toggle="tab" data-bs-target="#video360" type="button"
                                                        role="tab" aria-controls="video360" aria-selected="false">360 Video</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="innermyTabContent">
                                            <div class="tab-pane fade show active" id="plan" role="tabpanel" aria-labelledby="plan-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                            <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i class="fas fa-play"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video360" role="tabpanel" aria-labelledby="video360-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="view-360-deg ">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                                                                allowfullscreen="" loading="lazy"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="simplex" role="tabpanel" aria-labelledby="simplex-tab">
                                    <div class="plan-nav-details">
                                        <div class="apartment-plan-nav">
                                            <ul class="nav nav-tabs" id="innermyTabone" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="planOne-tab" data-bs-toggle="tab" data-bs-target="#planOne" type="button"
                                                        role="tab" aria-controls="planOne" aria-selected="true">Plans</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="videoOne-tab" data-bs-toggle="tab" data-bs-target="#videoOne" type="button"
                                                        role="tab" aria-controls="videoOne" aria-selected="false">Video</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video360One-tab" data-bs-toggle="tab" data-bs-target="#video360One" type="button"
                                                        role="tab" aria-controls="video360One" aria-selected="false">360 Video</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="innermyTabContentone">
                                            <div class="tab-pane fade show active" id="planOne" role="tabpanel" aria-labelledby="planOne-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="videoOne" role="tabpanel" aria-labelledby="videoOne-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                            <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i
                                                                    class="fas fa-play"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video360One" role="tabpanel" aria-labelledby="video360One-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="view-360-deg ">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                                                                allowfullscreen="" loading="lazy"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="duplex" role="tabpanel" aria-labelledby="duplex-tab">
                                    <div class="plan-nav-details">
                                        <div class="apartment-plan-nav">
                                            <ul class="nav nav-tabs" id="innermyTabtwo" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="planTwo-tab" data-bs-toggle="tab" data-bs-target="#planTwo" type="button"
                                                        role="tab" aria-controls="planTwo" aria-selected="true">Plans</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="videoTwo-tab" data-bs-toggle="tab" data-bs-target="#videoTwo" type="button"
                                                        role="tab" aria-controls="videoTwo" aria-selected="false">Video</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video360Two-tab" data-bs-toggle="tab" data-bs-target="#video360Two" type="button"
                                                        role="tab" aria-controls="video360Two" aria-selected="false">360 Video</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="innermyTabContenttow">
                                            <div class="tab-pane fade show active" id="planTwo" role="tabpanel" aria-labelledby="planTwo-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="videoTwo" role="tabpanel" aria-labelledby="videoTwo-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                            <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i
                                                                    class="fas fa-play"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video360Two" role="tabpanel" aria-labelledby="video360Two-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="view-360-deg ">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                                                                allowfullscreen="" loading="lazy"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="double" role="tabpanel" aria-labelledby="double-tab">
                                    <div class="plan-nav-details">
                                        <div class="apartment-plan-nav">
                                            <ul class="nav nav-tabs" id="innermyTabthree" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="planThree-tab" data-bs-toggle="tab" data-bs-target="#planThree" type="button"
                                                        role="tab" aria-controls="planThree" aria-selected="true">Plans</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="videoThree-tab" data-bs-toggle="tab" data-bs-target="#videoThree" type="button"
                                                        role="tab" aria-controls="videoThree" aria-selected="false">Video</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video360Three-tab" data-bs-toggle="tab" data-bs-target="#video360Three" type="button"
                                                        role="tab" aria-controls="video360Three" aria-selected="false">360 Video</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="innermyTabContentthree">
                                            <div class="tab-pane fade show active" id="planThree" role="tabpanel" aria-labelledby="planThree-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="videoThree" role="tabpanel" aria-labelledby="videoThree-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                            <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i
                                                                    class="fas fa-play"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video360Three" role="tabpanel" aria-labelledby="video360Three-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="view-360-deg ">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                                                                allowfullscreen="" loading="lazy"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="studio" role="tabpanel" aria-labelledby="studio-tab">
                                    <div class="plan-nav-details">
                                        <div class="apartment-plan-nav">
                                            <ul class="nav nav-tabs" id="innermyTabfour" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="planFour-tab" data-bs-toggle="tab" data-bs-target="#planFour" type="button"
                                                        role="tab" aria-controls="planFour" aria-selected="true">Plans</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="videoFour-tab" data-bs-toggle="tab" data-bs-target="#videoFour" type="button"
                                                        role="tab" aria-controls="videoFour" aria-selected="false">Video</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video360Four-tab" data-bs-toggle="tab" data-bs-target="#video360Four" type="button"
                                                        role="tab" aria-controls="video360Four" aria-selected="false">360 Video</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="innermyTabContentfour">
                                            <div class="tab-pane fade show active" id="planFour" role="tabpanel" aria-labelledby="planFour-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="videoFour" role="tabpanel" aria-labelledby="videoFour-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                            <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i
                                                                    class="fas fa-play"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video360Four" role="tabpanel" aria-labelledby="video360Four-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="view-360-deg ">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                                                                allowfullscreen="" loading="lazy"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                                    <div class="plan-nav-details">
                                        <div class="apartment-plan-nav">
                                            <ul class="nav nav-tabs" id="innermyTabfive" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="planFive-tab" data-bs-toggle="tab" data-bs-target="#planFive" type="button"
                                                        role="tab" aria-controls="planFive" aria-selected="true">Plans</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="videoFive-tab" data-bs-toggle="tab" data-bs-target="#videoFive" type="button"
                                                        role="tab" aria-controls="videoFive" aria-selected="false">Video</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="video360Five-tab" data-bs-toggle="tab" data-bs-target="#video360Five" type="button"
                                                        role="tab" aria-controls="video360Five" aria-selected="false">360 Video</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="innermyTabContentfive">
                                            <div class="tab-pane fade show active" id="planFive" role="tabpanel" aria-labelledby="planFive-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="videoFive" role="tabpanel" aria-labelledby="videoFive-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <div class="plan-img">
                                                            <img src="~/assets/img/images/plan_img.png" alt="">
                                                            <a href="https://www.youtube.com/watch?v=iVQhkDZS_Tk" class="play-btn popup-video pulse"><i
                                                                    class="fas fa-play"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="plan-list">
                                                            <ul>
                                                                <li>Floor <span>05</span></li>
                                                                <li>Rooms <span>06</span></li>
                                                                <li>Area M2<span>500</span></li>
                                                                <li>Parking<span>02</span></li>
                                                                <li>Space <span>1500 sqf</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="video360Five" role="tabpanel" aria-labelledby="video360Five-tab">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="view-360-deg ">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                                                                allowfullscreen="" loading="lazy"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- plan-area-end -->
</template>