import Link from "next/link";
import { Icon, type IconName } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-light focus-visible:ring-navy",
  accent: "bg-gold text-white hover:bg-gold-light focus-visible:ring-gold",
  secondary:
    "border border-line bg-white text-navy hover:border-navy/30 hover:bg-off-white focus-visible:ring-navy",
  outlineLight:
    "border border-white/25 bg-transparent text-white hover:bg-white/5 focus-visible:ring-white",
  whatsapp:
    "bg-[#128C7E] text-white hover:bg-[#0f7a6e] focus-visible:ring-[#128C7E]",
  ghost: "text-navy hover:bg-off-white focus-visible:ring-navy",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
} as const;

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  external?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  iconLeft,
  iconRight,
  children,
  ...props
}: ButtonProps) {
  const leftIcon = iconLeft ?? (variant === "whatsapp" ? "whatsapp" : undefined);
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {leftIcon ? <Icon name={leftIcon} size={18} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={18} /> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
