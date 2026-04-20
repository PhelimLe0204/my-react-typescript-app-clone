import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./About.css";

import GioiThieu from "./gioi-thieu/GioiThieu";
import CoCauToChuc from "./co-cau-to-chuc/CoCauToChuc";
import LichSu from "./lich-su/LichSu";
import KhachHang from "./khach-hang/KhachHang";
import ThongDiep from "./thong-diep/ThongDiep";

// ─── Types ────────────────────────────────────────────────────────────
interface SidebarItem {
    id: string;
    label: string;
}

// ─── Sidebar menu ─────────────────────────────────────────────────────
const sidebarItems: SidebarItem[] = [
    { id: "gioi-thieu", label: "Giới thiệu" },
    { id: "co-cau-to-chuc", label: "Cơ cấu tổ chức" },
    { id: "lich-su", label: "Lịch sử hình thành và phát triển" },
    { id: "khach-hang", label: "Khách hàng & Đối tác" },
    { id: "thong-diep", label: "Thông điệp tổng giám đốc" },
];

// ─── Content map ──────────────────────────────────────────────────────
const contentMap: Record<string, React.FC> = {
    "gioi-thieu": GioiThieu,
    "co-cau-to-chuc": CoCauToChuc,
    "lich-su": LichSu,
    "khach-hang": KhachHang,
    "thong-diep": ThongDiep,
};

// ─── Main About Page ──────────────────────────────────────────────────
const About: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeId, setActiveId] = useState(
        searchParams.get("tab") || "gioi-thieu"
    );
    const ActiveContent = contentMap[activeId];

    return (
        <div className="about-page">
            {/* Page banner */}
            <div className="about-banner-top">
                <div className="about-banner-bg-grid" />
                <div className="about-banner-content-wrap">
                    <h1 className="about-banner-title">VỀ CHÚNG TÔI</h1>
                    <div className="about-breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span>›</span>
                        <span>{sidebarItems.find(i => i.id === activeId)?.label}</span>
                    </div>
                </div>
            </div>

            {/* Main layout */}
            <div className="about-main">
                <div className="about-inner">
                    {/* Sidebar */}
                    <aside className="about-sidebar">
                        <div className="sidebar-heading">Giới thiệu</div>
                        <nav className="sidebar-nav">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveId(item.id);
                                        setSearchParams({ tab: item.id });
                                    }}
                                    className={`sidebar-item ${activeId === item.id ? "active" : ""}`}
                                >
                                    {item.label}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="sidebar-arrow">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            ))}
                        </nav>

                        {/* Contact box */}
                        <div className="sidebar-contact">
                            <div className="sidebar-contact-title">Liên hệ ngay</div>
                            <div className="sidebar-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.94.34 1.92.58 2.92.71A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+84 (24) 3xxx xxxx</span>
                            </div>
                            <div className="sidebar-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@ansv.vn</span>
                            </div>
                            <a href="/lien-he" className="sidebar-contact-btn">Gửi yêu cầu</a>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="about-content">
                        <ActiveContent />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default About;
