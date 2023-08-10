<template>
    <!-- property-area -->
    <section class="property-area">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-xxl-9 col-xl-10 col-lg-11">
                            <div class="property-form">
                                <form action="#">
                                    <ul>
                                        <li>
                                            <img src="~/assets/img/images/title_line.png" alt="">
                                            <h4 class="title">Find related Property</h4>
                                        </li>
                                        <li>
                                            <div class="form-grp">
                                                <label for="home"><i class="fas fa-home"></i></label>
                                                <input id="home" type="text" placeholder="Search e.g.">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-grp select">
                                                <label for="selected"><i class="fas fa-globe"></i></label>
                                                <select id="selected" name="name" class="selected property-selected">
                                                    <option>Area</option>
                                                    <option>New York</option>
                                                    <option>Boston</option>
                                                    <option>Berlin</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-grp">
                                                <label for="dollar"><i class="fas fa-dollar-sign"></i></label>
                                                <input id="dollar" type="text" placeholder="Budget">
                                            </div>
                                        </li>
                                        <li>
                                            <button type="submit"><i class="far fa-search"></i></button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- property-area-end -->
</template>