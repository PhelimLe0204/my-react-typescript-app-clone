import React, { useState } from "react";
import "./TinTuc.css";

// ─── Types ────────────────────────────────────────────────────────────
type Category = "all" | "tin-tuc" | "su-kien" | "du-an" | "thong-bao";

interface Article {
    id: number;
    category: Exclude<Category, "all">;
    categoryLabel: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    readTime: string;
    image: string | null;
    featured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────
const articles: Article[] = [
    {
        id: 1,
        category: "tin-tuc",
        categoryLabel: "Tin tức",
        title: "ANSV ký kết hợp tác chiến lược với Nokia mở rộng giải pháp 5G tại Việt Nam",
        excerpt: "Lễ ký kết diễn ra tại Hà Nội, đánh dấu bước tiến quan trọng trong việc mở rộng hệ sinh thái giải pháp viễn thông thế hệ mới tại thị trường Việt Nam.",
        content: "Ngày 15/03/2025, Công ty TNHH Thiết Bị Viễn Thông ANSV và Tập đoàn Nokia đã chính thức ký kết thỏa thuận hợp tác chiến lược, mở ra giai đoạn mới trong quan hệ đối tác lâu dài giữa hai bên.\n\nTheo thỏa thuận, ANSV sẽ trở thành đối tác triển khai ưu tiên của Nokia trong các dự án hạ tầng mạng 5G tại Việt Nam. Đây là bước tiến quan trọng, tận dụng thế mạnh của ANSV với hơn 30 năm kinh nghiệm trong ngành viễn thông cùng năng lực công nghệ tiên tiến của Nokia.\n\nÔng Nguyễn Văn Nam, Tổng Giám đốc ANSV chia sẻ: 'Đây là cột mốc quan trọng trong hành trình phát triển của ANSV. Chúng tôi tự hào được đồng hành cùng Nokia trong việc xây dựng hạ tầng viễn thông thế hệ mới cho Việt Nam.'\n\nHợp tác này sẽ tập trung vào các lĩnh vực: triển khai mạng 5G NR, tích hợp hệ thống RAN, Core Network và các giải pháp OSS/BSS thế hệ mới.",
        date: "15/03/2025",
        author: "Ban truyền thông ANSV",
        readTime: "4 phút đọc",
        image: null,
        featured: true,
    },
    {
        id: 2,
        category: "su-kien",
        categoryLabel: "Sự kiện",
        title: "ANSV tham dự Vietnam ICT Summit 2025 với loạt giải pháp chuyển đổi số mới",
        excerpt: "Tại triển lãm Vietnam ICT Summit 2025, ANSV giới thiệu các sản phẩm và giải pháp công nghệ tiên tiến thu hút sự quan tâm lớn từ cộng đồng doanh nghiệp.",
        content: "Vietnam ICT Summit 2025 diễn ra từ ngày 10-12/03/2025 tại Trung tâm Hội nghị Quốc gia Hà Nội, là sự kiện công nghệ lớn nhất trong năm với sự tham dự của hơn 500 doanh nghiệp trong và ngoài nước.\n\nGian hàng của ANSV thu hút hàng nghìn lượt khách tham quan với các giải pháp nổi bật: hệ thống giám sát mạng thông minh AI-powered, nền tảng chuyển đổi số toàn diện và các sản phẩm phần mềm quản trị doanh nghiệp.\n\nĐặc biệt, ANSV đã có buổi trình diễn thực tế giải pháp Network Monitoring tích hợp AI, nhận được phản hồi tích cực từ các nhà mạng lớn.\n\nSự kiện là cơ hội để ANSV mở rộng mạng lưới đối tác và tiếp cận khách hàng tiềm năng trong nhiều lĩnh vực.",
        date: "12/03/2025",
        author: "Phòng Marketing",
        readTime: "3 phút đọc",
        image: null,
    },
    {
        id: 3,
        category: "du-an",
        categoryLabel: "Dự án",
        title: "Hoàn thành triển khai hệ thống OSS/BSS cho nhà mạng với 5 triệu thuê bao",
        excerpt: "ANSV đã hoàn thành xuất sắc dự án triển khai hệ thống vận hành và hỗ trợ kinh doanh quy mô lớn, đạt tất cả các chỉ tiêu kỹ thuật và bàn giao trước tiến độ.",
        content: "Sau 18 tháng triển khai với sự tham gia của hơn 50 kỹ sư chuyên nghiệp, ANSV đã hoàn thành và bàn giao thành công hệ thống OSS/BSS cho một trong những nhà mạng hàng đầu Việt Nam.\n\nHệ thống phục vụ hơn 5 triệu thuê bao với khả năng xử lý hàng trăm triệu bản ghi cước mỗi ngày. Uptime đạt 99.99%, vượt chỉ tiêu đề ra.\n\nDự án sử dụng kiến trúc microservices hiện đại, cho phép mở rộng linh hoạt theo nhu cầu tăng trưởng của nhà mạng trong tương lai.\n\nĐây là một trong những dự án OSS/BSS lớn nhất mà ANSV từng triển khai, khẳng định năng lực và uy tín của công ty trong lĩnh vực viễn thông.",
        date: "28/02/2025",
        author: "Phòng Dự án",
        readTime: "5 phút đọc",
        image: null,
    },
    {
        id: 4,
        category: "thong-bao",
        categoryLabel: "Thông báo",
        title: "ANSV thông báo mở văn phòng đại diện tại TP. Hồ Chí Minh",
        excerpt: "Nhằm phục vụ khách hàng khu vực phía Nam tốt hơn, ANSV chính thức khai trương văn phòng đại diện tại TP. Hồ Chí Minh từ tháng 4/2025.",
        content: "ANSV chính thức thông báo khai trương Văn phòng đại diện tại TP. Hồ Chí Minh từ ngày 01/04/2025, đặt tại tòa nhà Bitexco Financial Tower, Quận 1.\n\nVăn phòng mới sẽ là đầu mối tiếp nhận và hỗ trợ khách hàng khu vực phía Nam, bao gồm: tư vấn giải pháp, hỗ trợ kỹ thuật và triển khai dự án.\n\nĐội ngũ tại văn phòng TP.HCM gồm 20 chuyên gia với kinh nghiệm sâu trong các lĩnh vực viễn thông, CNTT và chuyển đổi số.\n\nThông tin liên hệ văn phòng TP.HCM: Địa chỉ: Tầng 15, Bitexco Financial Tower, 2 Hải Triều, Quận 1. Điện thoại: +84 (28) 3xxx xxxx.",
        date: "20/02/2025",
        author: "Ban Giám đốc",
        readTime: "2 phút đọc",
        image: null,
    },
    {
        id: 5,
        category: "tin-tuc",
        categoryLabel: "Tin tức",
        title: "ANSV đạt chứng nhận ISO 27001:2022 về quản lý an toàn thông tin",
        excerpt: "Sau quá trình đánh giá nghiêm ngặt, ANSV chính thức nhận chứng nhận ISO 27001:2022, khẳng định cam kết về an toàn thông tin và bảo mật dữ liệu.",
        content: "ANSV vừa chính thức được cấp chứng nhận ISO 27001:2022 — tiêu chuẩn quốc tế về Hệ thống quản lý an toàn thông tin (ISMS) — sau quá trình đánh giá kéo dài 3 tháng bởi tổ chức chứng nhận quốc tế Bureau Veritas.\n\nChứng nhận ISO 27001:2022 là phiên bản mới nhất, bổ sung các yêu cầu về quản lý rủi ro an toàn thông tin trong môi trường điện toán đám mây và làm việc từ xa.\n\nViệc đạt được chứng nhận này khẳng định ANSV đã xây dựng và duy trì hệ thống quản lý an toàn thông tin đạt chuẩn quốc tế, đảm bảo an toàn cho dữ liệu của khách hàng.\n\nĐây là một trong những yêu cầu bắt buộc khi tham gia các dự án cho cơ quan nhà nước và tổ chức tài chính.",
        date: "10/02/2025",
        author: "Phòng Chất lượng",
        readTime: "3 phút đọc",
        image: null,
    },
    {
        id: 6,
        category: "su-kien",
        categoryLabel: "Sự kiện",
        title: "Lễ kỷ niệm 30 năm thành lập ANSV — Hành trình và khát vọng",
        excerpt: "Buổi lễ kỷ niệm 30 năm thành lập diễn ra trang trọng với sự tham dự của đông đảo đối tác, khách hàng và toàn thể cán bộ nhân viên công ty.",
        content: "Ngày 15/07/1993 - 15/07/2023, ANSV tròn 30 năm hình thành và phát triển. Buổi lễ kỷ niệm diễn ra tại Trung tâm Hội nghị Melia Hà Nội với sự tham dự của hơn 500 khách mời.\n\nTại buổi lễ, Ban Giám đốc đã ôn lại hành trình 30 năm từ một liên doanh nhỏ với vài chục nhân sự đến một công ty công nghệ hàng đầu với hơn 300 chuyên gia.\n\nCác đối tác lâu năm như Nokia, Ericsson, Microsoft đã gửi lời chúc mừng và khẳng định cam kết tiếp tục đồng hành cùng ANSV trong giai đoạn phát triển tiếp theo.\n\nĐây cũng là dịp ANSV công bố chiến lược phát triển giai đoạn 2023-2030, với mục tiêu mở rộng ra thị trường khu vực ASEAN.",
        date: "15/07/2023",
        author: "Ban truyền thông ANSV",
        readTime: "6 phút đọc",
        image: null,
    },
    {
        id: 7,
        category: "du-an",
        categoryLabel: "Dự án",
        title: "Triển khai thành công hệ thống Chính phủ điện tử cho 5 tỉnh thành",
        excerpt: "ANSV hoàn thành dự án triển khai nền tảng Chính phủ điện tử giúp số hóa toàn bộ dịch vụ công trực tuyến cho 5 tỉnh thành khu vực miền Bắc.",
        content: "Dự án kéo dài 24 tháng với tổng giá trị hợp đồng hơn 50 tỷ đồng, ANSV đã triển khai thành công nền tảng Chính phủ điện tử cho 5 tỉnh thành: Hà Nam, Nam Định, Thái Bình, Ninh Bình và Hà Nội.\n\nHệ thống bao gồm: Cổng dịch vụ công trực tuyến, hệ thống quản lý văn bản điện tử, hệ thống một cửa điện tử và nền tảng thanh toán trực tuyến.\n\nSau khi đưa vào vận hành, tỷ lệ hồ sơ xử lý trực tuyến đạt trên 80%, giảm đáng kể thời gian và chi phí cho người dân.\n\nDự án được Bộ Thông tin và Truyền thông đánh giá là mô hình điển hình về triển khai Chính phủ điện tử tại Việt Nam.",
        date: "05/01/2025",
        author: "Phòng Dự án",
        readTime: "4 phút đọc",
        image: null,
    },
    {
        id: 8,
        category: "thong-bao",
        categoryLabel: "Thông báo",
        title: "Thông báo tuyển dụng kỹ sư công nghệ thông tin và viễn thông năm 2025",
        excerpt: "ANSV thông báo tuyển dụng nhiều vị trí kỹ sư CNTT và viễn thông với mức lương hấp dẫn, môi trường làm việc chuyên nghiệp và cơ hội phát triển cao.",
        content: "Nhằm đáp ứng nhu cầu mở rộng hoạt động trong năm 2025, ANSV thông báo tuyển dụng các vị trí sau:\n\n• Kỹ sư mạng viễn thông (10 vị trí): Yêu cầu kinh nghiệm 2+ năm về mạng 4G/5G, OSS/BSS.\n• Kỹ sư phần mềm (15 vị trí): Java/Python/Node.js, có kinh nghiệm về microservices.\n• Chuyên viên bảo mật thông tin (5 vị trí): Chứng chỉ CISSP/CEH là lợi thế.\n• Kỹ sư Cloud (8 vị trí): AWS/Azure/GCP certification.\n• Business Analyst (5 vị trí): Kinh nghiệm viễn thông hoặc tài chính.\n\nMức lương: Thỏa thuận theo năng lực, cạnh tranh với thị trường.\nHồ sơ nộp về: hr@ansv.vn\nHạn nộp: 31/03/2025.",
        date: "01/01/2025",
        author: "Phòng Nhân sự",
        readTime: "3 phút đọc",
        image: null,
    },
];

// ─── Filter tabs ──────────────────────────────────────────────────────
const filterTabs: { id: Category; label: string }[] = [
    { id: "all", label: "Tất cả" },
    { id: "tin-tuc", label: "Tin tức" },
    { id: "su-kien", label: "Sự kiện" },
    { id: "du-an", label: "Dự án" },
    { id: "thong-bao", label: "Thông báo" },
];

// ─── Category colors ──────────────────────────────────────────────────
const catColor: Record<string, string> = {
    "tin-tuc": "#e85d27",
    "su-kien": "#1a7abf",
    "du-an": "#0f6e56",
    "thong-bao": "#7c3aed",
};

// ─── Article Modal ────────────────────────────────────────────────────
const ArticleModal: React.FC<{ article: Article; onClose: () => void }> = ({ article, onClose }) => {
    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="tt-modal-backdrop" onClick={handleBackdrop}>
            <div className="tt-modal">
                <button className="tt-modal-close" onClick={onClose} aria-label="Đóng">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Image */}
                <div className="tt-modal-img" style={{ background: `linear-gradient(135deg, ${catColor[article.category]}22, #071a36)` }}>
                    <div className="tt-modal-img-overlay" style={{ background: catColor[article.category] }} />
                    <div className="tt-modal-img-content">
                        <span className="tt-modal-cat" style={{ background: catColor[article.category] }}>
                            {article.categoryLabel}
                        </span>
                    </div>
                </div>

