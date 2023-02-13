<template>
  <div id="app">
    <ImageEngineProvider
      deliveryAddress="https://blazing-fast-pics.cdn.imgeng.in"
    >
      <section>
        <picture>
          <SourceComponent
            :srcSet="[
              {
                src: `/images/pic_1_variation_1.jpg`,
                width: '500w',
              },
              {
                src: `/images/pic_1_variation_2.jpg`,
                width: '900w',
                directives: { compression: 0 },
              },
            ]"
            :attributes="{ media: '(max-width: 950px)' }"
          />
          <SourceComponent
            :srcSet="[
              {
                src: `/images/pic_1_variation_1.jpg`,
                width: '500w',
              },
              {
                src: `/images/pic_1_variation_2.jpg`,
                width: '900w',
                directives: { compression: 0 },
              },
            ]"
            :attributes="{
              media: '(max-width: 950px)',
              id: 'testid',
              'data-test': 'test source attribute',
            }"
          />
          <ImageComponent
            src="/images/pic_2.jpg"
            :attributes="{
              alt: 'test image',
            }"
            :directives="{
              outputFormat: 'webp',
              rotate: 45,
              inline: true,
            }"
          />
        </picture>
        <ImageComponent src="/images/pic_2.jpg" />
      </section>
    </ImageEngineProvider>
  </div>
</template>

<script>
import Image from "./components/Image.vue";
import Source from "./components/Source.vue";

import ImageEngineProvider from "./components/ImageEngineProvider.vue";

export default {
  name: "App",
  components: {
    ImageComponent: Image,
    SourceComponent: Source,
    ImageEngineProvider,
  },
  data() {
    return {
      images: [
        {
          src: `images/pic_2.jpg`,
          alt: `Picture 2`,
        },
        {
          src: `images/pic_3.jpg`,
          alt: `Picture 3`,
          directives: {
            crop: [2200, 2000, 2200, 1000],
          },
        },
      ],
    };
  },
};
</script>

<style>
#App {
  font-family: sans-serif;
  text-align: center;
}

body {
  margin: 0;
}

img {
  width: 100%;
}

section {
  display: grid;
  height: 100vh;
  padding: 2.2rem;
}

ul {
  display: grid;
  grid-template-columns: 7fr 2fr 3fr 2fr 5fr 2fr 3fr;
  max-width: 50rem;
  margin: auto;
  padding: 1.1rem;
  list-style: none;
  background: whitesmoke;
  box-shadow: 0 0 1.1rem rgba(0, 0, 0, 0.35);
}

ul li:nth-child(1) {
  grid-row: 1 / span 2;
  grid-column: 2 / span 4;
  z-index: 10;
}

ul li:nth-child(2) {
  grid-row: 2 / span 2;
  grid-column: 1 / span 2;
  z-index: 11;
}

ul li:nth-child(3) {
  grid-row: 3 / span 2;
  grid-column: 5 / span 3;
  margin-top: -1.5rem;
}
</style>
