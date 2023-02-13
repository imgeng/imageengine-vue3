<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
export default defineComponent({
  props: {
    deliveryAddress: {
      type: String,
      required: true,
    },
    stripFromSrc: {
      type: String,
    },
  },

  setup(props) {
    provide("deliveryAddress", props.deliveryAddress);
    provide("stripFromSrc", props.stripFromSrc);
  },
});
</script>
