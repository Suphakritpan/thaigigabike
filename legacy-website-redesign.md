# การนำเว็บไซต์เก่าที่สร้างด้วย Adobe Dreamweaver มาพัฒนาใหม่ด้วยหลักการของ Dev ยุคใหม่

## 1. บทนำ

เว็บไซต์ที่พัฒนาด้วย Adobe Dreamweaver เมื่อประมาณ 10 ปีก่อน มักถูกสร้างขึ้นตามแนวทางการพัฒนาเว็บไซต์ในยุคนั้น เช่น HTML, CSS, JavaScript แบบแยกไฟล์ การเขียนโค้ดแบบหน้าใครหน้ามัน การจัด Layout ด้วย Table หรือการแก้ไขไฟล์โดยตรงผ่านโปรแกรม FTP

เมื่อเทคโนโลยีและมาตรฐานเว็บไซต์เปลี่ยนแปลงไป เว็บไซต์ลักษณะดังกล่าวอาจพบปัญหาเรื่องการรองรับอุปกรณ์รุ่นใหม่ ความปลอดภัย ประสิทธิภาพ การบำรุงรักษา และการขยายระบบในอนาคต

ดังนั้น การนำเว็บไซต์เดิมมาพัฒนาใหม่ไม่ควรเป็นเพียงการเปลี่ยนหน้าตา แต่ควรเป็นการปรับโครงสร้างและกระบวนการพัฒนาให้สอดคล้องกับแนวทาง Software Development ในปัจจุบัน

## 2. เป้าหมายของการพัฒนาใหม่

การพัฒนาเว็บไซต์ใหม่มีเป้าหมายหลักดังนี้

- รักษาข้อมูลและฟังก์ชันสำคัญของเว็บไซต์เดิม
- ปรับ UI/UX ให้เหมาะกับผู้ใช้งานในปัจจุบัน
- รองรับ Desktop, Tablet และ Mobile
- ปรับโครงสร้าง HTML ให้เป็นมาตรฐานและ Semantic HTML
- ลดโค้ดที่ซ้ำซ้อนและโค้ดที่ไม่จำเป็น
- เพิ่มประสิทธิภาพในการโหลดเว็บไซต์
- เพิ่มความปลอดภัยของระบบ
- ทำให้สามารถแก้ไขและบำรุงรักษาได้ง่าย
- รองรับการเพิ่มฟังก์ชันในอนาคต
- มีระบบจัดการ Source Code และ Version Control ที่เป็นระบบ

## 3. หลักการสำคัญ

แนวคิดสำคัญคือไม่ควรนำเว็บไซต์เก่ามา "แปลงไฟล์" แล้วถือว่าเป็นเว็บไซต์ใหม่ แต่ควรนำข้อมูล ฟังก์ชัน และ Business Requirement ที่มีอยู่มาวิเคราะห์ก่อน จากนั้นจึงออกแบบระบบใหม่

กระบวนการสามารถแบ่งออกได้เป็น

```
เว็บไซต์เก่า
    ↓
สำรวจและเก็บ Requirement
    ↓
วิเคราะห์โครงสร้างเดิม
    ↓
แยก Content / Function / Data
    ↓
ออกแบบ UI/UX ใหม่
    ↓
ออกแบบ Architecture
    ↓
เลือก Technology
    ↓
พัฒนาเว็บไซต์ใหม่
    ↓
Testing
    ↓
Security / Performance
    ↓
Deploy
    ↓
Monitoring และ Maintenance
```

## 4. สำรวจเว็บไซต์เดิมก่อนเริ่มพัฒนา

ก่อนเขียนโค้ดใหม่ควรทำ Website Audit เพื่อทำความเข้าใจระบบเดิม

สิ่งที่ควรตรวจสอบ ได้แก่

### 4.1 โครงสร้างเว็บไซต์

ตรวจสอบหน้าเว็บไซต์ทั้งหมด เช่น

```
/
├── index.html
├── about.html
├── service.html
├── contact.html
├── images/
├── css/
├── js/
└── upload/
```

ควรจัดทำรายการว่าแต่ละหน้าใช้ทำอะไร มีข้อมูลอะไร และเชื่อมโยงกับหน้าใด

### 4.2 เทคโนโลยีเดิม

