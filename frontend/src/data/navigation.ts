export interface NavLink {
  to: string;
  label: string;
}

/**
 * Top navigation. Kept short and fixed on purpose (see legacy-website-redesign.md
 * section 24.6) so non-technical users always find the same items in the same place.
 */
export const mainNavLinks: NavLink[] = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/dealers', label: 'ตัวแทนจำหน่าย' },
  { to: '/payment', label: 'วิธีการชำระเงิน' },
  { to: '/contact', label: 'ติดต่อเรา' },
];
