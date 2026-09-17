import { shopInfo, contactFaq } from '@/data/shopInfo';

export function ContactPage() {
  return (
    <div>
      <h1>ติดต่อเรา</h1>

      <section className="section">
        <table className="data-table">
          <tbody>
            <tr>
              <th>ร้าน</th>
              <td>{shopInfo.name}</td>
            </tr>
            <tr>
              <th>ผู้ดูแลร้าน</th>
              <td>{shopInfo.ownerName}</td>
            </tr>
            <tr>
              <th>ที่อยู่</th>
              <td>{shopInfo.addressTh}</td>
            </tr>
            <tr>
              <th>โทรศัพท์</th>
              <td>{shopInfo.phone}</td>
            </tr>
            <tr>
              <th>Line ID</th>
              <td>{shopInfo.lineId}</td>
            </tr>
            <tr>
              <th>อีเมล</th>
              <td>{shopInfo.email}</td>
            </tr>
            <tr>
              <th>เวลาเปิด-ปิด</th>
              <td>{shopInfo.openingHours}</td>
            </tr>
          </tbody>
        </table>
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
