import React from 'react';
import ReactPlayer from 'react-player';

function LearnBody(props) {
  return (
    <>
      <section class="abtSecHolder container pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-5">
        <div class="row">
          <div class="col-12 col-lg-6 pt-xl-12 pt-lg-8">
            <h2 class="playfair fwEbold position-relative mb-7 pb-5">
              <strong class="d-block">Can Music Accelerate Plant Growth</strong>
            </h2>
            <p class="pr-xl-16 pr-lg-10 mb-lg-0 mb-6">
              Believe it or not, numerous studies have indicated that playing
              music for plants really does promote faster, healthier growth
            </p>
          </div>
          <div class="col-12 col-lg-6">
            {/* <img src="https://images.squarespace-cdn.com/content/v1/56f03b0bc6fc086f453d0783/1529951380357-3DXUCO69U0ZU5FMKIH4K/27285561829_2ce7b67ca7_k.jpg?format=1000w" alt="image description" class="img-fluid"/> */}
            <ReactPlayer url="https://www.youtube.com/watch?v=W2WnGlnqGo4&t=48s" />
          </div>
        </div>
      </section>
      <section class="processStepSec container pt-xl-23 pb-xl-10 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-0">
        <div class="row">
          <header class="col-12 mainHeader mb-3 text-center">
            <h1 class="headingIV playfair fwEblod mb-4">
              How to Plant a Tree in Four Easy Steps
            </h1>
            <span class="headerBorder d-block mb-5">
              <img
                src="images/hbdr.png"
                alt="Header Border"
                class="img-fluid img-bdr"
              />
            </span>
          </header>
        </div>
        <div class="row">
          <div class="col-12 pl-xl-23 mb-lg-3 mb-10">
            <div class="stepCol position-relative bg-lightGray py-6 px-6">
              <strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">
                step 01
              </strong>
              <h2 class="headingV fwEblod text-uppercase mb-3">
                Dig a hole for the tree
              </h2>
              <p class="mb-5">
                Dig a hole two to three times the width of the root ball. Test
                the depth of the hole by setting the tree in it. Don’t get it
                too deep — you want the soil line right where it is on the tree
                in the container. The one in the photo above is perfect.
              </p>
            </div>
          </div>
          <div class="col-12 pr-xl-23 mb-lg-3 mb-10">
            <div class="stepCol rightArrow position-relative bg-lightGray py-6 px-6 float-right">
              <strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">
                step 02
              </strong>
              <h2 class="headingV fwEblod text-uppercase mb-3">
                Detangle the tree roots
              </h2>
              <p class="mb-5">
                In general, you want to disturb the roots as little as possible.
                But if you take the tree out of its container and the roots are
                potbound and circling as in the photo above, loosen and tease
                them out with your hands. This will stop them from circling and
                help them to grow out into the surrounding soil. Prune off any
                damaged roots at this time, too.
              </p>
            </div>
          </div>
          <div class="col-12 pl-xl-23 mb-lg-3 mb-10">
            <div class="stepCol position-relative bg-lightGray py-6 px-6">
              <strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">
                step 03
              </strong>
              <h2 class="headingV fwEblod text-uppercase mb-3">
                Backfill & water
              </h2>
              <p class="mb-5">
                Set the tree into the hole, making sure the root collar is at
                the correct level. Backfill the hole halfway with the original
                soil, then fill the hole with water as the photo above shows.
                Wait for the water to soak into the soil and then finish filling
                in the hole with soil.
              </p>
            </div>
          </div>
          <div class="col-12 pr-xl-23 mb-lg-3 mb-10">
            <div class="stepCol rightArrow position-relative bg-lightGray py-6 px-6 float-right">
              <strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">
                step 04
              </strong>
              <h2 class="headingV fwEblod text-uppercase mb-3">
                Add mulch to your newly planted tree
              </h2>
              <p class="mb-5">
                Once the tree’s in the ground, top the soil with a 2- to 4-in.
                layer of organic mulch, such as wood, compost or shredded
                leaves, as you can see in the photo above. Organic mulches hold
                soil moisture and improve the soil as they break down. Don’t let
                mulch touch the trunk, as it holds moisture against the trunk
                and damages the bark. Avoid stone mulch. It can heat up the soil
                and “cook” the roots or stimulate the tree to grow during its
                dormant season.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LearnBody;
