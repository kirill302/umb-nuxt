<template>
  <v-page class="tarif-page">
    <template v-slot:title> ВАШИ <span class="mark">ПОДПИСКИ</span> </template>

    <template v-slot:content>
      <div class="tarif">
        <v-block class="tarif__left">
          <div class="tarif-status">
            <g-title class="no-line fz-24 tarif__title"
              >Статус подписки</g-title
            >
            <div class="tarif-status__list">
              <div class="tarif-status__item">
                <div class="tarif-status__img">
                  <img src="~@/assets/img/dota.png" alt="" />
                </div>
                <div class="tarif-status__info">
                  <div class="tarif-status__name">Dota 2</div>
                  <v-status :value="70"></v-status>
                  <div class="tarif-status__date">Действует до 16.03.2021</div>
                </div>
              </div>
              <div class="tarif-status__item">
                <div class="tarif-status__img">
                  <img src="~@/assets/img/pubg.png" alt="" />
                </div>
                <div class="tarif-status__info">
                  <div class="tarif-status__name">Dota 2</div>
                  <v-status :value="0"></v-status>
                  <div class="tarif-status__date">Отсутствует или истекла</div>
                </div>
              </div>
            </div>

            <div class="tarif-status__input">
              <v-input placeholder="Введите Ваш промокод"></v-input>
              <v-button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7459 -1.71661e-05C15.2545 0.00094986 16.7118 0.547501 17.8489 1.53878C18.986 2.53007 19.7262 3.89918 19.933 5.39349C20.1397 6.8878 19.799 8.40646 18.9737 9.66923C18.1484 10.932 16.8942 11.8537 15.4426 12.2642C14.3875 12.5663 13.2707 12.5801 12.2084 12.3042L5.61843 18.8925C5.26859 19.2447 4.85228 19.524 4.39366 19.7142C3.93504 19.9043 3.44323 20.0014 2.94676 20C2.16546 19.9993 1.41635 19.6887 0.863888 19.1362C0.311424 18.5837 0.000761032 17.8346 9.72748e-05 17.0533C-0.001194 16.5568 0.0959454 16.065 0.285898 15.6063C0.475851 15.1476 0.75485 14.731 1.10676 14.3808L1.66677 13.8208C1.98011 13.5096 2.40348 13.3345 2.8451 13.3333H4.16677L4.16677 12.5C4.16677 12.058 4.34236 11.634 4.65492 11.3215C4.96748 11.0089 5.3914 10.8333 5.83343 10.8333H6.66677V9.51165C6.66617 9.2927 6.70903 9.07582 6.79285 8.87355C6.87668 8.67128 6.9998 8.48766 7.1551 8.33332L7.69676 7.79165C7.4193 6.7299 7.43283 5.61303 7.73593 4.55832C8.077 3.35665 8.76901 2.28414 9.72332 1.47814C10.6776 0.672144 11.8508 0.169352 13.0926 0.0341511C13.3096 0.0115929 13.5277 0.000188828 13.7459 -1.71661e-05ZM13.7459 10.8333C14.5991 10.8341 15.4356 10.5968 16.1613 10.148C16.8869 9.69919 17.4729 9.05676 17.8532 8.293C18.2335 7.52924 18.3931 6.67449 18.314 5.82495C18.2348 4.97542 17.9202 4.16484 17.4053 3.48445C16.8905 2.80406 16.196 2.28088 15.4 1.9738C14.6039 1.66672 13.738 1.58793 12.8996 1.7463C12.0612 1.90468 11.2837 2.29392 10.6545 2.87023C10.0254 3.44653 9.56957 4.18701 9.33843 5.00832C9.07844 5.9112 9.10758 6.87283 9.42177 7.75832C9.47304 7.9062 9.48163 8.06553 9.44656 8.21807C9.41148 8.37061 9.33415 8.51019 9.22343 8.62082L8.33343 9.51165V10.8333C8.33343 11.2753 8.15784 11.6993 7.84528 12.0118C7.53271 12.3244 7.10879 12.5 6.66677 12.5H5.83343L5.83343 13.3333C5.83343 13.7753 5.65784 14.1993 5.34528 14.5118C5.03272 14.8244 4.60879 15 4.16677 15H2.8451L2.2851 15.56C2.08847 15.7557 1.93258 15.9884 1.82644 16.2448C1.72031 16.5011 1.66604 16.7759 1.66677 17.0533C1.66698 17.3926 1.8018 17.7179 2.04162 17.9579C2.28144 18.1979 2.60667 18.3329 2.94593 18.3333C3.22355 18.334 3.49854 18.2796 3.75501 18.1734C4.01148 18.0671 4.24433 17.911 4.4401 17.7142L11.3826 10.7725C11.4934 10.6617 11.6332 10.5845 11.7859 10.5496C11.9386 10.5146 12.098 10.5234 12.2459 10.575C12.7292 10.7451 13.2377 10.8325 13.7501 10.8333H13.7459ZM15.8334 4.99998C15.8334 4.83517 15.7846 4.67405 15.693 4.53701C15.6014 4.39997 15.4713 4.29316 15.319 4.23008C15.1667 4.16701 14.9992 4.15051 14.8375 4.18266C14.6759 4.21482 14.5274 4.29418 14.4108 4.41073C14.2943 4.52727 14.2149 4.67576 14.1828 4.83741C14.1506 4.99906 14.1671 5.16661 14.2302 5.31889C14.2933 5.47116 14.4001 5.60131 14.5371 5.69288C14.6742 5.78444 14.8353 5.83332 15.0001 5.83332C15.2211 5.83332 15.4331 5.74552 15.5894 5.58924C15.7456 5.43296 15.8334 5.221 15.8334 4.99998Z"
                    fill="white"
                  />
                </svg>
              </v-button>
            </div>
          </div>
        </v-block>

        <v-block class="tarif__right">
          <div class="tarif-buy">
            <g-title class="no-line fz-24 tarif__title">
              Приобрести подписку
            </g-title>

            <div class="tarif-buy__info">
              <div class="tarif-buy__profit">
                <span>Сумма</span>
                <span class="tarif-buy__num"> {{ summ }} ₽ </span>
              </div>
              <div class="tarif-buy__profit">
                <span>Выгода</span>
                <span class="tarif-buy__num"> {{ profit }} ₽ </span>
              </div>

              <div class="tarif-buy__note">
                Столбец "Выгода" считается исходя из подписки на 1 день.
              </div>
            </div>
            <div class="tarif-buy__range">
              <v-range @input="profitCalculator"></v-range>
            </div>

            <div class="tarif-buy__info">
              <div class="tarif-buy__profit">
                <span>Кол-во дней</span>
                <span class="tarif-buy__num"> {{ days }} </span>
              </div>

              <div class="tarif-buy__note _2">
                Обратите внимание, чем на более долгий срок вы покупаете чит -
                тем больше ваша скидка!
              </div>
              <button class="v-button">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0261 11.709H5.39526L5.97925 10.5195L15.6824 10.502C16.0105 10.502 16.2917 10.2676 16.3503 9.94336L17.6941 2.42187C17.7292 2.22461 17.6765 2.02148 17.5476 1.86719C17.4839 1.79125 17.4044 1.73008 17.3147 1.68792C17.225 1.64577 17.1272 1.62363 17.0281 1.62305L4.68433 1.58203L4.57886 1.08594C4.51245 0.769531 4.22729 0.539062 3.90308 0.539062H0.885498C0.702644 0.539063 0.527279 0.611701 0.397981 0.740999C0.268684 0.870296 0.196045 1.04566 0.196045 1.22852C0.196045 1.41137 0.268684 1.58674 0.397981 1.71603C0.527279 1.84533 0.702644 1.91797 0.885498 1.91797H3.34448L3.80542 4.10937L4.94019 9.60352L3.47925 11.9883C3.40338 12.0907 3.35768 12.2123 3.34733 12.3393C3.33697 12.4663 3.36237 12.5937 3.42065 12.707C3.53784 12.9395 3.77417 13.0859 4.03589 13.0859H5.26245C5.00096 13.4332 4.85972 13.8563 4.86011 14.291C4.86011 15.3965 5.75854 16.2949 6.86401 16.2949C7.96948 16.2949 8.86792 15.3965 8.86792 14.291C8.86792 13.8555 8.72339 13.4316 8.46558 13.0859H11.6121C11.3506 13.4332 11.2093 13.8563 11.2097 14.291C11.2097 15.3965 12.1082 16.2949 13.2136 16.2949C14.3191 16.2949 15.2175 15.3965 15.2175 14.291C15.2175 13.8555 15.073 13.4316 14.8152 13.0859H17.0281C17.407 13.0859 17.7175 12.7773 17.7175 12.3965C17.7164 12.2138 17.6431 12.039 17.5135 11.9102C17.384 11.7814 17.2088 11.7091 17.0261 11.709ZM4.97144 2.94141L16.2175 2.97852L15.116 9.14648L6.28198 9.16211L4.97144 2.94141ZM6.86401 14.9082C6.52417 14.9082 6.24683 14.6309 6.24683 14.291C6.24683 13.9512 6.52417 13.6738 6.86401 13.6738C7.20386 13.6738 7.4812 13.9512 7.4812 14.291C7.4812 14.4547 7.41618 14.6117 7.30043 14.7274C7.18469 14.8432 7.0277 14.9082 6.86401 14.9082ZM13.2136 14.9082C12.8738 14.9082 12.5964 14.6309 12.5964 14.291C12.5964 13.9512 12.8738 13.6738 13.2136 13.6738C13.5535 13.6738 13.8308 13.9512 13.8308 14.291C13.8308 14.4547 13.7658 14.6117 13.65 14.7274C13.5343 14.8432 13.3773 14.9082 13.2136 14.9082Z"
                    fill="white"
                  />
                </svg>
                Оплатить
              </button>
            </div>
          </div>
        </v-block>
      </div>

      <tarif-banner class="tarif-banner">
        <g-title class="fz-14 color-white no-line ttn fw-500 tarif-banner__title-mobile"
            >Доступность сброса</g-title
          >
        <div class="tarif-timer">
          <g-title class="fz-14 color-white line-small ttn fw-500 tarif-banner__title-desctop" 
            >Доступность сброса</g-title
          >

          <div class="tarif-timer__inner">
            <div class="tarif-timer__item">
              <div class="tarif-buy__num">{{ taimer.days }}</div>
              <span>дней</span>
            </div>
            <div class="tarif-timer__item">
              <div class="tarif-buy__num _dv">{{ taimer.hours }}</div>
              <span>часов</span>
            </div>
            <div class="tarif-buy__dv">:</div>
            <div class="tarif-timer__item">
              <div class="tarif-buy__num">{{ taimer.minutes }}</div>
              <span>минут</span>
            </div>
            <div class="tarif-buy__dv">:</div>
            <div class="tarif-timer__item">
              <div class="tarif-buy__num">{{ taimer.seconds }}</div>
              <span>секунд</span>
            </div>
          </div>
          <button class="v-button"> Сбросить привязку </button>
        </div>
        <div class="tarif-text">
          <v-text>
            Наше программное обеспечение привязывается к уникальному
            идентификатору Вашего компьютера.
          </v-text>
          <v-text>
            В данном разделе Вы можете сбросить старую привязку на случай, если
            Вы захотели перенести подписку на другой ПК или заменили один из его
            компонентов.
          </v-text>
          <v-text>
            Помнитие, что между сбросами имеется задержка в 24 часа.
          </v-text>
        </div>
      </tarif-banner>
    </template>
  </v-page>
