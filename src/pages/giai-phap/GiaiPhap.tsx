import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./GiaiPhap.css";

import VienThong from "./vien-thong/VienThong";
import CongNgheTT from "./cong-nghe-tt/CongNgheTT";
import ChuyenDoiSo from "./chuyen-doi-so/ChuyenDoiSo";

// ─── Types ────────────────────────────────────────────────────────────
interface SidebarItem {
    id: string;
    label: string;
}

const sidebarItems: SidebarItem[] = [
    { id: "vien-thong", label: "Chuyên ngành viễn thông" },
    { id: "cong-nghe-tt", label: "Công nghệ thông tin" },
    { id: "chuyen-doi-so", label: "Chuyển đổi số" },
];

const contentMap: Record<string, React.FC> = {
    "vien-thong": VienThong,
    "cong-nghe-tt": CongNgheTT,
    "chuyen-doi-so": ChuyenDoiSo,
};

// ─── Main Page ────────────────────────────────────────────────────────
const GiaiPhap: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeId, setActiveId] = useState(
        searchParams.get("tab") || "vien-thong"
    );
    const ActiveContent = contentMap[activeId];

    return (
        <div className="gp-page">
            {/* Banner */}
            <div className="gp-banner">
                <div className="gp-banner-grid" />
                <div className="gp-banner-content">
                    <h1 className="gp-banner-title">GIẢI PHÁP & DỊCH VỤ</h1>
                    <div className="gp-breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span>›</span>
                        <span>Giải pháp</span>
                        <span>›</span>
                        <span>{sidebarItems.find(i => i.id === activeId)?.label}</span>
                    </div>
                </div>
            </div>

            {/* Main layout */}
            <div className="gp-main">
                <div className="gp-inner">

                    {/* Sidebar */}
                    <aside className="gp-sidebar">
                        <div className="gp-sidebar-heading">Giải pháp</div>
                        <nav className="gp-sidebar-nav">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveId(item.id);
                                        setSearchParams({ tab: item.id });
                                    }}
                                    className={`gp-sidebar-item ${activeId === item.id ? "active" : ""}`}
                                >
                                    {item.label}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="gp-sidebar-arrow">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            ))}
                        </nav>

                        {/* Link sang trang Dịch vụ */}
                        <a href="/dich-vu" className="gp-sidebar-dv-link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            Xem trang Dịch vụ
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>

                        {/* Contact box */}
                        <div className="gp-sidebar-contact">
                            <div className="gp-sidebar-contact-title">Tư vấn giải pháp</div>
                            <div className="gp-sidebar-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.94.34 1.92.58 2.92.71A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+84 (24) 3xxx xxxx</span>
                            </div>
                            <div className="gp-sidebar-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@ansv.vn</span>
                            </div>
                            <a href="/lien-he" className="gp-sidebar-contact-btn">Gửi yêu cầu</a>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="gp-content">
                        <ActiveContent />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default GiaiPhap;
