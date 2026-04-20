import React, { useRef, useState, useCallback } from "react";
import "./Services.css";

interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "An toàn thông tin mạng",
    description:
      "Cung cấp các giải pháp bảo vệ hệ thống mạng toàn diện, ngăn chặn các mối đe dọa từ bên ngoài và nội bộ, đảm bảo tính liên tục của hoạt động kinh doanh.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tag: "Bảo mật",
  },
  {
    id: 2,
    title: "Giám sát & Phân tích SOC",
    description:
      "Trung tâm điều hành an ninh mạng hoạt động 24/7, phân tích và phản ứng nhanh trước mọi sự cố, giúp doanh nghiệp chủ động trong công tác phòng thủ.",
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&q=80",
    tag: "Giám sát",
  },
  {
    id: 3,
    title: "Kiểm thử xâm nhập",
    description:
      "Đội ngũ chuyên gia thực hiện các bài kiểm thử xâm nhập thực tế, phát hiện lỗ hổng bảo mật trước khi kẻ tấn công có thể khai thác.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    tag: "Pentest",
  },
  {
    id: 4,
    title: "Bảo vệ dữ liệu & DLP",
    description:
      "Giải pháp ngăn chặn rò rỉ dữ liệu, quản lý và kiểm soát luồng thông tin nhạy cảm trong và ngoài tổ chức theo tiêu chuẩn quốc tế.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    tag: "DLP",
  },
  {
    id: 5,
    title: "Quản lý rủi ro & Tuân thủ",
    description:
      "Hỗ trợ tổ chức đánh giá, quản lý rủi ro an toàn thông tin và tuân thủ các tiêu chuẩn như ISO 27001, NIST, PCI-DSS một cách hệ thống.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tag: "Compliance",
  },
  {
    id: 6,
    title: "Bảo mật đám mây",
    description:
      "Đảm bảo an toàn cho hạ tầng đám mây, kiểm soát quyền truy cập và bảo vệ dữ liệu trên các nền tảng AWS, Azure, Google Cloud và hybrid cloud.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    tag: "Cloud",
  },
  {
    id: 7,
    title: "Đào tạo & Nâng cao nhận thức",
    description:
      "Chương trình đào tạo chuyên sâu và mô phỏng tấn công giả lập (phishing simulation) giúp nâng cao ý thức bảo mật cho toàn bộ nhân viên.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    tag: "Đào tạo",
  },
  {
    id: 8,
    title: "Ứng cứu sự cố",
    description:
      "Dịch vụ ứng cứu sự cố khẩn cấp với thời gian phản ứng nhanh, điều tra số pháp (digital forensics) và khôi phục hệ thống sau tấn công mạng.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    tag: "IR",
  },
  {
    id: 9,
    title: "Tư vấn chiến lược ATTT",
    description:
      "Đội ngũ chuyên gia tư vấn xây dựng chiến lược an toàn thông tin tổng thể, phù hợp với đặc thù từng ngành và quy mô doanh nghiệp.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    tag: "Tư vấn",
  },
];

interface MousePos {
  x: number;
  y: number;
}

const SolutionCard: React.FC<{ solution: Solution }> = ({ solution }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  // Parallax values for overlay
  const overlayX = (mousePos.x - 0.5) * 20;
  const overlayY = (mousePos.y - 0.5) * 20;

  // Subtle tilt for card
  const tiltX = (mousePos.y - 0.5) * -8;
  const tiltY = (mousePos.x - 0.5) * 8;

  // Image parallax (opposite direction)
  const imgX = (mousePos.x - 0.5) * -15;
  const imgY = (mousePos.y - 0.5) * -15;

  return (
    <div
      ref={cardRef}
      className={`solution-card ${isHovered ? "hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
    >
      {/* Background image with parallax */}
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${solution.image})`,
          transform: isHovered
            ? `scale(1.12) translate(${imgX}px, ${imgY}px)`
            : "scale(1) translate(0, 0)",
        }}
      />

      {/* Base dark gradient always visible at bottom */}
      <div className="card-base-gradient" />

      {/* Tag */}
      <div className="card-tag">{solution.tag}</div>

      {/* Parallax overlay that follows cursor */}
      <div
        ref={overlayRef}
        className={`card-overlay ${isHovered ? "visible" : ""}`}
        style={{
          transform: isHovered
            ? `translate(${overlayX}px, ${overlayY}px)`
            : "translate(0, 0)",
        }}
      >
        <div className="overlay-content">
          <div className="overlay-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3 className="overlay-title">{solution.title}</h3>
          <p className="overlay-desc">{solution.description}</p>
          <button className="overlay-btn">
            Tìm hiểu thêm
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title always visible at bottom */}
      <div className={`card-title-bar ${isHovered ? "hidden" : ""}`}>
        <h3>{solution.title}</h3>
      </div>
    </div>
  );
};

const SolutionsGrid: React.FC = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-header">
        <span className="solutions-label">Chuyên môn của chúng tôi</span>
        <h2 className="solutions-title">Giải pháp & Dịch vụ</h2>
        <p className="solutions-subtitle">
          ANSV cung cấp hệ sinh thái giải pháp an toàn thông tin toàn diện, giúp
          doanh nghiệp và tổ chức bảo vệ tài sản số một cách hiệu quả.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsGrid;