ตรวจสอบว่าเว็บไซต์ใช้เทคโนโลยีอะไร เช่น

- HTML
- CSS
- JavaScript
- PHP
- MySQL
- jQuery
- Bootstrap รุ่นเก่า
- Flash หรือ Plugin รุ่นเก่า
- iframe
- Table Layout
- Inline CSS
- Inline JavaScript

รวมถึงตรวจสอบ Web Server, PHP Version, Database และระบบ Hosting ที่ใช้อยู่

### 4.3 ฟังก์ชันเดิม

ไม่ควรดูเฉพาะหน้าเว็บ แต่ต้องตรวจสอบว่าเว็บไซต์มีฟังก์ชันอะไรบ้าง เช่น

- Login
- Contact Form
- Search
- Upload File
- News
- Product
- Gallery
- Admin Panel
- ระบบสมาชิก
- ระบบส่ง Email
- การเชื่อมต่อ Database

## 5. แยก Content, Function และ Data

หนึ่งในแนวคิดสำคัญของการพัฒนาเว็บไซต์ยุคใหม่คือการไม่ผูกทุกอย่างไว้ในไฟล์เดียว

ตัวอย่างเว็บไซต์เก่าอาจมีลักษณะดังนี้

```
page.html
├── HTML
├── CSS
├── JavaScript
├── Content
└── Data
```

เว็บไซต์ใหม่ควรแยกความรับผิดชอบออกจากกัน เช่น

```
UI
↓
Components
↓
Business Logic
↓
API
↓
Database
```

การแยกส่วนทำให้สามารถแก้ไข UI โดยไม่กระทบ Database หรือเปลี่ยน Backend โดยไม่จำเป็นต้องแก้หน้าเว็บทั้งหมด

## 6. การออกแบบ UI/UX ใหม่

ไม่ควรนำ Design เดิมมาใช้โดยตรงเพียงเพราะเป็นเว็บไซต์เดิม

ควรวิเคราะห์ก่อนว่า

- ผู้ใช้งานคือใคร
- ผู้ใช้เข้าหน้าไหนบ่อยที่สุด
- ผู้ใช้ต้องการข้อมูลอะไร
- ขั้นตอนการใช้งานปัจจุบันมีความยุ่งยากหรือไม่
- เว็บไซต์ใช้งานบนมือถือได้ดีหรือไม่

จากนั้นจึงออกแบบ Information Architecture และ User Flow ใหม่

ตัวอย่าง

```
Homepage
   ↓
เลือกบริการ
   ↓
ดูรายละเอียด
   ↓
ดำเนินการ
   ↓
ได้รับผลลัพธ์
```

## 7. Responsive Web Design

เว็บไซต์เก่าจำนวนมากถูกออกแบบโดยยึด Desktop เป็นหลัก

เว็บไซต์ใหม่ควรใช้แนวคิด Responsive Design เพื่อให้ Layout สามารถปรับตามขนาดหน้าจอได้

```
Desktop
   ↓
Tablet
   ↓
Mobile
```

ควรหลีกเลี่ยงการกำหนดขนาดแบบตายตัว เช่น

```css
width: 1200px;
```

และพิจารณาใช้แนวทางที่ยืดหยุ่น เช่น

- max-width
- width: 100%
- min()
- max()
- clamp()
- CSS Grid
- Flexbox

## 8. Semantic HTML

เว็บไซต์ใหม่ควรใช้ HTML ตามความหมายของเนื้อหา เช่น

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

แทนการใช้ `<div>` จำนวนมากโดยไม่มีความหมาย

ข้อดีคือช่วยเรื่อง

- Accessibility
- SEO
- การอ่านโครงสร้างโดย Browser
- การดูแล Source Code

## 9. CSS และ Design System

เว็บไซต์เก่ามักมี CSS ที่สะสมมาหลายปีจนเกิดความซ้ำซ้อน เช่น

```
style.css
style2.css
new.css
new2.css
fix.css
fix-final.css
```

การพัฒนาใหม่ควรจัดระบบ CSS ให้ชัดเจน

ตัวอย่าง

```
styles/
├── variables.css
├── reset.css
├── typography.css
├── layout.css
├── components.css
└── utilities.css
```

