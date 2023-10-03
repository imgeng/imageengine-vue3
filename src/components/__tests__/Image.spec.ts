import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Image from "../Image.vue";

describe("Image component", () => {
  it("renders an image with the expected source", () => {
    const wrapper = mount(Image, {
      global: {
        provide: {
          deliveryAddress: "https://blazing-fast-pics.cdn.imgeng.in",
        },
      },
      props: {
        src: "/images/pic_1_variation_1.jpg",
        directives: { compression: 0 },
        srcSet: [],
      },
    });

    const img = wrapper.get("img");
    expect(img.attributes("src")).toBe(
      "https://blazing-fast-pics.cdn.imgeng.in/images/pic_1_variation_1.jpg?imgeng=/cmpr_0",
    );
  });

  it("renders an image with the expected alt", () => {
    const wrapper = mount(Image, {
      propsData: {
        src: "images/pic.jpg",
        attributes: {
          alt: "image_1",
        },
      },
      global: {
        provide: {
          deliveryAddress: "https://blazing-fast-pics.cdn.imgeng.in/",
          stripFromSrc: "",
        },
      },
    });

    expect(wrapper.find("img").attributes("alt")).toBe("image_1");
  });

  it("check computed values", () => {
    const srcSet = [
      { src: "images/pic.jpg", width: "400w", directives: { width: 400 } },
      { src: "images/pic.jpg", width: "800w", directives: { width: 800 } },
    ];
    const wrapper = mount(Image, {
      propsData: {
        srcSet,
        src: "images/pic.jpg",
      },
      global: {
        provide: {
          deliveryAddress: "https://blazing-fast-pics.cdn.imgeng.in/",
          stripFromSrc: "",
        },
      },
    });
    const imageUrlComputed = wrapper.vm.imageUrl;
    const imageExtensionComputed = wrapper.vm.imageExtension;
    const srcSetStringComputed = wrapper.vm.srcSetString;
    expect(srcSetStringComputed).toEqual(
      `https://blazing-fast-pics.cdn.imgeng.in/images/pic.jpg?imgeng=/w_400 400w,\n` +
        `https://blazing-fast-pics.cdn.imgeng.in/images/pic.jpg?imgeng=/w_800 800w,\n`,
    );
    expect(imageExtensionComputed).toEqual("jpg");
    expect(imageUrlComputed).toEqual(
      "https://blazing-fast-pics.cdn.imgeng.in/images/pic.jpg",
    );
  });
});
