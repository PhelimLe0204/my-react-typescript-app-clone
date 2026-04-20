import React, { useState } from "react";
import "./GioiThieu.css";
import our_company from "../../../assets/images/slideshow/our_company.jpg";
import linh_vuc_hoat_dong from "../../../assets/images/gioi-thieu/linh_vuc_hoat_dong_2.png";

// ─── Types ────────────────────────────────────────────────────────────
interface MissionItem {
    icon: React.ReactNode;
    title: string;
    desc: string;
    detail: string; // nội dung chi tiết hiển thị trong popup
}

// ─── Data ─────────────────────────────────────────────────────────────
const missionItems: MissionItem[] = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
        title: "Tầm nhìn",
        desc: "Trở thành công ty công nghệ thông tin hàng đầu Việt Nam, được tin tưởng bởi các tổ chức trong và ngoài nước.",
        detail: "ANSV định hướng trở thành doanh nghiệp đi đầu trong lĩnh vực chuyển đổi số, tích hợp hệ thống CNTT - VT, phân phối bán lẻ các sản phẩm công nghệ ở thị trường Việt Nam và thị trường khu vực.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Sứ mệnh",
        desc: "Cung cấp các giải pháp công nghệ thông tin chất lượng cao, giúp khách hàng tối ưu hóa hoạt động và phát triển bền vững.",
        detail: "ANSV dựa trên ứng dụng KHCN - CNTT- VT cùng sự liên tục đổi mới sáng tạo và sức mạnh kết nối của các thành tựu công nghệ quốc tế cùng với những chuyên gia, kỹ sư người Việt Nam, chúng tôi luôn nỗ lực phát triển, nâng cao giá trị cho cộng đồng, hướng tới mục tiêu đặt một dấu ấn vững chắc trên bản đồ công nghệ toàn cầu.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Giá trị cốt lõi",
        desc: "Chính trực — Sáng tạo — Chuyên nghiệp — Tận tâm với khách hàng — Phát triển bền vững.",
        // detail: "Năm giá trị cốt lõi định hình văn hóa và cách thức hoạt động của ANSV:\n\n• Chính trực: Trung thực, minh bạch trong mọi giao dịch và quan hệ đối tác.\n• Sáng tạo: Không ngừng tìm kiếm giải pháp mới, ứng dụng công nghệ tiên tiến.\n• Chuyên nghiệp: Đội ngũ được đào tạo bài bản, quy trình làm việc chuẩn mực.\n• Tận tâm: Đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu.\n• Bền vững: Phát triển có trách nhiệm với cộng đồng và môi trường.",
        detail: '"Văn hóa là tinh thần - Sức mạnh Team work" luôn được đề cao và là văn hóa cốt lõi của Doanh nghiệp, tạo nên tinh thần ANSV, giúp chúng tôi không ngừng nỗ lực, sáng tạo vì lợi ích chung của tập thể, của khách hàng và của xã hội.\n\n"Con người là sức mạnh" - Với nguồn lực là đội ngũ cán bộ, kỹ sư được đào tạo bài bản và có nhiều năm kinh nghiệm, ANSV là nơi quy tụ và kết nối những nhân tài có sức sáng tạo và đam mê, cùng hướng tới mục tiêu phát triển các sản phẩm, giải pháp, dịch vụ công nghệ chất lượng cao, hữu ích phục vụ cuộc sống và cộng đồng.',
    },
];

// ─── Modal Component ──────────────────────────────────────────────────
interface ModalProps {
    item: MissionItem;
    onClose: () => void;
}

