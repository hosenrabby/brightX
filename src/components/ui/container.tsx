import { cn } from "@/lib/cn";

type ContainerWidth = "9/12" | "10/12";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  width?: ContainerWidth;
};

const widthClass: Record<ContainerWidth, string> = {
  "9/12": "w-9/12",
  "10/12": "w-10/12",
};

export function Container({
  className,
  children,
  width = "9/12",
}: ContainerProps) {
  return (
    <div className={cn("mx-auto", widthClass[width], className)}>
      {children}
    </div>
  );
}
