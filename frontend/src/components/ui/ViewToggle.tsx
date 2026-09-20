export type ViewMode = 'list' | 'grid';

interface ViewToggleProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

const options: { value: ViewMode; label: string }[] = [
  { value: 'list', label: 'แบบรายการ' },
  { value: 'grid', label: 'แบบตาราง' },
];

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="view-toggle" role="group" aria-label="รูปแบบการแสดงสินค้า">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={option.value === value ? 'view-toggle__button is-active' : 'view-toggle__button'}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
