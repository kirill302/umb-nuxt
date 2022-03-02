<template>
  <v-page class="download">
    <template v-slot:title
      >Начало работы <span class="mark">с продуктом</span></template
    >

    <template v-slot:content>
      <div class="download__steps">
        <v-block class="download-step">
          <span class="download-num"> <span>Шаг 1</span></span>

          <div class="download-step__inner">
            <g-title class="no-line fz-24"> Загрузка и установка </g-title>

            <div class="download-step__img">
              <img src="~@/assets/img/download-img1.jpg" alt="" />
            </div>

            <div class="download-list">
              <div class="download-list__item">
                Скачайте и запустите наш установщик.
              </div>
              <div class="download-list__item">
                Следуйте указаниям установщика, он автоматически установит
                нужное ПО, выберет папку, и создаст иконку чита на рабочем
                столе.
              </div>
            </div>

            <g-title class="no-mobile-line download__btn">
              <button class="v-button">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6871 13.7949H11.2398V9.0625C11.2398 8.97656 11.1695 8.90625 11.0836 8.90625H9.91169C9.82575 8.90625 9.75544 8.97656 9.75544 9.0625V13.7949H8.31208C8.18122 13.7949 8.10896 13.9453 8.18904 14.0469L10.3765 16.8145C10.3911 16.8331 10.4098 16.8482 10.4311 16.8586C10.4525 16.869 10.4759 16.8744 10.4996 16.8744C10.5233 16.8744 10.5467 16.869 10.568 16.8586C10.5893 16.8482 10.608 16.8331 10.6226 16.8145L12.8101 14.0469C12.8902 13.9453 12.8179 13.7949 12.6871 13.7949Z"
                    fill="white"
                  />
                  <path
                    d="M16.3477 7.16211C15.4531 4.80273 13.1738 3.125 10.5039 3.125C7.83398 3.125 5.55469 4.80078 4.66016 7.16016C2.98633 7.59961 1.75 9.125 1.75 10.9375C1.75 13.0957 3.49805 14.8438 5.6543 14.8438H6.4375C6.52344 14.8438 6.59375 14.7734 6.59375 14.6875V13.5156C6.59375 13.4297 6.52344 13.3594 6.4375 13.3594H5.6543C4.99609 13.3594 4.37695 13.0977 3.91602 12.623C3.45703 12.1504 3.21289 11.5137 3.23438 10.8535C3.25195 10.3379 3.42773 9.85352 3.74609 9.44531C4.07227 9.0293 4.5293 8.72656 5.03711 8.5918L5.77734 8.39844L6.04883 7.68359C6.2168 7.23828 6.45117 6.82227 6.74609 6.44531C7.03725 6.07169 7.38214 5.74326 7.76953 5.4707C8.57227 4.90625 9.51758 4.60742 10.5039 4.60742C11.4902 4.60742 12.4355 4.90625 13.2383 5.4707C13.627 5.74414 13.9707 6.07227 14.2617 6.44531C14.5566 6.82227 14.791 7.24023 14.959 7.68359L15.2285 8.39648L15.9668 8.5918C17.0254 8.87695 17.7656 9.83984 17.7656 10.9375C17.7656 11.584 17.5137 12.1934 17.0566 12.6504C16.8325 12.8758 16.5659 13.0546 16.2722 13.1763C15.9785 13.298 15.6636 13.3602 15.3457 13.3594H14.5625C14.4766 13.3594 14.4062 13.4297 14.4062 13.5156V14.6875C14.4062 14.7734 14.4766 14.8438 14.5625 14.8438H15.3457C17.502 14.8438 19.25 13.0957 19.25 10.9375C19.25 9.12695 18.0176 7.60352 16.3477 7.16211Z"
                    fill="#DBDBDB"
                  />
                </svg>

                СКАЧАТЬ УСТАНОВЩИК
              </button>
            </g-title>
          </div>
        </v-block>
        <v-block class="download-step">
          <span class="download-num">
            <span>Шаг 2</span>
          </span>
          <div class="download-step__inner">
            <g-title class="no-line fz-24"> Запуск и выбор продукта </g-title>

            <div class="download-step__img">
              <img src="~@/assets/img/download-img2.jpg" alt="" />
            </div>

            <div class="download-list">
              <div class="download-list__item">
                Найдите на рабочем столе иконку приложения и запустите его.
              </div>
              <div class="download-list__item">
                Авторизуйтесь под своими данными (логин и пароль аналогичны
                логину и паролю от сайта, или от uc.zone).
              </div>
              <div class="download-list__item">
                После авторизации выберите в лоадере Umbrella cheat [DotA2]
                [Public Build] и нажмите Launch DotA 2 (если такого пункта нет,
                то у вас скорее всего кончилась подписка).
              </div>
              <div class="download-list__item">
                Лаунчер сам запустит доту и появится меню чита. логину и паролю
                от сайта, или от uc.zone).
              </div>
            </div>
          </div>
        </v-block>
      </div>
    </template>
  </v-page>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style lang="scss">
