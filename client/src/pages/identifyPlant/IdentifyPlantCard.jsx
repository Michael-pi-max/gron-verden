import React from 'react';

function IdentifyPlantCard({
  image,
  scientificName,
  url,
  wikiDescription,
  similarProbability,
}) {
  return (
    <div class="newsBlogColumn mb-md-9 mb-6">
      <div class="imgHolder position-relative mb-6">
        <a href="blog-detail.html">
          <img src={image} alt="image description" class="img-fluid" />
        </a>
      </div>
      <div class="textHolder d-flex align-items-start">
        <time
          class="time text-center text-uppercase py-sm-3 py-1 px-1"
          datetime="2019-02-03 20:00"
        >
          {' '}
          <strong class="fwEbold d-block mb-1">{similarProbability}</strong> %
        </time>
        <div class="alignLeft pl-sm-6 pl-3">
          <h2 class="headingV fwEbold mb-2">
            <a href="blog-detail.html">{scientificName}</a>
          </h2>
          <span class="postBy d-block pb-sm-6 pb-2 mb-3">
            More Information: <a href="blog-detail.html">{url}</a>
          </span>
          <p class="mb-0">{wikiDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default IdentifyPlantCard;
