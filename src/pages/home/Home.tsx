import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import our_company from "../../assets/images/slideshow/our_company.jpg";
import future_world from "../../assets/images/slideshow/future_world.jpg";
import big_data_ai from "../../assets/images/slideshow/big_data_ai.jpeg";
import doi_tac_dang_tin_cay from "../../assets/images/slideshow/doi_tac_dang_tin_cay.jpg";
import SolutionsGrid from "./SolutionsGrid";   // ← import component mới

// ─── Hero Slider ────────────────────────────────────────────────────
const slides = [
    {
        image: our_company,
        title: "ANSV",
        subtitle:
            '<b><font color="#FF6600"><b>A</b></font>DVANCED<font color="#FF6600"><b>N</b></font>ETWORK<font color="#FF6600"><b>S</b></font>YSTEMS<font color="#FF6600"><b>V</b></font>IETNAM<br>COMPANY LIMITED</b>',
        cta: "Giới thiệu",
        ctaHref: "/about?tab=gioi-thieu",
    },
    {
        image: future_world,
        title: "CÔNG NGHỆ TẠO NÊN TƯƠNG LAI",
        subtitle:
            "Chúng tôi cung cấp các giải pháp công nghệ thông tin tiên tiến, đáp ứng nhu cầu chuyển đổi số của doanh nghiệp.",
        cta: "Khám phá ngay",
        ctaHref: "/about?tab=gioi-thieu",
    },
    {
        image: big_data_ai,
        title: "GIẢI PHÁP PHẦN MỀM TOÀN DIỆN",
        subtitle:
            "Hệ thống phần mềm được phát triển tùy chỉnh theo từng ngành nghề, tối ưu hóa quy trình vận hành.",
        cta: "Xem sản phẩm",
        ctaHref: "/products",
    },
    {
        image: doi_tac_dang_tin_cay,
        title: "ĐỐI TÁC ĐÁNG TIN CẬY",
        subtitle:
            "Hơn 30 năm kinh nghiệm, đồng hành cùng hàng trăm doanh nghiệp lớn trên toàn quốc.",
        cta: "Liên hệ chúng tôi",
        ctaHref: "/contact",
    },
];

const HeroSection: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startInterval = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
                setAnimating(false);
            }, 400);
        }, 5000);
    };

    const goTo = (idx: number) => {
        if (animating) return;
        startInterval();
        setAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setAnimating(false);
        }, 400);
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-bg">
                <div
                    className="hero-slide-bg"
                    style={{ backgroundImage: `url(${slides[current].image})` }}
                />
                <div className="hero-grid" />
                <div className="hero-globe" />
                <div className="hero-particles">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="particle" style={{ "--i": i } as React.CSSProperties} />
                    ))}
                </div>
                <div className="hero-dots-grid" />
                <div className="hero-overlay" />
            </div>

            <div className="hero-content">
                <div className={`hero-text-wrap ${animating ? "fade-out" : "fade-in"}`}>
                    <h1 className="hero-title">{slides[current].title}</h1>
                    <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: slides[current].subtitle }} />
                    <a href={slides[current].ctaHref} className="hero-cta">
                        {slides[current].cta}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="hero-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`hero-dot ${i === current ? "active" : ""}`}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

// ─── Stats Section ───────────────────────────────────────────────────
const stats = [
    { value: "30+", label: "Năm kinh nghiệm" },
    { value: "200+", label: "Khách hàng" },
    { value: "500+", label: "Dự án hoàn thành" },
    { value: "100+", label: "Chuyên gia IT" },
];

const StatsSection: React.FC = () => (
    <section className="stats-section">
        <div className="stats-inner">
            {stats.map((s) => (
                <div key={s.label} className="stat-item">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                </div>
            ))}
        </div>
    </section>
);

