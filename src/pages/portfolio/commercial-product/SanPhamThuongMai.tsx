import React, { useState } from "react";
import "./SanPhamThuongMai.css";

// ─── Types ────────────────────────────────────────────────────────────
interface Product {
    id: number;
    name: string;
    image: string | null;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────
const products: Product[] = [
    {
        id: 1,
        name: "ANSV CRM",
        image: null,
        shortDesc: "Phần mềm quản lý quan hệ khách hàng, tối ưu hóa quy trình bán hàng.",
        fullDesc: "ANSV CRM là giải pháp quản lý quan hệ khách hàng toàn diện, giúp doanh nghiệp theo dõi toàn bộ hành trình khách hàng từ tiếp cận, chuyển đổi đến chăm sóc sau bán hàng. Hệ thống tích hợp email marketing, automation và phân tích dữ liệu khách hàng.",
        features: ["Quản lý pipeline bán hàng", "Tự động hóa marketing", "Phân tích hành vi khách hàng", "Tích hợp đa kênh"],
        tags: ["CRM", "Bán hàng", "Marketing"],
    },
    {
        id: 2,
        name: "ANSV HRM",
        image: null,
        shortDesc: "Hệ thống quản lý nhân sự và tính lương tự động, đầy đủ nghiệp vụ.",
        fullDesc: "ANSV HRM là phần mềm quản lý nhân sự toàn diện bao gồm tuyển dụng, onboarding, chấm công, tính lương và đánh giá hiệu suất. Hệ thống tuân thủ đầy đủ quy định pháp luật lao động Việt Nam.",
        features: ["Quản lý hồ sơ nhân viên", "Chấm công & tính lương", "Quản lý tuyển dụng", "Đánh giá KPI nhân viên"],
        tags: ["HRM", "Nhân sự", "Tính lương"],
    },
    {
        id: 3,
        name: "ANSV Document Manager",
        image: null,
        shortDesc: "Phần mềm quản lý văn bản và tài liệu điện tử, hỗ trợ chữ ký số.",
        fullDesc: "ANSV Document Manager là hệ thống quản lý văn bản điện tử hiện đại, giúp doanh nghiệp số hóa toàn bộ quy trình xử lý tài liệu. Hệ thống hỗ trợ phân loại, tìm kiếm, phân quyền và theo dõi luồng phê duyệt văn bản.",
        features: ["Lưu trữ & phân loại tài liệu", "Luồng phê duyệt tự động", "Chữ ký số tích hợp", "Tìm kiếm toàn văn bản"],
        tags: ["Document", "Văn bản", "Số hóa"],
    },
    {
        id: 4,
        name: "ANSV Asset Manager",
        image: null,
        shortDesc: "Phần mềm quản lý tài sản doanh nghiệp, theo dõi vòng đời tài sản.",
        fullDesc: "ANSV Asset Manager giúp doanh nghiệp quản lý toàn bộ tài sản cố định và công cụ dụng cụ. Hệ thống tự động tính khấu hao, theo dõi lịch bảo trì và cảnh báo khi tài sản đến hạn kiểm định.",
        features: ["Quản lý tài sản cố định", "Tính khấu hao tự động", "Lịch bảo trì & kiểm định", "Báo cáo tài sản chi tiết"],
        tags: ["Asset", "Tài sản", "Quản lý"],
    },
    {
        id: 5,
        name: "ANSV ERP",
        image: null,
        shortDesc: "Hệ thống hoạch định nguồn lực doanh nghiệp toàn diện, tích hợp đa phòng ban.",
        fullDesc: "ANSV ERP là giải pháp quản trị doanh nghiệp toàn diện được phát triển dựa trên nền tảng công nghệ hiện đại. Hệ thống tích hợp đầy đủ các phân hệ từ tài chính, kế toán, nhân sự đến sản xuất và chuỗi cung ứng.",
        features: ["Quản lý tài chính & kế toán", "Quản lý nhân sự & lương", "Quản lý kho & vật tư", "Báo cáo & phân tích dữ liệu"],
        tags: ["ERP", "Quản trị doanh nghiệp", "Tích hợp"],
    },
    {
        id: 6,
        name: "ANSV Helpdesk",
        image: null,
        shortDesc: "Phần mềm quản lý yêu cầu hỗ trợ và chăm sóc khách hàng sau bán hàng.",
        fullDesc: "ANSV Helpdesk là hệ thống quản lý ticket hỗ trợ kỹ thuật và chăm sóc khách hàng. Phần mềm giúp doanh nghiệp theo dõi, phân loại và xử lý các yêu cầu hỗ trợ một cách có hệ thống và hiệu quả.",
        features: ["Quản lý ticket hỗ trợ", "Phân loại & ưu tiên tự động", "SLA tracking", "Báo cáo hiệu suất hỗ trợ"],
        tags: ["Helpdesk", "Hỗ trợ", "ITSM"],
    },
];

// ─── Product Card ─────────────────────────────────────────────────────
const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
    <div className="sp-card" onClick={onClick}>
        <div className="sp-card-img">
            {product.image ? (
                <img src={product.image} alt={product.name} />
            ) : (
                <div className="sp-card-img-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="48" height="48" opacity="0.2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                </div>
            )}
        </div>
        <div className="sp-card-body">
            <h3 className="sp-card-name">{product.name}</h3>
            <p className="sp-card-desc">{product.shortDesc}</p>
            <span className="sp-card-more">Xem chi tiết →</span>
        </div>
    </div>
);

// ─── Product Modal ─────────────────────────────────────────────────────
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
                    <span className="sp-modal-badge">Sản phẩm thương mại</span>
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

// ─── Main Component ───────────────────────────────────────────────────
const SanPhamThuongMai: React.FC = () => {
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);

    return (
        <div className="spda-section">
            <h2 className="spda-section-title">Sản phẩm thương mại</h2>
            <p className="spda-section-desc">
                Các sản phẩm phần mềm thương mại của ANSV được phát triển phục vụ nhu cầu
                quản trị doanh nghiệp, tối ưu hóa quy trình vận hành và nâng cao năng suất làm việc.
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

export default SanPhamThuongMai;
