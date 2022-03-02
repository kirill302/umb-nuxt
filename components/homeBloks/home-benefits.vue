<template>
  <div class="benefits height-section">
    <tit-h2 class="">
      Выбирай качество, выбирай
      <v-umbrella></v-umbrella>
    </tit-h2>
    <div class="container">
      <div class="benefits__inner">
        <div class="benefits-slider swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="slide in benefitsArr"
              :key="slide.id"
            >
              <div class="benefits-card">
                <div class="benefits-card__icon">
                  <img :src="require(`@/assets/img/${slide.icon}`)" />
                </div>
                <h3 class="benefits-card__title">{{ slide.title }}</h3>
                <p class="benefits-card__text">
                  {{ slide.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="benefits-slider__control">
          <button class="benefits-slider__prev">
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 13.8C8.09 13.41 8.09 12.78 7.7 12.39L3.83 8.5H19C19.55 8.5 20 8.05 20 7.5C20 6.95 19.55 6.5 19 6.5H3.83L7.71 2.62C8.1 2.23 8.1 1.6 7.71 1.21C7.32 0.819996 6.69 0.819996 6.3 1.21L0.700001 6.8C0.310001 7.19 0.310001 7.82 0.700001 8.21L6.29 13.8C6.68 14.18 7.32 14.18 7.7 13.8Z"
              />
            </svg>
          </button>
          <div class="benefits-slider__pagination"></div>
          <button class="benefits-slider__next">
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3 13.8C11.91 13.41 11.91 12.78 12.3 12.39L16.17 8.5H0.999998C0.449999 8.5 -1.90735e-06 8.05 -1.90735e-06 7.5C-1.90735e-06 6.95 0.449999 6.5 0.999998 6.5H16.17L12.29 2.62C11.9 2.23 11.9 1.6 12.29 1.21C12.68 0.819996 13.31 0.819996 13.7 1.21L19.3 6.8C19.69 7.19 19.69 7.82 19.3 8.21L13.71 13.8C13.32 14.18 12.68 14.18 12.3 13.8Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefitsArr: [
        {
          icon: "benefits-icon.png",
          title: "Защита",
          text: "Внедрение чита в игру происходит совершенно незаметно для античита. Еще ни один наш пользователь не получил VAC-блокировок",
          id: 1,
        },
        {
          icon: "benefits-icon1.png",
          title: "Функционал",
          text: "Команда наших профессиональных скриптеров подготовила для вас более сотни разных функций. Спеши опробовать!",
          id: 2,
        },
        {
          icon: "benefits-icon2.png",
          title: "Оптимизация",
          text: "Мы все время заняты улучшением скорости работы и производительности, чтобы скрипты работали быстро, а Ваш FPS не падал!",
          id: 3,
        },
        {
          icon: "benefits-icon3.png",
          title: "Защита",
          text: "Внедрение чита в игру происходит совершенно незаметно для античита. Еще ни один наш пользователь не получил VAC-блокировок",
          id: 4,
        },
        {
          icon: "benefits-icon4.png",
          title: "Функционал",
          text: "Команда наших профессиональных скриптеров подготовила для вас более сотни разных функций. Спеши опробовать!",
          id: 5,
        },
        {
          icon: "benefits-icon5.png",
          title: "Оптимизация",
          text: "Мы все время заняты улучшением скорости работы и производительности, чтобы скрипты работали быстро, а Ваш FPS не падал!",
          id: 6,
        },
      ],
    };
  },
  mounted() {
    let benefitsSlider = new Swiper(".benefits-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      slideActiveClass: "_active",
      initialSlide: 1,

      slidesPerGroup: 3,

      navigation: {
        nextEl: ".benefits-slider__next",
        prevEl: ".benefits-slider__prev",
      },
      pagination: {
        el: ".benefits-slider__pagination",
        type: "bullets",
        bulletClass: "benefits-slider__bullet",
        bulletActiveClass: "_active",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        560: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },

      on: {
        toEdge: () => {
          document.querySelector(".benefits").classList.toggle("active-two");
        },
        transitionEnd: () => {
          document.querySelector(".benefits-slider").classList.toggle("_end");
        },
      },
    });
  },
};
</script>

