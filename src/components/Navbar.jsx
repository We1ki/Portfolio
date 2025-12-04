import { useEffect, useRef} from "react";
import { gsap} from "gsap";



export default function Hero() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {ease: "expo.out", duration: 1, opacity: 0}
      });
      
      tl.from(".left-nav", {
        y: 80, 
        delay: 8,
        stagger: 0.2
      });
      tl.from(".nav-links a", {
        y: 80, 
        stagger: 0.2
      }, "-=0.8");
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <h1 className="left-nav">Ibai Iturriagaetxebarria</h1>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    
  );
}
