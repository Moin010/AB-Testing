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

    let whyChooseParaArea = `
    
    <div class="home-paragraph-area">
      <div class="why-choose-paragraph">
        <p>
          Here at GSF Car Parts, you’ll find all of the car parts,
          accessories, batteries, oils and tools you could possibly need
          to keep your vehicle running smoothly. We offer free UK delivery
          on all orders over £25, and there's even the option to
          <a href="https://www.gsfcarparts.com/click-and-collect"
            >Click & Collect</a
          >
          for FREE within an hour at more than 180+ branches across the
          UK. So, if you’re in a pinch, you can get hold of the car parts
          and spares you need quickly and easily.
        </p>
        <p>
          Our range of products is extensive, and we stock parts for all
          makes of car and light commercial vehicle. Plus, if you're
          shopping online and aren't sure where to start, our handy car
          parts finder can help you out. Simply enter your car’s
          registration or vehicle details to find the right car auto parts
          in seconds. You can also use our live chat feature, get in touch
          using our contact form or call us on
          <a href="tel:01216267971">0121 626 7971</a> for assistance.
        </p>
        <p>
          Whether you’re looking to invest in original quality spares or
          you need cheap car parts, you’re sure to find exactly what you
          need here for a great price. In fact, many of our parts are up
          to half the price of those you’ll find at some main dealer
          retailers. So, shop with us now to get car parts for less.
        </p>
        <p>
          While we’re trade specialists, all of our customers will receive
          a warm welcome from our knowledgeable staff. And, they’ll be
          more than happy to help you find the car parts, accessories,
          batteries, or tools that you require.
        </p>
      </div>
    </div>

    `;

    let howOrderingWithGSFCarPartsWorks = `
    
    <div class="how-ordering-with-GSF-car-parts-works-area">
    <div class="process-area-header">
      <h5>How ordering with GSF Car Parts works</h5>
    </div>
    <div class="process-step-area">
      <!--  -->
      <div class="process-step">
        <div class="step-header">
          <div class="step-header-icon">
            <i class="fa-regular fa-car"></i>
          </div>
          <div class="step-header-text">
            <h6>Enter your number plate</h6>
          </div>
        </div>
        <div class="step-info">
          <p>
            Enter your vehicles number plate or select your vehicle to
            find parts that fit your vehicle in seconds.
          </p>
        </div>
      </div>
      <!--  -->
      <div class="process-step">
        <div class="step-header">
          <div class="step-header-icon">
            <i class="fa-regular fa-cart-shopping"></i>
          </div>
          <div class="step-header-text">
            <h6>Shop parts that fit your vehicle</h6>
          </div>
        </div>
        <div class="step-info">
          <p>
            Once you have found your vehicle, you will find original and
            high quality parts that fit your vehicle.
          </p>
        </div>
      </div>
      <!--  -->
      <div class="process-step">
        <div class="step-header">
          <div class="step-header-icon">
            <i class="fa-regular fa-box-check"></i>
          </div>
          <div class="step-header-text">
            <h6>Collect within 30 minutes</h6>
          </div>
        </div>
        <div class="step-info">
          <p>
            With 180+ branches nationwide, you can collect the same day,
            or have the parts delivered to your home.
          </p>
        </div>
      </div>
    </div>
    <div class="process-review-area">
      <div class="review-text">
        <p>
          “Within
          <span class="bold-text underline-text">30 minutes</span> from
          ordering, the parts were fitted, fantastic service!”
        </p>
      </div>
      <div class="review-star-area">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star-half-stroke"></i>
      </div>
      <div class="review-rating-area">
        <p>
          Rated <span class="bold-text">4.5</span> from over
          <span class="bold-text">48,000</span> reviews
        </p>
      </div>
    </div>
  </div>
    
    `;

    if (location.href == "https://www.gsfcarparts.com/") {
      console.log("this is home");

      newsLetter.insertAdjacentHTML("beforebegin", whyChooseCardArea);

      let whyChooseArea = document.querySelector(".why-choose-GSF-car-parts");
      let injectedParent = whyChooseArea.parentElement.parentElement;

      if (!injectedParent.classList.contains("home-page")) {
        injectedParent.classList.add("home-page");
      }

      whyChooseArea.insertAdjacentHTML("beforeend", whyChooseParaArea);
      whyChooseArea.insertAdjacentHTML(
        "beforeend",
        howOrderingWithGSFCarPartsWorks
      );
    } else {
      newsLetter.insertAdjacentHTML("beforebegin", whyChooseCardArea);
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
