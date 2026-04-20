import React from "react";
import "./LichSu.css";

const LichSu: React.FC = () => (
    <div className="about-content-section">
        <h2 className="about-content-title">Lịch sử hình thành và phát triển</h2>
        <div className="timeline">
            {[
                // { year: "2008", title: "Thành lập công ty", desc: "ANSV được thành lập tại Hà Nội với đội ngũ ban đầu gồm 10 kỹ sư công nghệ thông tin." },
                // { year: "2010", title: "Mở rộng dịch vụ", desc: "Triển khai thành công các dự án phần mềm đầu tiên cho các doanh nghiệp vừa và nhỏ." },
                // { year: "2013", title: "Chứng nhận quốc tế", desc: "Đạt chứng nhận ISO 9001:2008 và mở rộng đội ngũ lên hơn 50 nhân sự." },
                // { year: "2016", title: "Đối tác chiến lược", desc: "Ký kết hợp tác với các tập đoàn công nghệ hàng đầu thế giới." },
                // { year: "2019", title: "Chuyển đổi số", desc: "Ra mắt các giải pháp chuyển đổi số toàn diện, phục vụ hơn 100 doanh nghiệp." },
                // { year: "2023", title: "Bứt phá tăng trưởng", desc: "Đội ngũ vượt 100 chuyên gia, hoàn thành hơn 500 dự án trên toàn quốc." },
                { year: "1993", title: "Thành lập", desc: "Công ty Liên doanh Thiết bị Viễn thông ANSV (Alcatel Network Systems Vietnam)." },
                { year: "1994", title: "Triển khai hệ thống Alcatel", desc: "Sản xuất, triển khai hệ thống chuyển mạch Alcatel 1000E10 CSN MA, đạt dung lượng 450.000 đầu số/năm cho Tập đoàn VNPT." },
                { year: "1995", title: "Mở rộng dịch vụ tích hợp", desc: "Ra mắt dịch vụ lắp đặt, cấu hình, đo kiểm, tích hợp các hệ thống truyền dẫn PDH, SDH và các công tác bảo trì, bảo dưỡng, nâng cấp hệ thống." },
                { year: "1996", title: "Mở rộng sang mạng di động", desc: "Mở rộng hoạt động sang lĩnh vực mạng di động, triển khai các dịch vụ engineering, lắp đặt, cấu hình và tích hợp hệ thống di động GSM (BTS/BSC, OMC -R, MSC,…), các dịch vụ nâng cấp, migration và các dịch vụ tối ưu hóa RNP, RNO,… cho các nhà mạng di động hàng đầu Việt Nam như Mobifone, Vinaphone." },
                { year: "2000", title: "Mở rộng dịch vụ", desc: "Cung cấp, lắp đặt hệ thống IN." },
                { year: "2001", title: "Nâng cấp hệ thống chuyển mạch", desc: "Sản xuất, triển khai hệ thống chuyển mạch Alcatel 1000E10 MM với dòng sản phẩm chính là CSN MM/ CSN MM Indoor/ CSN MM Outdoor, đạt dung lượng 1.000.000 đầu số/năm cho Tập đoàn VNPT." },
                { year: "2003", title: "Chuyển giao công nghệ Alcatel", desc: "Cung cấp hệ thống mạng truy cập cố định DSLAM/MSAN ký thỏa thuận chuyển giao công nghệ với Alcaltel Tây Ban Nha, trở thành đơn vị sản xuất thiết bị MSAN 1540 Litespan, CKD các card và sửa chữa các thiết bị MSAN bước đầu cung cấp thiết bị mạng di động cho Viettel dưới hình thức triển khai full-turnkey." },
                { year: "2007", title: "Triển khai hạ tầng viễn thông", desc: "► Cung cấp các thiết bị IP Networking Router/ IP – MPLS, Ethernet Switch, Enterprise Switch, Firewall,…\n► Xây dựng giải pháp và thiết kế mạng IP.\n► Lắp ráp và tích hợp hệ thống nguồn vào rack của tổng đài IP.\n► Tham gia xây dựng giải pháp và thực hiện các dự án IPCC cho viễn thông Hà Nội và Đà Nẵng.\n► Triển khai thành công các dự án cung cấp thiết bị truy nhập MSAN trên mạng lưới VNPT toàn quốc, giá trị 30 triệu USD.\n► Xây dựng hệ thống mạng truy cập băng rộng xDSL với 1 triệu thuê bao." },
                { year: "2009", title: "Triển khai hạ tầng mạng lõi", desc: "► Triển khai dự án IP Core (PE Router) cho Công ty Viễn thông liên tỉnh (VTN).\n► Trang bị thiết bị L2 Switch cho 27 viễn thông, tỉnh thành phố.\n► Nâng cấp, mở rộng dung lượng cho các hệ thống chuyển mạch Alcatel 1000E10.\n► Triển khai thành công dự án truyền dẫn DWDM Metro Link Hà Nội và TP Hồ Chí Minh." },
                { year: "2010", title: "Triển khai mạng truyền dẫn DWDM", desc: "► Triển khai thành công dự án truyền dẫn DWDM Metro Link Cần Thơ _ Cung cấp 1150 thiết bị L2 Switch + 18.539 cổng quang cho dự án AON của VNPT.\n► Thiết lập thành công hệ thống mạng chuyển mạch Thế hệ mới (NGN Call control System) cho Tập đoàn VNPT với giá trị 10 triệu USD." },
                { year: "2011", title: "Chuyển đổi mô hình công ty", desc: "► Thay đổi mô hình hoạt động, trở thành công ty TNHH 2 thành viên, với tên mới là Công ty TNHH Thiết bị Viễn thông ANSV.\n► Phân phối các thiết bị đầu cuối của VNPT Technology sản xuất (Set top Box/ Smart Box, ONT, Modem, Wifi Mesh,…) khắp cả nước.\n► Trở thành Reseller của Alcatel – Lucent tại Việt Nam, dấu ấn đầu tiên là việc thắng thầu dự án cung cấp thiết bị, giải pháp, mạng truy cập cáp quang FTTx cho VNPT Hồ Chí Minh (đạt giá trị ký kết trên 2 triệu USD trong năm 2011), mở đầu thành công cho việc cung cấp giải pháp, thiết bị và dịch vụ triển khai hệ thống GPON rộng khắp cả nước.\n► Cung cấp và Triển khai mạng di dộng cho Nokia-Siemen với doanh thu trên 120 tỷ VND." },
                { year: "2012", title: "Hỗ trợ mạng di động", desc: "► Triển khai hệ thống IP CONTACT CENTER khu vực phía Bắc và khu vực miền Trung.\n► Dịch vụ Hỗ trợ kỹ thuật cho mạng di động Vinaphone, thiết bị của Alcatel-Lucent" },
                { year: "2014", title: "Triển khai dự án backbone lớn", desc: "► Triển khai Dự án backbone đường trục (11 triệu USD) cho Tổng Công ty Hạ tầng Mạng.\n► Cung cấp hệ thống mạng và tổng đài IP cho dự án xây dựng Nhà Quốc hội.\n► Cung cấp và triển khai hệ thống IP Contact Center cho Công ty Tài chính Home Credit." },
                { year: "2015", title: "Cán mốc doanh thu 50 triệu", desc: "► Cán mốc doanh thu 50 triệu USD.\n► Hệ thống Collection cho công ty tài chính Home Credit Việt Nam.\n► Triển khai hệ thống giao thông thông minh." },
                { year: "2016", title: "Vượt ngưỡng doanh thu 100 triệu", desc: "► Vượt ngưỡng doanh thu 100 triệu USD.\n► Triển khai hệ thống GPON cho 51 tỉnh thành phố, trở thành đơn vị triển khai hệ thống mạng quang thụ động lớn nhất cho VNPT.\n► Cung cấp 2 triệu sản phẩm đầu cuối ONT/STB/Modem ADSL.\n► Cung cấp và triển khai mạng truyền dẫn DWDM miền Nam cho Mobifone." },
                { year: "2017", title: "Vượt ngưỡng doanh thu 130 triệu", desc: "► Vượt ngưỡng doanh thu 130 triệu USD.\n► Triển khai thiết kế, cung cấp và lắp đặt hệ thống truyền dẫn khu vực miền Trung và mở rộng tuyến trục Backbone cho Tổng Công ty Hạ tầng mạng.\n► Cung cấp và triển khai mở rộng mạng truyền dẫn DWDM miền Nam cho Mobifone.\n► Cung cấp 2 triệu sản phẩm đầu cuối ONT/STB/Modem ADSL.\n► Cung cấp và triển khai thiết bị SmallCell cho mạng di động.\n► 5 triệu USD cho dự án mở rộng mạng vô tuyến của Vinaphone." },
                { year: "2019", title: "Hợp tác chiến lược với Nokia", desc: "► Ký thỏa thuận hợp tác với Nokia Group.\n► Triển khai hệ thống Backhaul cho khu vực miền Trung và miền Nam.\n► Hoàn thiện triển khai mạng truy nhập quang thụ động trên toàn quốc.\n► Mở rộng hệ thống truyền dẫn khu vực miền Trung và tuyến trục Backbone cho Tổng Công ty Hạ tầng mạng." },
                { year: "2020", title: "Phát triển khách hàng doanh nghiệp", desc: "► Đạt mốc cung cấp 10tr sản phẩm đầu cuối ADSL/ONT/STB.\n► Triển khai mảng khách hàng doanh nghiệp, các bộ ban ngành như: Văn phòng Chính phủ, Bộ Công an, Ngân hàng, Bộ giao thông,… bên cạnh các khách hàng truyền thống trong VNPT." },
            ].map((item, i) => (
                <div key={item.year} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                        <h4 className="timeline-title">{item.title}</h4>
                        <p className="timeline-desc">
                            {item.desc.split("\n").map((line, j) => (
                                <React.Fragment key={j}>
                                    {line}
                                    {j < item.desc.split("\n").length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default LichSu;
