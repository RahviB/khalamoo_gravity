import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    fullWidth?: boolean;
}

export function Section({
    children,
    className,
    containerClassName,
    fullWidth = false,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
            {...props}
        >
            <div
                className={cn(
                    "mx-auto px-4 md:px-8",
                    fullWidth ? "w-full" : "container",
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
