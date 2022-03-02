<template>
  <transition name="fade">
    <div class="v-modal" v-show="visible" @keyup="closeAbility ? hide : ''">
      <button
        class="v-modal__bg"
        @click="closeAbility ? $emit('hide') : ''"
      ></button>
      <div class="v-modal__border">
        <div class="v-modal__content">
          <g-title v-if="title" class="fz-24 no-line">
            <slot name="title"> </slot>
          </g-title>
          <lines-block v-if="lines" class="v-modal__lines">
            <slot name="lines"> </slot>
          </lines-block>

          <slot />
        </div>
      </div>

      <div class="v-modal__border" v-if="twoModal.visible">
        <div class="v-modal__content">
          <g-title v-if="twoModal.title" class="fz-24 no-line">
            <slot name="title2"> </slot>
          </g-title>
          <lines-block v-if="twoModal.lines" class="v-modal__lines">
            <slot name="lines2"> </slot>
          </lines-block>

          <slot name="modal2" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: true,
    },
    lines: {
      type: Boolean,
      default: true,
    },
    closeAbility: {
      type: Boolean,
      default: true,
    },
    twoModal: {
      type: Object,
      default() {
        return {
          visible: false,
          title: true,
          lines: true,
        };
      },
    },
  },
  methods: {
    hide(e) {
      if (e.code === "Escape") {
        this.$emit("hide");
      }
    },
  },
};
</script>

<style lang="scss">
.modal-inputs {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.modal-bottom {
  position: relative;
  display: block;
  transform: translateY(42px);
  z-index: 111;
}
.v-modal {
  overflow: auto;
  position: fixed;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;

  &__bg {
    cursor: default;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 30, 0.5);
    backdrop-filter: blur(15px);
  }
  &__border {
    width: 100%;
    max-width: 330px;
    padding: 2px;
    background: linear-gradient(
      180deg,
      rgba(94, 45, 48, 1) 0%,
      rgba(17, 24, 30, 1) 100%
    );
    z-index: 100;
    border-radius: 15px;
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: radial-gradient(
        69.58% 69.58% at 50% 6.02%,
        rgba(182, 73, 73, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, #282a3a 0%, #2d252f 100%);
    box-shadow: 0px 0px 58px rgba(215, 50, 49, 0.5);
    border-radius: 15px;
    padding: 20px;
  }
  &__lines {
    width: 100%;
  }
}
</style>