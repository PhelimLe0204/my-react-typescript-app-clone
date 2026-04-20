import React from "react";
import "./KhachHang.css";

const KhachHang: React.FC = () => (
    <div className="about-content-section">
        <h2 className="about-content-title">Khách hàng & Đối tác</h2>
        <div className="about-text-block">
            <p>
                ANSV tự hào là đối tác tin cậy của các tập đoàn, tổng công ty và cơ quan nhà nước
                hàng đầu tại Việt Nam trong lĩnh vực công nghệ thông tin.
            </p>
            <p>
                Hợp tác chặt chẽ với các đối tác công nghệ hàng đầu thế giới như: Qualcomm, Broadcom, Intel, Econet, Texas Instruments, Realtek, Sigma Designs, Microsoft, Oracle, Nokia, Genesys… nhằm tiếp thu kinh nghiệm, tiếp cận công nghệ tiên tiến nhất và chủ động phát triển hoạt động trong các lĩnh vực trọng tâm: Công nghệ công nghiệp điện tử, Viễn thông, Công nghệ Thông tin.
            </p>
        </div>
        <div className="partners-showcase">
            {["Viettel", "VNPT", "FPT", "CMC", "HPT", "Misa", "SHB", "Techcombank", "Agribank", "BIDV", "VietinBank", "PVN"].map((p) => (
                <div key={p} className="partner-showcase-item">
                    <span>{p}</span>
                </div>
            ))}
        </div>
    </div>
);

export default KhachHang;
