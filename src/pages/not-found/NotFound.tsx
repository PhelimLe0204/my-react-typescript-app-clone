import React, { useEffect, useRef } from "react";
import "./NotFound.css";

const NotFound: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number; y: number;
      vx: number; vy: number;
      size: number; alpha: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 163, 217, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(74, 163, 217, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nf-page">
      <canvas ref={canvasRef} className="nf-canvas" />

      <div className="nf-bg-grid" />
      <div className="nf-overlay" />

      <div className="nf-content">
        {/* Glitch 404 */}
        <div className="nf-code-wrap">
          <span className="nf-code" data-text="404">404</span>
        </div>

        {/* Ring decoration */}
        <div className="nf-rings">
          <div className="nf-ring nf-ring-1" />
          <div className="nf-ring nf-ring-2" />
          <div className="nf-ring nf-ring-3" />
        </div>

        <h1 className="nf-title">Trang không tồn tại</h1>
        <p className="nf-desc">
          Trang bạn đang tìm kiếm có thể đã bị di chuyển, xóa hoặc chưa được tạo.
          <br />
          Vui lòng kiểm tra lại địa chỉ hoặc quay về trang chủ.
        </p>

        <div className="nf-actions">
          <a href="/" className="nf-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Về trang chủ
          </a>
          <a href="/lien-he" className="nf-btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1" />
              <path d="M4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91" />
              <path d="M22 16.92a19.79 19.79 0 0 0-3.07-8.67" />
            </svg>
            Liên hệ hỗ trợ
          </a>
        </div>

        {/* Quick links */}
        <div className="nf-links">
          <span className="nf-links-label">Có thể bạn đang tìm:</span>
          <div className="nf-links-list">
            {[
              { label: "Giới thiệu", href: "/gioi-thieu" },
              { label: "Dịch vụ", href: "/dich-vu" },
              { label: "Liên hệ", href: "/lien-he" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="nf-quick-link">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
