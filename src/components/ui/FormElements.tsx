import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[var(--text-300)]">
          {label}
          {props.required && <span className="text-[var(--color-error)] ml-1">*</span>}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-3)] text-[var(--text-100)] placeholder:text-[var(--text-500)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-1 focus:ring-[var(--color-brand-500)] transition-all duration-300 ${className || ''}`}
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[var(--text-300)]">
          {label}
          {props.required && <span className="text-[var(--color-error)] ml-1">*</span>}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-3)] text-[var(--text-100)] placeholder:text-[var(--text-500)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-1 focus:ring-[var(--color-brand-500)] transition-all duration-300 resize-y ${className || ''}`}
        {...props}
      />
    </div>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: ReactNode;
}

export function Select({ label, children, className, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[var(--text-300)]">
          {label}
          {props.required && <span className="text-[var(--color-error)] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full px-4 py-3 pr-10 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-3)] text-[var(--text-100)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-1 focus:ring-[var(--color-brand-500)] transition-all duration-300 appearance-none cursor-pointer ${className || ''}`}
          {...props}
        >
          {children}
        </select>
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-400)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
