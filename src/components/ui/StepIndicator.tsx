'use client';

import { motion } from 'motion/react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: 1 }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${
                i < currentStep
                  ? 'bg-[var(--color-brand-500)] text-white'
                  : i === currentStep
                  ? 'bg-[var(--text-100)] text-[var(--surface-0)]'
                  : 'bg-[var(--surface-3)] text-[var(--text-400)]'
              }`}
            >
              {i < currentStep ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span
              className={`text-sm font-medium hidden sm:block transition-colors duration-300 ${
                i <= currentStep ? 'text-[var(--text-100)]' : 'text-[var(--text-400)]'
              }`}
            >
              {step}
            </span>
          </motion.div>
          {i < steps.length - 1 && (
            <div className="w-8 sm:w-12 h-px bg-[var(--surface-3)]">
              <motion.div
                className="h-full bg-[var(--color-brand-500)]"
                initial={{ width: '0%' }}
                animate={{ width: i < currentStep ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
