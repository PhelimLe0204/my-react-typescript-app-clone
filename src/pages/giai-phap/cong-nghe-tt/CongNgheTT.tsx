import React, { useState } from "react";

interface Solution {
    id: number;
    icon: React.ReactNode;
    title: string;
    desc: string;
    fullDesc: string;
    benefits: string[];
}

const solutions: Solution[] = [
    {
        id: 1,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: "Tích hợp hệ thống CNTT",
        desc: "Giải pháp tích hợp hệ thống phần mềm doanh nghiệp, kết nối các ứng dụng và dữ liệu.",
        fullDesc: "ANSV cung cấp dịch vụ tích hợp hệ thống toàn diện, giúp doanh nghiệp kết nối các hệ thống phần mềm rời rạc thành một hệ sinh thái thống nhất. Từ tích hợp API, middleware đến ESB/EAI, chúng tôi đảm bảo dữ liệu được đồng bộ và quy trình vận hành thông suốt.",
        benefits: ["Tích hợp API & microservices", "Triển khai ESB/EAI", "Đồng bộ dữ liệu thời gian thực", "Kiến trúc SOA/ROA hiện đại"],
    },
    {
        id: 2,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
        title: "Hạ tầng & Điện toán đám mây",
        desc: "Tư vấn và triển khai hạ tầng Cloud (Public/Private/Hybrid) tối ưu cho doanh nghiệp.",
        fullDesc: "ANSV hỗ trợ doanh nghiệp trong hành trình chuyển dịch lên môi trường Cloud, từ đánh giá hiện trạng, lập kế hoạch migration đến triển khai và vận hành. Chúng tôi là đối tác của các nhà cung cấp Cloud hàng đầu như Microsoft Azure, AWS và các Cloud nội địa.",
        benefits: ["Tư vấn chiến lược Cloud", "Migration hạ tầng lên Cloud", "Triển khai Private Cloud", "Quản lý & tối ưu chi phí Cloud"],
    },
    {
        id: 3,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        title: "Quản lý dữ liệu & BI",
        desc: "Giải pháp xây dựng kho dữ liệu, phân tích dữ liệu lớn và hệ thống Business Intelligence.",
        fullDesc: "ANSV cung cấp giải pháp quản lý và phân tích dữ liệu từ xây dựng Data Warehouse, Data Lake đến triển khai nền tảng BI. Chúng tôi giúp doanh nghiệp khai thác giá trị từ dữ liệu để hỗ trợ ra quyết định chiến lược.",
        benefits: ["Xây dựng Data Warehouse/Data Lake", "Triển khai BI & Dashboard", "Phân tích dữ liệu lớn (Big Data)", "AI/ML cho phân tích dự đoán"],
    },
    {
        id: 4,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "An toàn thông tin",
        desc: "Giải pháp bảo mật toàn diện cho hệ thống CNTT doanh nghiệp, tuân thủ chuẩn quốc tế.",
        fullDesc: "ANSV cung cấp dịch vụ bảo mật CNTT từ đánh giá rủi ro, kiểm tra xâm nhập (pentest) đến triển khai các giải pháp bảo mật và đào tạo nhận thức. Đội ngũ chuyên gia bảo mật của chúng tôi có chứng chỉ CISSP, CEH và ISO 27001.",
        benefits: ["Đánh giá rủi ro & kiểm tra pentest", "Triển khai SIEM/SOC", "Tuân thủ ISO 27001/PCI DSS", "Đào tạo nhận thức bảo mật"],
    },
    {
        id: 5,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Phát triển phần mềm",
        desc: "Phát triển phần mềm theo yêu cầu, ứng dụng web/mobile và hệ thống quản trị doanh nghiệp.",
        fullDesc: "ANSV có đội ngũ phát triển phần mềm chuyên nghiệp với kinh nghiệm trong nhiều lĩnh vực. Chúng tôi sử dụng quy trình phát triển Agile/Scrum, đảm bảo sản phẩm chất lượng cao, bàn giao đúng tiến độ và dễ dàng mở rộng.",
        benefits: ["Phát triển theo yêu cầu (custom)", "Ứng dụng Web & Mobile", "API development & microservices", "Kiểm thử & QA chuyên nghiệp"],
    },
    {
        id: 6,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M8.46 8.46a5 5 0 0 0 0 7.07" />
            </svg>
        ),
        title: "Hạ tầng mạng doanh nghiệp",
        desc: "Thiết kế và triển khai hạ tầng mạng LAN/WAN/WiFi hiệu năng cao cho doanh nghiệp.",
        fullDesc: "ANSV thiết kế và triển khai hạ tầng mạng nội bộ cho doanh nghiệp, từ mạng LAN văn phòng, WAN kết nối chi nhánh đến hệ thống WiFi doanh nghiệp. Chúng tôi là đối tác của Cisco, HP Aruba và Juniper Networks.",
        benefits: ["Thiết kế kiến trúc mạng tối ưu", "Triển khai LAN/WAN/SD-WAN", "Hệ thống WiFi doanh nghiệp", "Network audit & tối ưu hóa"],
    },
];

