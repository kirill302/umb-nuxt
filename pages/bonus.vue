<template>
  <v-page class="bonus">
    <template v-slot:title>Создать <span class="mark">промокод</span></template>

    <template v-slot:content>
      <div class="bonus__inner">
        <v-block class="promocode gr-bottom">
          <div class="promocode__inner"></div>

          <div class="promocode__code _creating" v-if="creatingCode">
            <div class="promocode__code-title">
              <icon-input :pos="'right'" :placeholder="'Ваш промокод'" v-model="promocode">
                <v-q
                :text="'Это компания комплексного обслуживания и монтажа водяных теплых полов, а также специализированный интернет-магазин, в котором можно купить оборудование для водяного тёплого пола.'"
              ></v-q>
              </icon-input>
              
            </div>

            <button class="v-button border">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_205_2020)">
                  <path
                    d="M17.75 9.50005C17.5666 9.4979 17.3891 9.56419 17.2521 9.68597C17.1151 9.80775 17.0284 9.97626 17.009 10.1586C16.8855 11.5866 16.3548 12.9492 15.4799 14.0846C14.605 15.22 13.4227 16.0805 12.0733 16.564C10.7239 17.0474 9.26413 17.1335 7.86729 16.8119C6.47044 16.4904 5.19519 15.7748 4.19296 14.7501H6.25171C6.45062 14.7501 6.64139 14.671 6.78204 14.5304C6.92269 14.3897 7.00171 14.199 7.00171 14.0001C7.00171 13.8011 6.92269 13.6104 6.78204 13.4697C6.64139 13.3291 6.45062 13.2501 6.25171 13.2501H3.25171C2.85388 13.2501 2.47235 13.4081 2.19105 13.6894C1.90974 13.9707 1.75171 14.3522 1.75171 14.7501V17.7501C1.75171 17.949 1.83073 18.1397 1.97138 18.2804C2.11203 18.421 2.3028 18.5 2.50171 18.5C2.70062 18.5 2.89139 18.421 3.03204 18.2804C3.17269 18.1397 3.25171 17.949 3.25171 17.7501V15.9216C4.46464 17.1156 5.99184 17.9404 7.65544 18.3C9.31904 18.6596 11.0506 18.5392 12.6484 17.9528C14.2462 17.3663 15.6445 16.338 16.6805 14.9876C17.7164 13.6372 18.3474 12.0202 18.5 10.3251C18.5096 10.2206 18.4975 10.1153 18.4642 10.0158C18.431 9.91633 18.3773 9.82487 18.3068 9.74726C18.2362 9.66965 18.1503 9.60758 18.0544 9.56502C17.9585 9.52246 17.8548 9.50033 17.75 9.50005Z"
                    fill="white"
                  />
                  <path
                    d="M16.4983 0.500074C16.2994 0.500074 16.1086 0.579092 15.968 0.719744C15.8273 0.860397 15.7483 1.05116 15.7483 1.25007V3.07857C14.5354 1.88456 13.0082 1.05971 11.3446 0.700105C9.68097 0.340494 7.94944 0.460919 6.35164 1.04735C4.75384 1.63379 3.35552 2.6621 2.31955 4.01252C1.28358 5.36294 0.652582 6.9799 0.500054 8.67507C0.490367 8.77952 0.502541 8.88483 0.535801 8.98431C0.569062 9.08379 0.622679 9.17525 0.693237 9.25286C0.763794 9.33048 0.849745 9.39254 0.945613 9.43511C1.04148 9.47767 1.14516 9.49979 1.25005 9.50008C1.43337 9.50222 1.61089 9.43593 1.74793 9.31415C1.88496 9.19238 1.97165 9.02387 1.99105 8.84157C2.11455 7.41353 2.64524 6.05091 3.52012 4.9155C4.395 3.7801 5.57732 2.91959 6.92671 2.43616C8.2761 1.95272 9.73588 1.86666 11.1327 2.18819C12.5296 2.50972 13.8048 3.22533 14.8071 4.25007H12.7483C12.5494 4.25007 12.3586 4.32909 12.218 4.46974C12.0773 4.6104 11.9983 4.80116 11.9983 5.00007C11.9983 5.19899 12.0773 5.38975 12.218 5.5304C12.3586 5.67106 12.5494 5.75007 12.7483 5.75007H15.7483C16.1461 5.75007 16.5277 5.59204 16.809 5.31073C17.0903 5.02943 17.2483 4.6479 17.2483 4.25007V1.25007C17.2483 1.05116 17.1693 0.860397 17.0286 0.719744C16.888 0.579092 16.6972 0.500074 16.4983 0.500074Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_205_2020">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Случайно
            </button>

            <button class="v-button" @click="createPromocode">
              создайте промокод
            </button>
          </div>

          <div class="promocode__code" v-else >
            <div class="promocode__code-title">
              <g-title class="no-line fz-24 fw-900"> {{ promocode }} </g-title>
              <v-q
                :text="'Это компания комплексного обслуживания и монтажа водяных теплых полов, а также специализированный интернет-магазин, в котором можно купить оборудование для водяного тёплого пола.'"
              ></v-q>
            </div>

            <button class="v-button">
              Копировать
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 15C9.7442 14.9988 10.6973 14.6034 11.4003 13.9003C12.1033 13.1973 12.4988 12.2442 12.5 11.25V4.68226C12.5012 4.28803 12.4241 3.89749 12.2732 3.53328C12.1223 3.16906 11.9006 2.83842 11.621 2.56051L9.9395 0.879013C9.66159 0.599393 9.33095 0.377715 8.96674 0.226828C8.60252 0.0759412 8.21198 -0.00115346 7.81775 1.30422e-05H4.25C3.2558 0.00120394 2.30267 0.396675 1.59966 1.09968C0.896661 1.80268 0.501191 2.75582 0.5 3.75001V11.25C0.501191 12.2442 0.896661 13.1973 1.59966 13.9003C2.30267 14.6034 3.2558 14.9988 4.25 15H8.75ZM2 11.25V3.75001C2 3.15328 2.23705 2.58098 2.65901 2.15902C3.08097 1.73707 3.65326 1.50001 4.25 1.50001C4.25 1.50001 7.93925 1.51051 8 1.51801V3.00001C8 3.39784 8.15804 3.77937 8.43934 4.06067C8.72064 4.34198 9.10218 4.50001 9.5 4.50001H10.982C10.9895 4.56076 11 11.25 11 11.25C11 11.8467 10.7629 12.419 10.341 12.841C9.91903 13.263 9.34674 13.5 8.75 13.5H4.25C3.65326 13.5 3.08097 13.263 2.65901 12.841C2.23705 12.419 2 11.8467 2 11.25V11.25ZM15.5 6.00001V14.25C15.4988 15.2442 15.1033 16.1973 14.4003 16.9003C13.6973 17.6034 12.7442 17.9988 11.75 18H5C4.80109 18 4.61032 17.921 4.46967 17.7803C4.32902 17.6397 4.25 17.4489 4.25 17.25C4.25 17.0511 4.32902 16.8603 4.46967 16.7197C4.61032 16.579 4.80109 16.5 5 16.5H11.75C12.3467 16.5 12.919 16.263 13.341 15.841C13.7629 15.419 14 14.8467 14 14.25V6.00001C14 5.8011 14.079 5.61034 14.2197 5.46968C14.3603 5.32903 14.5511 5.25001 14.75 5.25001C14.9489 5.25001 15.1397 5.32903 15.2803 5.46968C15.421 5.61034 15.5 5.8011 15.5 6.00001Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          
        </v-block>
        <v-block class="graph gr-bottom">
          <div class="graph__header">
            <g-title class="no-line fz-24"> Название графика </g-title>
            <b-select :options="selectOpt"> </b-select>
          </div>
          <div class="graph__content">
            <div class="graph__col">
              <div class="graph__num" v-for="num in graphNums" :key="num">
                {{ num }}
              </div>
            </div>
            <div class="graph__img">
              <img src="~@/assets/img/graph-line.png" alt="" />
            </div>
            <div class="graph__row">
              <div class="graph__num" v-for="day in graphDays" :key="day">
                {{ day }}
              </div>
            </div>
          </div>
        </v-block>
        <v-block class="graph gr-bottom">
          <div class="graph__header">
            <g-title class="no-line fz-24"> Название графика </g-title>
            <b-select :options="selectOpt"> </b-select>
          </div>
          <div class="graph__content">
            <div class="graph__col">
              <div class="graph__num" v-for="num in graphNums" :key="num">
                {{ num }}
              </div>
            </div>
            <div class="graph__img">
              <img src="~@/assets/img/graph-line.png" alt="" />
            </div>
            <div class="graph__row">
              <div class="graph__num" v-for="day in graphDays" :key="day">
                {{ day }}
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

  data() {
    return {
      creatingCode: true,
      promocode: "",
      selectOpt: [
        { id: 0, text: "7 дней" },
        { id: 1, text: "14 дней" },
        { id: 2, text: "30 дней" },
        { id: 3, text: "90 дней" },
        { id: 4, text: "180 дней" },
      ],
      graphDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      graphNums: ["200", "100", "75", "50", "25", "10", "0"],
    };
  },
  methods: {
    createPromocode() {
      if (this.promocode) {
        this.creatingCode = false;
      }
    }
  }
};
</script>

