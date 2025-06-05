/// <reference types="astro/client" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: {
      [key: string]: unknown;
      class?:
        | string
        | Record<string, boolean>
        | (string | Record<string, boolean>)[];
      className?:
        | string
        | Record<string, boolean>
        | (string | Record<string, boolean>)[];
      style?: string | Record<string, string | number>;
      [key: `data-${string}`]: unknown;
      [key: `aria-${string}`]: unknown;
    };
  }
}
