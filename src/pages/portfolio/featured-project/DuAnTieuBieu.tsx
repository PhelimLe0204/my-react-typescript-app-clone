import React, { useState } from "react";
import "./DuAnTieuBieu.css";

interface Project {
    id: number;
    name: string;
    client: string;
    year: string;
    category: string;
    image: string | null;
    shortDesc: string;
    fullDesc: string;
    results: string[];
    tags: string[];
}

const projects: Project[] = [
    {
        id: 1,
        name: "Triển khai hệ thống OSS/BSS cho nhà mạng lớn",
        client: "Tập đoàn Viễn thông A",
        year: "2023",
        category: "Viễn thông",
        image: null,
        shortDesc: "Triển khai toàn diện hệ thống vận hành và hỗ trợ kinh doanh cho nhà mạng với hơn 5 triệu thuê bao.",
        fullDesc: "ANSV đã triển khai thành công hệ thống OSS/BSS tích hợp cho Tập đoàn Viễn thông A, bao gồm các phân hệ quản lý thuê bao, tính cước, cung cấp dịch vụ và chăm sóc khách hàng. Dự án hoàn thành đúng tiến độ và đạt tất cả các chỉ tiêu kỹ thuật đề ra.",
        results: ["Xử lý 5+ triệu thuê bao", "Giảm 40% thời gian xử lý yêu cầu", "Uptime đạt 99.99%", "Hoàn thành trước tiến độ 2 tuần"],
        tags: ["OSS/BSS", "Viễn thông", "Tích hợp hệ thống"],
    },
    {
        id: 2,
        name: "Hệ thống giám sát mạng quốc gia",
        client: "Cơ quan Nhà nước B",
        year: "2022",
        category: "Chính phủ",
        image: null,
        shortDesc: "Xây dựng hệ thống giám sát và quản lý hạ tầng mạng viễn thông cấp quốc gia.",
        fullDesc: "ANSV triển khai hệ thống giám sát mạng tập trung cho cơ quan nhà nước, tích hợp dữ liệu từ hàng nghìn điểm trên toàn quốc. Hệ thống cung cấp khả năng giám sát thời gian thực và phân tích xu hướng cho các nhà quản lý.",
        results: ["Giám sát 10.000+ thiết bị", "Phủ sóng 63 tỉnh thành", "Cảnh báo trong vòng 30 giây", "Báo cáo tự động hàng ngày"],
        tags: ["NMS", "Chính phủ", "Hạ tầng mạng"],
    },
    {
        id: 3,
        name: "Chuyển đổi số cho tập đoàn sản xuất",
        client: "Tập đoàn Công nghiệp C",
        year: "2023",
        category: "Sản xuất",
        image: null,
        shortDesc: "Triển khai hệ thống ERP và CRM tích hợp cho tập đoàn sản xuất với 3.000 nhân viên.",
        fullDesc: "ANSV thực hiện dự án chuyển đổi số toàn diện cho Tập đoàn Công nghiệp C, bao gồm triển khai ERP quản lý sản xuất, CRM bán hàng và HRM nhân sự. Tất cả các hệ thống được tích hợp chặt chẽ, cung cấp dữ liệu thống nhất cho ban lãnh đạo.",
        results: ["3.000+ người dùng hệ thống", "Giảm 30% chi phí vận hành", "Tốc độ xử lý đơn hàng tăng 3x", "ROI đạt 250% sau 2 năm"],
        tags: ["ERP", "CRM", "Chuyển đổi số"],
    },
    {
        id: 4,
        name: "Nâng cấp hệ thống Billing viễn thông",
        client: "Công ty Viễn thông D",
        year: "2022",
        category: "Viễn thông",
        image: null,
        shortDesc: "Nâng cấp và mở rộng hệ thống tính cước để hỗ trợ các gói dịch vụ 5G mới.",
        fullDesc: "ANSV thực hiện dự án nâng cấp hệ thống Billing để hỗ trợ các gói dịch vụ 5G và IoT mới của Công ty Viễn thông D. Dự án bao gồm nâng cấp core billing engine, mở rộng khả năng tính cước real-time và tích hợp với các hệ thống mới.",
        results: ["Hỗ trợ tính cước real-time", "Xử lý 100M CDR/ngày", "Migration 0 downtime", "Hỗ trợ 50+ loại gói cước mới"],
        tags: ["Billing", "5G", "Migration"],
    },
    {
        id: 5,
        name: "Hệ thống quản lý văn bản điện tử",
        client: "Bộ/Ngành E",
        year: "2021",
        category: "Chính phủ",
        image: null,
        shortDesc: "Triển khai hệ thống quản lý văn bản và hồ sơ điện tử cho cơ quan nhà nước.",
        fullDesc: "ANSV triển khai hệ thống quản lý văn bản điện tử toàn diện cho cơ quan nhà nước, số hóa toàn bộ quy trình xử lý công văn, hồ sơ và tài liệu. Hệ thống tích hợp chữ ký số và kết nối với các hệ thống liên thông của Chính phủ.",
        results: ["Số hóa 500.000+ văn bản", "Giảm 80% giấy tờ in ấn", "Thời gian xử lý giảm 60%", "Tích hợp chữ ký số toàn diện"],
        tags: ["Văn bản điện tử", "Chính phủ số", "Chữ ký số"],
    },
    {
        id: 6,
        name: "Hạ tầng mạng cho khu công nghiệp",
        client: "Khu Công nghiệp F",
        year: "2023",
        category: "Hạ tầng",
        image: null,
        shortDesc: "Thiết kế và triển khai hạ tầng mạng cho khu công nghiệp mới với 50+ doanh nghiệp.",
        fullDesc: "ANSV đảm nhận toàn bộ công tác tư vấn thiết kế, cung cấp thiết bị và triển khai hạ tầng mạng cho khu công nghiệp mới. Hệ thống mạng đáp ứng nhu cầu kết nối cho hơn 50 doanh nghiệp với băng thông cao và độ tin cậy tuyệt đối.",
        results: ["Phục vụ 50+ doanh nghiệp", "Băng thông 10Gbps backbone", "SLA uptime 99.95%", "Hoàn thành đúng tiến độ"],
        tags: ["Hạ tầng mạng", "Khu công nghiệp", "Tích hợp"],
    },
];

