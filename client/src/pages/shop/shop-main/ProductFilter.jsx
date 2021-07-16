import React from 'react';

function ProductFilter(props) {
  return (
    <div class="col-12 col-lg-3 order-lg-1">
      <aside id="sidebar">
        <section class="widget overflow-hidden mb-9">
          <form
            action="javascript:void(0);"
            class="searchForm position-relative border"
          >
            <fieldset>
              <input
                type="search"
                class="form-control"
                placeholder="Search product..."
              />
              <button class="position-absolute">
                <i class="icon-search"></i>
              </button>
            </fieldset>
          </form>
        </section>
        <section class="widget overflow-hidden mb-9">
          <h3 class="headingVII fwEbold text-uppercase mb-5">PLANT TYPE</h3>
          <ul class="list-unstyled categoryList mb-0">
            <li class="mb-5 overflow-hidden">
              <a href="javascript:void(0);">
                Table Tree Plants <span class="num border float-right"></span>
              </a>
            </li>
            <li class="mb-5 overflow-hidden">
              <a href="javascript:void(0);">
                Indoor Plant <span class="num border float-right"></span>
              </a>
            </li>
            <li class="mb-4 overflow-hidden">
              <a href="javascript:void(0);">
                Office Plant <span class="num border float-right"></span>
              </a>
            </li>
            <li class="mb-5 overflow-hidden">
              <a href="javascript:void(0);">
                House Plant <span class="num border float-right"></span>
              </a>
            </li>
            <li class="overflow-hidden">
              <a href="javascript:void(0);">
                Cactus Plant <span class="num border float-right"></span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default ProductFilter;
