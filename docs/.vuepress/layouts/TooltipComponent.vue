<template>
  <h1 style="text-align: center; margin-bottom: 2em">Tooltip - demo</h1>
  <div class="demo">
    <h3 class="component" cadooz-tooltip :data-label="property('text')">
      {{ abc }}
    </h3>
    <div class="props">
      <h2>PROPS</h2>
      <ul>
        <li v-for="prop in props">
          <label :for="prop.name">{{ prop.name }}</label>
          <span v-if="prop.type !== 'select'"
            ><input v-model="prop.val" :type="prop.type" :id="prop.name"
          /></span>
          <span v-if="prop.type === 'select'">
            <select v-model="prop.val" :id="prop.name">
              <option v-for="option in prop.source" :value="option">
                {{ option }}
              </option>
            </select>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <tooltip
    :size="property('size')"
    :position="property('position')"
    :background="property('background')"
    :color="property('color')"
    :radius="property('radius')"
    :shadow="property('shadow')"
    :font="property('font')"
    :fontweight="property('fontweight')"
    :fontsize="property('fontsize')"
  />
</template>
<script setup>
import tooltip from "../../components/Custom-Tooltip.vue";
import { ref } from "vue";
const abc = ref("hover me");
const positions = ref(["is-top", "is-bottom", "is-left", "is-right"]);
const sizes = ref(["is-small", "is-medium", "is-large"]);
const option = ref(['true', 'false']);
const props = ref([
  { name: "background", val: '#000000', type: "color" },
  { name: "color", val: '#ffffff', type: "color" },
  { name: "size", val: 'is-medium', type: "select", source: sizes.value },
  { name: "position", val: 'is-top', type: "select", source: positions.value },
  { name: "text", val: 'tooltip content', type: "text" },
  { name: "radius", val: '0px', type: "text" },
  { name: "shadow", val: true, type: "select", source: option.value },
  { name: "font", val: `'Open Sans', sans-serif`, type: "text" },
  { name: "fontweight", val: 400, type: "number" },
  { name: "fontsize", val: '1em', type: "text" }
]);
const property = (type) => {
  return props.value.find(t => t.name === type).val
}
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.component {
  background: rgb(58, 166, 117);
  padding: .5em;
  border-radius: .5em;
  margin: 0;
  cursor: pointer;
  color: black;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 rgb(87, 255, 179), 2px -2px 0 rgb(87, 255, 179), -2px 2px 0 rgb(87, 255, 179), -2px -2px 0 rgb(87, 255, 179), 2px 0px 0 rgb(87, 255, 179), 0px 2px 0 rgb(87, 255, 179), -2px 0px 0 rgb(87, 255, 179), 0px -2px 0 rgb(87, 255, 179);
}
.props {
  margin-top: 3em;
  width: 100%;
}
.props h2 {
  text-align: center;
  border-bottom: none;
}
ul {
  list-style-type: none;
}
li {
  display: flex;
  justify-content: space-between;
  gap: 1em;
  padding: .5em;
  border-top: 1px solid grey;
  border-bottom: none;
}
li:last-child {
  border-bottom: 1px solid grey;
}
input, select {
  padding: .5em;
  min-width: 200px;
  /* background: white; */
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 1em;
}
select {
  min-width: 215px;
}
</style>
