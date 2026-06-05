@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-plaster text-charcoal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: #2B2B2B;
    color: #F2EDE6;
  }
}

@layer utilities {
  .text-tracked {
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-size: 11px;
  }

  .hairline {
    height: 1px;
    background-color: currentColor;
    opacity: 0.2;
  }
}
