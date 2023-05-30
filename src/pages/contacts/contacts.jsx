import React from "react";
import "./contacts.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Contacts = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section>
        <div className="content-wrapper text-center">
          <div className="content main__content__container">
            <div className="content u-mtop">
              <h1>Liên hệ với chúng tôi - Gmail</h1>
              <br />
              <h3>zluffyz2002@gmail.com</h3>
              <hr className="w-75 m-auto" />
              <p className="w-75 m-auto pt-5">
              Chúng tôi ở đây để trả lời bất kỳ câu hỏi hoặc yêu cầu mà bạn có thể có. Hãy liên hệ với chúng tôi và chúng tôi sẽ trả lời ngay khi có thể. Nhìn thấy một lỗi? Có gì đó không ổn với video? Sử dụng mẫu để báo cáo!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
