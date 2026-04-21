import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="ansv-footer">
            <div className="footer-top">
                <div className="footer-inner">
                    <div className="footer-col footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-text">ANSV</span>
                            <span className="footer-logo-tagline">TECHNOLOGIES CREATE FUTURE</span>
                        </div>
                        <p className="footer-desc">
                            Công ty TNHH Thiết Bị Viễn Thông ANSV chuyên cung cấp các giải pháp
                            công nghệ thông tin, phần mềm và dịch vụ IT toàn diện.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a1a2e" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Giới thiệu</h4>
                        <ul className="footer-links">
                            <li><a href="/about">Về chúng tôi</a></li>
                            <li><a href="/organization">Cơ cấu tổ chức</a></li>
                            <li><a href="/history">Lịch sử hình thành</a></li>
                            <li><a href="/partners">Khách hàng & đối tác</a></li>
                            <li><a href="/ceo-message">Thông điệp CEO</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Sản phẩm & Dịch vụ</h4>
                        <ul className="footer-links">
                            <li><a href="/products">Sản phẩm phần mềm</a></li>
                            <li><a href="/systems">Giải pháp hệ thống</a></li>
                            <li><a href="/projects">Dự án tiêu biểu</a></li>
                            <li><a href="/services">Tư vấn & Triển khai</a></li>
                            <li><a href="/training">Đào tạo</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Liên hệ</h4>
                        <ul className="footer-contact">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>Hà Nội, Việt Nam</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.71 2.92a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.94.34 1.92.58 2.92.71A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+84 (24) 3xxx xxxx</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@ansv.vn</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                                <span>www.ansv.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-inner">
                    <p>© {new Date().getFullYear()} ANSV Technology. All rights reserved.</p>
                    <p>Thiết kế & Phát triển bởi ANSV Technology</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