.download {
  .download__btn {
    margin-top: 30px !important;
  }
  .v-block {
    background: linear-gradient(180deg, #5e2d30 0%, rgba(17, 24, 30, 0) 100%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    .v-block__inner {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      z-index: 2;
      &:after {
        content: "";
        pointer-events: none;
        position: absolute;
        display: block;
        width: 100%;
        height: 45%;
        left: 0;
        bottom: 0;
        z-index: 1;
        background: linear-gradient(180deg, #0f171e 0%, #4e1617 159.26%);
      }
    }
  }
  &__steps {
    display: flex;
    column-gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 30px;
    }
  }
  &-num {
    display: inline-block;
    border-radius: 40px;
    padding: 13px 7px;
    border: solid 5px rgba(0, 0, 0, 0.2);
    box-shadow: #dc1e0a;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    box-shadow: 0 0 30px rgba(220, 30, 10, 0.4);

    span {
      position: relative;
      z-index: 10;
      font-family: "Roboto";
      content: "Шаг 1";
      background: #dc1e0a;
      border-radius: 20px;
      padding: 7px 10px;
      color: #fff;
    }
  }
  &-num:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    border-radius: 40px;
    background: rgba(220, 30, 10, 0.2);
    pointer-events: none;
  }
}

.download-step {
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
  .g-title {
    margin-bottom: 40px;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;

    .g-title {
      margin-top: 20px;
    }
  }

  &__img {
    margin-bottom: 30px;
    img {
      border-radius: 11px;
      width: 100%;
      height: auto;
    }
  }
}

.download-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding-left: 40px;
  }
  &__item:before {
    position: absolute;
    content: "1";
    display: block;
    order: 1;
    left: 0;
  }
  &__item:nth-child(1):before {
    content: "1";
  }
  &__item:nth-child(2):before {
    content: "2";
  }
  &__item:nth-child(3):before {
    content: "3";
  }
  &__item:nth-child(4):before {
    content: "4";
  }
  &__item:nth-child(5):before {
    content: "5";
  }
  &__item:nth-child(6):before {
    content: "6";
  }
  &__item:nth-child(7):before {
    content: "7";
  }
  &__item:nth-child(8):before {
    content: "8";
  }
  &__item:nth-child(9):before {
    content: "9";
  }
  &__item:nth-child(10):before {
    content: "10";
  }
  &__item:nth-child(11):before {
    content: "11";
  }
  &__item:nth-child(12):before {
    content: "12";
  }
  &__item:nth-child(13):before {
    content: "13";
  }
  &__item:nth-child(14):before {
    content: "14";
  }
  &__item:after {
    position: absolute;
    content: "";
    display: block;
    width: 2.5px;
    height: 100%;
    background: #ce4242;
    order: 2;
    left: 20px;
  }
}
</style>