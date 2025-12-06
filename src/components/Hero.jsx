import { useEffect, useRef} from "react";
import { gsap} from "gsap";



export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {ease: "expo.out", duration: 1},
        onComplete: () => {
        document.body.style.overflow = "auto";
        }
      });
      
      tl.from(".right-hero", {
        y: 80, 
        opacity: 0, 
        delay: 1.5,
        duration: 0.85
      });
      tl.from(".hero-socials a", {
        y: 20,
        opacity: 0,
        stagger: 0.2
      }, "+=3.5");
    
    }, heroRef);

    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }

    return () => ctx.revert();

  }, []);

  return (

    <section className="hero" ref={heroRef}>
      <video className="hero-video" ref={videoRef} autoPlay muted>
        <source src="/bg-white.mp4" type="video/mp4" />
      </video>
        <div className="right-hero">
          <p>
            Hello, I'm <span className="name">Ibai</span>
          </p>
          <h1>Front-end Developer</h1>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/ibai-iturriagaetxebarria-romero-a02845337/?trk=opento_sprofile_details">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
          </a>
          <a href="https://github.com/We1ki">
            <svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
          </a>
        </div>
    </section>
  );
}
