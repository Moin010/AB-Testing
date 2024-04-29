var TansenBhaiShadow = {
  init: function () {
    this.mainJS();
  },

  mainJS: function () {
    console.log("hello moin");
    let newsLetter = document.querySelector(".newsletter-bottom");

    let whyChooseCardArea = `
        
      <div class="why-choose-GSF-car-parts-parent">
      <div class="container">
        <div class="why-choose-GSF-car-parts">
          <div class="section-header">
            <p>Why choose GSF Car Parts?</p>
          </div>
          <div class="why-choose-card-area">
            <div class="why-choose-card">
              <div class="icon-with-heading-area">
                <span class="card-icon">
                  <i class="fa-light fa-truck"></i>
                </span>
                <span class="card-header">
                  <h5>FREE UK Delivery</h5>
                </span>
              </div>
              <div class="card-info">
                <p>
                  Free delivery is applicable on all orders over £25 inc VAT to
                  UK mainland addresses.
                </p>
              </div>
            </div>

            <div class="why-choose-card">
              <div class="icon-with-heading-area">
                <span class="card-icon">
                  <i class="fa-regular fa-box-check"></i>
                </span>
                <span class="card-header">
                  <h5>FREE Click & Collect</h5>
                </span>
              </div>
              <div class="card-info">
                <p>
                  Over 180 store locations across the UK & Ireland, ready for
                  you to collect in just 30 minutes.
                </p>
              </div>
            </div>

            <!--  -->

            <div class="why-choose-card">
              <div class="icon-with-heading-area">
                <span class="card-icon">
                  <i class="fa-regular fa-hand-holding-box"></i>
                </span>
                <span class="card-header">
                  <h5>60 Day Returns</h5>
                </span>
              </div>
              <div class="card-info">
                <p>
                  All the products we sell have a minimum of 12 months warranty
                  (unless otherwise stated).
                </p>
              </div>
            </div>

            <!--  -->

            <div class="why-choose-card">
              <div class="icon-with-heading-area">
                <span class="card-icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </span>
                <span class="card-header">
                  <h5>Rated Excellent</h5>
                </span>
              </div>
              <div class="card-info">
                <p>
                  Rated 4.5/5 from over 45,000 reviews, we are trusted trade
                  specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    if (!location.href == "https://www.gsfcarparts.com/") {
      newsLetter.insertAdjacentHTML("beforebegin", whyChooseCardArea);
    } else {
      console.log("this is home");
    }
    console.log("hello moin 2");
  },
};
(function pollForTansenBhaiShadow() {
  if (document.querySelectorAll(".newsletter-bottom").length) {
    try {
      if (
        !document.querySelector("body").classList.contains("TansenBhaiShadow")
      ) {
        document.querySelector("body").classList.add("TansenBhaiShadow");
        TansenBhaiShadow.init();
      }
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(TansenBhaiShadow, 25);
  }
})();
