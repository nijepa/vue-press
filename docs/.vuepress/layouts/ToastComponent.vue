<template>
  <h1 style="text-align: center; margin-bottom: 2em">Toast - demo</h1>
  <div class="demo">
    <button @click="show" class="component"><h3>click me</h3></button>
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
  <toast
    :is-active="abc"
    :toast-data="JSON.stringify(td)"
    :toast-style="JSON.stringify(ts)"
  >
    <span slot="additionalData">
      <div>
        <h3>additional info in slot</h3>
        <i>tandar mandara broc</i>
      </div>
    </span>
  </toast>
</template>
<script setup>
import toast from "../../components/Custom-Toast.vue";
import { ref, computed, onMounted } from "vue";
const abc = ref("false");
const options = ref([true, false]);
const types = ref(["info", "success", "error"]);
const positions = ref([
  "center",
  "left-top",
  "right-top",
  "left-bottom",
  "right-bottom",
]);
const props = ref([
  { name: "title", val: "djuro", type: "text" },
  { name: "message", val: "white", type: "text" },
  { name: "decoration", val: true, type: "select", source: options.value },
  { name: "colorized", val: true, type: "select", source: options.value },
  { name: "backdrop", val: true, type: "select", source: options.value },
  { name: "type", val: "success", type: "select", source: types.value },
  { name: "position", val: "center", type: "select", source: positions.value },
  { name: "font", val: `'Open Sans', sans-serif`, type: "text" },
  { name: "color", val: "#ffffff;", type: "text" },
]);
const td = computed(() => {
  return {
    title: props.value[0].val,
    message: props.value[1].val,
    type: props.value[5].val,
  };
});
const ts = computed(() => {
  return {
    decoration: props.value[2].val,
    colorized: props.value[3].val,
    backdrop: props.value[4].val,
    position: props.value[6].val,
    font: props.value[7].val,
    color: props.value[8].val,
  };
});
const show = () => {
  abc.value = "true";
};

function toastClosed() {
  abc.value = "false";
}
onMounted(() => {
  window.addEventListener("close-toast", toastClosed);
});
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
