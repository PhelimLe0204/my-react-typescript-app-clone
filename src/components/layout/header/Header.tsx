import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

// Cập nhật Interface để hỗ trợ menu lồng nhau
interface NavItem {
    label: string;
    href?: string;
    dropdown?: NavItem[];
}

const navItems: NavItem[] = [
    { label: "TRANG CHỦ", href: "/" },
    {
        label: "GIỚI THIỆU",
        dropdown: [
            { label: "Về chúng tôi", href: "/about?tab=gioi-thieu" },
            { label: "Cơ cấu tổ chức", href: "/about?tab=co-cau-to-chuc" },
            { label: "Lịch sử hình thành và phát triển", href: "/about?tab=lich-su" },
            { label: "Khách hàng & đối tác", href: "/about?tab=khach-hang" },
            { label: "Thông điệp của tổng giám đốc", href: "/about?tab=thong-diep" },
        ],
    },
    {
        label: "SẢN PHẨM & DỰ ÁN",
        dropdown: [
            { label: "Sản phẩm thương mại", href: "/portfolio?tab=commercial-product" },
            { label: "Sản phẩm công nghệ công nghiệp", href: "/portfolio?tab=industrial-technology-product" },
            { label: "Dự án tiêu biểu", href: "/portfolio?tab=featured-project" },
        ],
    },
    {
        label: "GIẢI PHÁP & DỊCH VỤ",
        dropdown: [
            {
                label: "Giải pháp",
                dropdown: [
                    // { label: "Chuyên ngành viễn thông", href: "/solution?tab=telecom" },
                    // { label: "Công nghệ thông tin", href: "/solution?tab=it" },
                    // { label: "Chuyển đổi số", href: "/solution?tab=digital-transformation" },
                    { label: "Chuyên ngành viễn thông", href: "/giai-phap?tab=vien-thong" },
                    { label: "Công nghệ thông tin", href: "/giai-phap?tab=cong-nghe-tt" },
                    { label: "Chuyển đổi số", href: "/giai-phap?tab=chuyen-doi-so" },
                ],
            },
            {
                label: "Dịch vụ",
                // dropdown: [
                //     { label: "Tư vấn & triển khai", href: "/services/consulting" },
                //     { label: "Bảo trì & hỗ trợ", href: "/services/maintenance" },
                //     { label: "Đào tạo", href: "/services/training" },
                // ],
                href: "/services"
            },
        ],
    },
    { label: "TIN TỨC", href: "/news" },
    { label: "LIÊN HỆ", href: "/contact" },
];

const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <header className="ansv-header">
            <div className="header-inner">
                <div className="header-logo">
                    <a href="/">
                        <span className="logo-ansv">ANSV</span>
                        <span className="logo-tagline">TECHNOLOGIES CREATE FUTURE</span>
                    </a>
                </div>

                <nav className="header-nav">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className={`nav-item ${item.dropdown ? "has-dropdown" : ""}`}
                            onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href={item.href || "#"}
                                className={`nav-link ${activeDropdown === item.label ? "active" : ""}`}
                            >
                                {item.label}
                                {item.dropdown && <span className="dropdown-arrow">▾</span>}
                            </a>

                            {/* Menu Cấp 1 Dropdown */}
                            {item.dropdown && activeDropdown === item.label && (
                                <div className="dropdown-menu">
                                    {item.dropdown.map((sub) => (
                                        <div key={sub.label} className="dropdown-item-wrapper">
                                            <a
                                                href={sub.href || "#"}
                                                className={`dropdown-item ${sub.dropdown ? "has-submenu" : ""}`}
                                            >
                                                {sub.label}
                                            </a>

                                            {/* Menu Cấp 2 Dropdown (Lồng nhau) */}
                                            {sub.dropdown && (
                                                <div className="dropdown-menu">
                                                    {sub.dropdown.map((deepSub) => (
                                                        <a
                                                            key={deepSub.label}
                                                            href={deepSub.href}
                                                            className="dropdown-item"
                                                        >
                                                            {deepSub.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div className="mobile-nav">
                    {navItems.map((item) => (
                        <div key={item.label} className="mobile-nav-item">
                            <a href={item.href || "#"} className="mobile-nav-link">
                                {item.label}
                            </a>
                            {item.dropdown && (
                                <div className="mobile-dropdown">
                                    {item.dropdown.map((sub) => (
                                        <React.Fragment key={sub.label}>
                                            <a href={sub.href || "#"} className="mobile-dropdown-item" style={{ fontWeight: sub.dropdown ? '600' : '400' }}>
                                                {sub.label}
                                            </a>
                                            {sub.dropdown && (
                                                <div className="mobile-sub-dropdown">
                                                    {sub.dropdown.map((deepSub) => (
                                                        <a key={deepSub.label} href={deepSub.href} className="mobile-dropdown-item">
                                                            + {deepSub.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;