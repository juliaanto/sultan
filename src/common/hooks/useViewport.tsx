import { useEffect, useState } from "react";

import theme from "../../theme/theme";

const useViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const isMobile = viewportWidth < theme.breakpoint.desktop;

  const handleWindowResize = () => setViewportWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return isMobile;
};

export default useViewport;