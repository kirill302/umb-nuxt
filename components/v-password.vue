<template>
  <div class="password-input">
    <icon-input
      @focus="type = 'text'"
      v-model="value"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="updateInput"
      :invalid="invalid"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 6H12.75V4.5C12.75 2.43 11.07 0.75 9 0.75C6.93 0.75 5.25 2.43 5.25 4.5V6H4.5C3.675 6 3 6.675 3 7.5V15C3 15.825 3.675 16.5 4.5 16.5H13.5C14.325 16.5 15 15.825 15 15V7.5C15 6.675 14.325 6 13.5 6ZM9 12.75C8.175 12.75 7.5 12.075 7.5 11.25C7.5 10.425 8.175 9.75 9 9.75C9.825 9.75 10.5 10.425 10.5 11.25C10.5 12.075 9.825 12.75 9 12.75ZM6.75 6V4.5C6.75 3.255 7.755 2.25 9 2.25C10.245 2.25 11.25 3.255 11.25 4.5V6H6.75Z"
          fill="white"
          fill-opacity="0.5"
        />
        <path
          d="M13.5 6H12.75V4.5C12.75 2.43 11.07 0.75 9 0.75C6.93 0.75 5.25 2.43 5.25 4.5V6H4.5C3.675 6 3 6.675 3 7.5V15C3 15.825 3.675 16.5 4.5 16.5H13.5C14.325 16.5 15 15.825 15 15V7.5C15 6.675 14.325 6 13.5 6ZM9 12.75C8.175 12.75 7.5 12.075 7.5 11.25C7.5 10.425 8.175 9.75 9 9.75C9.825 9.75 10.5 10.425 10.5 11.25C10.5 12.075 9.825 12.75 9 12.75ZM6.75 6V4.5C6.75 3.255 7.755 2.25 9 2.25C10.245 2.25 11.25 3.255 11.25 4.5V6H6.75Z"
          fill="url(#paint0_linear_286_485)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_286_485"
            x1="3.27265"
            y1="0.818223"
            x2="17.1817"
            y2="19.6364"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CE4242" />
            <stop offset="1" stop-color="#527FE1" />
          </linearGradient>
        </defs>
      </svg>
    </icon-input>
    <button
      class="password-input__icon2"
      @click="type = type === 'text' ? 'password' : 'text'"
    >
      <svg
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00008 0.333496C4.66675 0.333496 1.82008 2.40683 0.666748 5.3335C1.82008 8.26016 4.66675 10.3335 8.00008 10.3335C11.3334 10.3335 14.1801 8.26016 15.3334 5.3335C14.1801 2.40683 11.3334 0.333496 8.00008 0.333496ZM8.00008 8.66683C6.16008 8.66683 4.66675 7.1735 4.66675 5.3335C4.66675 3.4935 6.16008 2.00016 8.00008 2.00016C9.84008 2.00016 11.3334 3.4935 11.3334 5.3335C11.3334 7.1735 9.84008 8.66683 8.00008 8.66683ZM8.00008 3.3335C6.89341 3.3335 6.00008 4.22683 6.00008 5.3335C6.00008 6.44016 6.89341 7.3335 8.00008 7.3335C9.10675 7.3335 10.0001 6.44016 10.0001 5.3335C10.0001 4.22683 9.10675 3.3335 8.00008 3.3335Z"
          fill="white"
          fill-opacity="0.35"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "password",
      value: "",
    };
  },
  props: {
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    tabIndex: Number,
    invalid: Boolean,
  },
  methods: {
    updateInput() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss">
.password-input {
  .v-input {
    // padding-left: 54px;
    color: #fff;
  }
  position: relative;
  // &__icon1 {
  //   position: absolute;
  //   left: 12px;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   padding-right: 15px;
  //   border-right: 1px solid #0F171E;

  // }
  &__icon2 {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
  }
}
</style>