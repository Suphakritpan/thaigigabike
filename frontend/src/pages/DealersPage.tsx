import { DataTable } from '@/components/ui/DataTable';
import { officialDealers, repairShops, dealerRules } from '@/data/dealers';
import type { Dealer } from '@/types/dealer';

const columns = [
  { header: 'ชื่อร้าน / ผู้ติดต่อ', render: (dealer: Dealer) => dealer.name },
  { header: 'ที่อยู่', render: (dealer: Dealer) => dealer.address || '-' },
  { header: 'โทรศัพท์', render: (dealer: Dealer) => dealer.phone },
];

export function DealersPage() {
  return (
    <div>
      <h1>ร้านซ่อมและตัวแทนจำหน่าย</h1>
      <p className="text-muted">อุปกรณ์ตบแต่ง SR และรุ่นอื่น ๆ ใกล้บ้านท่าน</p>

      <section className="section">
        <h2>ตัวแทนจำหน่ายอย่างเป็นทางการ</h2>
        <DataTable columns={columns} rows={officialDealers} getRowKey={(dealer) => dealer.name} />
      </section>

      <section className="section">
        <h2>ร้านซ่อมที่แนะนำ</h2>
        <DataTable columns={columns} rows={repairShops} getRowKey={(dealer) => dealer.name} />
      </section>

      <section className="section">
        <h2>กฎสำหรับตัวแทนจำหน่าย</h2>
        <ul>
          {dealerRules.map((rule) => (
            <li key={rule}>- {rule}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
