<template>
  <div class="opportunities height-section">
    <div class="max-container">
      <tit-h2>Возможности <span class="mark">безграничны!</span> </tit-h2>

      <div class="opportunities-container">
        <div class="opportunities-first-slider">
          <div class="swiper opportunities-slider">
            <div
              class="
                swiper-wrapper
                opportunities-fog
                opportunities-slider__wrapper
              "
            >
              <div class="opportunities-fog1"></div>
              <div
                class="swiper-slide opportunities-slide"
                v-for="slide in sliderArr"
                :key="slide.id"
              >
                <div class="opportunities-slide__img">
                  <img
                    :src="require(`@/assets/img/${slide.img}`)"
                    alt=""
                    v-full-img="{ title: slide.title, text: slide.texts }"
                  />
                </div>
              </div>
            </div>
            <div class="opportunities__controll">
              <div class="opportunities__btns">
                <button class="opportunities-prev">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.64465 2.08049L2.9309 6.79423L7.64465 11.508C8.11845 11.9818 8.11845 12.7472 7.64465 13.221C7.17084 13.6948 6.40547 13.6948 5.93166 13.221L0.355353 7.64465C-0.118451 7.17084 -0.118451 6.40547 0.355353 5.93166L5.93166 0.355353C6.40547 -0.118451 7.17084 -0.118451 7.64465 0.355353C8.1063 0.829157 8.11845 1.60668 7.64465 2.08049Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button class="opportunities-next">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.64465 2.08049L2.9309 6.79423L7.64465 11.508C8.11845 11.9818 8.11845 12.7472 7.64465 13.221C7.17084 13.6948 6.40547 13.6948 5.93166 13.221L0.355353 7.64465C-0.118451 7.17084 -0.118451 6.40547 0.355353 5.93166L5.93166 0.355353C6.40547 -0.118451 7.17084 -0.118451 7.64465 0.355353C8.1063 0.829157 8.11845 1.60668 7.64465 2.08049Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper opportunities-slider1">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="slide in sliderArr"
              :key="slide.id"
            >
              <div class="opportunities__content">
                <g-title class="no-mobile-line">{{ slide.title }}</g-title>
                <v-text v-for="(text, i) in slide.texts" :key="i">
                  {{ text }}
                </v-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderArr: [
        {
          id: 0,
          img: "slide1.jpg",
          title: "ДОДж Скрипт на автоматический додж способностей1",
          texts: [
            `С помощью всевозможных предметов и способностей Ваш герой
                  словно ниндзя будет уворачиваться от всех вражеских
                  способностей, что делает`,
            `Вас практически неуязвимым. В
                  комплекте идёт модуль авто-сейва союзников с помощью лотуса,
                  глиммера и всех способностей, которые могут это сделать. Кого,
                  как и чем сейвить — Вы можете выбрать самостоятельно.`,
          ],
        },
        {
          id: 1,
          img: "slide2.jpg",
          title: "ДОДж Скрипт на автоматический додж способностей2",
          texts: [
            `С помощью всевозможных предметов и способностей Ваш герой
                  словно ниндзя будет уворачиваться от всех вражеских
                  способностей, что делает`,
            `Вас практически неуязвимым. В
                  комплекте идёт модуль авто-сейва союзников с помощью лотуса,
                  глиммера и всех способностей, которые могут это сделать. Кого,
                  как и чем сейвить — Вы можете выбрать самостоятельно.`,
          ],
        },
        {
          id: 3,
          img: "slide3.jpg",
          title: "ДОДж Скрипт на автоматический додж способностей3",
          texts: [
            `С помощью всевозможных предметов и способностей Ваш герой
                  словно ниндзя будет уворачиваться от всех вражеских
                  способностей, что делает`,
            `Вас практически неуязвимым. В
                  комплекте идёт модуль авто-сейва союзников с помощью лотуса,
                  глиммера и всех способностей, которые могут это сделать. Кого,
                  как и чем сейвить — Вы можете выбрать самостоятельно.`,
          ],
        },
        {
          id: 4,
          img: "slide2.jpg",
          title: "ДОДж Скрипт на автоматический додж способностей4",
          texts: [
            `С помощью всевозможных предметов и способностей Ваш герой
                  словно ниндзя будет уворачиваться от всех вражеских
                  способностей, что делает`,
            `Вас практически неуязвимым. В
                  комплекте идёт модуль авто-сейва союзников с помощью лотуса,
                  глиммера и всех способностей, которые могут это сделать. Кого,
                  как и чем сейвить — Вы можете выбрать самостоятельно.`,
          ],
        },
        {
          id: 5,
          img: "slide4.jpg",
          title: "ДОДж Скрипт на автоматический додж способностей5",
          texts: [
            `С помощью всевозможных предметов и способностей Ваш герой
                  словно ниндзя будет уворачиваться от всех вражеских
                  способностей, что делает`,
            `Вас практически неуязвимым. В
                  комплекте идёт модуль авто-сейва союзников с помощью лотуса,
                  глиммера и всех способностей, которые могут это сделать. Кого,
                  как и чем сейвить — Вы можете выбрать самостоятельно.`,
          ],
        },
      ],
      initSlide: 2,
    };
  },
  mounted() {
    const slide1 = this.sliderArr.map((item) => {
      item.id += 0.1;
      return item;
    });
    const slide2 = this.sliderArr.map((item) => {
      item.id += 0.1;
      return item;
    });

    const resultSlidesArr = slide1.concat(this.sliderArr, slide2);

    this.sliderArr = resultSlidesArr;
    this.initSlide = resultSlidesArr.length / 3

    const slider1 = new Swiper(".opportunities-slider1", {
      slidesPerView: 1,
      centeredSlides: true,
      initialSlide: 2,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      enabled: false,
    });
    const slider = new Swiper(".opportunities-slider", {
      slidesPerView: 5,
      initialSlide: this.initSlide,
      centeredSlides: true,
      slideActiveClass: "_active",
      slideNextClass: "_next",
      slidePrevClass: "_prev",

      effect: "creative",
      creativeEffect: {
        limitProgress: 5,
        prev: {
          translate: ["-100%", 0, 0],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl: ".opportunities-next svg path",
        prevEl: ".opportunities-prev svg path",
      },
      
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    slider1.controller.control = slider;
    slider.controller.control = slider1;
  },
};
</script>

<style lang="scss">
.opportunities {
  overflow: hidden;
  .swiper-wrapper {
    position: static !important;
  }

  .opportunities-slider1 {
    z-index: 99;
  }
}
.opportunities-first-slider {
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    
    width: 12%;
    height: 30%;
    bottom: 22%;
    z-index: 999;
    pointer-events: none;


    @media (max-width: 768px) {
      display: none;
    }
  }

  &:after {
    left: -2%;
    background:  #B63F3F;
    filter: blur(92px);
  }
  &:before {
    right: -2%;
    background: #3D2F70;
    filter: blur(75px);
  }
}
.opportunities-container {
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1600px;
  position: relative;

  .opportunities-fog1 {
    position: absolute;
    top: 30%;
    left: -54%;
    opacity: 1;
    width: 140%;
    height: 100%;
    background: #fff;
    z-index: 15;

    background: url("~@/assets/img/bg-fog.png") no-repeat center;
    background-size: 95%;

    pointer-events: none;

    @media (max-width:768px) {
      display: none;
    }
  }

  &::after {
    content: "";
    width: 110%;
    height: 100%;
    background: url("~@/assets/img/fog2.png") no-repeat;
    background-size: 94%;
    background-position: center center;
    top: -22%;
    left: -5%;
    position: absolute;
    z-index: -1;
    pointer-events: none;
    @media (max-width: 567px) {
      display: none;
    }
  }

  &::before {
    transition: none;
    content: "";
    width: 100%;
    height: 130px;

    top: 70%;
    left: 0;

    background: #0f171e;
    position: absolute;
    z-index: 3;
    filter: drop-shadow(0 -47px 31px #0f171e);

    @media (max-width: 1360px) {
      bottom: -60px;
      // filter: drop-shadow(0 -10px 2px #0f171e);
      // bottom: -60px;
    }

    @media (max-width: 768px) {
      height: 10px;
      filter: drop-shadow(0 -10px 2px #0f171e);
      bottom: -20px;
    }
  }
}
.opportunities {
  .tit-h2 {
    margin-bottom: 48px;
    @media (max-width: 567px) {
      margin-bottom: 30px;
    }
  }
  margin-bottom: -140px;
  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
  &__controll {
    width: 100%;
    position: absolute;
    justify-content: center;

    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    display: flex;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .opportunities-next {
      transform: rotate(180deg);
    }
    .opportunities-next,
    .opportunities-prev {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  &__btns {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1156px;
    @media (max-width: 1400px) {
      max-width: 1000px;
    }
    @media (max-width: 1200px) {
      max-width: 992px;
    }
    @media (max-width: 1024px) {
      max-width: 800px;
    }
  }
  &__content {
    position: relative;
    z-index: 9999;

    display: flex;
    flex-direction: column;
    align-items: center;
    .g-title {
      margin-bottom: 30px;
    }
    .v-text {
      text-align: center;
      color: rgba(127, 128, 147, 0.83);
      max-width: 860px;
    }
    @media (min-width: 768px) {
      // transform: translateY(-50px);
    }
  }

  padding-bottom: 78px;
  position: relative;
  z-index: 10;
  .opportunities-slider__wrapper {
    padding: 295px 0 130px 0;

    @media (max-width: 1024px) {
      padding: 255px 0 0px 0;
    }
    @media (max-width: 768px) {
      padding: 0;
      margin-bottom: 20px;
    }
    position: relative;
  }
  .opportunities-slide {
    transition: 0.1s;
    overflow: visible;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      user-select: none;
    }
  }
  @media (min-width: 768px) {
    .opportunities-slide {
      // position: relative;

      &__img {
        transition: 0.5s;
        filter: brightness(60%);
      }

      // active
      &._active {
      }
      &._active .opportunities-slide__img {
        transform: translateY(-100px) scale(3.13);
        opacity: 1;
        filter: brightness(100%);
        cursor: pointer;
      }

      // &._active::after {
      //   content: "";
      //   width: 180%;
      //   height: 150%;
      //   background: url("~@/assets/img/bg-fog.png") no-repeat center;
      //   top: 80%;
      //   background-size: 90%;
      //   transform: translateY(-50%);
      //   left: -40%;
      //   position: absolute;
      //   z-index: -1;
      //   pointer-events: none;
      // }

      // next
      &._next {
        z-index: 2;
      }
      &._next .opportunities-slide__img {
        transform: translateY(-80px) scale(2.5) translateX(-10px);
        opacity: 1;
      }

      // prev
      &._prev .opportunities-slide__img {
        z-index: 2;
        transform: translateY(-80px) scale(2.5) translateX(5px);
        opacity: 1;
      }

      // слайд после next
      &._next + .opportunities-slide .opportunities-slide__img {
        transform: translateY(-34px) scale(2) translateX(-25%);
      }

      // слайд за prev
      & .opportunities-slide__img {
        transform: translateY(-34px) scale(2) translateX(25%);
      }
    }
  }
}
</style>