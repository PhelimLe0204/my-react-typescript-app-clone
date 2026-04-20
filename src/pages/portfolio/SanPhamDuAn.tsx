import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SanPhamDuAn.css";

import SanPhamThuongMai from "./commercial-product/SanPhamThuongMai";
import SanPhamCongNghe from "./industrial-technology-product/SanPhamCongNghe";
import DuAnTieuBieu from "./featured-project/DuAnTieuBieu";

// ─── Types ────────────────────────────────────────────────────────────
interface SidebarItem {
    id: string;
    label: string;
}

// ─── Sidebar menu ─────────────────────────────────────────────────────
const sidebarItems: SidebarItem[] = [
    { id: "commercial-product", label: "Sản phẩm thương mại" },
    { id: "industrial-technology-product", label: "Sản phẩm công nghệ công nghiệp" },
    { id: "featured-project", label: "Dự án tiêu biểu" },
];

// ─── Content map ──────────────────────────────────────────────────────
const contentMap: Record<string, React.FC> = {
    "commercial-product": SanPhamThuongMai,
    "industrial-technology-product": SanPhamCongNghe,
    "featured-project": DuAnTieuBieu,
};

// ─── Main Page ────────────────────────────────────────────────────────
const SanPhamDuAn: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeId, setActiveId] = useState(
        searchParams.get("tab") || "commercial-product"
    );
    const ActiveContent = contentMap[activeId];

    return (
        <div className="spda-page">
            {/* Banner */}
            <div className="spda-banner">
                <div className="spda-banner-grid" />
                <div className="spda-banner-content">
                    <h1 className="spda-banner-title">SẢN PHẨM & DỰ ÁN</h1>
                    <div className="spda-breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span>›</span>
                        <span>{sidebarItems.find(i => i.id === activeId)?.label}</span>
                    </div>
                </div>
            </div>

            {/* Main layout */}
            <div className="spda-main">
                <div className="spda-inner">

                    {/* Sidebar */}
                    <aside className="spda-sidebar">
                        <div className="spda-sidebar-heading">Sản phẩm & Dự án</div>
                        <nav className="spda-sidebar-nav">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveId(item.id);
                                        setSearchParams({ tab: item.id });
                                    }}
                                    className={`spda-sidebar-item ${activeId === item.id ? "active" : ""}`}
                                >
                                    {item.label}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="spda-sidebar-arrow">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            ))}
                        </nav>

                        {/* Contact box */}
                        <div className="spda-sidebar-contact">
                            <div className="spda-sidebar-contact-title">Tư vấn sản phẩm</div>
                            <div className="spda-sidebar-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.94.34 1.92.58 2.92.71A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+84 (24) 3xxx xxxx</span>
                            </div>
                            <div className="spda-sidebar-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@ansv.vn</span>
                            </div>
                            <a href="/lien-he" className="spda-sidebar-contact-btn">Gửi yêu cầu</a>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="spda-content">
                        <ActiveContent />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SanPhamDuAn;
