<template>
  <button
    @click="$emit('onClick', label)" 
    class="buttonComp" :class="{ double, triple, operation }">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation : { type: Boolean },
    double : { type: Boolean },
    triple : { type: Boolean },
  }
}
</script>

<style>
:root{
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}
.buttonComp{
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}
.buttonComp:active{
  background-color: #ccc;
}
.buttonComp.double{
  grid-column: span 2;
}
.buttonComp.triple{
  grid-column: span 3;
}
.buttonComp.operation{
  background-color: #fa8231;
}
.buttonComp.operation:active{
  background-color: #fa8231cc;
}
</style>