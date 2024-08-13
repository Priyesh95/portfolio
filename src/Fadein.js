import React, { useEffect, useRef, useState } from 'react';
import './Fadein.css';

const FadeIn = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        });

        observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeIn;
