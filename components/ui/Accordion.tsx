"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-border/50 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-left group"
            >
                <span className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-foreground/50 transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-foreground/80 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: { title: string; content: React.ReactNode }[];
}

export function Accordion({ items }: AccordionProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-border/50 px-6">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
