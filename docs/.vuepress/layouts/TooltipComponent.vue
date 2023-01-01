<template>
  <h1 style="text-align: center; margin-bottom: 2em">Tooltip - demo</h1>
  <div class="demo">
    <h3 class="component" cadooz-tooltip :data-label="props[4].val">
      {{ abc }}
    </h3>
    <div class="props">
      <h2>PROPERTIES</h2>
      <ul>
        <li v-for="prop in props">
          <label :for="prop.name">{{ prop.name }}</label>
          <span v-if="prop.type === 'text'"
            ><input v-model="prop.val" type="text" :id="prop.name"
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
    :size="props[2].val"
    :position="props[3].val"
    :background="props[0].val"
    :color="props[1].val"
    :radius="props[5].val"
    :shadow="props[6].val"
    :font="props[7].val"
    :fontweight="props[8].val"
    :fontsize="props[9].val"
  />
</template>
<script setup>
import tooltip from "../../components/Custom-Tooltip.vue";
import { ref } from "vue";
const abc = ref("hover me");
const positions = ref(["is-top", "is-bottom", "is-left", "is-right"]);
const sizes = ref(["is-small", "is-medium", "is-large"]);
const props = ref([
  { name: "background", val: 'black', type: "text" },
  { name: "color", val: 'white', type: "text" },
  { name: "size", val: 'is-medium', type: "select", source: sizes.value },
  { name: "position", val: 'is-top', type: "select", source: positions.value },
  { name: "text", val: 'tooltip content', type: "text" },
  { name: "radius", val: '0px', type: "text" },
  { name: "shadow", val: true, type: "text" },
  { name: "font", val: `'Open Sans', sans-serif`, type: "text" },
  { name: "fontweight", val: 400, type: "text" },
  { name: "fontsize", val: '1em', type: "text" }
]);
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
