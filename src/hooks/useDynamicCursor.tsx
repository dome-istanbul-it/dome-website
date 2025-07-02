import { useState, useEffect } from 'react';

export const useDynamicCursor = () => {
  const [cursorClass, setCursorClass] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover (not mobile/touch devices)
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (!supportsHover) {
      // Don't apply custom cursors on touch devices
      setCursorClass('');
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientY, target } = e;
      const windowHeight = window.innerHeight;
      const midPoint = windowHeight / 2;

      setMousePosition({ x: e.clientX, y: clientY });

      // Check if cursor is over interactive elements - exclude them from custom cursor
      const element = target as HTMLElement;
      const isInteractive = element.closest('a, button, .scroll-progress-indicator, [role="button"], [tabindex]');
      
      if (isInteractive) {
        setCursorClass('');
        return;
      }

      // Determine cursor based on mouse position
      if (clientY <= midPoint) {
        // Upper half of screen - show up arrow (scroll to previous)
        setCursorClass('cursor-arrow-up');
      } else {
        // Lower half of screen - show down arrow (scroll to next)
        setCursorClass('cursor-arrow-down');
      }
    };

    const handleMouseLeave = () => {
      // Reset cursor when mouse leaves the window
      setCursorClass('');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return {
    cursorClass,
    mousePosition,
    isUpperHalf: mousePosition.y <= window.innerHeight / 2
  };
}; 