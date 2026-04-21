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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.71 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.83.34 1.81.58 2.81.71A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        title: "Hệ thống chuyển mạch & tổng đài",
        desc: "Giải pháp triển khai và tích hợp hệ thống chuyển mạch thế hệ mới (NGN/IMS) cho các nhà mạng viễn thông.",
        fullDesc: "ANSV cung cấp giải pháp toàn diện về hệ thống chuyển mạch và tổng đài cho các nhà mạng viễn thông, từ thiết kế kiến trúc mạng, cung cấp thiết bị đến triển khai và vận hành. Chúng tôi có kinh nghiệm sâu rộng với các nền tảng của Nokia (Alcatel-Lucent), Ericsson và Huawei.",
        benefits: ["Triển khai NGN/IMS thế hệ mới", "Migration từ TDM sang VoIP", "Tích hợp đa vendor", "Hỗ trợ kỹ thuật 24/7"],
    },
    {
        id: 2,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M1 6l10.5 6L22 6" />
                <path d="M1 6v12l10.5 6L22 18V6" />
                <path d="M11.5 12v12" />
            </svg>
        ),
        title: "Mạng truyền dẫn & truyền tải",
        desc: "Giải pháp xây dựng hạ tầng truyền dẫn SDH/PDH/OTN và mạng truyền tải IP/MPLS hiệu năng cao.",
        fullDesc: "Với kinh nghiệm triển khai hàng chục nghìn km cáp quang và hàng nghìn thiết bị truyền dẫn, ANSV tự hào là đối tác tin cậy trong xây dựng hạ tầng truyền dẫn quốc gia. Chúng tôi cung cấp giải pháp từ thiết kế, cung cấp thiết bị đến lắp đặt, đo kiểm và nghiệm thu.",
        benefits: ["Thiết kế & triển khai mạng SDH/OTN", "Tối ưu hóa mạng IP/MPLS", "Đo kiểm & kiểm tra chất lượng", "Bảo trì định kỳ & khẩn cấp"],
    },
    {
        id: 3,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        title: "Mạng di động 4G/5G",
        desc: "Giải pháp triển khai và tối ưu mạng di động băng rộng 4G LTE và 5G NR cho các nhà mạng.",
        fullDesc: "ANSV cung cấp dịch vụ engineering, lắp đặt, cấu hình và tích hợp cho hệ thống mạng di động 4G/5G. Đội ngũ kỹ sư của chúng tôi được đào tạo và chứng nhận bởi các nhà sản xuất hàng đầu như Nokia, Ericsson và Samsung.",
        benefits: ["Triển khai BTS/BSC/RNC", "Tối ưu hóa vùng phủ & dung lượng", "Drive test & RNO", "Nâng cấp lên 5G NR"],
    },
    {
        id: 4,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Giám sát & vận hành mạng",
        desc: "Hệ thống NOC/OSS giám sát toàn bộ hạ tầng mạng viễn thông theo thời gian thực.",
        fullDesc: "ANSV xây dựng và vận hành các Trung tâm Điều hành Mạng (NOC) cho các nhà mạng viễn thông. Hệ thống giám sát tích hợp của chúng tôi cho phép theo dõi toàn bộ hạ tầng mạng, phát hiện sự cố sớm và phối hợp xử lý nhanh chóng.",
        benefits: ["Xây dựng NOC tập trung", "Tích hợp hệ thống alarm đa vendor", "Quy trình xử lý sự cố chuẩn hóa", "Báo cáo KPI & SLA tự động"],
    },
    {
        id: 5,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        title: "OSS/BSS & Tính cước",
        desc: "Giải pháp hệ thống vận hành và hỗ trợ kinh doanh, tính cước tự động cho nhà mạng.",
        fullDesc: "Với hơn 20 năm kinh nghiệm triển khai OSS/BSS, ANSV cung cấp giải pháp toàn diện cho các nhà mạng từ quản lý thuê bao, tính cước, quản lý dịch vụ đến CRM viễn thông. Hệ thống của chúng tôi xử lý hàng trăm triệu bản ghi cước mỗi ngày.",
        benefits: ["Triển khai hệ thống Billing thời gian thực", "Quản lý thuê bao & gói cước", "Tích hợp thanh toán đa kênh", "Phân tích doanh thu & báo cáo"],
    },
    {
        id: 6,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Bảo mật mạng viễn thông",
        desc: "Giải pháp bảo mật chuyên biệt cho hạ tầng mạng viễn thông, chống tấn công và gian lận.",
        fullDesc: "ANSV cung cấp giải pháp bảo mật toàn diện cho hạ tầng mạng viễn thông, bao gồm bảo vệ signaling SS7/Diameter, phát hiện gian lận cước (FMS) và bảo mật lớp truyền tải. Đội ngũ chuyên gia của chúng tôi có chứng chỉ bảo mật quốc tế.",
        benefits: ["Bảo vệ signaling SS7/Diameter", "Hệ thống phát hiện gian lận (FMS)", "Firewall mạng viễn thông", "Kiểm tra bảo mật định kỳ"],
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

const VienThong: React.FC = () => {
    const [active, setActive] = useState<Solution | null>(null);

    return (
        <div className="gp-section">
            <h2 className="gp-section-title">Chuyên ngành viễn thông</h2>
            <p className="gp-section-intro">
                Với hơn 30 năm kinh nghiệm trong ngành viễn thông, ANSV cung cấp các giải pháp
                kỹ thuật chuyên sâu từ hạ tầng mạng lõi, mạng truyền dẫn đến mạng truy nhập và
                hệ thống OSS/BSS. Chúng tôi tự hào là đối tác chiến lược của các nhà mạng hàng
                đầu Việt Nam.
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
                <h4 className="gp-why-title">Tại sao chọn ANSV cho giải pháp viễn thông?</h4>
                <ul className="gp-why-list">
                    {[
                        "30+ năm kinh nghiệm trong ngành viễn thông",
                        "Đối tác chính thức của Nokia, Ericsson, Samsung",
                        "Đội ngũ 200+ kỹ sư viễn thông có chứng chỉ quốc tế",
                        "Đã triển khai cho Viettel, VNPT, Mobifone",
                        "Hỗ trợ kỹ thuật 24/7/365",
                        "Cam kết SLA và bảo hành dài hạn",
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

export default VienThong;
