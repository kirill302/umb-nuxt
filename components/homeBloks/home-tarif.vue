<template>
  <div class="home-tarif height-section">
    <div class="container">
      <div class="swiper home-tarif__slider">
        <div class="swiper-wrapper home-tarif__inner">
          <div class="swiper-slide home-tarif__col">
            <div class="home-tarif__icon">
              <img src="@/assets/img/icon-7.png" alt="" />
            </div>
            <ul class="tarif-list">
              <li>Доступ ко всему функционалу</li>
              <li>Круглосуточная поддержка</li>
              <li>Более 500 функций</li>
              <li>
                Полная эмуляция действий <br />
                игрока на реплее
              </li>
            </ul>
            <g-title class="fw-900"> 200 ₽ </g-title>
            <v-button
              ><img src="~@/assets/img/shop-cart.svg" alt="" /> купить</v-button
            >
          </div>
          <div class="swiper-slide home-tarif__col">
            <div class="home-tarif__icon">
              <img src="@/assets/img/icon-30.png" alt="" />
            </div>
            <ul class="tarif-list">
              <li>Доступ ко всему функционалу</li>
              <li>Круглосуточная поддержка</li>
              <li>Более 500 функций</li>
              <li>
                Полная эмуляция действий <br />
                игрока на реплее
              </li>
            </ul>

            <g-title class="fw-900"> 500 ₽ </g-title>
            <v-button
              ><img src="~@/assets/img/shop-cart.svg" alt="" /> купить</v-button
            >
          </div>
          <div class="swiper-slide home-tarif__col">
            <div class="home-tarif__icon">
              <img src="@/assets/img/icon-14.png" alt="" />
            </div>
            <ul class="tarif-list">
              <li>Доступ ко всему функционалу</li>
              <li>Круглосуточная поддержка</li>
              <li>Более 500 функций</li>
              <li>
                Полная эмуляция действий <br />
                игрока на реплее
              </li>
            </ul>
            <g-title class="fw-900"> 320 ₽ </g-title>
            <v-button
              ><img src="~@/assets/img/shop-cart.svg" alt="" /> купить</v-button
            >
          </div>
        </div>
      </div>

      <div class="home-free">
        <div class="home-free__inner">
          <div class="home-free__icon">
            <img src="~@/assets/img/free-icon.png" alt="" />
          </div>
          <div class="home-free__content">
            <g-title class="fz-20 _uppercase left no-line"
              >Попробуй <span class="mark">бесплатно</span>
            </g-title>
            <v-text class="home-free__text">
              Мы предоставляем абсолютно бесплатный тестовый период, получи 7
              дней полного доступа а также 20% скидку на первую покупку
            </v-text>
          </div>
        </div>

        <div class="home-free__btn">
          <button class="v-button" @click="callBonus">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6773 1.544C15.4337 1.44252 15.1654 1.41585 14.9066 1.46738C14.6478 1.5189 14.4102 1.6463 14.224 1.83333L12.5 3.55733L9.44267 0.500001C9.19263 0.25004 8.85355 0.109619 8.5 0.109619C8.14645 0.109619 7.80737 0.25004 7.55733 0.500001L4.5 3.55733L2.776 1.83333C2.58953 1.64692 2.35198 1.51998 2.09338 1.46856C1.83477 1.41713 1.56673 1.44354 1.32313 1.54443C1.07953 1.64532 0.87131 1.81618 0.724798 2.03539C0.578285 2.2546 0.500056 2.51233 0.5 2.776V9.83333C0.501059 10.7171 0.852588 11.5643 1.47748 12.1892C2.10237 12.8141 2.9496 13.1656 3.83333 13.1667H13.1667C14.0504 13.1656 14.8976 12.8141 15.5225 12.1892C16.1474 11.5643 16.4989 10.7171 16.5 9.83333V2.776C16.5001 2.51231 16.4219 2.25453 16.2755 2.03523C16.1291 1.81594 15.9209 1.64499 15.6773 1.544V1.544ZM15.1667 9.83333C15.1667 10.3638 14.956 10.8725 14.5809 11.2475C14.2058 11.6226 13.6971 11.8333 13.1667 11.8333H3.83333C3.3029 11.8333 2.79419 11.6226 2.41912 11.2475C2.04405 10.8725 1.83333 10.3638 1.83333 9.83333V2.776L4.02867 4.97133C4.15369 5.09632 4.32322 5.16653 4.5 5.16653C4.67678 5.16653 4.84631 5.09632 4.97133 4.97133L8.5 1.44267L12.0287 4.97133C12.1537 5.09632 12.3232 5.16653 12.5 5.16653C12.6768 5.16653 12.8463 5.09632 12.9713 4.97133L15.1667 2.776V9.83333Z"
                fill="white"
              />
            </svg>
            получить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tarifSlider = new Swiper(".home-tarif__slider", {
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 20,

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        560: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  },
  methods: {
    callBonus() {
      this.$store.commit("regVisible");
      this.$store.commit("setPromocode", "TEST");
    },
  },
};
</script>
<style lang="scss">
.home-tarif:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: url("~@/assets/img/bgbgbgbg.png") no-repeat center;
  background-size: cover;
  z-index: -1;
}
.home-tarif__slider {
  margin-bottom: 90px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
}
.home-tarif {
  .swiper {
    @media (min-width: 768px) {
      overflow: visible;
    }
    @media (max-width: 768px) {
      padding: 40px 0;
    }
  }
  padding-top: 190px;
  @media (max-width: 1024px) {
    padding-top: 0;
  }
  @media (max-width: 768px) {
    overflow: hidden;
  }
  z-index: 5;
  position: relative;
  padding-bottom: 80px;

  &__col {
    filter: drop-shadow(0px 8.09661px 121.449px rgba(120, 23, 23, 0.6))
      drop-shadow(0px 0px 40.4831px #641414);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    padding-bottom: 10px;

    @media (max-width: 768px) {
      row-gap: 25px;
    }
  }

  &__icon {
    img {
      width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      width: 70%;
    }
    @media (max-width: 567px) {
      width: 50%;
    }
  }
}
.tarif-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 567px) {
    row-gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 15px;
    position: relative;
    color: rgba(165, 166, 189, 0.83);

    @media (max-width: 567px) {
      font-size: 13px;
    }
  }
  li:before {
    content: "";
    margin-right: 20px;
    width: 20px;
    height: 20px;
    background: url("~@/assets/img/checkbox.png") no-repeat center;
    background-size: contain;
  }
}

.home-free {
  padding: 0 15px;
  display: flex;
  gap: 20px;
  @media (max-width: 967px) {
    flex-direction: column;
  }
  &__inner {
    display: flex;
    gap: 20px;
  }
  &__icon {
  }

  .g-title {
    align-self: start;
    font-weight: 800;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  &__text {
  }

  &__btn {
    align-self: center;

    @media (max-width: 967px) {
      align-self: flex-start;
    }

    @media (min-width: 1024px) {
      padding-left: 70px;
      position: relative;
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -20px;
        background: url("~@/assets/img/free-arr.svg") no-repeat center;
        width: 74px;
        height: 33px;
      }
    }
  }
}
</style>