<template>
  <v-modal
    :title="true"
    :lines="true"
    :visible="visible"
    :closeAbility="true"
    @hide="regHide"
    class="modal-reg"
    :twoModal="twoModal"
  >
    <template v-slot:title>Регистрация</template>

    <template v-slot:lines>
      <div class="modal-inputs">
        <icon-input :placeholder="'Login'">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 9C5.33 9 0 10.34 0 13V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"
              fill="white"
              fill-opacity="0.5"
            />
            <path
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 9C5.33 9 0 10.34 0 13V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"
              fill="url(#paint0_linear_286_459)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_286_459"
                x1="0.363534"
                y1="0.0693062"
                x2="13.0024"
                y2="22.5125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CE4242" />
                <stop offset="1" stop-color="#527FE1" />
              </linearGradient>
            </defs>
          </svg>
        </icon-input>
        <icon-input :placeholder="'Email@name.com'">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 0H3.33333C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 11.3333C0.00105857 12.2171 0.352588 13.0643 0.97748 13.6892C1.60237 14.3141 2.4496 14.6656 3.33333 14.6667H12.6667C13.5504 14.6656 14.3976 14.3141 15.0225 13.6892C15.6474 13.0643 15.9989 12.2171 16 11.3333V3.33333C15.9989 2.4496 15.6474 1.60237 15.0225 0.97748C14.3976 0.352588 13.5504 0.00105857 12.6667 0V0ZM3.33333 1.33333H12.6667C13.0659 1.33412 13.4557 1.45434 13.786 1.67854C14.1163 1.90273 14.3719 2.22063 14.52 2.59133L9.41467 7.69733C9.03895 8.07154 8.53028 8.28164 8 8.28164C7.46972 8.28164 6.96105 8.07154 6.58533 7.69733L1.48 2.59133C1.6281 2.22063 1.88374 1.90273 2.21403 1.67854C2.54432 1.45434 2.93414 1.33412 3.33333 1.33333V1.33333ZM12.6667 13.3333H3.33333C2.8029 13.3333 2.29419 13.1226 1.91912 12.7475C1.54405 12.3725 1.33333 11.8638 1.33333 11.3333V4.33333L5.64267 8.64C6.26842 9.26417 7.11617 9.61469 8 9.61469C8.88383 9.61469 9.73158 9.26417 10.3573 8.64L14.6667 4.33333V11.3333C14.6667 11.8638 14.456 12.3725 14.0809 12.7475C13.7058 13.1226 13.1971 13.3333 12.6667 13.3333Z"
              fill="white"
              fill-opacity="0.5"
            />
            <path
              d="M12.6667 0H3.33333C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 11.3333C0.00105857 12.2171 0.352588 13.0643 0.97748 13.6892C1.60237 14.3141 2.4496 14.6656 3.33333 14.6667H12.6667C13.5504 14.6656 14.3976 14.3141 15.0225 13.6892C15.6474 13.0643 15.9989 12.2171 16 11.3333V3.33333C15.9989 2.4496 15.6474 1.60237 15.0225 0.97748C14.3976 0.352588 13.5504 0.00105857 12.6667 0V0ZM3.33333 1.33333H12.6667C13.0659 1.33412 13.4557 1.45434 13.786 1.67854C14.1163 1.90273 14.3719 2.22063 14.52 2.59133L9.41467 7.69733C9.03895 8.07154 8.53028 8.28164 8 8.28164C7.46972 8.28164 6.96105 8.07154 6.58533 7.69733L1.48 2.59133C1.6281 2.22063 1.88374 1.90273 2.21403 1.67854C2.54432 1.45434 2.93414 1.33412 3.33333 1.33333V1.33333ZM12.6667 13.3333H3.33333C2.8029 13.3333 2.29419 13.1226 1.91912 12.7475C1.54405 12.3725 1.33333 11.8638 1.33333 11.3333V4.33333L5.64267 8.64C6.26842 9.26417 7.11617 9.61469 8 9.61469C8.88383 9.61469 9.73158 9.26417 10.3573 8.64L14.6667 4.33333V11.3333C14.6667 11.8638 14.456 12.3725 14.0809 12.7475C13.7058 13.1226 13.1971 13.3333 12.6667 13.3333Z"
              fill="url(#paint0_linear_267_846)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_267_846"
                x1="0.363534"
                y1="0.0635307"
                x2="11.4084"
                y2="21.4593"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CE4242" />
                <stop offset="1" stop-color="#527FE1" />
              </linearGradient>
            </defs>
          </svg>
        </icon-input>
        <v-password :placeholder="'Пароль'"></v-password>
        <v-password :placeholder="'Подтверждение пароля'"></v-password>
      </div>
    </template>

    <div class="modal-reg__bottom">
      <v-input
        placeholder="Промокод (Не обязательно)"
        :disabled="promoDisabled"
        @input="bonus"
        v-model="promocode"
      >
      </v-input>
      <button class="w-100 v-button">Зарегестрироваться</button>
    </div>

    <template v-slot:title2>Бонус-код принят</template>
    <template v-slot:lines2>
      <div class="modal-bonus__content">
        <img src="~@/assets/img/diamond.png" alt="" />
        <v-text>
          14 дней тестового периода и 15% скидка на первую покупку
        </v-text>
      </div>
    </template>
  </v-modal>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    visible: Boolean,
  },
  data() {
    return {
      promocode: "",
      twoModal: {
        visible: false,
        title: true,
        lines: true,
      },
      promoDisabled: false,
    };
  },
  methods: {
    regHide() {
      this.$store.commit("regHide");
    },
    bonus() {
      
    },
    
  },
  mounted() {
    // this.promocode = this.$store.getters.promocode;
    // console.log(this.promocod);
  },
  computed: {
    ...mapState({
      promocod: state => state.promocode
    })
  },
  watch: {
    promocod() {
      if (this.promocod) {
        this.promocode = this.promocod
      }
    },
    promocode() {
      if (
        this.promocode === "1234" ||
        this.promocode === this.promocod
      ) {
        this.twoModal.visible = true;
        this.promoDisabled = true;
      }
    }
  }
};
</script>

<style lang="scss">
.modal-reg__bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.modal-reg {
  &__invalid {
  }
}

.modal-bonus__content {
  display: flex;
  align-items: center;
  column-gap: 10px;

  .v-text {
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>