const MissionModal: React.FC<ModalProps> = ({ item, onClose }) => {
    // Click vào backdrop thì đóng
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="mission-modal-backdrop" onClick={handleBackdropClick}>
            <div className="mission-modal">
                <button className="mission-modal-close" onClick={onClose} aria-label="Đóng">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="mission-modal-header">
                    <div className="mission-modal-icon">{item.icon}</div>
                    <h3 className="mission-modal-title">{item.title}</h3>
                </div>

                <div className="mission-modal-body">
                    <p className="mission-modal-summary">{item.desc}</p>
                    <div className="mission-modal-divider" />
                    <div className="mission-modal-detail">
                        {item.detail.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < item.detail.split("\n").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────
const GioiThieu: React.FC = () => {
    const [activeModal, setActiveModal] = useState<MissionItem | null>(null);

    return (
        <div className="about-content-section">
            <h2 className="about-content-title">Giới thiệu chung</h2>
            <div className="about-content-img-wrap">
                <div className="about-img-placeholder">
                    <img src={our_company} alt="Trụ sở công ty" width="100%" height="100%" />
                </div>
                <figcaption>
                    Công ty Trách Nhiệm Hữu Hạn Thiết Bị Viễn Thông ANSV |
                    Advanced Network Systems VietNam Company Limited<br /> 124
                    Hoàng Quốc Việt, Phường Nghĩa Đô, TP. Hà Nội
                </figcaption>
            </div>

            <div className="about-text-block">
                <p>
                    Với phương châm hoạt động đạo đức, chuyên nghiệp và sáng tạo, chúng tôi tạo
                    ra môi trường làm việc ý nghĩa cho cán bộ nhân viên, mang đến khách hàng các
                    giá trị mới và dịch vụ tuyệt hảo, hướng tới nâng cao giá trị, lợi ích cho
                    khách hàng, đồng hành cùng khách hàng hướng tới sự phát triển bền vững và
                    mang lại trách nhiệm, giá trị của doanh nghiệp với cộng đồng.
                </p>
                <p>
                    Công ty TNHH Thiết Bị Viễn Thông ANSV được thành lập từ tháng 7 năm 1993
                    trong quan hệ hợp tác liên doanh giữa Tập đoàn Alcatel (sau đó đổi tên thành
                    tập đoàn Alcatel-Lucent và nay là tập đoàn Nokia) với Tổng công ty Bưu chính
                    Viễn thông Việt Nam (nay là Tập đoàn Bưu chính Viễn thông Việt Nam).
                </p>
                <p>
                    Với 30 năm kinh nghiệm, Công ty TNHH Thiết Bị Viễn Thông ANSV là nhà tích
                    hợp hệ thống, cung cấp sản phẩm/giải pháp và dịch vụ Công nghệ thông tin –
                    Viễn thông hàng đầu tại Việt Nam, có vị thế vững chắc ở thị trường trong
                    nước và trong khu vực.
                </p>
                <p>
                    Bên cạnh các đối tác công nghệ Viễn thông truyền thống lớn Alcatel-Lucent
                    (nay là Nokia), ANSV mở rộng hợp tác với các đối tác công nghệ khác như
                    Alcatel-Lucent Enterprise, Microsoft, Cisco, Samsung, Dell, HP, Fujitsu,
                    Genesys, IBM, Oracle, Rosemberger, Rohde & Schwarz… Để phát triển, mở rộng
                    quy mô và lĩnh vực hoạt động, góp phần thúc đẩy mạnh mẽ vào sự phát triển
                    Công nghệ công nghiệp, Dịch vụ viễn thông và Công nghệ thông tin tại Việt Nam.
                </p>
                <p>
                    Bên cạnh đối tác công nghệ truyền thống Nokia, ANSV mở rộng hợp tác với các
                    đối tác công nghệ khác như IBM, Convergys, Oracle…, để phát triển và sản
                    xuất các sản phẩm, giải pháp phần cứng cũng như phần mềm đáp ứng nhu cầu
                    của thị trường trong nước và khu vực.
                </p>
            </div>

            {/* Row 1: Tên công ty + viết tắt gộp 1 ô | Năm thành lập */}
            <div className="about-info-grid about-info-grid-row1">
                <div className="about-info-item about-info-item-merged">
                    <span className="about-info-label">Tên công ty</span>
                    <span className="about-info-value">
                        Công ty TNHH Thiết Bị Viễn Thông
                        <span style={{ color: "#e85d27" }}> ANSV</span> -
                        <span style={{ color: "#e85d27" }}> A</span>dvanced
                        <span style={{ color: "#e85d27" }}> N</span>etwork
                        <span style={{ color: "#e85d27" }}> S</span>ystems
                        <span style={{ color: "#e85d27" }}> V</span>ietNam
                    </span>
                </div>
            </div>

            {/* Row 2: Trụ sở chính | Website */}
            <div className="about-info-grid about-info-grid-row2">
                <div className="about-info-item">
                    <span className="about-info-label">Năm thành lập</span>
                    <span className="about-info-value">1993</span>
                </div>
                <div className="about-info-item">
                    <span className="about-info-label">Trụ sở chính</span>
                    <span className="about-info-value">Hà Nội, Việt Nam</span>
                </div>
                <div className="about-info-item">
                    <span className="about-info-label">Website</span>
                    <span className="about-info-value">www.ansv.vn</span>
                </div>
            </div>

            {/* Lĩnh vực — tách biệt bên dưới */}
            <div className="about-linh-vuc">
                <span className="about-linh-vuc-label">Lĩnh vực hoạt động</span>
                <p className="about-linh-vuc-text">
                    ANSV hoạt động trong lĩnh vực <strong>Công nghệ thông tin & Viễn thông (ICT)</strong> —
                    bao gồm tích hợp hệ thống, cung cấp thiết bị viễn thông, phát triển phần mềm,
                    và các dịch vụ vận hành, bảo trì hạ tầng mạng cho các tổ chức, doanh nghiệp
                    và cơ quan nhà nước tại Việt Nam.
                </p>
                <p className="about-linh-vuc-text">
                    Với 30 năm kinh nghiệm, Công ty TNHH Thiết Bị Viễn Thông ANSV là nhà tích hợp hệ thống, 
                    cung cấp các sản phẩm/giải pháp và dịch vụ công nghệ thông tin hàng đầu tại Việt Nam, 
                    có vị thế vững chắc ở thị trường trong nước và trong khu vực.
                </p>
                <img src={linh_vuc_hoat_dong} className="about-linh-vuc-img" alt="Lĩnh vực hoạt động" width="60%" height="60%" />
            </div>

            {/* Mission cards */}
            <div className="about-mission-grid">
                {missionItems.map((m) => (
                    <div
                        key={m.title}
                        className="mission-card"
                        onClick={() => setActiveModal(m)}
                    >
                        <div className="mission-icon">{m.icon}</div>
                        <h4 className="mission-title">{m.title}</h4>
                        <p className="mission-desc">{m.desc}</p>
                        <span className="mission-readmore">Xem thêm →</span>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeModal && (
                <MissionModal
                    item={activeModal}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </div>
    );
};

export default GioiThieu;