หรือใช้ CSS Framework / UI Library ที่เหมาะสมกับโครงการ

ควรกำหนด Design Token เช่น

- Colors
- Typography
- Spacing
- Border Radius
- Shadow
- Breakpoint

เพื่อให้ UI มีรูปแบบเดียวกันทั้งเว็บไซต์

## 10. Component-Based Development

แทนที่จะเขียนปุ่มหรือ Navbar ซ้ำในทุกหน้า ควรสร้างเป็น Component ที่สามารถนำกลับมาใช้ได้

ตัวอย่าง

```
components/
├── Header
├── Navbar
├── Footer
├── Button
├── Modal
├── Card
└── Form
```

ตัวอย่างแนวคิด

```
หน้า A ──┐
หน้า B ──┼──> Navbar Component
หน้า C ──┘
```

เมื่อแก้ Navbar เพียงครั้งเดียว ทุกหน้าที่ใช้ Component ดังกล่าวก็สามารถได้รับการแก้ไขตามไปด้วย

## 11. การจัดโครงสร้าง Project

ตัวอย่างโครงสร้างสำหรับเว็บไซต์สมัยใหม่

```
project/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── features/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── styles/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── tests/
├── .env
├── .gitignore
├── package.json
└── README.md
```

โครงสร้างจริงควรปรับตาม Framework และขนาดของโครงการ ไม่จำเป็นต้องสร้าง Folder จำนวนมากหากโครงการยังเล็ก

## 12. Version Control

การพัฒนาแบบสมัยใหม่ควรใช้ Git แทนการเก็บไฟล์หลายเวอร์ชัน เช่น

```
website-final.zip
website-final2.zip
website-final-new.zip
website-final-new2.zip
```

ควรใช้

```
Git
   ↓
GitHub / GitLab / Bitbucket
```

ตัวอย่าง Workflow

```
main
 │
 ├── develop
 │
 ├── feature/navbar
 │
 ├── feature/contact-form
 │
 └── fix/mobile-layout
```

ช่วยให้สามารถตรวจสอบว่าใครแก้ไขอะไร และสามารถย้อนกลับไปยัง Version ก่อนหน้าได้

## 13. Environment Management

ไม่ควรใส่ข้อมูลสำคัญไว้ใน Source Code เช่น

- Database Password
- API Key
- Secret Key
- SMTP Password

ควรใช้ Environment Variables เช่น

```
DATABASE_URL=...
API_KEY=...
SECRET_KEY=...
```

และไม่ควร Commit .env ที่มี Secret จริงเข้า Git Repository

## 14. Security

เว็บไซต์เก่าที่เปิดใช้งานมาหลายปีควรได้รับการตรวจสอบด้านความปลอดภัยก่อนนำกลับมาใช้งาน

หัวข้อสำคัญ ได้แก่

- HTTPS
- Authentication
- Authorization
- Password Hashing
- SQL Injection
- XSS
- CSRF
- File Upload Security
- Session Security
- Input Validation
- Output Encoding
- Dependency Security

โดยเฉพาะระบบที่รับข้อมูลจากผู้ใช้ ไม่ควรเชื่อถือข้อมูลจาก Client โดยตรง

```
User Input
    ↓
Validation
    ↓
Sanitization / Encoding
    ↓
Business Logic
    ↓
Database
```

## 15. HTTPS และ Domain

เว็บไซต์ใหม่ควรทำงานผ่าน HTTPS เป็นมาตรฐาน

```
http://example.com
        ↓
https://example.com
```

ควรตั้งค่า Redirect จาก HTTP ไป HTTPS และตรวจสอบว่า Resource ต่าง ๆ เช่น

- CSS
- JavaScript
- Images
- API
- Fonts

ไม่ได้ถูกเรียกผ่าน HTTP ซึ่งอาจทำให้เกิด Mixed Content

## 16. Performance

เว็บไซต์ใหม่ควรให้ความสำคัญกับความเร็วในการโหลด

สิ่งที่ควรตรวจสอบ ได้แก่

- Image Optimization
- Lazy Loading
- JavaScript Bundle
- CSS Size
- Font Loading
- Caching
- Compression
- CDN
- Server Response Time

ไม่ควรนำไฟล์รูปภาพขนาดหลาย MB จากเว็บไซต์เก่ามาใช้โดยตรงโดยไม่ตรวจสอบ

