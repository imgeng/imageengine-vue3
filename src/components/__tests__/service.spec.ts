import { TSrcSet } from "@/src/types";
import { generateSrcSetString } from "@/src/utils/service";
import { describe, it, expect } from "vitest";

describe("service", () => {
  const srcset: TSrcSet = [
    {
      src: `/images/pic_1_variation_2.jpg`,
      width: "900w",
      directives: { compression: 0 },
    },
  ];
  it("generate string url", () => {
    expect(
      generateSrcSetString(srcset, "https://blazing-fast-pics.cdn.imgeng.in"),
    ).toBe(
      "https://blazing-fast-pics.cdn.imgeng.in/images/pic_1_variation_2.jpg?imgeng=/cmpr_0/w_900 900w," +
        `\n`,
    );
  });
});

describe("generateSrcSetString", () => {
  it("should generate an empty srcset when given an empty array", () => {
    const result = generateSrcSetString([], "https://delivery-address.com/");
    expect(result).toBe("");
  });

  it("should generate a correct srcset string when given an array of images", () => {
    const srcSet: TSrcSet = [
      {
        src: "/image-1.jpg",
        width: "400w",
        directives: {
          fit: "box",
        },
      },
      {
        src: "/image-2.jpg",
        width: "600w",
      },
      {
        src: "/image-3.jpg",
        width: "800w",
        directives: {
          fit: "cropbox",
          format: "png",
        },
      },
    ];

    const result = generateSrcSetString(
      srcSet,
      "https://blazing-fast-pics.cdn.imgeng.in",
    );

    const expected =
      `https://blazing-fast-pics.cdn.imgeng.in/image-1.jpg?imgeng=/m_box/w_400 400w,\n` +
      `https://blazing-fast-pics.cdn.imgeng.in/image-2.jpg?imgeng=/w_600 600w,\n` +
      `https://blazing-fast-pics.cdn.imgeng.in/image-3.jpg?imgeng=/m_cropbox/f_png/w_800 800w,\n`;
    expect(result).toBe(expected);
  });
});
