import React from "react";
import "./privacyPolicy.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="content-wrapper text-center">
        <div className="content main__content__container">
          <div className="content u-mtop">
            <h1 className="pt-3 pb-3">
              Privacy Policy - <Link to={"/"}>TikTokNoWatermark</Link>
            </h1>
          </div>
          <ol className="text-start w-75 m-auto">
            <li className="pt-3">
              By using the TikTokNoWatermark downloader, you represent consent
              to abide by all privacy policies stated on this page:
            </li>
            <li className="pt-3">
              This website does not collect personally identifiable information
              from the device your computer when you browse the Website and
              request pages from your computer our owner. This means, unless you
              voluntarily and knowingly providing us with personally
              identifiable information, we won't know your name, email address
              or any other information any other personally identifiable.
            </li>
            <li className="pt-3">
              When you request a page from our Website, our server we will
              record the information provided in the request header HTTP,
              JavaScript, or similar technical tools, including IP, request
              time, URL of your request and other information other. We collect
              this information to make our Website we work exactly and give you
              the functionality that you found on the Website, as our servers
              use the information to provide you with the pages on this Website.
              We also use this information to better understand how visitors use
              use of our Website and how we can adapt Its better website, its
              content and function to meet meet your needs. However, this
              information is not linked with any personally identifiable
              information of the browsers Webpage.
            </li>
            <li className="pt-3">
              We do not sell, trade or transfer to outside parties your
              personally identifiable information. This does not include third
              parties three reliable support us to operate the site, conduct
              doing business or serving you, as long as those parties agree to
              keep it confidential this information. We may also disclose your
              information when we believe disclosure is appropriate to comply
              with the law, enforce our website policies or protect your rights,
              our property or safety or that of others. However, Non-personally
              identifiable visitor information may be provided to other parties
              for marketing, advertising or use other.
            </li>
            <li className="pt-3">
              From time to time, at our discretion, we may include or offer
              third-party products or services on the site our web. These
              third-party websites have privacy policies separate and
              independent confidentiality. Therefore, we are not responsible or
              liability for the content and operation of the this linked page.
              However, we seek to protect the integrity of its website and
              welcomes any feedback on the this site.
            </li>
            <li className="pt-3">
              Changes to our Privacy Policy. If we decide intends to change our
              privacy policy, we will post the that change on this page.
            </li>
          </ol>
          <div className="container text-start mt-5 pb-5">
            <strong>Video downloader app</strong>
            <p>
              TikTokNoWatermark built Video downloader app in the form of Ad
              Supported app. This SERVICE is provided by TikTokNoWatermark is
              free and intended for use.
            </p>
            <p>
              This page is used to inform visitors about Our policy on
              collection, use and disclosure Personal information if anyone
              decides to use our Services we.
            </p>
            <p>
              If you choose to use our Services, you agree to collection and use
              of information in connection with this policy. The personal
              information we collect is used to provide and improve the Service.
              We will not use or share your information to anyone except as
              described in the Policy this privacy book.
            </p>
            <strong>Service providers</strong>
            <p>
              We may hire third party companies and individuals for following
              reasons:
            </p>
            <ul>
              <li>To facilitate our Services;</li>
              <li>To provide Services on our behalf;</li>
              <li>To assist us in analyzing how our Services are used use.</li>
            </ul>
            <p>
              We would like to inform users of this Service that the parties
              This third party has access to your Personal Information. Reason
              is to perform the tasks assigned to them on our behalf. However,
              they are obligated not to disclose or use the information to any
              other purpose.
            </p>
            <strong>Protect</strong>
            <p>
              We appreciate your trust in providing give us your Personal
              Information, so we are trying attempt to use commercially
              acceptable means to protect that information. But remember there
              is no method transmission over the internet or any secure method
              of electronic storage and 100% reliable and we cannot guarantee
              its security its absolute.
            </p>
            <strong>Changes to this Privacy Policy</strong>
            <p>
              We may update the Privacy Policy from time to time mine.
              Therefore, you should periodically review this page for any any
              change. We will notify you of any changes by posting a new Privacy
              Policy on this page.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
