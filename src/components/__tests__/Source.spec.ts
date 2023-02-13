import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { Source } from "@/src/main";

describe("Source Component", () => {
  it("Check src attribute", () => {
    const wrapper = mount(Source, {
      props: {
        src: "/images/pic_1_variation_1.jpg",
        deliveryAddress: "https://blazing-fast-pics.cdn.imgeng.in",
        directives: { compression: 0 },
        srcSet: [],
        stripFromSrc: "",
      },
    });

    const source = wrapper.get("source");
    expect(source.attributes().src).toEqual("/images/pic_1_variation_1.jpg");
  });

  it("generates the correct srcSet string", () => {
    const wrapper = mount(Source, {
      propsData: {
        srcSet: [
          {
            src: "images/pic_2.jpg",
            width: "300w",
            directives: {
              outputFormat: "webp",
              rotate: 60,
            },
          },
        ],
      },
      global: {
        provide: {
          deliveryAddress: "https://blazing-fast-pics.cdn.imgeng.in/",
        },
      },
    });

    expect(wrapper.vm.srcSetString).toEqual(
      `https://blazing-fast-pics.cdn.imgeng.in/images/pic_2.jpg?imgeng=/f_webp/r_60/w_300 300w,\n`
    );
  });
});
