// src/types/google-maps.d.ts
// Defines types for Google Maps Web Components to satisfy TypeScript.

declare namespace JSX {
  interface IntrinsicElements {
    'gmp-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      center: string;
      zoom: string;
      'map-id': string; // Ensure map-id is lowercase as per HTML attribute convention
      class?: string; // Allow className to be passed
      style?: React.CSSProperties;
    }, HTMLElement>;
    'gmp-advanced-marker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      position: string;
      title?: string;
    }, HTMLElement>;
  }
}
