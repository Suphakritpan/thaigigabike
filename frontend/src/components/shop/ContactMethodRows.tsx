import { shopInfo } from '@/data/shopInfo';

interface ContactMethodRowsProps {
  /** Which form of the number to show; the link always dials the same line. */
  phone: string;
}

/**
 * The phone / Line / e-mail rows, shared by the contact and payment pages so the
 * shop's details are written down once. Phone and e-mail are links, so a visitor on
 * a phone can call or write without copying anything by hand.
 */
export function ContactMethodRows({ phone }: ContactMethodRowsProps) {
  return (
    <>
      <tr>
        <th scope="row">โทรศัพท์</th>
        <td>
          <a href={`tel:${shopInfo.phoneIntl.replace(/[^+\d]/g, '')}`}>{phone}</a>
        </td>
      </tr>
      <tr>
        <th scope="row">Line ID</th>
        <td>{shopInfo.lineId}</td>
      </tr>
      <tr>
        <th scope="row">อีเมล</th>
        <td>
          <a href={`mailto:${shopInfo.email}`}>{shopInfo.email}</a>
        </td>
      </tr>
    </>
  );
}
