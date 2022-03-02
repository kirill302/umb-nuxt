<template>
  <div>
    <div class="intro">
      <div class="intro-slider swiper">
        <div class="intro-slider__wrapper swiper-wrapper">
          <div
            class="intro-slide swiper-slide"
            :data-id="slide.id"
            v-for="slide in slierArr"
            :key="slide.id"
          >
            <div class="intro-slide__border">
              <div class="intro-slide__img">
                <img
                  :src="require(`@/assets/img/${slide.img}`)"
                  alt=""
                  :style="`object-position: ${slide.pos}; transform: scale(${slide.scale})`"
                  v-full-img="{ text: slide.text, title: slide.title }"
                />
              </div>

              <div class="intro-slide__id">
                {{ slide.num }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro-slider1 swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in slierArr" :key="slide.id">
            <v-quote class="">
              <template v-slot:title> {{ slide.title }} </template>
              <template v-slot:text>
                {{ slide.text }}
              </template>
            </v-quote>
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
      slierArr: [
        {
          id: 0,
          title: "WARD TRACKER1",
          text: "1 Всегда знай, какие способности у вражеских героев не изучены, на сколько прокачаны, перезаряжаются ли и на что хватает маны",
          img: "intro-slide1.jpg",
          num: "04",
          pos: "0% 0%",
          scale: "2.8",
        },
        {
          id: 1,
          title: "WARD TRACKER2",
          text: "2 Всегда знай, какие способности у вражеских героев не изучены, на сколько прокачаны, перезаряжаются ли и на что хватает маны",
          img: "intro-slide1.jpg",
          pos: "39% 60%",
          scale: "1.6",
          num: "05",
        },
        {
          id: 2,
          title: "WARD TRACKER3",
          text: "3 Всегда знай, какие способности у вражеских героев не изучены, на сколько прокачаны, перезаряжаются ли и на что хватает маны",
          img: "intro-slide1.jpg",
          pos: "68% 60%",
          scale: "1.6",
          num: "01",
        },
        {
          id: 3,
          title: "WARD TRACKER4",
          text: "4 Всегда знай, какие способности у вражеских героев не изучены, на сколько прокачаны, перезаряжаются ли и на что хватает маны",

          img: "intro-slide1.jpg",
          pos: "100% 60%",
          scale: "1.7",
          num: "02",
        },
        {
          id: 4,
          title: "WARD TRACKER5",
          text: "5 Всегда знай, какие способности у вражеских героев не изучены, на сколько прокачаны, перезаряжаются ли и на что хватает маны",
          img: "intro-slide1.jpg",
          pos: "20% 0%",
          scale: "3",
          num: "02",
        },
      ],
      initSlide: 2,

    };
  },
  methods: {
    canUseWebp() {
      let elem = document.createElement("canvas");
      if (!!(elem.getContext && elem.getContext("2d"))) {
        return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
      }
      return false;
    },
  },
  mounted() {
    const slide1 = this.slierArr.map((item) => {
      item.id += 0.1;
      return item;
    });
    const slide2 = this.slierArr.map((item) => {
      item.id += 0.1;
      return item;
    });

    const resultSlidesArr = slide1.concat(this.slierArr, slide2);

    this.slierArr = resultSlidesArr;
    this.initSlide = resultSlidesArr.length / 3

    const introSlider1 = new Swiper(".intro-slider1", {
      slidesPerView: 1,
      centeredSlides: true,
      // initialSlide: 2,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      loopSlides: 10,

      loopedSlides: 20,
      enabled: false,
    });
    const introSlider = new Swiper(".intro-slider", {
      slidesPerView: 2,
      initialSlide: this.initSlide,
      centeredSlides: true,
      slideActiveClass: "_active",
      slideNextClass: "_next",
      slidePrevClass: "_prev",

      // longSwipes: false,
      // shortSwipes: false,

      // longSwipesMs: 1000,

      autoplay: {
        delay: 2000,
      },
      loop: true,
      speed: 1000,
      loopSlides: 10,

      loopedSlides: 20,
      // controller: {
      //   control: introSlider1,
      // },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      effect: "creative",
      creativeEffect: {
        limitProgress: 20,
        prev: {
          translate: ["-100%", 0, 0],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        567: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });

    introSlider.controller.control = introSlider1;
    introSlider1.controller.control = introSlider;

    introSlider.on("autoplayStop", () => {
      introSlider.autoplay.stop();
      setInterval(() => {
        introSlider.autoplay.start();
      }, 10000);
    });
  },
};
</script>

<style lang="scss">
.intro {
  padding-top: 150px;
  padding-bottom: 60px;

  min-height: 100vh;
  background: url("~@/assets/img/intro-bg.png") no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 2;

  @media (max-width: 1100px) {
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  @media (max-width: 567px) {
    margin-bottom: 0;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 20;
    background: url("~/assets/img/intro-bg1.png") no-repeat center;
    background-size: cover;
    pointer-events: none;

    @media (max-width: 768px) {
      display: none;
    }
  }
}
.intro-slider {
  margin: 0 auto;
  max-width: 1800px;
  margin-bottom: 65px;
}
.intro-slider1 {
  max-width: 1440px;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .quote {
    width: 30%;

    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 567px) {
      width: 90%;
    }
  }
}
.intro-slide {
  cursor: pointer;
  position: relative;
  height: 532.24px;
  overflow: visible !important;
  @media (max-width: 835px) {
    height: 300px;
  }
  &__border {
    transition: 0.3s;
    transform: scale(0.7) translateX(45%);
    position: relative;
    transform: scale(1);
    width: 100%;
    height: 100%;
    padding: 7px;
    background: #221d1d;
  }

  .intro-slide__id {
    font-size: 28px;
    bottom: 9%;
    user-select: none;
  }

  &__border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    pointer-events: none;
    background: conic-gradient(
      from 203.97deg at 44.65% 101.83%,
      #527fe1 0deg,
      rgba(116, 103, 172, 0.483516) 88.12deg,
      rgba(147, 81, 123, 0) 172.67deg,
      #dc1e0a 360deg
    );
  }

  &__img {
    position: relative;
    width: 100%;
    height: 100%;
    clip-path: polygon(17% 8%, 100% 0, 83% 100%, 0 90%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
    }
  }
  & {
    .intro-slide__border {
      clip-path: polygon(17% 8%, 100% 0, 83% 100%, 0 90%);
      transform: scale(0.7) translateX(45%);
    }

    .intro-slide__img {
      clip-path: polygon(17% 8%, 100% 0, 83% 100%, 0 90%);
    }
  }
  &._active {
    .intro-slide__border {
      clip-path: polygon(17% 2%, 62% 0%, 100% 2%, 83% 98%, 36% 100%, 0% 98%);
      transform: scale(1);
    }
    .intro-slide__img {
      clip-path: polygon(17% 2%, 62% 0%, 100% 2%, 83% 98%, 36% 100%, 0% 98%);
      transform: scale(1);
    }
    &:after {
      clip-path: polygon(17% 2%, 62% 0%, 100% 2%, 83% 98%, 36% 100%, 0% 98%);
    }
    .intro-slide__id {
      font-size: 35px;
      bottom: 5%;
    }
  }
  &._prev {
    .intro-slide__border {
      clip-path: polygon(17% 8%, 100% 0, 83% 100%, 0 90%);
      transform: scale(0.9) translateX(10%);
    }
    .intro-slide__img {
      clip-path: polygon(17% 8%, 100% 0, 83% 100%, 0 90%);
    }
    .intro-slide__id {
      font-size: 28px;
    }
  }
  &._next {
    .intro-slide__border {
      clip-path: polygon(17% 0%, 100% 8%, 83% 93%, 0 100%);
      transform: scale(0.9) translateX(-10%);
    }

    .intro-slide__img {
      clip-path: polygon(17% 0%, 100% 8%, 83% 93%, 0 100%);
    }
    .intro-slide__id {
      font-size: 28px;
      bottom: 9%;
    }
  }
  &._next + & {
    .intro-slide__border {
      clip-path: polygon(17% 0%, 100% 8%, 83% 90%, 0 100%);
      transform: scale(0.7) translateX(-45%);
    }

    .intro-slide__img {
      clip-path: polygon(17% 0%, 100% 8%, 83% 90%, 0 100%);
    }
  }
  &__id {
    z-index: 90;
    position: absolute;
    bottom: 5%;
    right: 22%;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 20px;
    color: #fff;

    transition: 0.1s;
  }
}
</style>