## 17. SEO

หากเว็บไซต์เดิมมีอันดับใน Search Engine การสร้างเว็บไซต์ใหม่ต้องระวัง URL เปลี่ยน

ตัวอย่าง

```
เดิม
/about.html

ใหม่
/about
```

ควรทำ Redirect

```
/about.html
     ↓
/about
```

รวมถึงตรวจสอบ

- `<title>`
- Meta Description
- Heading Structure
- Canonical URL
- Sitemap
- Robots.txt
- Structured Data
- Open Graph

## 18. Accessibility

เว็บไซต์ยุคใหม่ควรคำนึงถึงผู้ใช้ที่มีข้อจำกัดในการเข้าถึงเว็บไซต์

เช่น

- ใช้งานด้วย Keyboard ได้
- รูปภาพมี Alt Text ที่เหมาะสม
- Contrast อ่านง่าย
- Form มี Label
- Button มีความหมายชัดเจน
- ไม่ใช้สีเพียงอย่างเดียวในการสื่อความหมาย
- รองรับ Screen Reader

Accessibility ไม่ควรถูกมองว่าเป็นส่วนเสริม แต่ควรนำมาพิจารณาตั้งแต่ขั้นตอนออกแบบ

## 19. Testing

ก่อนนำเว็บไซต์ใหม่ขึ้น Production ควรทดสอบอย่างเป็นระบบ

### Functional Testing

ตรวจสอบว่าฟังก์ชันทำงานถูกต้อง

- Login
- Search
- Form
- Upload
- Navigation
- CRUD

### Responsive Testing

ทดสอบอย่างน้อย

- Desktop
- Tablet
- Mobile

### Browser Testing

ตรวจสอบ Browser ที่กลุ่มผู้ใช้จริงใช้งาน เช่น

- Chrome
- Edge
- Firefox
- Safari

### Security Testing

ตรวจสอบ Input และสิทธิ์การเข้าถึงข้อมูล

- User
- Admin
- Staff
- Guest

แต่ละ Role ควรเข้าถึงข้อมูลได้ตามสิทธิ์ที่กำหนด

## 20. Deployment

เว็บไซต์เก่ามักใช้วิธี

```
Dreamweaver
    ↓
Save
    ↓
FileZilla
    ↓
Upload FTP
```

แนวทางใหม่สามารถพัฒนาเป็น

```
Developer
    ↓
Git
    ↓
Git Repository
    ↓
Build / Test
    ↓
Deployment
    ↓
Production
```

อย่างไรก็ตาม FTP ไม่ได้เป็นสิ่งที่ "ผิด" เสมอไป หากระบบ Hosting เดิมจำเป็นต้องใช้ FTP ก็ยังสามารถใช้ได้ เพียงแต่ควรจัดการ Source Code, Build และ Version Control แยกออกจากกระบวนการ Upload

## 21. Migration Strategy

การเปลี่ยนเว็บไซต์เก่าเป็นเว็บไซต์ใหม่ไม่จำเป็นต้องทำทั้งหมดในครั้งเดียว

แนวทางที่ปลอดภัยคือการแบ่งเป็น Phase

**Phase 1 — Audit**

สำรวจเว็บไซต์เดิมทั้งหมด

- Pages
- Content
- Images
- Functions
- Database
- Domain
- Hosting
- Dependencies

**Phase 2 — Design**

ออกแบบ

- UI
- UX
- Information Architecture
- User Flow
- Design System

**Phase 3 — Development**

สร้างระบบใหม่โดยใช้โครงสร้างที่เหมาะสม

**Phase 4 — Data Migration**

ย้ายข้อมูลจากระบบเดิมไปยังระบบใหม่ หากมี Database

**Phase 5 — Testing**

ทดสอบระบบใหม่เทียบกับระบบเดิม

**Phase 6 — Deployment**

นำเว็บไซต์ใหม่ขึ้น Production

**Phase 7 — Monitoring**

ติดตาม

- Errors
- Performance
- Traffic
- Security
- User Feedback

## 22. ไม่ควรทำอย่างไร

การ Rebuild เว็บไซต์เก่ามีข้อผิดพลาดที่พบบ่อย เช่น

