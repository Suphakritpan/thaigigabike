import { useId } from 'react';

interface SearchInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function SearchInput({ label, value, placeholder, onChange }: SearchInputProps) {
  const inputId = useId();

  return (
    <div className="search-input">
      <label className="search-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className="search-input__field"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
