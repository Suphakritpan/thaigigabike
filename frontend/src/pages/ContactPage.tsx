import { ContactMethodRows } from '@/components/shop/ContactMethodRows';
import { shopInfo, contactFaq } from '@/data/shopInfo';

export function ContactPage() {
  return (
    <div>
      <h1>ติดต่อเรา</h1>

      <section className="section">
        <table className="data-table">
          <tbody>
            <tr>
              <th scope="row">ร้าน</th>
              <td>{shopInfo.name}</td>
            </tr>
            <tr>
              <th scope="row">ผู้ดูแลร้าน</th>
              <td>{shopInfo.ownerName}</td>
            </tr>
            <tr>
              <th scope="row">ที่อยู่</th>
              <td>{shopInfo.addressTh}</td>
            </tr>
            <ContactMethodRows phone={shopInfo.phone} />
            <tr>
              <th scope="row">เวลาเปิด-ปิด</th>
              <td>{shopInfo.openingHours}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>สแกนเพิ่มเพื่อน Line</h2>
        <img
          className="line-qr"
          src="/assets/site/thaigigabike.jpg"
          alt={`Line QR code, Line ID ${shopInfo.lineId}`}
        />
      </section>

      <section className="section">
        <h2>คำถามที่พบบ่อย</h2>
        {contactFaq.map((item) => (
          <div className="section" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
