<template>
  <div class="icon-input" :class="pos === 'right' ? 'icon-right' : 'icon-left'">
    <span class="icon-input__icon"> <slot> </slot> </span>
    <v-input
      v-model="value"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="updateInput"
      :class="invalid ? 'invalid' : ''"
    ></v-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: {
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    type: String,
    tabIndex: Number,
    invalid: Boolean,
    pos: String,

  },
  methods: {
    updateInput() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss">
.icon-input {
  .v-input {
    color: #fff;
  }
  position: relative;

  &.icon-right {
    .icon-input__icon {
      right: 10px;
    }
    .v-input {
      padding-left: 24px;
    }
  }
  &.icon-right:after {
    display: block;
  }
  &.icon-left {
    .icon-input__icon {
      left: 12px;
      border-right: 1px solid #0f171e;
      padding-right: 15px;
    }
    .v-input {
      padding-left: 54px;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:after {
    content: "";
    position: absolute;
    height: 24px;
    width: 1px;
    background: #0f171e;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
}
</style>