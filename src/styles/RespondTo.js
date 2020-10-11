import { css } from "styled-components";
import { breakpoints } from "./variables";

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

// please note -> the folowing solution was proposed here https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
