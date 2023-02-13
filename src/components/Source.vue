<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <source :srcSet="srcSetString" v-bind="attributes" />
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { TSrcSet } from "../types";
import { generateSrcSetString } from "../utils/service";
export default defineComponent({
  setup() {
    const deliveryAddress: string = inject("deliveryAddress")!;
    const stripFromSrc: string = inject("stripFromSrc") as string;
    const count = ref(0);
    return {
      count,
      deliveryAddress,
      stripFromSrc,
    };
  },
  props: {
    srcSet: {
      type: Array as () => TSrcSet,
      required: true,
    },
    attributes: {
      type: Object,
    },
  },
  computed: {
    srcSetString(): String {
      return generateSrcSetString(
        this.stripFromSrc
          ? this.srcSet.map((image) => ({
              ...image,
              src: image.src.replace(this.stripFromSrc, ""),
            }))
          : this.srcSet,
        this.deliveryAddress
      );
    },
  },
});
</script>
