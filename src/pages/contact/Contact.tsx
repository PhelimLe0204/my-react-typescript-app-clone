import React, { useState } from "react";
import "./Contact.css";

// ─── Data ─────────────────────────────────────────────────────────────
const officeData = [
    {
        id: "hn",
        city: "Hà Nội",
        label: "Trụ sở chính",
        address: "Tầng 8, Tòa nhà ABC, 123 Đường Cầu Giấy, Quận Cầu Giấy, Hà Nội",
        phone: "+84 (24) 3xxx xxxx",
        fax: "+84 (24) 3xxx xxxy",
        email: "info@ansv.vn",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096!2d105.7829!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAx!5e0!3m2!1svi!2svn!4v1",
        color: "#e85d27",
    },
    {
        id: "hcm",
        city: "TP. Hồ Chí Minh",
        label: "Văn phòng đại diện",
        address: "Tầng 15, Bitexco Financial Tower, 2 Hải Triều, Quận 1, TP. Hồ Chí Minh",
        phone: "+84 (28) 3xxx xxxx",
        fax: "+84 (28) 3xxx xxxy",
        email: "hcm@ansv.vn",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4!2d106.7043!3d10.7719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2!5e0!3m2!1svi!2svn!4v1",
        color: "#1a7abf",
    },
];

const workingHours = [
    { day: "Thứ 2 — Thứ 6", time: "08:00 — 17:30", active: true },
    { day: "Thứ 7", time: "08:00 — 12:00", active: true },
    { day: "Chủ nhật", time: "Nghỉ", active: false },
];

const quickContacts = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        label: "Hotline hỗ trợ",
        value: "1800 xxxx",
        sub: "Miễn phí • 24/7",
        accent: "#e85d27",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: "Email chung",
        value: "info@ansv.vn",
        sub: "Phản hồi trong 24 giờ",
        accent: "#1a7abf",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        label: "Kinh doanh",
        value: "sales@ansv.vn",
        sub: "Tư vấn & báo giá",
        accent: "#0f6e56",
    },
];

// ─── Contact Page ─────────────────────────────────────────────────────
const Contact: React.FC = () => {
    const [activeOffice, setActiveOffice] = useState("hn");
    const office = officeData.find(o => o.id === activeOffice)!;

    return (
        <div className="ct-page">

            {/* ── Banner ─────────────────────────────────── */}
            <div className="ct-banner">
                <div className="ct-banner-grid" />
                <div className="ct-banner-grid-dots" />
                <div className="ct-banner-glow" />
                <div className="ct-banner-content">
                    <span className="ct-banner-label">LIÊN HỆ</span>
                    <h1 className="ct-banner-title">Kết nối với ANSV</h1>
                    <p className="ct-banner-sub">
                        Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe
                        và hỗ trợ bạn mọi lúc.
                    </p>
                    <div className="ct-banner-breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span>›</span>
                        <span>Liên hệ</span>
                    </div>
                </div>
            </div>

            {/* ── Quick contact cards ─────────────────────── */}
            <div className="ct-quick-wrap">
                <div className="ct-quick-inner">
                    {quickContacts.map((q, i) => (
                        <div key={i} className="ct-quick-card">
                            <div className="ct-quick-icon" style={{ color: q.accent, borderColor: `${q.accent}33`, background: `${q.accent}11` }}>
                                {q.icon}
                            </div>
                            <div className="ct-quick-info">
                                <span className="ct-quick-label">{q.label}</span>
                                <span className="ct-quick-value" style={{ color: q.accent }}>{q.value}</span>
                                <span className="ct-quick-sub">{q.sub}</span>
                            </div>
                            <div className="ct-quick-bar" style={{ background: q.accent }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Main content ────────────────────────────── */}
            <div className="ct-main">
                <div className="ct-inner">

                    {/* Left: Office info + hours */}
                    <div className="ct-left">

                        {/* Office tabs */}
                        <div className="ct-office-tabs">
                            {officeData.map(o => (
                                <button
                                    key={o.id}
                                    className={`ct-office-tab ${activeOffice === o.id ? "active" : ""}`}
                                    onClick={() => setActiveOffice(o.id)}
                                    style={activeOffice === o.id ? { borderBottomColor: o.color, color: o.color } : {}}
                                >
                                    <span className="ct-office-tab-city">{o.city}</span>
                                    <span className="ct-office-tab-label">{o.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Office detail card */}
                        <div className="ct-office-card">
                            <div className="ct-office-header" style={{ borderLeftColor: office.color }}>
                                <div>
                                    <span className="ct-office-badge" style={{ background: office.color }}>{office.label}</span>
                                    <h2 className="ct-office-city">Văn phòng {office.city}</h2>
                                </div>
                            </div>

                            <div className="ct-office-details">
                                <div className="ct-detail-row">
                                    <div className="ct-detail-icon" style={{ color: office.color }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="ct-detail-content">
                                        <span className="ct-detail-label">Địa chỉ</span>
                                        <span className="ct-detail-value">{office.address}</span>
                                    </div>
                                </div>

                                <div className="ct-detail-row">
                                    <div className="ct-detail-icon" style={{ color: office.color }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div className="ct-detail-content">
                                        <span className="ct-detail-label">Điện thoại</span>
                                        <a href={`tel:${office.phone}`} className="ct-detail-link" style={{ color: office.color }}>{office.phone}</a>
                                    </div>
                                </div>

                                <div className="ct-detail-row">
                                    <div className="ct-detail-icon" style={{ color: office.color }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                            <polyline points="22 6 12 13 2 6" />
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                        </svg>
                                    </div>
                                    <div className="ct-detail-content">
                                        <span className="ct-detail-label">Fax</span>
                                        <span className="ct-detail-value">{office.fax}</span>
                                    </div>
                                </div>

                                <div className="ct-detail-row">
                                    <div className="ct-detail-icon" style={{ color: office.color }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div className="ct-detail-content">
                                        <span className="ct-detail-label">Email</span>
                                        <a href={`mailto:${office.email}`} className="ct-detail-link" style={{ color: office.color }}>{office.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Working hours */}
                        <div className="ct-hours-card">
                            <div className="ct-hours-header">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Giờ làm việc</span>
                            </div>
                            <div className="ct-hours-list">
                                {workingHours.map((h, i) => (
                                    <div key={i} className={`ct-hours-row ${!h.active ? "ct-hours-row--off" : ""}`}>
                                        <span className="ct-hours-day">{h.day}</span>
                                        <span className="ct-hours-time" style={h.active ? { color: "#e85d27" } : {}}>
                                            {h.active ? (
                                                <><span className="ct-hours-dot" />  {h.time}</>
                                            ) : h.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="ct-hours-note">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                Hotline hỗ trợ kỹ thuật hoạt động 24/7
                            </div>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="ct-right">
                        <div className="ct-map-wrap">
                            <div className="ct-map-header">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>Bản đồ — Văn phòng {office.city}</span>
                            </div>
                            <div className="ct-map-frame">
                                <iframe
                                    key={office.id}
                                    src={office.mapSrc}
                                    className="ct-map-iframe"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Bản đồ văn phòng ${office.city}`}
                                />
                            </div>
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ct-map-directions"
                                style={{ borderColor: office.color, color: office.color }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                                </svg>
                                Xem đường đi trên Google Maps
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;
