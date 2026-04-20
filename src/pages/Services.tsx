import React, { useRef, useState, useCallback } from "react";
import "./Services.css";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Phần mềm quản lý",
    description: "Hệ thống ERP, CRM, HRM được phát triển chuyên biệt theo từng ngành nghề và quy mô doanh nghiệp.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=700&q=80",
    tag: "Software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="1" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Giải pháp Data & BI",
    description: "Xây dựng kho dữ liệu, phân tích dữ liệu lớn và triển khai hệ thống Business Intelligence cho doanh nghiệp.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    tag: "Data",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "An ninh thông tin",
    description: "Giải pháp bảo mật hệ thống, kiểm tra lỗ hổng và đào tạo nhận thức an toàn thông tin toàn diện.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    tag: "Security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Hạ tầng & Cloud",
    description: "Tư vấn, triển khai hạ tầng máy chủ, hệ thống mạng và dịch vụ điện toán đám mây hiệu quả.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&q=80",
    tag: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Tư vấn & Triển khai",
    description: "Đội ngũ chuyên gia tư vấn giải pháp, triển khai và hỗ trợ sau dự án một cách chuyên nghiệp.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
    tag: "Consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Tích hợp hệ thống",
    description: "Kết nối và tích hợp các hệ thống phần mềm, API, thiết bị phần cứng trong môi trường doanh nghiệp.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80",
    tag: "Integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Kiểm thử & QA",
    description: "Dịch vụ kiểm thử phần mềm, đảm bảo chất lượng và hiệu năng hệ thống trước khi đưa vào vận hành.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
    tag: "Testing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Đào tạo công nghệ",
    description: "Chương trình đào tạo chuyên sâu về công nghệ thông tin, nâng cao năng lực đội ngũ nhân sự IT.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
    tag: "Training",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Hỗ trợ & Bảo trì",
    description: "Dịch vụ hỗ trợ kỹ thuật 24/7, bảo trì hệ thống và cập nhật liên tục đảm bảo hoạt động ổn định.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80",
    tag: "Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
];

interface MousePos { x: number; y: number }

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse]         = useState<MousePos>({ x: 0.5, y: 0.5 });

  const update = useCallback((x: number, y: number, hovered: boolean) => {
    setMouse({ x, y });
    setIsHovered(hovered);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top)  / r.height;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => update(x, y, true));
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    update((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, true);
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    update(0.5, 0.5, false);
  };

  const tiltX = (mouse.y - 0.5) * -7;
  const tiltY = (mouse.x - 0.5) *  7;
  const ovX   = (mouse.x - 0.5) * 20;
  const ovY   = (mouse.y - 0.5) * 20;
  const imgX  = (mouse.x - 0.5) * -15;
  const imgY  = (mouse.y - 0.5) * -15;

  return (
    <div
      ref={cardRef}
      className={`sg-card${isHovered ? " sg-card--hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
    >
      {/* Background image */}
      <div
        className="sg-card__img"
        style={{
          backgroundImage: `url(${service.image})`,
          transform: isHovered
            ? `scale(1.13) translate(${imgX}px,${imgY}px)`
            : "scale(1) translate(0,0)",
        }}
      />

      {/* Always-on overlays */}
      <div className="sg-card__darken" />
      <div className="sg-card__grad" />

      {/* Orange accent top bar */}
      <div className="sg-card__accent" />

      {/* Tag badge */}
      <span className="sg-card__tag">{service.tag}</span>

      {/* Idle title bar */}
      <div className={`sg-card__footer${isHovered ? " sg-card__footer--hidden" : ""}`}>
        <div className="sg-card__footer-icon">{service.icon}</div>
        <h3 className="sg-card__footer-title">{service.title}</h3>
      </div>

      {/* Parallax hover overlay */}
      <div
        className={`sg-overlay${isHovered ? " sg-overlay--on" : ""}`}
        style={{
          transform: isHovered
            ? `translate(${ovX}px,${ovY}px)`
            : "translate(0,0)",
        }}
      >
        <div className="sg-overlay__body">
          <div className="sg-overlay__icon">{service.icon}</div>
          <div className="sg-overlay__sep" />
          <h3 className="sg-overlay__title">{service.title}</h3>
          <p  className="sg-overlay__desc">{service.description}</p>
          <a  href="/services" className="sg-overlay__btn">
            Xem chi tiết
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => (
  <section className="sg-section">
    {/* Decorative background – same as hero/about-banner */}
    <div className="sg-bg">
      <div className="sg-bg__grid" />
      <div className="sg-bg__glow" />
    </div>

    <div className="sg-inner">
      {/* Reuse global header classes from Home.css */}
      <div className="section-header">
        <span className="section-label">DỊCH VỤ CỦA CHÚNG TÔI</span>
        <h2 className="section-title sg-title-light">Giải pháp & Dịch vụ</h2>
        <p className="section-desc sg-desc-muted">
          Cung cấp đầy đủ các giải pháp công nghệ thông tin từ tư vấn,
          triển khai đến vận hành và bảo trì.
        </p>
      </div>

      <div className="sg-grid">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
