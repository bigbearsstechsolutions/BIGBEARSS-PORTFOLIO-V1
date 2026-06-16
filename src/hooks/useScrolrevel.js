import { useEffect, useState, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px'
    } = options;

    const [isVisible, setisVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entery]) => {
                if (entery.isIntersecting) {
                    setisVisible(true)
                    observer.unobserve(element)
                }
            },
            {
                threshold,
                rootMargin
            }
            );
        observer.observe(element)
        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, rootMargin])
    return { ref, isVisible }
}