<style lang="scss">
.bonus {
  &__inner {
    display: flex;
    column-gap: 20px;

    @media (max-width: 1100px) {
      flex-wrap: wrap;
      row-gap: 30px;
      justify-content: space-between;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 40px;
    }
  }
}
.promocode {
  width: 20%;
  @media (max-width: 1100px) {
    width: 100%;
  }
}
.graph {
  width: 40%;

  @media (max-width: 1100px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  &__content {
    min-height: 230px;
    position: relative;
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 89% 11%;

    .graph__num {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
    .graph__col {
      grid-row-start: 1;
      grid-row-end: 3;

      border-right: solid 1px rgba(255, 255, 255, 0.5);
      .graph__num {
        text-align: right;
        padding-right: 10px;
        &:first-child {
          padding-top: 5px;
        }
        &:last-child {
          width: 100%;
          border-top: solid 1px rgba(255, 255, 255, 0.5);
          padding-top: 10px;
        }
      }
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
    }
    .graph__row {
      grid-column-start: 2;
      grid-column-end: 2;

      border-top: solid 1px rgba(255, 255, 255, 0.5);

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .graph__num {
        flex-grow: 1;
        padding-top: 10px;

        &:first-child {
          padding-left: 15px;
        }
      }
    }
    .graph__img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 20px;
    .g-title {
      margin: 0;
    }
  }
}
.promocode {
  min-width: 280px;
  &__inner {
    
    z-index: 99;
    padding-top: 87px;
    position: relative;

    &:after {
      content: "";
      display: block;
      height: 87px;
      width: 80%;
      background: url("~@/assets/img/key1.svg") no-repeat center;
      background-size: contain;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    &:before {
      content: "";
      display: block;
      height: 87px;
      width: 100%;
      background: url("~@/assets/img/key1.svg") no-repeat center;
      background-size: contain;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      backdrop-filter: blur(5px);
    }
  }

  &__code {
    
    padding-bottom: 40px;
    position: relative;
    z-index: 8;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;
    @media (max-width: 1100px) {
      align-items: center;
    }
  }
  &__code-title {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  &__code::after {
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background: url("~@/assets/img/title-line.svg") no-repeat center;
    background-size: 130%;
    margin-bottom: 20px;
  }
  &__code::before {
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background: url("~@/assets/img/title-line.svg") no-repeat center;
    background-size: 130%;
    margin-top: 20px;
  }
  &__code::after,
  &__code::before {
    background-size: contain;
  }

  &__code._creating::after {
    display: none;
  }
  &__code._creating {
    align-items: center;

    row-gap: 12px;

    .v-button {
      width: 100%;
    }

  }
}
</style>