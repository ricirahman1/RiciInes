// add basic module declaration for packages without TypeScript types

declare module "yet-another-react-lightbox" {
  import * as React from "react";

  interface Slide {
    src: string;
    title?: string;
    caption?: string;
    description?: string;
  }

  interface LightboxProps {
    open: boolean;
    close: () => void;
    slides: Slide[];
    controller?: {
      closeOnSlideClick?: boolean;
      swipe?: boolean;
    };
    [key: string]: any;
  }

  const Lightbox: React.FC<LightboxProps>;
  export default Lightbox;
}