**Copy ทุกอย่างจากเว็บไซต์เดิม**

การ Copy HTML และ CSS ทั้งหมดแล้วเปลี่ยนสีหรือ Layout อาจทำให้ปัญหาเดิมติดมาด้วย

**เปลี่ยน Technology โดยไม่วิเคราะห์ Requirement**

การใช้ Framework ใหม่ไม่ได้ทำให้ระบบดีขึ้นโดยอัตโนมัติ หากปัญหาหลักอยู่ที่ Architecture หรือ Requirement

**ลบ URL เดิมทั้งหมด**

อาจส่งผลต่อ SEO และ Link ที่ผู้ใช้หรือ Search Engine เคยบันทึกไว้

**ย้ายข้อมูลโดยไม่ทำ Backup**

ควรมี Backup ก่อน Migration ทุกครั้ง

**ทำ Production โดยไม่มี Testing**

เว็บไซต์อาจทำงานได้บนเครื่อง Developer แต่เกิดปัญหาเมื่อใช้งานจริง

## 23. หลักการที่ควรยึด

การพัฒนาเว็บไซต์ใหม่ควรยึดหลัก

```
Requirement First
        ↓
Design
        ↓
Architecture
        ↓
Development
        ↓
Testing
        ↓
Security
        ↓
Deployment
        ↓
Monitoring
```

Technology เป็นเครื่องมือ ไม่ใช่เป้าหมาย

การเปลี่ยนจาก Dreamweaver ไปใช้ Framework ใหม่เพียงอย่างเดียวไม่ได้หมายความว่าเว็บไซต์ได้รับการพัฒนาอย่างถูกต้อง สิ่งสำคัญกว่าคือการจัดโครงสร้าง Code, Data, Security, Testing และกระบวนการพัฒนาให้สามารถดูแลต่อได้ในระยะยาว

## 24. ข้อกำหนดเพิ่มเติมสำหรับโครงการนี้

นอกจากหลักการทั่วไปข้างต้น โครงการนี้มีข้อกำหนดเฉพาะที่ต้องยึดถืออย่างเคร่งครัดในการพัฒนา ดังนี้

### 24.1 ห้ามเขียนโค้ดแบบ One Page

ห้ามรวมทุกอย่าง (HTML, CSS, JavaScript, Logic) ไว้ในไฟล์เดียวหรือหน้าเดียวเหมือนเว็บไซต์เดิม ทุกหน้าและทุกฟังก์ชันต้องถูกแยกไฟล์ตามความรับผิดชอบของมันอย่างชัดเจน

### 24.2 แยกไฟล์ตามฟังก์ชันและเรียกใช้งานร่วมกัน

โค้ดที่ทำหน้าที่เดียวกันต้องถูกเขียนเป็นฟังก์ชัน/โมดูลแยกไฟล์ แล้วให้หน้าอื่น ๆ เรียกใช้งานร่วมกัน (import/reuse) แทนการ copy-paste โค้ดซ้ำในแต่ละหน้า เช่น

```
services/
├── product.service.ts
├── order.service.ts
├── auth.service.ts
└── email.service.ts
```

เมื่อ Logic เปลี่ยน แก้ที่ไฟล์เดียว ทุกหน้าที่เรียกใช้ได้รับผลอัตโนมัติ

### 24.3 แยก Component

ส่วน UI ที่ซ้ำกันในหลายหน้า (Navbar, Footer, ปุ่ม, การ์ดสินค้า, ฟอร์ม) ต้องถูกสร้างเป็น Component แยกไฟล์ ตามที่ระบุไว้ในข้อ 10 ห้ามคัดลอกโค้ด UI ซ้ำไปวางในแต่ละหน้า

### 24.4 ห้ามละเลยมาตรฐานการเขียนโค้ด

ทุกไฟล์ต้องปฏิบัติตามมาตรฐานการเขียนโค้ดอย่างสม่ำเสมอ ได้แก่

