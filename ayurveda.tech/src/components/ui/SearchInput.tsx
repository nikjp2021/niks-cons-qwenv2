"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function SearchInput({
  placeholder = "Search...",
  onSearch,
}: SearchInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3.5 bg-[var(--color-surface-card)] border-2 border-[var(--color-border)] rounded-[var(--radius-input)] font-ui text-ui text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(45,106,79,0.15)] transition-all duration-200"
      />
    </div>
  );
}
