import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  hint,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={htmlFor} className="block text-sm text-slate">
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-slate/80">{hint}</p> : null}
    </div>
  );
}

type FormGroupProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function FormGroup({ title, description, children }: FormGroupProps) {
  return (
    <fieldset className="space-y-5">
      <legend className="mb-1 block w-full">
        <span className="font-serif text-xl font-light text-navy sm:text-2xl">
          {title}
        </span>
        {description ? (
          <span className="mt-1.5 block text-sm font-normal leading-relaxed text-slate">
            {description}
          </span>
        ) : null}
      </legend>
      {children}
    </fieldset>
  );
}