                <div className="tt-modal-body">
                    {/* Meta */}
                    <div className="tt-modal-meta">
                        <span className="tt-modal-date">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {article.date}
                        </span>
                        <span className="tt-modal-dot">·</span>
                        <span className="tt-modal-author">{article.author}</span>
                        <span className="tt-modal-dot">·</span>
                        <span className="tt-modal-read">{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="tt-modal-title">{article.title}</h2>

                    {/* Divider */}
                    <div className="tt-modal-divider" style={{ background: catColor[article.category] }} />

                    {/* Content */}
                    <div className="tt-modal-content">
                        {article.content.split("\n\n").map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="tt-modal-footer">
                        <a href="/lien-he" className="tt-modal-cta" style={{ background: catColor[article.category], borderColor: catColor[article.category] }}>
                            Liên hệ ANSV
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <button className="tt-modal-btn-close" onClick={onClose}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Featured Card ─────────────────────────────────────────────────────
const FeaturedCard: React.FC<{ article: Article; onClick: () => void }> = ({ article, onClick }) => (
    <div className="tt-featured" onClick={onClick}>
        <div className="tt-featured-img" style={{ background: `linear-gradient(135deg, ${catColor[article.category]}33 0%, #071a36 100%)` }}>
            <div className="tt-featured-img-pattern" />
            <span className="tt-featured-badge" style={{ background: catColor[article.category] }}>
                ⭐ Nổi bật
            </span>
        </div>
        <div className="tt-featured-body">
            <span className="tt-featured-cat" style={{ color: catColor[article.category] }}>
                {article.categoryLabel}
            </span>
            <h2 className="tt-featured-title">{article.title}</h2>
            <p className="tt-featured-excerpt">{article.excerpt}</p>
            <div className="tt-featured-meta">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
            </div>
            <span className="tt-featured-more" style={{ color: catColor[article.category] }}>
                Đọc tiếp →
            </span>
        </div>
    </div>
);

// ─── Article Card ──────────────────────────────────────────────────────
const ArticleCard: React.FC<{ article: Article; onClick: () => void }> = ({ article, onClick }) => (
    <article className="tt-card" onClick={onClick}>
        <div className="tt-card-img" style={{ background: `linear-gradient(135deg, ${catColor[article.category]}22 0%, #071a36 100%)` }}>
            <div className="tt-card-img-pattern" />
            <span className="tt-card-cat" style={{ background: catColor[article.category] }}>
                {article.categoryLabel}
            </span>
        </div>
        <div className="tt-card-body">
            <div className="tt-card-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{article.date}</span>
                <span className="tt-card-dot">·</span>
                <span>{article.readTime}</span>
            </div>
            <h3 className="tt-card-title">{article.title}</h3>
            <p className="tt-card-excerpt">{article.excerpt}</p>
            <span className="tt-card-more" style={{ color: catColor[article.category] }}>
                Đọc tiếp →
            </span>
        </div>
    </article>
);

// ─── Main Page ────────────────────────────────────────────────────────
const TinTuc: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Category>("all");
    const [activeArticle, setActiveArticle] = useState<Article | null>(null);

    const featured = articles.find(a => a.featured);
    const rest = articles.filter(a => !a.featured);

    const filtered = activeFilter === "all"
        ? rest
        : rest.filter(a => a.category === activeFilter);

    const showFeatured = activeFilter === "all" || activeFilter === featured?.category;

    return (
        <div className="tt-page">
            {/* ── Banner ──────────────────────────────────── */}
            <div className="tt-banner">
                <div className="tt-banner-grid" />
                {/* <div className="tt-banner-particles">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="tt-banner-dot" style={{ "--i": i } as React.CSSProperties} />
                    ))}
                </div> */}
                <div className="tt-banner-content">
                    <span className="tt-banner-label">TRUYỀN THÔNG</span>
                    <h1 className="tt-banner-title">Tin tức & Sự kiện</h1>
                    <p className="tt-banner-sub">
                        Cập nhật những tin tức mới nhất về ANSV, ngành viễn thông
                        và công nghệ thông tin tại Việt Nam.
                    </p>
                    <div className="tt-banner-breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span>›</span>
                        <span>Tin tức & Sự kiện</span>
                    </div>
                </div>
                {/* <div className="tt-banner-shape" /> */}
            </div>

            {/* ── Main content ─────────────────────────────── */}
            <div className="tt-main">
                <div className="tt-inner">

                    {/* Filter tabs */}
                    <div className="tt-filters">
                        {filterTabs.map((tab) => {
                            const count = tab.id === "all"
                                ? articles.length
                                : articles.filter(a => a.category === tab.id).length;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFilter(tab.id)}
                                    className={`tt-filter-btn ${activeFilter === tab.id ? "active" : ""}`}
                                    style={activeFilter === tab.id && tab.id !== "all"
                                        ? { background: catColor[tab.id], borderColor: catColor[tab.id] }
                                        : {}
                                    }
                                >
                                    {tab.label}
                                    <span className="tt-filter-count">{count}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Featured article */}
                    {showFeatured && featured && (
                        <FeaturedCard article={featured} onClick={() => setActiveArticle(featured)} />
                    )}

                    {/* Article grid */}
                    {filtered.length > 0 ? (
                        <div className="tt-grid">
                            {filtered.map(a => (
                                <ArticleCard key={a.id} article={a} onClick={() => setActiveArticle(a)} />
                            ))}
                        </div>
                    ) : (
                        <div className="tt-empty">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                            <p>Không có bài viết nào trong danh mục này.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {activeArticle && (
                <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
            )}
        </div>
    );
};

export default TinTuc;
