<template>
  <div
    class="b-select"
    :class="{ active: selectVisible }"
    @blur="selectVisible = false"
  >
    <button class="b-select__wrapp" @click="visbleSelect" @blur="hideSelect">
      <div class="b-select__value" >
        {{ value }}
      </div>
    </button>

    <transition name="fade">
      <div class="b-select__list" v-show="selectVisible">
        <div
          class="b-select__item"
          v-for="option in options"
          :key="option.id"
          :data-id="option.id"
          @click="setValue"
        >
          {{ option.text }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      value: `${this.options[0].text}`,
      selectVisible: false,
    };
  },
  methods: {
    visbleSelect() {
      this.selectVisible = this.selectVisible ? false : true;
    },
    hideSelect() {
      this.selectVisible = false;
    },
    setValue(e) {
      const id = e.target.getAttribute("data-id");
      this.value = this.options[id].text;
      this.selectVisible = false;
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.b-select {
  font-family: "Ruda", sans-serif;
  max-height: 100%;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  background: #000000;
  border-radius: 38px;
  user-select: none;
  color: #fff;
  font-size: 14px;

  &__wrapp {
    background: none;
    color: #fff;
    text-align: left;
    padding: 5px 35px 5px 12px;
  }

  &__value:after {
    content: "";
    display: block;
    position: absolute;
    right: -25px;
    width: 15px;
    height: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url("~@/assets/img/select-arr.svg");
    background-repeat: no-repeat, repeat;
    background-size: contain;
    transition: 0.1s;

    @media (max-width: 567px) {
      width: 13px;
      height: 8px;
    }
  }

  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;

    display: flex;
    flex-direction: column;
    background: #000;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    border-radius: 0 0 15px 15px;
  }
  &__item {
    cursor: pointer;
    max-width: 100%;
    overflow: hidden;
    padding: 10px 12px;
    position: relative;

    @media (max-width: 567px) {
      padding: 8px 10px;
    }
    @media (max-width: 380px) {
      padding: 5px 8px;
    }
  }
  &__item:hover {
    background: linear-gradient(90deg, #ce4242 -10.17%, #527fe1 107.26%);
    color: #fff;
    animation: selectHover 1.5s ease infinite alternate;
    background-size: 400% 400%;
  }

  @keyframes selectHover {
    0% {
      background-position: 0% 20%;
    }
    50% {
      background-position: 100% 70%;
    }
    100% {
      background-position: 0% 120%;
    }
  }

  &__item:last-child {
    border-radius: 0 0 15px 15px;
  }

  @media (max-width: 568px) {
    padding: 7px 3px 8px 8px;
  }
  @media (max-width: 380px) {
    padding: 7px 3px 8px 5px;
    font-size: 12px;
  }
}
.b-select__value {
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.b-select.active {
  &:after {
    transform: rotate(-180deg);
    top: 39%;
  }
  border-radius: 15px 15px 0 0;
}
.b-select:hover {
  border-color: #888;
}
.b-select:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
</style>