- การตั้งชื่อไฟล์ ตัวแปร ฟังก์ชัน และ Component ที่สื่อความหมายและสอดคล้องกันทั้งโปรเจกต์
- โครงสร้าง Folder ที่เป็นระบบตามข้อ 11
- ใช้ Linter / Formatter (เช่น ESLint, Prettier) ควบคุมรูปแบบโค้ดให้เป็นมาตรฐานเดียวกัน
- เขียน Type ให้ชัดเจนหากใช้ TypeScript
- ไม่เขียนโค้ดซ้ำซ้อน (DRY) และไม่ทิ้งโค้ดที่ไม่ได้ใช้งานไว้ในระบบ

### 24.5 เว็บไซต์ต้องใช้งานง่ายที่สุดสำหรับผู้ใช้ที่ไม่เชี่ยวชาญด้านเทคนิค (Non-tech User)

กลุ่มผู้ใช้งานจริงของระบบ (เช่น ผู้ดูแลร้าน พนักงาน หรือลูกค้า) อาจไม่คุ้นเคยกับซอฟต์แวร์ที่ซับซ้อน การออกแบบจึงต้องยึดหลัก

- ขั้นตอนการใช้งานต้องสั้น ตรงไปตรงมา ไม่ซ่อนฟังก์ชันไว้หลายชั้น
- ข้อความในระบบต้องเป็นภาษาที่เข้าใจง่าย ไม่ใช้ศัพท์เทคนิค
- มี Feedback ที่ชัดเจนเมื่อผู้ใช้ทำรายการสำเร็จหรือผิดพลาด (เช่น ข้อความแจ้งเตือน)
- ลด Cognitive Load คือให้ผู้ใช้ต้องคิดหรือจำน้อยที่สุดในแต่ละขั้นตอน

### 24.6 หน้าตาเว็บต้องเรียบง่าย คุ้นเคยเหมือน Word / Excel / PowerPoint

การออกแบบ UI ต้องอ้างอิงความคุ้นเคยของผู้ใช้ทั่วไปที่ใช้โปรแกรม Office เป็นประจำ โดยยึดแนวทาง

- ใช้ Layout แบบเรียบ เป็นระเบียบ มีตาราง (Table) และรายการ (List) ที่อ่านง่ายเหมือนเอกสาร Office
- ใช้สีพื้นฐาน ไม่ฉูดฉาด ตัดกันชัดเจน อ่านง่าย ไม่มี Animation หรือ Effect ที่ทำให้สับสน
- ปุ่มและเมนูมีตำแหน่งคงที่ คาดเดาได้ ไม่เปลี่ยนตำแหน่งไปมา
- ฟอนต์อ่านง่าย ขนาดเหมาะสม ไม่ใช้ไอคอนหรือสัญลักษณ์ที่ต้องตีความ
- หลีกเลี่ยง Trend ดีไซน์ที่ซับซ้อน (เช่น Animation หนัก ๆ, Layout แบบ Creative จัด) เพื่อให้ผู้ใช้ที่ไม่ถนัดเทคโนโลยีสามารถใช้งานได้ทันทีโดยไม่ต้องมีคนสอน

## 25. สรุป

การนำเว็บไซต์เก่าที่สร้างด้วย Adobe Dreamweaver มาพัฒนาใหม่ควรมองเป็นการ Re-engineering มากกว่าการ Redesign หน้าเว็บเพียงอย่างเดียว

เว็บไซต์เดิมควรถูกใช้เป็นแหล่งข้อมูลสำหรับวิเคราะห์ Requirement, Content, Business Logic และข้อมูลที่มีอยู่ จากนั้นจึงออกแบบระบบใหม่ให้เหมาะกับมาตรฐานปัจจุบัน

เป้าหมายของการพัฒนาไม่ใช่เพียงให้เว็บไซต์ "หน้าตาทันสมัย" แต่ต้องทำให้ระบบ

- Maintainable
- Secure
- Responsive
- Accessible
- Performant
- Testable
- Scalable

และสามารถส่งต่อให้ Developer คนอื่นดูแลต่อได้โดยไม่ต้องพึ่งพาความรู้เฉพาะตัวของผู้สร้างเว็บไซต์เดิม

ดังนั้น การเปลี่ยนจากเว็บไซต์ Dreamweaver รุ่นเก่าไปสู่เว็บไซต์ยุคใหม่ควรเป็นการเปลี่ยนทั้ง "วิธีคิดและกระบวนการพัฒนา" ไม่ใช่เพียงการเปลี่ยนเครื่องมือเขียนเว็บไซต์
