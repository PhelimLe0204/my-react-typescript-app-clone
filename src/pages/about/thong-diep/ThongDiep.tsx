import React from "react";
import "./ThongDiep.css";

const ThongDiep: React.FC = () => (
    <div className="about-content-section">
        <h2 className="about-content-title">Thông điệp của Tổng Giám đốc</h2>
        <div className="ceo-message">
            <div className="ceo-avatar">
                <div className="ceo-avatar-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div className="ceo-info">
                    <strong>Nguyễn Văn Nam</strong>
                    <span>Tổng Giám đốc ANSV</span>
                </div>
            </div>
            <blockquote className="ceo-quote">
                {/* <p>
                    "Tại ANSV, chúng tôi tin rằng công nghệ không chỉ là công cụ — đó là chìa khóa
                    để mở ra những cơ hội mới, tạo ra giá trị bền vững cho doanh nghiệp và xã hội.
                    Với đội ngũ chuyên gia tâm huyết và kinh nghiệm dày dặn, chúng tôi cam kết đồng
                    hành cùng khách hàng trong từng bước chuyển đổi số."
                </p>
                <p>
                    "ANSV không chỉ cung cấp giải pháp công nghệ — chúng tôi xây dựng mối quan hệ
                    đối tác lâu dài, dựa trên sự tin tưởng và cam kết mang lại kết quả thực sự.
                    Đó là lý do vì sao hàng trăm doanh nghiệp đã và đang tin tưởng lựa chọn ANSV
                    là đối tác công nghệ chiến lược của mình."
                </p> */}
                <p>Kính gửi Quý khách hàng, Quý đối tác</p>
                <hr className="ceo-quote-hr" />
                <p>Lời đầu tiên tôi xin thay mặt toàn thể cán bộ công nhân viên của công ty TNHH Thiết Bị Viễn Thông ANSV xin gửi đến Quý khách hàng, Quý đối tác lời chào cùng lời tri ân sâu sắc nhất. Nhận được sự tin tưởng và đồng hành của Quý vị vừa là niềm vinh dự vừa là động lực để chúng tôi tiếp tục nỗ lực, sáng tạo để tự hào khi luôn thấu hiểu được nhu cầu và đáp ứng được mong muốn của khách hàng.</p>
                <p>Để thích ứng kịp thời với bước chuyển mình mạnh mẽ của công nghệ và với tham vọng sẽ trở thành công ty hàng đầu trong lĩnh vực chuyển đổi số (Digital Transformation), tích hợp hệ thống (System Integration - SI), chúng tôi đã, đang làm việc và cộng tác với nhiều đối tác, nhà cung cấp hàng đầu trên thế giới để tập trung cung cấp và khai thác các dịch vụ, giải pháp về Công nghệ thông tin và Viễn thông nhằm nâng cao những giá trị, lợi ích, hình ảnh của Quý vị tại Việt Nam và khu vực.</p>
                <p>Những dấu ấn mà ANSV có thể tự hào ngày hôm nay là thành quả trong suốt 30 năm hình thành và phát triển, là sự phấn đấu không ngừng của một đơn vị đoàn kết, sáng tạo, là sự đồng lòng của tập thể lãnh đạo các thời kỳ, là sự nhiệt huyết tận tâm của tập thể các cán bộ công nhân viên và người lao động trong công ty. Đây là những thành tựu giúp chúng tôi vững tin bước vào thập kỷ phát triển mới.</p>
                <p>Với sự đổi mới trong cách nghĩ, cách làm, đam mê và không ngừng sáng tạo, chúng tôi tin tưởng ANSV sẽ có những bước tiến thần tốc, đón đầu các xu hướng công nghệ giúp kiến tạo và thay đổi cuộc sống.</p>
                <p>Với nội lực và sự quyết tâm, tập thể ANSV cam kết sẽ luôn luôn gắn kết, đồng hành cùng Quý vị để tiếp tục phát triển và tiến xa hơn nữa, khẳng định vai trò vị thế của Quý Khách hàng, Quý đối tác tại Việt Nam và trong khu vực.</p>
                <hr className="ceo-quote-hr" />
                <p>Một lần nữa, xin trân trọng cảm ơn!</p>
            </blockquote>
        </div>
    </div>
);

export default ThongDiep;
