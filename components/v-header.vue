<template>
  <header class="header" :class="{ 'bg-active': burgerOpen }">
    <div class="max-container">
      <div class="header__inner">
        <div class="header__logo">
          <v-logo />
        </div>
        <div class="mobile-menu">
          <div class="mobile-menu__enter">
            <v-enter />
          </div>
          <!-- v-if="this.$store.getters.auths" -->
          <nav class="menu" v-if="$auth.loggedIn">
            <nuxt-link to="/" exact class="menu__item" @click="openMobileMenu"
              >Главная</nuxt-link
            >
            <nuxt-link to="tarif" class="menu__item" @click="openMobileMenu"
              >Подписки</nuxt-link
            >
            <nuxt-link to="download" class="menu__item" @click="openMobileMenu"
              >Скачать</nuxt-link
            >
            <nuxt-link to="settings" class="menu__item" @click="openMobileMenu"
              >Настройки</nuxt-link
            >
            <nuxt-link to="bonus" class="menu__item" @click="openMobileMenu"
              >Реф.система</nuxt-link
            >
            <nuxt-link to="faq" class="menu__item" @click="openMobileMenu"
              >Faq</nuxt-link
            >
          </nav>
          <nav class="menu" v-else>
            <a data-go="html" exact class="menu__item active">Главная</a>
            <a data-go=".benefits" exact class="menu__item">Преимущества</a>
            <a data-go=".opportunities" class="menu__item">Галерея</a>
            <a data-go=".home-tarif" class="menu__item">Покупка</a>
            <a
              href="https://vk.com/cheats_dota"
              target="_blank"
              class="menu__item"
              >Мы в ВК</a
            >
          </nav>
        </div>
        <div class="header__enter">
          <v-enter />
        </div>
        <button class="header__burger" @click="openMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      burgerOpen: false,
      isAuth: false,
    };
  },
  methods: {
    openMobileMenu() {
      this.burgerOpen = this.burgerOpen ? false : true;
    },
  },
  mounted() {
    const header = document.querySelector(".header");

    document.querySelectorAll(".menu__item").forEach((i) => {
      i.addEventListener("click", () => {
        if (i.classList.contains("top")) {
        } else {
          header.classList.remove("bg-active");
        }
      });
    });

    const goLinks = document.querySelectorAll("a[data-go]");

    const goArray = [];

    goLinks.forEach((link) => {
      const selector = link.dataset.go;

      const goBlock = document.querySelector(selector);
      const headerHeight = document.querySelector(".header").offsetHeight;
      let blockValue =
        goBlock.getBoundingClientRect().top + pageYOffset + headerHeight;

      goArray.push({
        link: link,
        goBlock: goBlock,
        top: blockValue,
      });

      link.addEventListener("click", () => {
        if (selector && goBlock) {
          blockValue =
            goBlock.getBoundingClientRect().top + pageYOffset + headerHeight;
          if (
            selector === ".opportunities" ||
            selector === ".benefits" ||
            selector === "html"
          ) {
            blockValue -= 2 * headerHeight;
          }

          window.scrollTo({
            top: blockValue,
            behavior: "smooth",
          });

          this.openMobileMenu();
        }
      });
    });

    window.addEventListener("scroll", () => {
      let tempArray = [];

      let scrolling = window.pageYOffset;

      goArray.forEach((item) => {
        item.link.classList.remove("active");
        if (scrolling / 1.2 <= item.top) {
          tempArray.push(item.link);
        }
      });
      console.log(tempArray);
      tempArray[0].classList.add("active");
    });
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000;

  background: linear-gradient(
    180deg,
    rgba(15, 23, 30, 0.75) 46.36%,
    rgba(15, 23, 30, 0) 100%
  );

  &.back {
    z-index: 0;
  }

  padding-bottom: 10px;
  @media (max-width: 567px) {
    padding-bottom: 5px;
    padding-top: 15px;
  }

  &.bg-active {
    .mobile-menu {
      left: 0;
    }
    .header__burger {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      span:nth-child(1) {
        transform: translateY(0) rotate(-45deg);
        transition-delay: 0;
      }
      span:nth-child(2) {
        transform: translateY(0) translateX(150%);
        transition-delay: 0.1;
      }
      span:nth-child(3) {
        transform: translateY(0) rotate(45deg);
        transition-delay: 0.1;
      }
    }
  }
  padding: 20px 40px;
  @media (max-width: 1400px) {
    padding: 15px 30px;
  }
  @media (max-width: 1100px) {
    padding: 25px;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 30px;

    @media (max-width: 1100px) {
      align-items: center;
    }
  }
  &__enter {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__burger {
    @media (min-width: 768px) {
      display: none;
    }
    cursor: default;
    overflow: hidden;
    position: relative;
    z-index: 9999;
    width: 55px;
    height: 55px;
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      rgba(206, 66, 66, 0.6) -10.17%,
      rgba(82, 127, 225, 0.6) 107.26%
    );
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 40px;
      height: 3px;
      background: #e8e8e8;
      position: absolute;
      opacity: 0.8;
      border-radius: 5px;
      transition: 0.2s;
    }
    span:nth-child(1) {
      transform: translateY(-13px);
    }
    span:nth-child(2) {
      transform: translateY(0);
    }
    span:nth-child(3) {
      transform: translateY(13px);
    }
  }
}
.mobile-menu {
  row-gap: 30px;
  z-index: 999;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 25px;

    z-index: 10;
    position: fixed;
    top: 0;
    left: -110%;
    transition: 0.3s;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      90deg,
      rgba(206, 66, 66, 0.9) -10.17%,
      rgba(82, 127, 225, 0.9) 107.26%
    );
  }
  &__enter {
    align-self: flex-start;

    @media (min-width: 768px) {
      display: none;
    }
  }
}
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  column-gap: 100px;
  row-gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }

  @media (max-width: 1400px) {
    column-gap: 50px;
  }
  @media (max-width: 1100px) {
    column-gap: 30px;
    flex-wrap: wrap;
  }
  align-items: center;
  padding: 0 50px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;

    @media (max-width: 1100px) {
      padding-top: 0;
    }
  }
  &__item:before {
    content: "";
    z-index: -1;
    position: absolute;
    transition: 0.1s;
    @media (min-width: 1100px) {
      width: 280%;
      bottom: -28%;
      background: radial-gradient(
        36.35% 36.51% at 50.06% 63.49%,
        rgba(215, 50, 49, 0.66) 0%,
        rgba(215, 50, 49, 0.3) 7.81%,
        rgba(215, 50, 49, 0.289831) 29.17%,
        rgba(215, 50, 49, 0) 100%
      );
      height: 130%;
      opacity: 0;
    }
    @media (max-width: 1100px) {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      width: 0%;
      background: rgba(215, 50, 49, 1);
    }
  }
  &__item:hover:before,
  &__item.active:before,
  &__item:focus:before,
  &__item.nuxt-link-active:before {
    @media (min-width: 1100px) {
      opacity: 1;
    }
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
  &__item:after {
    @media (min-width: 1100px) {
      content: "";
      display: block;
      position: absolute;
      background: radial-gradient(
        100% 100% at 45.56% 0%,
        #d73231 0%,
        #792625 100%
      );
      border-radius: 50%;
      border: 1px solid #d73231;
      box-shadow: 0px 0px 15px 4px rgba(215, 50, 49, 0.5);
      width: 9px;
      height: 9px;
      top: -3px;
      z-index: 3;
      opacity: 0;
      transition: 0.1s;
    }
  }
  &__item {
    padding-top: 20px;
    position: relative;
    z-index: 4;
    font-family: "Ruda", sans-serif;
    font-size: 15px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.5);
    transition: 0.1s;

    @media (max-width: 1100px) {
      padding-top: 0 !important;
    }

    @media (max-width: 768px) {
      font-size: 23px;
    }
  }
  &__item:hover,
  &__item.active,
  &__item:focus,
  &__item.nuxt-link-active {
    color: #fff;
  }
  &__item:hover:after,
  &__item.active:after,
  &__item:focus:after,
  &__item.nuxt-link-active:after {
    pointer-events: none;
    opacity: 1;
  }

  @media (min-width: 1100px) {
    &:after {
      content: "";
      position: absolute;
      z-index: 2;
      min-width: 100%;
      height: 1px;
      top: 0;
      left: 0;
      background: url("~@/assets/img/line.svg");
    }
  }
}
</style>