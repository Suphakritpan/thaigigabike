import { Notice } from '@/components/ui/Notice';
import { shopInfo, orderingSteps, orderingNote, shippingNotice } from '@/data/shopInfo';

export function PaymentPage() {
  return (
    <div>
      <h1>วิธีการสั่งสินค้าและการชำระเงิน</h1>

      <section className="section">
        <h2>ขั้นตอนการสั่งสินค้า</h2>
        <ol>
          {orderingSteps.map((step, index) => (
            <li key={step}>
              {index + 1}. {step}
            </li>
          ))}
        </ol>
        <p>{orderingNote}</p>
      </section>

      <Notice variant="success">{shippingNotice}</Notice>

      <section className="section">
        <h2>ช่องทางติดต่อเพื่อสั่งสินค้า</h2>
        <table className="data-table">
          <tbody>
            <tr>
              <th>โทรศัพท์</th>
              <td>{shopInfo.phoneIntl}</td>
            </tr>
            <tr>
              <th>Line ID</th>
              <td>{shopInfo.lineId}</td>
            </tr>
            <tr>
              <th>อีเมล</th>
              <td>{shopInfo.email}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted text-small">
          หมายเหตุ: หน้านี้ยังไม่มีเลขบัญชีธนาคารระบุไว้ในเว็บไซต์เดิม
          กรุณาติดต่อร้านผ่านช่องทางด้านบนเพื่อขอเลขบัญชีสำหรับโอนเงิน
        </p>
      </section>
    </div>
  );
}
