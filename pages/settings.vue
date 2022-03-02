<template>
  <v-page class="settings">
    <template v-slot:title
      >Настройка <span class="mark">Профиля</span></template
    >

    <template v-slot:content>
      <div class="settings__inner">
        <v-block class="profile-info">
          <div class="profile-info__inner">
            <div class="profile-info__ava">
              <img src="~@/assets/img/ava.png" alt="" />
            </div>
            <div class="profile-info__block">
              <div class="profile-info__nick">LancerPro</div>
              <div class="profile-info__status">Default users</div>
            </div>
            <label for="download-ava" class="dovnload-ava">
              <button class="v-button">Загрузить аватар</button>
              <input type="file" id="download-ava" class="v-button" />
            </label>
          </div>
        </v-block>
        <v-block class="p-0 settings-profile">
          <div class="settings-profile__inner">
            <div class="settings-profile__col">
              <g-title class="no-line fz-24 left"> Изменение пароля </g-title>
              <div class="settings-profile__inputs">
                <v-password :placeholder="'Старый пароль'" />
                <v-password :placeholder="'Новый пароль'" />
                <v-password :placeholder="'Подтверждение пароля'" />
              </div>
              <v-button> Изменить пароль </v-button>
            </div>
            <div class="settings-profile__col">
              <g-title class="no-line fz-24 left"> Изменить e-mail </g-title>
              <div class="settings-profile__inputs">
                <v-email :placeholder="'E-mail'" />
                <v-password :placeholder="'Пароль'" />
                
              </div>
              <v-button> Сменить E-mail </v-button>
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
      model: "",
    };
  },
};
</script>

<style lang="scss" >
.settings {
  .v-block {
    .v-block__inner {
      &:after {
        content: "";
        pointer-events: none;
        position: absolute;
        display: block;
        width: 100%;
        height: 20%;
        left: 0;
        bottom: 0;
        z-index: 1;
        background: linear-gradient(180deg, #0f171e 8%, #4e1617 189.26%);
      }
    }
  }
  &__inner {
    display: flex;
    column-gap: 20px;

    
  
    @media (max-width: 900px) {
      flex-direction: column;
      row-gap: 30px;
    }
  }
}
.profile-info {
  width: 20%;

  @media (max-width: 900px) {
    width: 100%;
    .v-block__inner {
      min-height: 0;
      padding: 20px;
    }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    padding-bottom: 50px;

    @media (max-width: 900px) {
      flex-direction: row;
      justify-content: space-between;
      column-gap: 20px;
    }
    @media (max-width: 567px) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__ava {

    img {
      width: 100%;
      height: auto;
      @media (max-width: 900px) {
        max-width: 70px;
      }
    }
  }
  &__block {
    @media (max-width: 900px) {
      flex-grow: 1;
    }
  }
  &__nick {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.83);
  }
  &__status {
    color: rgba(255, 255, 255, 0.5);
  }
  &__nick,
  &__status {
    text-align: center;

    @media (max-width: 900px) {
      text-align: left;
    }
    @media (max-width: 567px) {
      text-align: center;
    }
  }
}
.dovnload-ava {
  input[type="file"] {
    display: none;
  }
  .v-button {
    cursor: pointer;
  }
}
.settings-profile {
  flex-grow: 1;

  &__inner {
    display: flex;
    justify-content: start;
    @media (max-width:768px) {
      flex-direction: column;
    }
  }

  &__col {
    width: 50%;
    padding: 30px;
    overflow: hidden;

    @media (max-width:768px) {
      align-items: center;
      width: 100%;
      padding: 30px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 25px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      transform: rotate(90deg);
      top: 50%;
      right: -50%;
      background: url("~@/assets/img/line.svg");
    }
    &:last-child:after {
      display: none;
    }
  }

  &__inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    flex-grow: 1;
  }
}
</style>