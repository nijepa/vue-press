<template>
  <h1 style="text-align: center; margin-bottom: 2em">Datepicker - demo</h1>
  <div class="demo">
    <datepicker
      id="deliveryTime"
      propdate="02.12.2022"
      :disabled="property('disabled')"
      :selectText="property('selectText')"
      :cancelText="property('cancelText')"
      :yearPicker="property('yearPicker')"
      :monthPicker="property('monthPicker')"
    ></datepicker>
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
</template>
<script setup>
import datepicker from "../../components/Custom-Datepicker.vue";
import { ref } from "vue";
const option = ref(["true", "false"]);
const props = ref([
  { name: "disabled", val: "false", type: "select", source: option.value },
  { name: "selectText", val: "select", type: "text" },
  { name: "cancelText", val: "cancel", type: "text" },
  { name: "yearPicker", val: "false", type: "select", source: option.value },
  { name: "monthPicker", val: "false", type: "select", source: option.value },
]);
const property = (type) => {
  return props.value.find((t) => t.name === type).val;
};
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
  padding: 0.5em;
  border-radius: 0.5em;
  margin: 0;
  cursor: pointer;
  color: black;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 rgb(87, 255, 179), 2px -2px 0 rgb(87, 255, 179),
    -2px 2px 0 rgb(87, 255, 179), -2px -2px 0 rgb(87, 255, 179),
    2px 0px 0 rgb(87, 255, 179), 0px 2px 0 rgb(87, 255, 179),
    -2px 0px 0 rgb(87, 255, 179), 0px -2px 0 rgb(87, 255, 179);
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
  padding: 0.5em;
  border-top: 1px solid grey;
  border-bottom: none;
}
li:last-child {
  border-bottom: 1px solid grey;
}
input,
select {
  padding: 0.5em;
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