const SolutionModal: React.FC<{ solution: Solution; onClose: () => void }> = ({ solution, onClose }) => {
    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };
    return (
        <div className="gp-modal-backdrop" onClick={handleBackdrop}>
            <div className="gp-modal">
                <button className="gp-modal-close" onClick={onClose} aria-label="Đóng">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <div className="gp-modal-header">
                    <div className="gp-modal-icon">{solution.icon}</div>
                    <h3 className="gp-modal-title">{solution.title}</h3>
                </div>
                <div className="gp-modal-body">
                    <p className="gp-modal-desc">{solution.fullDesc}</p>
                    <div className="gp-modal-divider" />
                    <h4 className="gp-modal-benefits-title">Lợi ích mang lại</h4>
                    <ul className="gp-modal-benefits">
                        {solution.benefits.map((b) => (
                            <li key={b}><span className="gp-benefit-dot" />{b}</li>
                        ))}
                    </ul>
                    <div className="gp-modal-cta">
                        <a href="/lien-he" className="gp-cta-btn">
                            Liên hệ tư vấn
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <button className="gp-modal-btn-secondary" onClick={onClose}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CongNgheTT: React.FC = () => {
    const [active, setActive] = useState<Solution | null>(null);

    return (
        <div className="gp-section">
            <h2 className="gp-section-title">Công nghệ thông tin</h2>
            <p className="gp-section-intro">
                ANSV cung cấp các giải pháp CNTT toàn diện từ tích hợp hệ thống, xây dựng hạ
                tầng Cloud đến phát triển phần mềm và bảo mật thông tin. Chúng tôi đồng hành
                cùng doanh nghiệp trong hành trình số hóa và nâng cao hiệu quả hoạt động.
            </p>

            <div className="gp-cards">
                {solutions.map((s) => (
                    <div key={s.id} className="gp-card" onClick={() => setActive(s)}>
                        <div className="gp-card-icon">{s.icon}</div>
                        <h3 className="gp-card-title">{s.title}</h3>
                        <p className="gp-card-desc">{s.desc}</p>
                        <span className="gp-card-more">Xem chi tiết →</span>
                    </div>
                ))}
            </div>

            <div className="gp-why">
                <h4 className="gp-why-title">Tại sao chọn ANSV cho giải pháp CNTT?</h4>
                <ul className="gp-why-list">
                    {[
                        "Đội ngũ 100+ kỹ sư CNTT có chứng chỉ quốc tế",
                        "Đối tác của Microsoft, Cisco, Oracle, IBM",
                        "Quy trình triển khai chuẩn ISO 9001:2015",
                        "Kinh nghiệm đa ngành: viễn thông, tài chính, chính phủ",
                        "Hỗ trợ kỹ thuật 24/7 sau triển khai",
                        "Bảo hành và cam kết SLA rõ ràng",
                    ].map((item) => (
                        <li key={item}>
                            <span className="gp-why-check">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="gp-cta">
                <a href="/lien-he" className="gp-cta-btn">
                    Nhận tư vấn miễn phí
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
                <span className="gp-cta-note">Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn</span>
            </div>

            {active && <SolutionModal solution={active} onClose={() => setActive(null)} />}
        </div>
    );
};

export default CongNgheTT;
