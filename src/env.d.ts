/// <reference types="astro/client" />

declare namespace App {}

// Add type declarations for Astro components
declare module '*.astro' {
  const Component: unknown 
  export default Component
}

// Add type declarations for other file types if needed
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}
