import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  hint,
  optional = false,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2.5", className)}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {optional ? (
          <span className="ml-1.5 font-sans text-xs font-normal text-slate/70">
            (opcional)
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <p className="field-hint">{hint}</p> : null}
    </div>
  );
}

type FormGroupProps = {
  step?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function FormGroup({ step, title, description, children }: FormGroupProps) {
  return (
    <fieldset className="space-y-5">
      <legend className="mb-1 block w-full">
        <div className="flex items-start gap-4">
          {step ? (
            <span className="font-serif text-3xl font-medium leading-none text-gold/80 tabular-nums">
              {step}
            </span>
          ) : null}
          <div className="min-w-0 flex-1">
            <span className="form-group-title">{title}</span>
            {description ? (
              <span className="form-group-description">{description}</span>
            ) : null}
          </div>
        </div>
      </legend>
      {children}
    </fieldset>
  );
}
