import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll(
      ".ini, .sobremi, .proyetos, .educa, .cont-edu, .comp, .contenedor"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}