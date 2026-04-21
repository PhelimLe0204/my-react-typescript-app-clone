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
        title: "Tư vấn chiến lược chuyển đổi số",
        desc: "Xây dựng lộ trình chuyển đổi số toàn diện, phù hợp với đặc thù và mục tiêu của từng doanh nghiệp.",
        fullDesc: "ANSV cung cấp dịch vụ tư vấn chiến lược chuyển đổi số, giúp doanh nghiệp xác định rõ mục tiêu, đánh giá hiện trạng và xây dựng lộ trình chuyển đổi phù hợp. Chúng tôi sử dụng phương pháp luận đã được kiểm chứng và kinh nghiệm thực tiễn từ hàng trăm dự án.",
        benefits: ["Đánh giá mức độ trưởng thành số", "Xây dựng lộ trình CĐS chi tiết", "Định nghĩa KPI & mục tiêu đo lường", "Quản lý thay đổi & change management"],
    },
    {
        id: 2,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Chính phủ số & Đô thị thông minh",
        desc: "Giải pháp số hóa quy trình hành chính, xây dựng dịch vụ công trực tuyến và đô thị thông minh.",
        fullDesc: "ANSV triển khai các giải pháp Chính phủ số và Đô thị thông minh theo chỉ đạo của Chính phủ. Chúng tôi có kinh nghiệm triển khai hệ thống một cửa điện tử, cổng dịch vụ công, hệ thống giám sát đô thị và các nền tảng dữ liệu mở.",
        benefits: ["Hệ thống một cửa điện tử", "Cổng dịch vụ công trực tuyến", "Giám sát đô thị thông minh", "Nền tảng dữ liệu mở (Open Data)"],
    },
    {
        id: 3,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Tự động hóa quy trình (RPA)",
        desc: "Ứng dụng Robot Process Automation để tự động hóa các quy trình thủ công, lặp đi lặp lại.",
        fullDesc: "ANSV triển khai giải pháp RPA giúp doanh nghiệp tự động hóa các công việc thủ công, giải phóng nhân lực cho các công việc có giá trị cao hơn. Chúng tôi là đối tác của UiPath và Automation Anywhere — hai nền tảng RPA hàng đầu thế giới.",
        benefits: ["Phân tích & thiết kế quy trình tự động", "Triển khai Robot UiPath/AA", "Giám sát & quản lý robot", "ROI đo lường rõ ràng"],
    },
    {
        id: 4,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        title: "AI & Machine Learning",
        desc: "Ứng dụng trí tuệ nhân tạo và học máy vào các bài toán phân tích, dự đoán và tối ưu hóa.",
        fullDesc: "ANSV giúp doanh nghiệp ứng dụng AI/ML vào các bài toán thực tiễn như phân tích khách hàng, dự báo nhu cầu, phát hiện gian lận và tối ưu hóa vận hành. Chúng tôi sử dụng các nền tảng AI hiện đại và đội ngũ Data Scientist giàu kinh nghiệm.",
        benefits: ["Phân tích dự đoán (Predictive Analytics)", "Nhận diện hình ảnh & xử lý ngôn ngữ", "Phát hiện gian lận tự động", "Chatbot & Virtual Assistant"],
    },
    {
        id: 5,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: "IoT & Công nghiệp 4.0",
        desc: "Giải pháp kết nối thiết bị IoT, thu thập và phân tích dữ liệu cho nhà máy và hạ tầng thông minh.",
        fullDesc: "ANSV triển khai giải pháp IoT từ kết nối cảm biến, gateway đến nền tảng quản lý và phân tích dữ liệu. Chúng tôi có kinh nghiệm triển khai cho các nhà máy công nghiệp, tòa nhà thông minh và hạ tầng đô thị.",
        benefits: ["Triển khai hệ thống IoT end-to-end", "Nền tảng quản lý thiết bị IoT", "Phân tích dữ liệu cảm biến", "Tích hợp với hệ thống ERP/SCADA"],
    },
    {
        id: 6,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Số hóa quy trình doanh nghiệp",
        desc: "Chuyển đổi quy trình nghiệp vụ từ thủ công sang kỹ thuật số, tăng hiệu quả và minh bạch.",
        fullDesc: "ANSV hỗ trợ doanh nghiệp số hóa toàn bộ quy trình nghiệp vụ, từ quản lý văn bản, phê duyệt trực tuyến đến báo cáo tự động. Chúng tôi sử dụng các nền tảng BPM hiện đại kết hợp với phát triển tùy chỉnh để đáp ứng đặc thù của từng doanh nghiệp.",
        benefits: ["Số hóa quy trình phê duyệt", "Quản lý văn bản điện tử", "Dashboard & báo cáo tự động", "Tích hợp chữ ký số"],
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

const ChuyenDoiSo: React.FC = () => {
    const [active, setActive] = useState<Solution | null>(null);

    return (
        <div className="gp-section">
            <h2 className="gp-section-title">Chuyển đổi số</h2>
            <p className="gp-section-intro">
                ANSV là đối tác chuyển đổi số tin cậy, đồng hành cùng doanh nghiệp và cơ quan
                nhà nước trong hành trình chuyển đổi toàn diện — từ chiến lược, công nghệ đến
                con người và quy trình. Chúng tôi không chỉ cung cấp giải pháp kỹ thuật mà
                còn giúp tổ chức thay đổi tư duy và văn hóa để thích nghi với kỷ nguyên số.
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
                <h4 className="gp-why-title">Tại sao chọn ANSV cho chuyển đổi số?</h4>
                <ul className="gp-why-list">
                    {[
                        "Phương pháp luận chuyển đổi số đã được kiểm chứng",
                        "Kinh nghiệm với cả doanh nghiệp và cơ quan nhà nước",
                        "Đội ngũ tư vấn & kỹ thuật kết hợp hiệu quả",
                        "Hỗ trợ quản lý thay đổi toàn diện",
                        "Đo lường kết quả bằng KPI cụ thể",
                        "Đồng hành dài hạn sau khi triển khai",
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

export default ChuyenDoiSo;
