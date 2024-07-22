import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-background rounded-xl p-6 flex flex-col lg:flex-row gap-2 lg:gap-12 dark:border",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between items-start", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-medium text-2xl leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-medium text-[#8A8A89] mb-2 leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardSubtitle.displayName = "CardSubtitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex justify-center items-center w-20 h-20 md:min-w-[120px] md:w-[120px] md:h-[120px] border-[3px] border-yellow-foreground dark:border-yellow rounded-full",
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        priority
        className="rounded-full w-[60px] h-[60px] md:w-24 md:h-24"
      />
      <span className="absolute h-3 w-3 bg-[#38CD3E] rounded-full top-2 right-2 md:top-4 md:right-4 border-2 border-white dark:border-black"></span>
    </div>
  )
);

CardImage.displayName = "CardImage";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col lg:flex-row justify-between items-start gap-4 flex-wrap",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardStats = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between items-start xl:items-center",
      className
    )}
    {...props}
  />
));
CardStats.displayName = "CardStats";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardStats,
  CardDescription,
  CardContent,
};
