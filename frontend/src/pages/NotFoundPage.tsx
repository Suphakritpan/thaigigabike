import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div>
      <h1>ไม่พบหน้าที่ท่านต้องการ</h1>
      <p>
        <Link to="/">กลับหน้าแรก</Link>
      </p>
    </div>
  );
}
