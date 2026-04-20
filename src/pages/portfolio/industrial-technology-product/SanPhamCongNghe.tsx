import React, { useState } from "react";
import "./SanPhamCongNghe.css";

interface Product {
    id: number;
    name: string;
    image: string | null;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    tags: string[];
}

const products: Product[] = [
    {
        id: 1,
        name: "ANSV Network Monitor",
        image: null,
        shortDesc: "Phần mềm giám sát mạng viễn thông thời gian thực, cảnh báo tự động.",
        fullDesc: "ANSV Network Monitor là hệ thống giám sát mạng viễn thông chuyên nghiệp, cho phép theo dõi toàn bộ hạ tầng mạng theo thời gian thực. Hệ thống tự động phát hiện sự cố, gửi cảnh báo và hỗ trợ kỹ thuật viên xử lý nhanh chóng, giảm thiểu thời gian downtime của mạng lưới.",
        features: ["Giám sát 24/7 thời gian thực", "Cảnh báo tự động qua SMS/Email", "Dashboard trực quan", "Phân tích lịch sử sự cố"],
        tags: ["Network", "Monitoring", "Viễn thông"],
    },
    {
        id: 2,
        name: "ANSV OSS/BSS",
        image: null,
        shortDesc: "Hệ thống vận hành và hỗ trợ kinh doanh cho nhà mạng viễn thông.",
        fullDesc: "ANSV OSS/BSS là bộ giải pháp tích hợp hỗ trợ vận hành (OSS) và kinh doanh (BSS) cho các nhà mạng viễn thông. Hệ thống quản lý toàn bộ vòng đời dịch vụ từ kích hoạt, tính cước, thanh toán đến chăm sóc khách hàng.",
        features: ["Quản lý thuê bao & dịch vụ", "Hệ thống tính cước tự động", "CRM viễn thông", "Tích hợp API linh hoạt"],
        tags: ["OSS", "BSS", "Telecom"],
    },
    {
        id: 3,
        name: "ANSV Billing System",
        image: null,
        shortDesc: "Hệ thống tính cước và quản lý hóa đơn cho dịch vụ viễn thông.",
        fullDesc: "ANSV Billing System là giải pháp tính cước chuyên biệt cho ngành viễn thông, hỗ trợ đa dạng mô hình tính cước từ trả trước, trả sau đến các gói dịch vụ phức tạp. Hệ thống xử lý hàng triệu bản ghi cước mỗi ngày với độ chính xác cao.",
        features: ["Tính cước đa dịch vụ", "Xuất hóa đơn tự động", "Tích hợp cổng thanh toán", "Báo cáo doanh thu chi tiết"],
        tags: ["Billing", "Viễn thông", "Tính cước"],
    },
    {
        id: 4,
        name: "ANSV NMS",
        image: null,
        shortDesc: "Hệ thống quản lý mạng tập trung, hỗ trợ đa vendor thiết bị viễn thông.",
        fullDesc: "ANSV NMS (Network Management System) là nền tảng quản lý mạng tập trung, hỗ trợ quản lý đồng thời nhiều loại thiết bị từ các nhà sản xuất khác nhau. Hệ thống cung cấp giao diện thống nhất để theo dõi, cấu hình và bảo trì toàn bộ hạ tầng mạng.",
        features: ["Quản lý đa vendor", "Topology map trực quan", "Quản lý cấu hình tập trung", "Tích hợp SNMP/NETCONF"],
        tags: ["NMS", "Network", "Management"],
    },
    {
        id: 5,
        name: "ANSV Provisioning",
        image: null,
        shortDesc: "Hệ thống cung cấp và kích hoạt dịch vụ tự động cho mạng viễn thông.",
        fullDesc: "ANSV Provisioning tự động hóa toàn bộ quy trình cung cấp dịch vụ cho thuê bao viễn thông. Từ đăng ký dịch vụ đến kích hoạt trên thiết bị mạng, hệ thống xử lý nhanh chóng và chính xác, giảm thiểu can thiệp thủ công.",
        features: ["Kích hoạt dịch vụ tự động", "Workflow quản lý đơn hàng", "Rollback tự động khi lỗi", "API tích hợp với BSS"],
        tags: ["Provisioning", "Automation", "Telecom"],
    },
    {
        id: 6,
        name: "ANSV Trouble Ticketing",
        image: null,
        shortDesc: "Hệ thống quản lý sự cố mạng viễn thông, theo dõi và xử lý tự động.",
        fullDesc: "ANSV Trouble Ticketing là hệ thống quản lý sự cố chuyên biệt cho mạng viễn thông. Hệ thống tự động tạo ticket khi phát hiện sự cố, phân công xử lý và theo dõi tiến độ đến khi sự cố được giải quyết hoàn toàn.",
        features: ["Tạo ticket tự động từ alarm", "Phân công xử lý thông minh", "Escalation tự động", "Báo cáo SLA & KPI"],
        tags: ["Trouble Ticket", "ITSM", "Telecom"],
    },
];

// ─── Card & Modal (tái sử dụng style từ SanPhamThuongMai) ────────────
const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
    <div className="sp-card" onClick={onClick}>
        <div className="sp-card-img">
            {product.image
                ? <img src={product.image} alt={product.name} />
                : <div className="sp-card-img-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="48" height="48" opacity="0.2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
            }
        </div>
        <div className="sp-card-body">
            <h3 className="sp-card-name">{product.name}</h3>
            <p className="sp-card-desc">{product.shortDesc}</p>
            <span className="sp-card-more">Xem chi tiết →</span>
        </div>
    </div>
);

const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="sp-modal-backdrop" onClick={handleBackdrop}>
            <div className="sp-modal">
                <button className="sp-modal-close" onClick={onClose} aria-label="Đóng">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <div className="sp-modal-img">
                    {product.image
                        ? <img src={product.image} alt={product.name} />
                        : <div className="sp-modal-img-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="64" height="64" opacity="0.15">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                          </div>
                    }
                </div>
                <div className="sp-modal-body">
                    <span className="sp-modal-badge cong-nghe">Công nghệ công nghiệp</span>
                    <h3 className="sp-modal-name">{product.name}</h3>
                    <p className="sp-modal-desc">{product.fullDesc}</p>
                    <div className="sp-modal-divider" />
                    <h4 className="sp-modal-features-title">Tính năng nổi bật</h4>
                    <ul className="sp-modal-features">
                        {product.features.map((f) => (
                            <li key={f}><span className="sp-feature-dot" />{f}</li>
                        ))}
                    </ul>
                    <div className="sp-modal-tags">
                        {product.tags.map((t) => (
                            <span key={t} className="sp-tag">{t}</span>
                        ))}
                    </div>
                    <div className="sp-modal-cta">
                        <a href="/lien-he" className="sp-btn-primary">
                            Liên hệ tư vấn
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <button className="sp-btn-secondary" onClick={onClose}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SanPhamCongNghe: React.FC = () => {
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);

    return (
        <div className="spda-section">
            <h2 className="spda-section-title">Sản phẩm công nghệ công nghiệp</h2>
            <p className="spda-section-desc">
                Các sản phẩm phần mềm chuyên biệt cho ngành viễn thông và hạ tầng mạng,
                được phát triển bởi đội ngũ kỹ sư giàu kinh nghiệm với hơn 30 năm trong ngành.
            </p>

            <div className="sp-grid">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} onClick={() => setActiveProduct(p)} />
                ))}
            </div>

            {activeProduct && (
                <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
            )}
        </div>
    );
};

export default SanPhamCongNghe;
