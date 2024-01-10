<!-- eslint-disable vue/require-valid-default-prop -->
<template>
  <img
    v-bind:src="computedDirectives"
    :srcSet="srcSetString"
    v-bind="attributes"
  />
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { IEDirectives, IEFormat } from "@imageengine/imageengine-helpers";
import { TSrcSet } from "../types";
import { constructUrl, generateSrcSetString } from "../utils/service";

const ALLOWED_INPUT_EXTENSIONS: (IEFormat | "tif")[] = [
  "png",
  "gif",
  "jpg",
  "jpeg",
  "bmp",
  "webp",
  "jp2",
  "svg",
  "mp4",
  "jxr",
  "avif",
  "jxl",
  "tif",
];

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Image",
  props: {
    src: {
      type: String,
      required: true,
    },
    directives: {
      type: Object as () => IEDirectives,
      default: null,
    },
    srcSet: {
      type: Array as () => TSrcSet,
      default: null,
    },
    attributes: {
      type: Object,
    },
  },

  setup(props) {
    if (!props.src) {
      throw new Error(
        `Please ensure that the image component has an 'src' prop.`,
      );
    }

    const deliveryAddress: string = inject("deliveryAddress") as string;
    const stripFromSrc: string = inject("stripFromSrc") as string;
    const count = ref(0);
    return {
      count,
      deliveryAddress,
      stripFromSrc,
    };
  },
  computed: {
    computedDirectives(): string {
      return this.directives ? this.srcString : this.imageUrl;
    },
    srcString(): string {
      return constructUrl(this.imageUrl, this.directives);
    },
    srcSetString(): string {
      return (
        this.srcSet && generateSrcSetString(this.srcSet, this.deliveryAddress)
      );
    },
    imageUrl(): string {
      return (
        this.deliveryAddress +
        (this.stripFromSrc ? this.src.replace(this.stripFromSrc, "") : this.src)
      );
    },
    imageExtension(): string {
      const ieSplit = this.src.split(".").slice(-1);
      return ieSplit.length > 0 ? ieSplit[ieSplit.length - 1] : "";
    },
  },
  created() {
    if (
      !ALLOWED_INPUT_EXTENSIONS.includes(
        this.imageExtension.toLowerCase() as IEFormat,
      )
    ) {
      console.warn(
        `The following image's extension doesn't match any of the allowed types and won't be optimized: ${this.src}.`,
        `List of supported extensions: ${ALLOWED_INPUT_EXTENSIONS.join(", ")}.`,
      );
    }
  },
});
</script>
