import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const ref = useRef();
  const title = useRef();
  const subtitle = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 0.9, duration: 3 });
      gsap.to(title.current, {
        xPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: title.current,
          start: "top",
          end: "bottom",
          scrub: 1,
        },
      });
      gsap.to(subtitle.current, {
        ease: "none",
        scale: 0.2,
        scrollTrigger: {
          trigger: subtitle.current,
          start: "top",
          end: "bottom",
          scrub: 1,
        },
      });
      gsap.to(button.current, {
        xPercent: -120,
        ease: "none",
        scrollTrigger: {
          trigger: button.current,
          start: "top",
          end: "right",
          scrub: true,
        },
      });
    }, ref);

    return () => context.revert();
  });

  return (
    <div id="hero" ref={ref}>
      <h1 ref={title}>MICROSPHONES</h1>
      <h2 ref={subtitle}>Unleash Sound Freedom</h2>
      <span style={{ display: "flex", justifyContent: "right" }} ref={button}>
        <a href="#">Shop Now</a>
      </span>
    </div>
  );
};

export default Hero;
