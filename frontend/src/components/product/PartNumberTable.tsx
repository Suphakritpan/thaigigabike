import { DataTable } from '@/components/ui/DataTable';
import type { PartNumber } from '@/types/product';

interface PartNumberTableProps {
  rows: PartNumber[];
}

export function PartNumberTable({ rows }: PartNumberTableProps) {
  if (rows.length === 0) return null;

  return (
    <DataTable
      columns={[
        { header: 'รหัสอะไหล่', render: (row) => row.code ?? '-' },
        { header: 'รายการ', render: (row) => row.name },
        { header: 'ราคา', render: (row) => row.price ?? 'สอบถามราคา' },
      ]}
      rows={rows}
      getRowKey={(row, index) => row.code ?? `row-${index}`}
    />
  );
}
