<template>
  <div
    class="range"
    :class="{
      'r-1': vRange === 1,
      'r-2': vRange === 2,
      'r-3': vRange === 3,
      'r-4': vRange === 4,
      'r-5': vRange === 6,
      'r-6': vRange === 8,
    }"
  >
    <input
      type="range"
      class="range__input"
      step="1"
      min="1"
      max="8"
      ref="range"
      @input="range"
      v-model.number="vRange"
    />
    <div class="range__inner">
      <div class="range__index">1 <span>день</span></div>
      <div class="range__index">7 <span>дней</span></div>
      <div class="range__index">14 <span>дней</span></div>
      <div class="range__index">30 <span>дней</span></div>
      <div class="range__index">90 <span>дней</span></div>
      <div class="range__index">180 <span>дней</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-range',
  data() {
    return {
      vRange: 1,
      value: 1,
    };
  },

  methods: {
    range(e) {
      this.value = this.vRange;

      let rangeValue = this.vRange

      if (rangeValue === 5 || rangeValue === 6) {
        this.vRange = 6;
        this.value = 5;
      } else if (rangeValue === 7 || rangeValue === 8) {
        this.vRange = 8;
        this.value = 6;
      }

      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss">
.range {
  padding-bottom: 34px;
  &__input {
    width: 100%;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: -11px;
      left: -2px;
      background: #4c5155;
      width: 1px;
      height: 37px;
      transition: 0.1s;

      
    }
    &:before {
      content: "";
      position: absolute;
      top: -11px;
      right: -2px;
      background: #4c5155;
      width: 1px;
      height: 37px;
      transition: 0.1s;
    }
  }

  &__index {
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    position: absolute;
    padding-top: 17px;
    transition: 0.1s;

    &:after {
      content: "";
      position: absolute;
      top: -11px;
      left: 21px;
      background: #4c5155;
      width: 4px;
      height: 15px;
      border-left: solid 1.5px #0f171e;
      border-right: solid 1.5px #0f171e;
      pointer-events: none;
      @media (max-width: 980px) {
        left: 0;
      }
    }
    @media (max-width: 567px) {
      span {
        display: none;
      }
    }
  }
  &__index:nth-child(1) {
    left: 1%;

    &:after {
      display: none;
    }
  }
  &__index:nth-child(2) {
    left: 12.5%;
  }
  &__index:nth-child(3) {
    left: 25%;
  }
  &__index:nth-child(4) {
    left: 39%;
  }
  &__index:nth-child(5) {
    left: 67%;
  }
  &__index:nth-child(6) {
    left: 90%;

    &:after {
      display: none;
    }
  }
  @media (max-width: 567px) {
    &__index:nth-child(1) {
      left: 1%;
    }
    &__index:nth-child(2) {
      left: 15.5%;
    }
    &__index:nth-child(3) {
      left: 28%;
    }
    &__index:nth-child(4) {
      left: 41.5%;
    }
    &__index:nth-child(5) {
      left: 68.5%;
    }
    &__index:nth-child(6) {
      left: 93%;
    }
  }

  &.r-1 {
    .range__inner:after {
      opacity: 0;
    }
    .range__input {
      background: linear-gradient(
        90deg,
        rgba(195, 71, 80, 1) 0%,
        rgba(82, 127, 225, 1) 0%,
        rgba(76, 81, 85, 1) 0%
      );
    }
  }
  &.r-2 {
    .range__index:nth-child(2):after {
      opacity: 0;
    }
    .range__input {
      background: linear-gradient(
        90deg,
        rgba(195, 71, 80, 1) 0%,
        rgba(82, 127, 225, 1) 14.5%,
        rgba(76, 81, 85, 1) 14.5%
      );
    }
  }
  &.r-3 {
    .range__index:nth-child(3):after {
      opacity: 0;
    }
    .range__input {
      background: linear-gradient(
        90deg,
        rgba(195, 71, 80, 1) 0%,
        rgba(82, 127, 225, 1) 30%,
        rgba(76, 81, 85, 1) 30%
      );
    }
  }
  &.r-4 {
    .range__index:nth-child(4):after {
      opacity: 0;
    }
    .range__input {
      background: linear-gradient(
        90deg,
        rgba(195, 71, 80, 1) 0%,
        rgba(82, 127, 225, 1) 43%,
        rgba(76, 81, 85, 1) 43%
      );
    }
  }
  &.r-5 {
    .range__index:nth-child(5):after {
      opacity: 0;
    }
    .range__input {
      background: linear-gradient(
        90deg,
        rgba(195, 71, 80, 1) 0%,
        rgba(82, 127, 225, 1) 71%,
        rgba(76, 81, 85, 1) 71%
      );
    }
  }
  &.r-6 {
    .range__inner:before {
      opacity: 0;
    }
    .range__input {
      background: linear-gradient(
        90deg,
        rgba(195, 71, 80, 1) 0%,
        rgba(82, 127, 225, 1) 100%,
        rgba(76, 81, 85, 1) 100%
      );
    }
  }
}

.range__input {
  outline: 0;
  border: 0;
  border-radius: 0;
  width: 100%;
  max-width: 100%;
  transition: box-shadow 0.2s ease-in-out;
  transition: 0.1s;
  background: linear-gradient(
    90deg,
    rgba(195, 71, 80, 1) 0%,
    rgba(82, 127, 225, 1) 50%,
    rgba(76, 81, 85, 1) 50%
  );

  // Chrome
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    & {
      height: 8px;
      -webkit-appearance: none;
    }
    &::-webkit-slider-runnable-track {
      height: 24px;
      -webkit-appearance: none;

      transition: box-shadow 0.2s ease-in-out;
    }
    &::-webkit-slider-thumb {
      width: 24px;
      -webkit-appearance: none;
      height: 24px;
      background: url("~@/assets/img/range-thumb.svg");
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out;
      position: relative;
      // top: 1px;
    }
    &:active::-webkit-slider-thumb {
      box-shadow: 0 0 3px #527fe1;
      background: url("~@/assets/img/range-thumb.svg");
    }
  }
  // Firefox
  &::-moz-range-progress {
    background-color: #43e5f7;
  }
  &::-moz-range-track {
    background-color: #9a905d;
  }
  // IE
  &::-ms-fill-lower {
    background-color: #43e5f7;
  }
  &::-ms-fill-upper {
    background-color: #9a905d;
  }
}
</style>