// ─── Project Card ─────────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div className="da-card" onClick={onClick}>
        <div className="da-card-img">
            {project.image
                ? <img src={project.image} alt={project.name} />
                : <div className="da-card-img-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="48" height="48" opacity="0.2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
            }
            <div className="da-card-meta">
                <span className="da-card-year">{project.year}</span>
                <span className="da-card-cat">{project.category}</span>
            </div>
        </div>
        <div className="da-card-body">
            <p className="da-card-client">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                {project.client}
            </p>
            <h3 className="da-card-name">{project.name}</h3>
            <p className="da-card-desc">{project.shortDesc}</p>
            <span className="da-card-more">Xem chi tiết →</span>
        </div>
    </div>
);

// ─── Project Modal ─────────────────────────────────────────────────────
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="da-modal-backdrop" onClick={handleBackdrop}>
            <div className="da-modal">
                <button className="da-modal-close" onClick={onClose} aria-label="Đóng">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <div className="da-modal-img">
                    {project.image
                        ? <img src={project.image} alt={project.name} />
                        : <div className="da-modal-img-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="64" height="64" opacity="0.15">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                          </div>
                    }
                </div>
                <div className="da-modal-body">
                    <div className="da-modal-meta">
                        <span className="da-modal-cat">{project.category}</span>
                        <span className="da-modal-year">{project.year}</span>
                    </div>
                    <h3 className="da-modal-name">{project.name}</h3>
                    <p className="da-modal-client">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        Khách hàng: <strong>{project.client}</strong>
                    </p>
                    <p className="da-modal-desc">{project.fullDesc}</p>
                    <div className="da-modal-divider" />
                    <h4 className="da-modal-results-title">Kết quả đạt được</h4>
                    <div className="da-modal-results">
                        {project.results.map((r) => (
                            <div key={r} className="da-result-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {r}
                            </div>
                        ))}
                    </div>
                    <div className="da-modal-tags">
                        {project.tags.map((t) => (
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
const DuAnTieuBieu: React.FC = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <div className="spda-section">
            <h2 className="spda-section-title">Dự án tiêu biểu</h2>
            <p className="spda-section-desc">
                Hơn 30 năm kinh nghiệm, ANSV đã triển khai thành công hàng trăm dự án lớn
                trong lĩnh vực viễn thông, công nghệ thông tin và chuyển đổi số trên toàn quốc.
            </p>

            <div className="da-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} onClick={() => setActiveProject(p)} />
                ))}
            </div>

            {activeProject && (
                <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
            )}
        </div>
    );
};

export default DuAnTieuBieu;
