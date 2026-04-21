import React, { useRef, useState, useCallback, useEffect } from "react";
import "./Services.css";

interface ServiceFeature {
  icon: string; // Để tạm trong trường hợp cần thay đổi sang icon component sau này
  text: string;
}

interface ServiceBenefit {
  title: string;
  desc: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  detail: string;
  image: string;
  tag: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  cta: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Phần mềm quản lý",
    description: "Hệ thống ERP, CRM, HRM được phát triển chuyên biệt theo từng ngành nghề và quy mô doanh nghiệp.",
    detail: "Chúng tôi xây dựng các hệ thống phần mềm quản lý tùy biến hoàn toàn theo đặc thù nghiệp vụ của từng doanh nghiệp — từ sản xuất, thương mại đến dịch vụ — giúp tối ưu hóa vận hành và nâng cao hiệu suất toàn bộ tổ chức.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=700&q=80",
    tag: "Software",
    features: [
      { icon: "◈", text: "ERP tùy biến theo ngành nghề" },
      { icon: "◈", text: "CRM quản lý khách hàng toàn diện" },
      { icon: "◈", text: "HRM & chấm công tự động" },
      { icon: "◈", text: "Báo cáo & dashboard thời gian thực" },
    ],
    benefits: [
      { title: "Tiết kiệm chi phí", desc: "Giảm 30–40% chi phí vận hành nhờ tự động hóa quy trình" },
      { title: "Triển khai nhanh", desc: "Đưa vào hoạt động trong 4–8 tuần với đội ngũ hỗ trợ chuyên nghiệp" },
    ],
    cta: "Tư vấn ngay",
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
    title: "Dữ liệu & BI",
    description: "Xây dựng kho dữ liệu, phân tích dữ liệu lớn và triển khai hệ thống Business Intelligence cho doanh nghiệp.",
    detail: "Biến dữ liệu thô thành tài sản chiến lược. Chúng tôi thiết kế hệ thống kho dữ liệu tập trung, xây dựng pipeline ETL và triển khai các công cụ BI giúp lãnh đạo đưa ra quyết định dựa trên số liệu thực tế.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    tag: "Data",
    features: [
      { icon: "◈", text: "Data Warehouse & Data Lake" },
      { icon: "◈", text: "Pipeline ETL tự động hóa" },
      { icon: "◈", text: "Dashboard BI tương tác" },
      { icon: "◈", text: "Phân tích dự báo & xu hướng" },
    ],
    benefits: [
      { title: "Ra quyết định nhanh hơn", desc: "Dữ liệu cập nhật theo thời gian thực, sẵn sàng mọi lúc" },
      { title: "Tầm nhìn 360°", desc: "Tổng hợp dữ liệu từ mọi nguồn vào một nơi duy nhất" },
    ],
    cta: "Tư vấn ngay",
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
    detail: "Bảo vệ hạ tầng số của doanh nghiệp trước các mối đe dọa ngày càng tinh vi. Đội ngũ chuyên gia bảo mật của chúng tôi đánh giá toàn diện, vá lỗ hổng và xây dựng hệ thống phòng thủ nhiều lớp.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    tag: "Security",
    features: [
      { icon: "◈", text: "Kiểm tra thâm nhập (Pentest)" },
      { icon: "◈", text: "Giám sát bảo mật 24/7 (SOC)" },
      { icon: "◈", text: "Quản lý lỗ hổng định kỳ" },
      { icon: "◈", text: "Đào tạo nhận thức bảo mật" },
    ],
    benefits: [
      { title: "Phát hiện sớm", desc: "Hệ thống cảnh báo thời gian thực trước khi sự cố xảy ra" },
      { title: "Tuân thủ chuẩn", desc: "Đáp ứng ISO 27001, PCIDSS và các quy định pháp lý" },
    ],
    cta: "Đánh giá miễn phí",
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
    detail: "Thiết kế và xây dựng hạ tầng CNTT hiện đại, linh hoạt và có khả năng mở rộng. Từ on-premise đến hybrid cloud, chúng tôi giúp doanh nghiệp tối ưu chi phí hạ tầng và đảm bảo uptime cao nhất.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&q=80",
    tag: "Cloud",
    features: [
      { icon: "◈", text: "Thiết kế hạ tầng On-premise & Hybrid" },
      { icon: "◈", text: "Migration lên AWS, Azure, GCP" },
      { icon: "◈", text: "Tối ưu chi phí cloud" },
      { icon: "◈", text: "Backup & Disaster Recovery" },
    ],
    benefits: [
      { title: "Uptime 99.9%", desc: "Hạ tầng dự phòng đảm bảo hoạt động liên tục không gián đoạn" },
      { title: "Linh hoạt mở rộng", desc: "Scale up/down theo nhu cầu thực tế, không lãng phí tài nguyên" },
    ],
    cta: "Tư vấn ngay",
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
    detail: "Không chỉ là nhà cung cấp công nghệ, chúng tôi là đối tác chiến lược đồng hành cùng doanh nghiệp từ giai đoạn khảo sát nhu cầu, lập kế hoạch, triển khai đến vận hành và cải tiến liên tục.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
    tag: "Consulting",
    features: [
      { icon: "◈", text: "Khảo sát & phân tích nghiệp vụ" },
      { icon: "◈", text: "Lập kế hoạch chuyển đổi số" },
      { icon: "◈", text: "Quản lý dự án chuyên nghiệp (PMO)" },
      { icon: "◈", text: "Hỗ trợ sau triển khai dài hạn" },
    ],
    benefits: [
      { title: "Giảm rủi ro", desc: "Phương pháp triển khai được kiểm chứng qua hàng trăm dự án" },
      { title: "Đúng tiến độ", desc: "Cam kết bàn giao đúng hạn với quy trình quản lý chặt chẽ" },
    ],
    cta: "Gặp chuyên gia",
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
    detail: "Phá bỏ các rào cản dữ liệu giữa các hệ thống rời rạc. Chúng tôi xây dựng lớp tích hợp linh hoạt giúp các ứng dụng giao tiếp mượt mà, dữ liệu lưu thông thông suốt trong toàn bộ hệ sinh thái CNTT.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80",
    tag: "Integration",
    features: [
      { icon: "◈", text: "Tích hợp API & Microservices" },
      { icon: "◈", text: "Middleware & ESB" },
      { icon: "◈", text: "Kết nối thiết bị IoT & phần cứng" },
      { icon: "◈", text: "Đồng bộ dữ liệu đa hệ thống" },
    ],
    benefits: [
      { title: "Loại bỏ data silo", desc: "Dữ liệu lưu thông tự do giữa mọi hệ thống trong doanh nghiệp" },
      { title: "Tự động hóa luồng", desc: "Giảm nhập liệu thủ công, hạn chế sai sót con người" },
    ],
    cta: "Tư vấn ngay",
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
    detail: "Chất lượng phần mềm không phải may rủi. Đội ngũ QA của chúng tôi áp dụng quy trình kiểm thử nghiêm ngặt, kết hợp kiểm thử thủ công và tự động hóa để đảm bảo sản phẩm hoạt động ổn định.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
    tag: "Testing",
    features: [
      { icon: "◈", text: "Kiểm thử chức năng & hồi quy" },
      { icon: "◈", text: "Automation Testing (Selenium, Cypress)" },
      { icon: "◈", text: "Kiểm thử hiệu năng & tải" },
      { icon: "◈", text: "Kiểm thử bảo mật ứng dụng" },
    ],
    benefits: [
      { title: "Phát hiện sớm lỗi", desc: "Tiết kiệm chi phí sửa lỗi gấp 10 lần so với phát hiện sau go-live" },
      { title: "Độ phủ test cao", desc: "Đảm bảo >90% code coverage với automation testing" },
    ],
    cta: "Yêu cầu báo giá",
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
    detail: "Con người là yếu tố quyết định thành công của mọi dự án CNTT. Chúng tôi thiết kế chương trình đào tạo thực chiến, bám sát công nghệ mới nhất và nhu cầu thực tế của từng doanh nghiệp.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
    tag: "Training",
    features: [
      { icon: "◈", text: "Đào tạo theo lộ trình tùy chỉnh" },
      { icon: "◈", text: "Workshop thực hành hands-on" },
      { icon: "◈", text: "Chứng chỉ công nghệ quốc tế" },
      { icon: "◈", text: "Đào tạo nội bộ tại doanh nghiệp" },
    ],
    benefits: [
      { title: "Học đi đôi với hành", desc: "70% thời gian thực hành trên môi trường thực tế" },
      { title: "Cập nhật liên tục", desc: "Nội dung đào tạo được cập nhật theo công nghệ mới nhất" },
    ],
    cta: "Xem chương trình",
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
    detail: "Hệ thống luôn sẵn sàng là điều kiện tiên quyết cho hoạt động kinh doanh. Đội ngũ hỗ trợ kỹ thuật của chúng tôi túc trực 24/7, phản hồi nhanh và xử lý sự cố hiệu quả để giảm thiểu thời gian downtime.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80",
    tag: "Support",
    features: [
      { icon: "◈", text: "Hotline hỗ trợ 24/7/365" },
      { icon: "◈", text: "Bảo trì định kỳ & cập nhật hệ thống" },
      { icon: "◈", text: "Giám sát hiệu năng chủ động" },
      { icon: "◈", text: "SLA cam kết rõ ràng" },
    ],
    benefits: [
      { title: "Phản hồi < 1 giờ", desc: "Cam kết phản hồi trong vòng 60 phút với sự cố nghiêm trọng" },
      { title: "Chi phí dự đoán được", desc: "Gói bảo trì cố định, không phát sinh chi phí bất ngờ" },
    ],
    cta: "Xem gói hỗ trợ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
];

