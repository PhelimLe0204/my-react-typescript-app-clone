import React from "react";
import "./CoCauToChuc.css";

import anhGiamDoc from "../../../assets/images/co-cau-to-chuc/tong-giam-doc.jpg";
import anhPho1 from "../../../assets/images/co-cau-to-chuc/pho-1.jpg";
import anhPho2 from "../../../assets/images/co-cau-to-chuc/pho-2.jpg";
import anhPho3 from "../../../assets/images/co-cau-to-chuc/pho-3.jpg";

const CoCauToChuc: React.FC = () => (
    <div className="about-content-section">
        <h2 className="about-content-title">Cơ cấu tổ chức</h2>
        <div className="about-text-block">
            <p>
                ANSV được tổ chức theo mô hình hiện đại, chuyên nghiệp với các phòng ban chức năng
                rõ ràng, đảm bảo vận hành hiệu quả và phục vụ khách hàng tốt nhất.
            </p>
        </div>

        <div className="org-chart-v2">

            {/* ── Hội đồng thành viên ── */}
            <div className="org-row">
                <div className="org-card org-card-top">
                    <div className="org-card-avatar org-card-avatar-icon">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="90" height="90">
                            <circle cx="50" cy="22" r="6" fill="white" />
                            <path d="M44 30 Q44 26 50 26 Q56 26 56 30 L58 42 Q54 44 50 44 Q46 44 42 42 Z" fill="white" />
                            <path d="M20 58 Q20 54 28 54 L72 54 Q80 54 80 58 L76 72 Q76 75 50 75 Q24 75 24 72 Z" fill="white" opacity="0.9" />
                            <circle cx="22" cy="44" r="5" fill="white" />
                            <path d="M17 51 Q17 48 22 48 Q27 48 27 51 L28 54 L16 54 Z" fill="white" />
                            <circle cx="35" cy="42" r="5" fill="white" />
                            <path d="M30 49 Q30 46 35 46 Q40 46 40 49 L41 54 L29 54 Z" fill="white" />
                            <circle cx="65" cy="42" r="5" fill="white" />
                            <path d="M60 49 Q60 46 65 46 Q70 46 70 49 L71 54 L59 54 Z" fill="white" />
                            <circle cx="78" cy="44" r="5" fill="white" />
                            <path d="M73 51 Q73 48 78 48 Q83 48 83 51 L84 54 L72 54 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="org-card-label">
                        <span className="org-card-title">HỘI ĐỒNG THÀNH VIÊN</span>
                    </div>
                </div>
            </div>

            <div className="org-vline" />

            {/* ── Tổng Giám đốc ── */}
            <div className="org-row">
                <div className="org-card org-card-director">
                    <div className="org-card-avatar org-card-avatar-photo">
                        {/* Thay bằng <img src={...} alt="..." /> khi có ảnh */}
                        {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg> */}
                        <img src={anhGiamDoc} alt="Nguyễn Văn Nam" />
                    </div>
                    <div className="org-card-label">
                        <span className="org-card-name">NGUYỄN VĂN NAM</span>
                        <span className="org-card-title">TỔNG GIÁM ĐỐC</span>
                    </div>
                </div>
            </div>

            <div className="org-vline" />

            {/* ── Phó Tổng Giám đốc ── */}
            <div className="org-hline-wrap">
                <div className="org-hline" />
            </div>
            <div className="org-row org-row-3">
                {[
                    { name: "VŨ TUẤN KHANH", title: "P. TỔNG GIÁM ĐỐC", image: anhPho1 },
                    { name: "ĐOÀN ANH TUẤN", title: "P. TỔNG GIÁM ĐỐC", image: anhPho2 },
                    { name: "VŨ THIỆN NHƯỢNG", title: "P. TỔNG GIÁM ĐỐC", image: anhPho3 },
                ].map((p) => (
                    <div key={p.name} className="org-card org-card-deputy">
                        <div className="org-card-avatar org-card-avatar-photo org-card-avatar-md">
                            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="34" height="34">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg> */}
                            <img src={p.image} alt={p.name} />
                        </div>
                        <div className="org-card-label">
                            <span className="org-card-name org-card-name-sm">{p.name}</span>
                            <span className="org-card-title org-card-title-sm">{p.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="org-vline" />

            {/* ── Các phòng ban ── */}
            <div className="org-hline-wrap">
                <div className="org-hline org-hline-wide" />
            </div>
            <div className="org-row org-row-depts">
                {[
                    { icon: "🏢", title: "VĂN PHÒNG\nTỔNG HỢP" },
                    { icon: "🎧", title: "TRUNG TÂM\nDỊCH VỤ CHUNG" },
                    { icon: "💰", title: "BAN TÀI CHÍNH\nKẾ TOÁN" },
                    { icon: "👥", title: "BAN DOANH\nTHÁC" },
                    { icon: "🤝", title: "TRUNG TÂM\nHỢP TÁC\nKINH DOANH" },
                    { icon: "📊", title: "TRUNG TÂM\nKINH DOANH" },
                    { icon: "🖥️", title: "TRUNG TÂM\nVẬN HÀNH &\nKHAI THÁC\nHỆ THỐNG" },
                ].map((dept, i) => (
                    <div key={i} className="org-dept-card">
                        <div className="org-dept-icon">{dept.icon}</div>
                        <div className="org-dept-label">
                            {dept.title.split("\n").map((line, j) => (
                                <span key={j}>{line}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default CoCauToChuc;
