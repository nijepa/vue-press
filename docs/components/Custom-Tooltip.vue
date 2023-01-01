<template>
  <transition :name="direction" appear mode="in-out">
    <div
      ref="tooltip"
      v-if="isActive"
      :class="[
        hasPosition,
        hasSize,
        hasShadow,
        {
          'cadooz-tooltip': isActive && labelText,
        },
      ]"
    >
      <div class="cadooz-tooltip__text" :class="hasShadow">
        <span class="text">{{ labelText }}</span>
      </div>
      <slot />
      <svg
        width="10"
        height="10"
        :class="[
          hasPosition,
          hasShadow,
          { 'not-active': !isActive || !labelText },
        ]"
        class="cadooz-tooltip__arrow"
      >
        <rect width="10" height="10" />
      </svg>
    </div>
  </transition>
</template>
<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
// setting props
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "is-top",
    validator(value) {
      return ["is-top", "is-bottom", "is-left", "is-right"].indexOf(value) > -1;
    },
  },
  size: {
    type: String,
    default: "is-medium",
    validator(value) {
      return ["is-small", "is-medium", "is-large"].indexOf(value) > -1;
    },
  },
  background: {
    type: String,
    default: "#000",
  },
  color: {
    type: String,
    default: "#fff",
  },
  font: {
    type: String,
    default: "'Open Sans', sans-serif",
  },
  fontsize: {
    type: String,
    default: "1em",
  },
  fontweight: {
    type: Number,
    default: 400,
  },
  radius: {
    type: String,
    default: "4px",
  },
  shadow: {
    type: Boolean,
    default: true,
  },
});
// setting reactive properties from props
const isActive = ref(props.active);
const labelText = ref(props.label || null);
const hasPosition = ref(props.position || "is-top");
const hasSize = ref(props.size || "is-medium");
const hasBackground = ref(props.background);
const hasColor = ref(props.color);
const hasFont = ref(props.font);
const hasFontSize = ref(props.fontsize);
const hasFontWeight = ref(props.fontweight);
const hasRadius = ref(props.radius);
const top = ref(0);
const left = ref(0);
const direction = ref("vertical");
const amountpx = ref("25px");
const tooltip = ref(null);
const hostElement = ref(null);

const hasShadow = computed(() =>
  props.shadow === "false" ? "" : "has-shadow"
);

const setStyles = () => {
  labelText.value = hostElement.value.getAttribute("data-label") || props.label;
  hasSize.value = hostElement.value.getAttribute("size") || props.size;
  hasPosition.value =
    hostElement.value.getAttribute("position") || props.position;
  hasBackground.value =
    hostElement.value.getAttribute("background") || props.background;
  hasColor.value = hostElement.value.getAttribute("color") || props.color;
  getAnimation();
};

const setAnimation = new Map([
  ["is-top", { dir: "vertical", px: "25px" }],
  ["is-bottom", { dir: "vertical", px: "-25px" }],
  ["is-left", { dir: "horizontal", px: "25px" }],
  ["is-right", { dir: "horizontal", px: "-25px" }],
]);
const getAnimation = () => {
  direction.value = setAnimation.get(hasPosition.value).dir;
  amountpx.value = setAnimation.get(hasPosition.value).px;
};
// resolving component position
const getOffset = () => {
  const rect = hostElement.value.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
  };
};
const setWidth = new Map([
  ["is-medium", 200],
  ["is-small", 100],
  ["is-large", 300],
]);
const getPosition = {
  "is-top": () => {
    top.value = `${getOffset().top - tooltip.value.offsetHeight - 10}px`;
    left.value = `${
      getOffset().left + getOffset().width / 2 - tooltip.value.offsetWidth / 2
    }px`;
  },
  "is-bottom": () => {
    top.value = `${getOffset().bottom + 10}px`;
    left.value = `${
      getOffset().left + getOffset().width / 2 - tooltip.value.offsetWidth / 2
    }px`;
  },
  "is-left": () => {
    top.value = `${
      getOffset().top + getOffset().height / 2 - tooltip.value.offsetHeight / 2
    }px`;
    left.value = `${getOffset().left - setWidth.get(hasSize.value) - 10}px`;
  },
  "is-right": () => {
    top.value = `${
      getOffset().top + getOffset().height / 2 - tooltip.value.clientHeight / 2
    }px`;
    left.value = `${getOffset().left + getOffset().width + 10}px`;
  },
};