// ─── Popup ────────────────────────────────────────────────────────────
interface PopupProps {
  service: Service | null;
  originRect: DOMRect | null;
  onClose: () => void;
}

const ServicePopup: React.FC<PopupProps> = ({ service, originRect, onClose }) => {
  const [phase, setPhase] = useState<"idle" | "opening" | "open" | "closing">("idle");

  const handleClose = useCallback(() => {
    setPhase("closing");
    setTimeout(() => {
      setPhase("idle");
      onClose();
    }, 380);
  }, [onClose]);

  useEffect(() => {
    if (service && originRect) {
      // Dùng rAF để đảm bảo DOM đã render xong trước khi trigger transition
      const raf = requestAnimationFrame(() => {
        setPhase("open");
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [service, originRect]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose]);

  useEffect(() => {
    if (phase === "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  if (!service || !originRect) return null;

  const isOpen = phase === "open";

  // Transform origin from card position
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;
  const cardCX = originRect.left + originRect.width / 2;
  const cardCY = originRect.top + originRect.height / 2;
  const originX = ((cardCX / vpW) * 100).toFixed(1) + "%";
  const originY = ((cardCY / vpH) * 100).toFixed(1) + "%";

  return (
    <div
      className={`svc-overlay ${isOpen ? "svc-overlay--on" : ""}`}
      onClick={handleClose}
      style={{ "--origin-x": originX, "--origin-y": originY } as React.CSSProperties}
    >
      <div
        className={`svc-popup ${isOpen ? "svc-popup--open" : ""} ${phase === "closing" ? "svc-popup--closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="svc-popup__hero">
          <img src={service.image} alt={service.title} className="svc-popup__hero-img" />
          <div className="svc-popup__hero-overlay" />
          <span className="svc-popup__tag">{service.tag}</span>
          <button className="svc-popup__close" onClick={handleClose} aria-label="Đóng">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="svc-popup__hero-content">
            <div className="svc-popup__icon">{service.icon}</div>
            <h2 className="svc-popup__title">{service.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="svc-popup__body">
          {/* Overview */}
          <p className="svc-popup__detail">{service.detail}</p>

          <div className="svc-popup__cols">
            {/* Features */}
            <div className="svc-popup__block">
              <h4 className="svc-popup__block-title">
                <span className="svc-popup__block-accent" />
                Tính năng chính
              </h4>
              <ul className="svc-popup__features">
                {service.features.map((f, i) => (
                  <li key={i} className="svc-popup__feature-item">
                    <span className="svc-popup__feature-dot" />
                    {/* <span className="svc-popup__feature-dot">{f.icon}</span> */}
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="svc-popup__block">
              <h4 className="svc-popup__block-title">
                <span className="svc-popup__block-accent" />
                Lợi ích mang lại
              </h4>
              <div className="svc-popup__benefits">
                {service.benefits.map((b, i) => (
                  <div key={i} className="svc-popup__benefit-item">
                    <span className="svc-popup__benefit-title">{b.title}</span>
                    <span className="svc-popup__benefit-desc">{b.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="svc-popup__footer">
            <p className="svc-popup__footer-note">
              Liên hệ để nhận tư vấn chi tiết và báo giá phù hợp với nhu cầu của bạn.
            </p>
            <div className="svc-popup__footer-actions">
              <a href="/contact" className="svc-popup__cta-btn">
                {service.cta}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <button className="svc-popup__close-btn" onClick={handleClose}>
                Đóng lại
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Service Card ─────────────────────────────────────────────────────
interface MousePos { x: number; y: number }

const ServiceCard: React.FC<{
  service: Service;
  onOpen: (s: Service, rect: DOMRect) => void;
}> = ({ service, onOpen }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse] = useState<MousePos>({ x: 0.5, y: 0.5 });

  const update = useCallback((x: number, y: number, hovered: boolean) => {
    setMouse({ x, y });
    setIsHovered(hovered);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
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

  const handleOpenPopup = () => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) onOpen(service, rect);
  };

  const tiltX = (mouse.y - 0.5) * -7;
  const tiltY = (mouse.x - 0.5) * 7;
  const ovX = (mouse.x - 0.5) * 20;
  const ovY = (mouse.y - 0.5) * 20;
  const imgX = (mouse.x - 0.5) * -15;
  const imgY = (mouse.y - 0.5) * -15;

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
      <div
        className="sg-card__img"
        style={{
          backgroundImage: `url(${service.image})`,
          transform: isHovered
            ? `scale(1.13) translate(${imgX}px,${imgY}px)`
            : "scale(1) translate(0,0)",
        }}
      />
      <div className="sg-card__darken" />
      <div className="sg-card__grad" />
      <div className="sg-card__accent" />
      <span className="sg-card__tag">{service.tag}</span>

      <div className={`sg-card__footer${isHovered ? " sg-card__footer--hidden" : ""}`}>
        <div className="sg-card__footer-icon">{service.icon}</div>
        <h3 className="sg-card__footer-title">{service.title}</h3>
      </div>

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
          <p className="sg-overlay__desc">{service.description}</p>
          <button className="sg-overlay__btn" onClick={handleOpenPopup}>
            Xem chi tiết
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Services Page ────────────────────────────────────────────────────
const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  const handleOpen = (s: Service, rect: DOMRect) => {
    setOriginRect(rect);
    setActiveService(s);
  };

  const handleClose = () => {
    setActiveService(null);
    setOriginRect(null);
  };

  return (
    <div>
      <div className="sg-banner">
        <div className="sg-banner-grid" />
        <div className="sg-banner-content">
          <h1 className="sg-banner-title">DỊCH VỤ</h1>
          <div className="sg-banner-breadcrumb">
            <a href="/">Trang chủ</a>
            <span>›</span>
            <span>Giải pháp & Dịch vụ</span>
            <span>›</span>
            <span>Dịch vụ</span>
          </div>
        </div>
      </div>

      <section className="sg-section">
        <div className="sg-bg">
          <div className="sg-bg__grid" />
          <div className="sg-bg__glow" />
        </div>
        <div className="sg-inner">
          <div className="section-header">
            <h2 className="section-title sg-title-light" style={{ color: "#e85d27" }}>
              DỊCH VỤ CỦA CHÚNG TÔI
            </h2>
            <p className="section-desc sg-desc-muted">
              Cung cấp đầy đủ các giải pháp công nghệ thông tin từ tư vấn,
              triển khai đến vận hành và bảo trì.
            </p>
          </div>
          <div className="sg-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} onOpen={handleOpen} />
            ))}
          </div>
        </div>
      </section>

      <ServicePopup
        service={activeService}
        originRect={originRect}
        onClose={handleClose}
      />
    </div>
  );
};

export default Services;
