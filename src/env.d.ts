/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    // Add any local types here
  }
}

// Add type declarations for Astro components
declare module '*.astro' {
  const Component: any;
  export default Component;
}

// Add type declarations for other file types if needed
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}