const show = () => {
  isActive.value = true;
  setStyles();
  nextTick(() => {
    getOffset();
    getPosition[hasPosition.value]();
  });
};
const hide = () => {
  isActive.value = false;
};

onMounted(() => {
  let tooltips = document.querySelectorAll("[cadooz-tooltip]");
  window.addEventListener("scroll", getOffset);
  tooltips.forEach((el) => {
    ["mouseover", "touchstart"].forEach((event) =>
      el.addEventListener(event, () => {
        hostElement.value = el;
        show();
      })
    );
    ["mouseleave", "touchleave"].forEach((event) =>
      el.addEventListener(event, () => {
        hide();
      })
    );
  });
});
</script>
<style lang="scss">
$tooltip-color: v-bind(hasColor); // color
$tooltip-background: v-bind(hasBackground); // background color
$tooltip-radius: v-bind(hasRadius); // border radius
$tooltip-weight: v-bind(hasFontWeight); // font weight
$speed: 400ms; // animation speed
$speedout: 200ms; // animation speed
$small: 100px; // 140
$medium: 200px; // 250
$large: 300px; // 480
$shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
$direction: v-bind(amountpx);
.not-active {
  display: none;
}
.cadooz-tooltip {
  position: fixed;
  pointer-events: none;
  border-radius: $tooltip-radius;
  color: $tooltip-color;
  text-align: center;
  line-height: 1.3;
  letter-spacing: normal;
  text-transform: none;
  font-family: v-bind(hasFont);
  font-size: v-bind(hasFontSize);
  font-weight: $tooltip-weight;
  top: v-bind(top);
  left: v-bind(left);
  &.has-shadow {
    box-shadow: $shadow;
    filter: drop-shadow(rgba(0, 0, 0, 0.3) 0 2px 7px);
  }
  &.is-small {
    max-width: $small;
  }
  &.is-medium {
    max-width: $medium;
  }
  &.is-large {
    max-width: $large;
  }
}
.cadooz-tooltip__arrow {
  z-index: 90;
  position: absolute;
  rect {
    fill: $tooltip-background;
  }
  &.has-shadow {
    box-shadow: $shadow;
  }
  &.is-right,
  &.is-left {
    top: calc(50% - 5px);
  }
  &.is-right {
    left: calc(0% - 5px);
    transform: rotate(135deg) skew(20deg, 20deg);
  }
  &.is-left {
    left: calc(100% - 5px);
    transform: rotate(-45deg) skew(20deg, 20deg);
  }
  &.is-bottom,
  &.is-top {
    left: calc(50% - 5px);
  }
  &.is-bottom {
    top: calc(0% - 5px);
    transform: rotate(-135deg) skew(20deg, 20deg);
  }
  &.is-top {
    top: calc(100% - 5px);
    transform: rotate(45deg) skew(20deg, 20deg);
  }
}
.cadooz-tooltip__text {
  position: relative;
  z-index: 100;
  padding: 0.75em 0.5em;
  background: $tooltip-background;
  border-radius: $tooltip-radius;
  word-break: break-word;
}
.vertical-enter-active {
  animation: verticals $speed ease;
}
.vertical-leave-active {
  animation: verticals $speedout reverse;
}
.horizontal-enter-active {
  animation: horizontals $speed ease;
}
.horizontal-leave-active {
  animation: horizontals $speedout reverse;
}
/* transform: translateY(75px) scale(0.3, 0.2) skew(30deg, 20deg);*/
@keyframes verticals {
  0% {
    transform: translateY($direction);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
}
@keyframes horizontals {
  0% {
    transform: translateX($direction);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
}
</style>