<style lang="scss">
.benefits {
  position: relative;
  padding: 129px 0;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: url("~@/assets/img/benefits-bg.svg") no-repeat center;
    background-size: contain;
    z-index: -1;
  }

  .tit-h2 {
    margin-bottom: 120px;

    @media (max-width: 1024px) {
      margin-bottom: 80px;
    }
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
    @media (max-width: 567px) {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    background: none;
  }
  @media (max-width: 1024px) {
    padding: 50px 0;
  }
  @media (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 30px;
  }
  overflow: hidden;

  &__inner {
    position: relative;
    z-index: 3;
    padding: 0 2px;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }

  .benefits-slider {
    position: relative;
    z-index: 4;
  }

  &__inner::before {
    // background: url("~@/assets/img/monster2.svg") no-repeat;
    background: url("~@/assets/img/mons1.png") no-repeat;
    background-position: center 0;
    z-index: 10;
    top: -100px;
    right: -440px;
  }
  &__inner::after {
    // background: url("~@/assets/img/monster1.svg") no-repeat;
    background: url("~@/assets/img/mons2.png") no-repeat;
    background-position: -100px 0;
    z-index: 5;
    top: -100px;
    left: -600px;
    filter: blur(4px);
    opacity: 0.2;
    z-index: 10;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__inner::after,
  &__inner::before {
    transition-duration: 0.7s;
    transition-property: opacity, background-position;
    content: "";
    display: block;
    width: 550px;
    height: 550px;
    pointer-events: none;
    position: absolute;

    background-size: 92%;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &.active-two {
    .benefits__inner::before {
      transform: scale(-1, 1);
      right: 110%;
      filter: blur(4px);
      opacity: 0.2;
      z-index: 10;
      background-position: 100px 0;
    }
    .benefits__inner::after {
      transform: scale(-1, 1);
      filter: blur(0px);
      opacity: 1;
      left: 84%;
      z-index: 10;
      background-position: 0 0;
    }
  }

  .swiper-wrapper {
    padding-top: 40px;
    @media (max-width: 992px) {
      margin-bottom: 50px;
    }
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }
  .swiper-slide {
    .benefits-card__icon img {
      filter: drop-shadow(0px 3px 7px rgba(255, 0, 0, 0.6));
    }

    transition: 0.2s;
    @media (min-width: 768px) {
      &._active + .swiper-slide {
        background: linear-gradient(
          180deg,
          #b24747 0%,
          rgba(17, 24, 30, 1) 100%
        );
        transform: translateY(-30px);
        .benefits-card {
          padding-top: 30px;
          min-height: 338px;
        }
        .benefits-card:after {
          background: url("~@/assets/img/title-line.svg") no-repeat center;
        }
      }
    }

    padding: 2px;
    background: linear-gradient(
      180deg,
      rgba(94, 45, 48, 1) 0%,
      rgba(17, 24, 30, 1) 100%
    );
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  .benefits-card {
    user-select: none;
    position: relative;
    min-height: 307px;
    background: radial-gradient(
        69.58% 69.58% at 50% 6.02%,
        rgba(182, 73, 73, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, #0f171e 0%, rgba(15, 23, 30, 1) 100%);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 30px;

    @media (max-width: 567px) {
      min-height: 270px;
      row-gap: 10px;
      padding: 15px;
    }

    &__title {
      font-size: 24px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      @media (max-width: 567px) {
        font-size: 20px;
      }
    }

    &__text {
      font-size: 15px;
      line-height: 18px;
      text-align: center;

      color: rgba(127, 128, 147, 0.83);

      @media (max-width: 567px) {
        font-size: 13px;
      }
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 12px;
      width: 100%;
      background: url("~@/assets/img/title-line1.svg") no-repeat center;
    }
  }
}
.benefits-slider {
  margin-bottom: 120px;

  @media (max-width: 1024px) {
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  &__pagination {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }
  &__bullet {
    transition: 0.2s;
    display: inline-block;
    border-radius: 50%;

    width: 9px;
    height: 9px;
    background: #4d5155;
  }
  &__bullet._active {
    width: 13px;
    height: 13px;
    background: radial-gradient(
      100% 100% at 45.56% 0%,
      #d73231 0%,
      #792625 100%
    );
    border: 1px solid #d73231;
    box-sizing: border-box;
    box-shadow: 0px 0px 15px 4px rgba(215, 50, 49, 0.5);
  }
}
.benefits-slider__prev,
.benefits-slider__next {
  background: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
}
.benefits-slider__prev svg path,
.benefits-slider__next svg path {
  transition: 0.1s;
  fill: #4d5155;
}
.benefits-slider__prev:hover svg path,
.benefits-slider__next:hover svg path {
  fill: #fff;
}
.benefits-slider__prev:disabled:hover svg path,
.benefits-slider__next:disabled:hover svg path {
  fill: #4d5155;
}
</style>