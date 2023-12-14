import "./Help.css";

export const Help = () => {
  return (
    <div className="help-container">
      <section className="faq-section">
        <h3 className="faq-title">FAQ</h3>
        <p className="faq-description">
          Find the answers for the most frequently asked questions below
        </p>

        <div className="row">
          <div className="col-md-6 col-lg-4 faq-item">
            <h6 className="faq-question">
              <i className="far fa-paper-plane"></i> Are my medical records
              backed up in case of data loss?
            </h6>
            <p>
              <strong>
                <u>No compromise on reliability!</u>
              </strong>{" "}
              We've got you covered. Your medical records are regularly backed
              up and stored with redundancy. Count on us for the integrity and
              availability of your data, even in unforeseen circumstances.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 faq-item">
            <h6 className="faq-question">
              <i className="far fa-paper-plane"></i> How can I ensure the
              accuracy and completeness of my medical records?
            </h6>
            <p>
              <strong>
                <u>You're in control!</u>
              </strong>{" "}
              Take charge of your records. Easily review, update, and
              collaborate on your medical data. With our platform, you can
              ensure accuracy and completeness while actively managing your
              information.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 faq-item">
            <h6 className="faq-question">
              <i className="far fa-paper-plane"></i> Is my information shared
              with any third parties without my consent?
            </h6>
            <p>
              <strong>
                <u>Your privacy is sacred!</u>
              </strong>{" "}
              We prioritize your confidentiality. Your medical records remain
              confidential, and no information is shared with third parties
              unless expressly authorized by you.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 faq-item">
            <h6 className="faq-question">
              <i className="far fa-paper-plane"></i> What types of medical
              records can I store on this platform?
            </h6>
            <p>
              <strong>
                <u>Virtually all!</u>
              </strong>{" "}
              From doctor's notes to lab results, imaging reports,
              prescriptions, and vaccination records, our platform accommodates
              a diverse range of medical documents. Consolidate and organize
              your health-related data in one secure hub.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 faq-item">
            <h6 className="faq-question">
              <i className="far fa-paper-plane"></i> How secure are my medical
              records on this platform?
            </h6>
            <p>
              <strong>
                <u>Your security is our utmost priority!</u>
              </strong>{" "}
              We employ stringent encryption and industry-standard security
              measures to fortify your medical records. Rest assured, your
              sensitive information is shielded against unauthorized access.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 faq-item">
            <h6 className="faq-question">
              <i className="far fa-paper-plane"></i> Can I access my medical
              records from any device or location?
            </h6>
            <p>
              <strong>
                <u>Absolutely!</u>
              </strong>{" "}
              Our platform grants you seamless access to your medical records
              from any device connected to the internet. No matter where you
              are, your health information is readily available at your
              fingertips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
