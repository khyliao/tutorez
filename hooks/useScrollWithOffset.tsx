import { useEffect, useCallback } from "react";

export const useScrollWithOffset = (offset: number) => {
  const handleScrollTo = useCallback(
    (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;

      if (target instanceof HTMLAnchorElement) {
        const href = target.getAttribute("href");

        if (href) {
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    },
    [offset]
  );

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", handleScrollTo);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollTo);
      });
    };
  }, [handleScrollTo]);

  return handleScrollTo;
};
