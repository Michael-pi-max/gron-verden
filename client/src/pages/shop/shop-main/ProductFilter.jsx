import React from 'react';

function ProductFilter(props) {
    return (
        <div class="col-12 col-lg-3 order-lg-1">
        <aside id="sidebar">
            <section class="widget overflow-hidden mb-9">
                <form action="javascript:void(0);" class="searchForm position-relative border">
                    <fieldset>
                        <input type="search" class="form-control" placeholder="Search product..."/>
                        <button class="position-absolute"><i class="icon-search"></i></button>
                    </fieldset>
                </form>
            </section>
            <section class="widget overflow-hidden mb-9">
                <h3 class="headingVII fwEbold text-uppercase mb-5">PLANT TYPE</h3>
                <ul class="list-unstyled categoryList mb-0">
                    <li class="mb-5 overflow-hidden"><a href="javascript:void(0);">Table Tree Plants <span class="num border float-right">6</span></a></li>
                    <li class="mb-5 overflow-hidden"><a href="javascript:void(0);">Indoor Plant <span class="num border float-right">8</span></a></li>
                    <li class="mb-4 overflow-hidden"><a href="javascript:void(0);">Office Plant <span class="num border float-right">9</span></a></li>
                    <li class="mb-5 overflow-hidden"><a href="javascript:void(0);">House Plant <span class="num border float-right">6</span></a></li>
                    <li class="overflow-hidden"><a href="javascript:void(0);">Cactus Plant <span class="num border float-right">1</span></a></li>
                </ul>
            </section>
            <section class="widget mb-9">
                <h3 class="headingVII fwEbold text-uppercase mb-6">Filter by price</h3>
                <form action="javascript:void(0);" class="filter-ranger-form">
                    <div id="slider-range"></div>
                    <input type="hidden" id="amount1" name="amount1"/>
                    <input type="hidden" id="amount2" name="amount2"/>
                    <div class="get-results-wrap d-flex align-items-center justify-content-between">
                        <button type="button" class="btn btnTheme btn-shop fwEbold md-round px-3 pt-1 pb-2 text-uppercase">Filter</button>
                        <p id="amount" class="mb-0"></p>
                    </div>
                </form>
            </section>
            <section class="widget mb-9">
                <h3 class="headingVII fwEbold text-uppercase mb-6">top rate</h3>
                <ul class="list-unstyled recentListHolder mb-0 overflow-hidden">
                    <li class="mb-6 d-flex flex-nowrap">
                        <div class="alignleft">
                            <a href="shop-detail.html"><img src="http://placehold.it/70x80" alt="image description" class="img-fluid"/></a>
                        </div>
                        <div class="description-wrap pl-1">
                            <h4 class="headingVII mb-1"><a href="shop-detail.html">Vitamin C face wash</a></h4>
                            <strong class="price fwEbold d-block;">21.00 $</strong>
                        </div>
                    </li>
                    <li class="mb-6 d-flex flex-nowrap">
                        <div class="alignleft">
                            <a href="shop-detail.html"><img src="http://placehold.it/70x80" alt="image description" class="img-fluid"/></a>
                        </div>
                        <div class="description-wrap pl-1">
                            <h4 class="headingVII mb-1"><a href="shop-detail.html">Organic vegetables</a></h4>
                            <strong class="price fwEbold d-block;">21.00 $</strong>
                        </div>
                    </li>
                    <li class="mb-6 d-flex flex-nowrap">
                        <div class="alignleft">
                            <a href="shop-detail.html"><img src="http://placehold.it/70x80" alt="image description" class="img-fluid"/></a>
                        </div>
                        <div class="description-wrap pl-1">
                            <h4 class="headingVII mb-1"><a href="shop-detail.html">Organic cabbage</a></h4>
                            <strong class="price fwEbold d-block;">21.00 $</strong>
                        </div>
                    </li>
                    <li class="mb-6 d-flex flex-nowrap">
                        <div class="alignleft">
                            <a href="shop-detail.html"><img src="http://placehold.it/70x80" alt="image description" class="img-fluid"/></a>
                        </div>
                        <div class="description-wrap pl-1">
                            <h4 class="headingVII mb-1"><a href="shop-detail.html">Organic vegetables</a></h4>
                            <strong class="price fwEbold d-block;">21.00 $</strong>
                        </div>
                    </li>
                    <li class="d-flex flex-nowrap">
                        <div class="alignleft">
                            <a href="shop-detail.html"><img src="http://placehold.it/70x80" alt="image description" class="img-fluid"/></a>
                        </div>
                        <div class="description-wrap pl-1">
                            <h4 class="headingVII mb-1"><a href="shop-detail.html">Vitamin C face wash</a></h4>
                            <strong class="price fwEbold d-block;">21.00 $</strong>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="widget mb-9">
                <h3 class="headingVII fwEbold text-uppercase mb-5">product tags</h3>
                <ul class="list-unstyled tagNavList d-flex flex-wrap mb-0">
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Plant</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Floor</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Indoor</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Green</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Healthy</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Cactus</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">House plant</a></li>
                    <li class="text-center"><a href="javascript:void(0);" class="md-round d-block">Office tree</a></li>
                </ul>
            </section>
        </aside>
    </div>

    );
}

export default ProductFilter;