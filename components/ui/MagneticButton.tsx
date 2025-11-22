"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            className={cn(
                "relative overflow-hidden rounded-full px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm transition-colors hover:bg-primary-dark",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x: x * 0.2, y: y * 0.2 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            {...props as any}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
