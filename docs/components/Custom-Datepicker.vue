<template>
  <div ref="datepickerWrapper">
    <Datepicker
      v-model="date"
      locale="de"
      :minDate="setDate()"
      format="MMM dd, yyyy"
      :disabled="isDisabled"
      :selectText="selectText"
      :cancelText="cancelText"
      :enableTimePicker="false"
      :yearPicker="pickerType('yearPicker')"
      :monthPicker="pickerType('monthPicker')"
      :weekPicker="pickerType('weekPicker')"
      id="deliveryTime"
    />
  </div>
</template>
<script>
export default{
  inheritAttrs: false
}
</script>
<script setup>
import { ref, computed, watch, onMounted, useAttrs } from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// setting props
const props = defineProps({
  propdate: {
    type: String,
    default: new Date()
  },
  disabled: {
    type: String,
    default: 'false'
  },
  selectText: {
    type: String,
    default: 'Auswählen'
  },
  cancelText: {
    type: String,
    default: 'Abbrechen'
  },
  yearPicker: {
    type: String,
    default: 'false'
  },
  monthPicker: {
    type: String,
    default: 'false'
  },
  weekPicker: {
    type: String,
    default: 'false'
  }
  // id: {
  //   type: String,
  //   default: 'deliveryTime'
  // }
});
const isDisabled = computed(() => {
  return props.disabled !== 'false'
})

const pickerType = (type) => {
  console.log(9, props[type])
  return props[type] !== 'false'
}

const datepickerWrapper = ref(null);
const font = ref("'Open Sans', sans-serif")

function isDateGreater (d1, days) {
  const [day, month, year] = d1.split('.')
  d1 = new Date(+year, +month - 1, +day)
  let today = new Date()
  let d2 = new Date(today.setDate(today.getDate() + 2));
  console.log('1', d1, '2', d2, +new Date(d1) > today.setDate(today.getDate() + (days||0)))
  //return +new Date(d1) > today.setDate(today.getDate() + (days||0))
  return +new Date(d1) > today.setDate(today.getDate() + (days||0)) ? d1 : d2
}

const setDate = () => {
  if (isNaN(props.propdate)) {
    //isDateGreater(props.propdate, 2)
    // console.log(9, isDateGreater(props.propdate, 2))
    // const [day, month, year] = props.propdate.split('.');
    // return new Date(+year, +month - 1, +day)
    return isDateGreater(props.propdate, 2)
  }
  return props.propdate
}
const date = ref(setDate());
// const handleDate = (modelData) => {
//   date.value = modelData;
// }
watch(
  () => date.value,
  (newValue, oldValue) => {
    const value = dateSelected(newValue)
    const dateVal = new CustomEvent("selected", {
      bubbles: true,
      composed: true,
      detail: { val: value }
    })
    datepickerWrapper.value.dispatchEvent(dateVal);
    dp.value.setAttribute('value', value)
  }
);

const dateSelected = (e) => {
  if (e) {
    const d = new Date(e.toString())
    let dateFormat = new Intl.DateTimeFormat('de', { month: '2-digit', day: '2-digit', year: 'numeric' })
    return dateFormat.format(d)
  }
  return ''
}
defineExpose({
  date
})
// creating & emitting events
const emit = defineEmits(["selected"]);
const dp = ref(null)
onMounted(() => {
  dp.value = document.querySelector("#deliveryTime");
  console.log(7, dp.value, datepickerWrapper.value)
})
</script>
<style lang="scss">
// General
$dp__font_family: "Open Sans", sans-serif !default; // Font size for the menu
//$dp__font_family: -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif !default; // Font size for the menu
$dp__border_radius: 4px !default; // Border radius everywhere
$dp__cell_border_radius: $dp__border_radius !default; // Specific border radius for the calendar cell

// Transitions
$dp__transition_length: 22px !default; // Passed to the translateX in animation
$dp__transition_duration: 0.1s !default; // Transition duration

// Sizing
$dp__common_padding: 10px !default;
$dp__input_padding: 6px 12px !default; // padding in the input
$dp__input_icon_padding: 35px !default; // Padding on the left side of the input if icon is present

// Font sizes
$dp__font_size: 1rem !default; // overall font-size
$dp__preview_font_size: 0.8rem !default; // font size of the date preview in the action row
$dp__time_font_size: 2rem !default; // font size in the time picker

.dp__theme_dark {
  --dp-background-color: #212121;
  --dp-text-color: #fff;
  --dp-hover-color: #484848;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #005cb2;
  --dp-primary-disabled-color: #61a8ea;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #2d2d2d;
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-marker-color: #e53935;
  --dp-tooltip-color: #3e3e3e;
  --dp-highlight-color: rgb(0 92 178 / 20%);
}

.dp__theme_light {
  --dp-background-color: #fff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
}

.dp__main {
  font-family: v-bind(font);
  //font-family: $dp__font_family;
  user-select: none;
  box-sizing: border-box;
}

.dp__pointer {
  cursor: pointer;
}


.dp__input_wrap {
  position: relative;
  width: 100%;
  box-sizing: unset;

  &:focus {
    border-color: var(--dp-border-color-hover);
    outline: none;
  }
}

.dp__input {
  background-color: var(--dp-background-color);
  border-radius: $dp__border_radius;
  //font-family: $dp__font_family;
  font-family: v-bind(font);
  border: 1px solid var(--dp-border-color);
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  font-size: $dp__font_size;
  line-height: $dp__font_size * 1.5;
  padding: $dp__input_padding;
  color: var(--dp-text-color);
  box-sizing: border-box;

  &::placeholder {
    opacity: 0.7;
  }

  &:hover {
    border-color: var(--dp-border-color-hover);
  }
}

.dp__input_reg {
  caret-color: transparent;
}

.dp__input_focus {
  border-color: var(--dp-border-color-hover);
}

.dp__disabled {
  background: var(--dp-disabled-color);

  &::placeholder {
    color: var(--dp-disabled-color-text);
  }
}

.dp__input_icons {
  display: inline-block;
  width: $dp__font_size;
  height: $dp__font_size;
  stroke-width: 0;
  font-size: $dp__font_size;
  line-height: $dp__font_size * 1.5;
  padding: $dp__input_padding;
  color: var(--dp-icon-color);
  box-sizing: content-box;
}

.dp__input_icon {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: var(--dp-icon-color);
}

.dp__clear_icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--dp-icon-color);
}

.dp__input_icon_pad {
  padding-left: $dp__input_icon_padding;
}

.dp__input_valid {
  box-shadow: 0 0 $dp__border_radius var(--dp-success-color);
  border-color: var(--dp-success-color);

  &:hover {
    border-color: var(--dp-success-color);
  }
}

.dp__input_invalid {
  box-shadow: 0 0 $dp__border_radius var(--dp-danger-color);
  border-color: var(--dp-danger-color);

  &:hover {
    border-color: var(--dp-danger-color);
  }
}

</style>