// ─── About Banner ─────────────────────────────────────────────────────
const AboutBanner: React.FC = () => (
    <section className="about-banner">
        <div className="about-banner-bg" />
        <div className="section-inner about-banner-inner">
            <div className="about-banner-content">
                <span className="section-label" style={{ color: "#4aa3d9" }}>VỀ CHÚNG TÔI</span>
                <h2 className="section-title" style={{ color: "#fff" }}>
                    Công ty Cổ phần Công nghệ ANSV
                </h2>
                <p style={{ color: "#aac4dd", lineHeight: 1.8, fontSize: "15px", marginBottom: "28px" }}>
                    Với hơn 30 năm hoạt động trong lĩnh vực công nghệ thông tin, ANSV tự hào là đối tác
                    tin cậy của hàng trăm doanh nghiệp lớn, cơ quan nhà nước trên toàn quốc. Chúng tôi
                    không ngừng đổi mới và sáng tạo để mang đến những giải pháp công nghệ tối ưu nhất.
                </p>
                <div className="about-features">
                    {["Đội ngũ chuyên gia giàu kinh nghiệm", "Giải pháp tùy biến theo nhu cầu", "Hỗ trợ 24/7", "Cam kết chất lượng"].map((f) => (
                        <div key={f} className="about-feature">
                            <span className="feature-check">✓</span>
                            <span>{f}</span>
                        </div>
                    ))}
                </div>
                <a href="/about" className="hero-cta" style={{ marginTop: "8px", display: "inline-flex" }}>
                    Tìm hiểu thêm
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="about-banner-visual">
                <div className="tech-circle">
                    <div className="tech-ring ring-1" />
                    <div className="tech-ring ring-2" />
                    <div className="tech-ring ring-3" />
                    <div className="tech-core">
                        <span className="logo-ansv-big">ANSV</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ─── News Section ─────────────────────────────────────────────────────
const news = [
    {
        date: "28/03/2025",
        cat: "Tin tức",
        title: "ANSV ký kết hợp tác chiến lược với các đối tác công nghệ hàng đầu",
        excerpt: "Lễ ký kết hợp tác giữa ANSV và các đối tác trong lĩnh vực công nghệ thông tin nhằm mở rộng hệ sinh thái giải pháp.",
        img: null,
    },
    {
        date: "15/03/2025",
        cat: "Sự kiện",
        title: "ANSV tham dự Vietnam ICT Summit 2025 với nhiều giải pháp mới",
        excerpt: "Tại triển lãm Vietnam ICT Summit 2025, ANSV giới thiệu loạt sản phẩm và giải pháp công nghệ tiên tiến.",
        img: null,
    },
    {
        date: "05/03/2025",
        cat: "Dự án",
        title: "Hoàn thành triển khai hệ thống quản lý cho Tập đoàn X",
        excerpt: "ANSV đã hoàn thành triển khai thành công hệ thống ERP cho Tập đoàn X với hơn 2000 người dùng.",
        img: null,
    },
];

const NewsSection: React.FC = () => (
    <section className="news-section">
        <div className="section-inner">
            <div className="section-header">
                <span className="section-label">TIN TỨC - SỰ KIỆN</span>
                <h2 className="section-title">Tin tức mới nhất</h2>
            </div>
            <div className="news-grid">
                {news.map((n) => (
                    <article key={n.title} className="news-card">
                        <div className="news-img-wrap">
                            <div className="news-img-placeholder">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="48" height="48" opacity="0.3">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </div>
                            <span className="news-cat">{n.cat}</span>
                        </div>
                        <div className="news-body">
                            <span className="news-date">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                {n.date}
                            </span>
                            <h3 className="news-title">{n.title}</h3>
                            <p className="news-excerpt">{n.excerpt}</p>
                            <a href="/news" className="news-more">Đọc tiếp →</a>
                        </div>
                    </article>
                ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <a href="/news" className="btn-outline">Xem tất cả tin tức</a>
            </div>
        </div>
    </section>
);

// ─── Partners ─────────────────────────────────────────────────────────
const partners = ["Viettel", "VNPT", "FPT", "CMC", "HPT", "Misa", "SHB", "Techcombank"];

const PartnersSection: React.FC = () => (
    <section className="partners-section">
        <div className="section-inner">
            <div className="section-header">
                <span className="section-label">ĐỐI TÁC</span>
                <h2 className="section-title">Khách hàng & Đối tác</h2>
            </div>
            <div className="partners-track-wrap">
                <div className="partners-track">
                    {[...partners, ...partners].map((p, i) => (
                        <div key={i} className="partner-logo">
                            <span>{p}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ─── CTA Banner ───────────────────────────────────────────────────────
const CTABanner: React.FC = () => (
    <section className="cta-banner">
        <div className="cta-inner">
            <h2 className="cta-title">Sẵn sàng chuyển đổi số cùng ANSV?</h2>
            <p className="cta-sub">Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.</p>
            <div className="cta-actions">
                <a href="/contact" className="hero-cta">
                    Liên hệ ngay
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
                <a href="/about" className="btn-outline-white">Tìm hiểu thêm</a>
            </div>
        </div>
    </section>
);

// ─── Home Page ────────────────────────────────────────────────────────
const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <SolutionsGrid />     {/* ← thay ServicesSection cũ */}
            <AboutBanner />
            <NewsSection />
            <PartnersSection />
            <CTABanner />
        </>
    );
};

export default Home;
