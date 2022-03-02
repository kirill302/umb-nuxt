<template>
  <v-modal
    :visible="visible"
    :title="true"
    :lines="true"
    @hide="hideLogin"
    class="modal-login"
    :class="invalidLogin ? 'invalid' : ''"
  >
    <template v-slot:title>Авторизация</template>

    <template v-slot:lines>
      <div class="text-red modal-login__invalid">Пароль введён не верно</div>
      <div class="modal-inputs">
        <icon-input :placeholder="'Username'" v-model="login.login">
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
              fill="url(#paint0_linear_286_408)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_286_408"
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
        <v-password
          :placeholder="'Пароль'"
          v-model="login.password"
          :invalid="invalidLogin"
        >
        </v-password>

        <label class="modal-label" for="safe-data">
          <v-check :id="'safe-data'" class="modal-check"> </v-check>
          <span>Запомнить даные для входа</span>
        </label>
      </div>
      <button class="w-100 v-button" @click="enter">Войти</button>
    </template>

    <div class="modal-text">Еще нет аккаунта?</div>
    <button class="border v-button" @click="register">
      Зарегистрироваться
    </button>

    <button href="#" class="modal-bottom" @click="restore">
      Забыли пароль?
    </button>
  </v-modal>
</template>

<script>
export default {
  name: "modal-login",
  props: {
    visible: Boolean,
  },
  data() {
    return {
      login: {
        login: "",
        password: "",
      },

      invalidLogin: false,
    };
  },
  methods: {
    enter() {
      if (this.login.login === "test" && this.login.password === "test") {
        // this.$store.commit('authTrue')
        this.$store.commit("loginHide");
        this.invalidLogin = false;

        this.$auth.loginWith('local')

        // this.$router.push('tarif')
      } else {
        this.invalidLogin = true;
      }
    },
    register() {
      this.$store.commit("regVisible");
    },
    hideLogin() {
      this.$store.commit("loginHide");
    },
    restore() {
      this.$store.commit("restoreVisible");
    },
  },
  mounted() {
    
  }
};
</script>

<style lang="scss">
.modal-login {
  .modal-inputs {
    margin-bottom: 18px;
  }
  .modal-check {
    margin-right: 10px;
  }
  .modal-text {
    margin-bottom: 8px;
  }
  .modal-bottom {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
  }

  &__invalid {
    display: none;
    text-align: center;
    margin-bottom: 18px;
  }
  &.invalid {
    .modal-login__invalid {
      display: block;
    }
  }
}
</style>