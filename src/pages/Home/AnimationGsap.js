import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import "./anim.css";

const AnimationGsap = () => {
    const welcomeRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            welcomeRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );
        gsap.to(welcomeRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 4,
        });
        gsap.fromTo(
            headlineRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 5 }
        );
        gsap.fromTo(
            subheadlineRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 5.5 }
        );
        gsap.fromTo(
            descriptionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 6 }
        );
        gsap.fromTo(
            headlineRef.current,
            { x: -100 },
            { x: 0, duration: 1, delay: 5 }
        );
        gsap.fromTo(
            subheadlineRef.current,
            { x: -100 },
            { x: 0, duration: 1, delay: 5.25 }
        );
        gsap.fromTo(
            descriptionRef.current,
            { x: -100 },
            { x: 0, duration: 1, delay: 5.5 }
        );
    }, []);

    return (
        <div className="about-section">
            <div className="welcome-text" ref={welcomeRef}>
                <h1>You are always invited to visit our shop.</h1>
            </div>
            <h2 className="text-rose-400" ref={headlineRef}>Follow Us</h2>
            <h3 ref={subheadlineRef}>Don't forget to purchace again.</h3>
            <p ref={descriptionRef} className="aboutdes">
                We are always ready to serve you the best & fresh fuits of the world.
                We all know that fresh fruits keeps our body strong and free from disease. So purchase fresh fruits daily from us and ensure your health improvement.

            </p>

        </div>
    );
};


export default AnimationGsap;