</template>

<script>
import VRange from '@/components/tarif-bloks/v-range.vue'
export default {
  middleware: 'auth',

  components: {
    VRange
  },
  data() {
    return {
      summ: 200,
      profit: 200,
      days: 1,

      taimer: {
        days: "180",
        hours: "09",
        minutes: "32",
        seconds: "59",
      },
    };
  },
  methods: {
    profitCalculator(e) {
      if (e === 1) {
        this.summ = 300;
        this.profit = 150;
        this.days = 1;
      } else if (e === 2) {
        this.summ = 500;
        this.profit = 200;
        this.days = 7;
      } else if (e === 3) {
        this.summ = 700;
        this.profit = 250;
        this.days = 14;
      } else if (e === 4) {
        this.summ = 1200;
        this.profit = 800;
        this.days = 30;
      } else if (e === 5) {
        this.summ = 4000;
        this.profit = 1100;
        this.days = 90;
      } else if (e === 6) {
        this.summ = 9000;
        this.profit = 2300;
        this.days = 180;
      }
    },
  },
};
</script>

<style lang="scss">
.tarif-page {
  .tarif-banner {
    display: flex;

    @media (max-width:768px) {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
    }
  }
}

.tarif {
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  gap: 20px;

  @media (max-width: 820px) {
    flex-direction: column;
  }

  margin-bottom: 30px;

  .tarif__left {
    flex-basis: 34%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tarif__right {
    flex-grow: 1;
  }
}
.tarif-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  @media (max-width: 567px) {
    row-gap: 15px;
  }

  &__list {
    @media (max-width: 820px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    @media (max-width: 567px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-items: center;
      width: 100%;
    }
  }

  &__input {
    width: 100%;
    display: flex;
    .v-button {
      margin-left: -42px;
      width: 42px;
      height: 42px;
      position: relative;
      svg {
        position: absolute;
        width: 56%;
        height: 56%;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    gap: 10px;
    padding: 20px 0;
  }
  &__item:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: url("~@/assets/img/line.svg");
    bottom: 0;
  }
  &__item:first-child {
    padding-top: 0;
  }
  @media (max-width: 820px) {
    &__item:after {
      display: none;
    }
    &__item {
      padding: 10px !important;
    }
  }
  &__item:last-child:after {
    display: none;
  }
  &__img {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__info {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__name {
    color: rgba(255, 255, 255, 0.83);
  }

  &__date {
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.5;
  }
}
.tarif-buy {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  &__dv {
    font-size: 27px;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 900;
  }

  &__range {
    padding-bottom: 34px;
    position: relative;

    @media (max-width: 1024px) {
      padding-bottom: 0;
    }
  }
  &__range:after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url("~@/assets/img/line.svg");
    @media (max-width: 980px) {
      display: none;
    }
  }

  &__info {
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  &__profit {
    position: relative;
    width: 45%;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (max-width:768px) {
      width: 30%;
    }
    @media (max-width:567px) {
      width: 45%;
    }
    span {
      margin-bottom: 10px;
    }
  }
  &__profit + .v-button {
    margin-left: 40px;
  }
  &__profit:after {
    content: "";
    display: block;
    width: 40px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 50%;
    background: url("~@/assets/img/tarif-line-left.svg") no-repeat center;
  }
  &__profit:before {
    content: "";
    display: block;
    width: 40px;
    height: 16px;
    position: absolute;
    right: 0;
    top: 50%;
    background: url("~@/assets/img/tarif-right-line.svg") no-repeat center;
  }

  &__profit + &__profit:after {
    background: url("~@/assets/img/tarif-line.svg") no-repeat center;
  }
  @media (max-width: 1100px) {
    &__profit:before,
    &__profit:after {
      display: none;
    }
  }

  &__num {
    font-weight: 900;
    font-size: 27px;
    text-transform: uppercase;
    color: #ffffff;
    display: block;

    @media (max-width: 1024px) {
      font-size: 22px;
    }
  }

  &__profit + &__note {
    @media (min-width: 1024px) {
      margin-left: 33px;
    }
  }
  &__note {
    padding-left: 20px;
    line-height: 17px;
    border-left: solid 3px #ce4242;
    position: relative;

    &._2 {
      @media (min-width: 1024px) {
        padding: 0 20px;
      }
    }

    @media (max-width: 1024px) {
      border: none;
      padding: 25px 20px 10px 20px;
      &:before {
        position: absolute;
        top: 0;
        left: 0;

        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: #ce4242;
        opacity: 0.8;
        margin: 10px auto;
      }
    }
    @media (max-width: 567px) {
      padding: 20px 0 0 0 ;
      text-align: center;

      &._2 {
        margin-bottom: 25px;
      }
    }
  }
}
.tarif-banner {
  min-height: 213px;

  &__title-mobile {
    display: none;
    order: 0;

    @media (max-width: 768px) {
      display: block;
      font-size: 20px !important;
      font-weight: 600 !important;
    }
  }
  &__title-desctop {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
.tarif-text {
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: relative;
  .v-text {
    color: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 768px) {
    order: 1;
    align-items: center;
    text-align: center;
    padding-left: 0;
  }
}
.tarif-timer {
  @media (max-width: 768px) {
    order: 2;
  }
  
  width: 60%;
  padding-left: 100px;
  position: relative;

  @media (max-width: 1150px) {
    padding-right: 30px;
  }
  @media (max-width:768px) {
    padding-left: 0;
    padding-right: 0;
    row-gap: 30px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    span {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 90px;
    background: url("~@/assets/img/tarif-banner.svg") no-repeat center;
    background-size: contain;
    backdrop-filter: blur(5px);
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 87px;
    background: url("~@/assets/img/tarif-banner.svg") no-repeat center;
    background-size: 90%;
    z-index: 1;
  }
  &:after,
  &:before {
    @media (max-width:768px) {
      display: none;
    }
  }

  &__inner {
    display: flex;
    column-gap: 16px;
  }

  & + .tarif-text {
    &:before {
      content: '';
      height: 100%;
      width: 2px;
      background: url("~@/assets/img/black-line.svg") ;
      opacity: .8;
      top: 0;
      left: 0;
      position: absolute;

      @media (max-width:768px) {
        display: none;
      }
    }
  }
}

</style>