import "../styling/contact.css";

export default function () {
  return (
    <section className="section-contact">
      <div className="container-contact">
        <h2>Get in touch!</h2>
        <p>
          If you have any questions or need help, please fill out the form
          below. We do our best to respond within 1 business day.
        </p>

        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>
            <form>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input
                    className="input-contact"
                    type="text"
                    placeholder="John Doe"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input
                    className="input-contact"
                    type="text"
                    placeholder="+46"
                  ></input>
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    className="input-contact"
                    type="text"
                    placeholder="john.doe@gmail.com"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input
                    className="input-contact"
                    type="text"
                    placeholder="Enter a subject"
                  ></input>
                </div>
              </div>

              <label>Message</label>
              <textarea rows="5" placeholder="Your message"></textarea>
              <button className="submit-contact" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach us here</h3>

                <table>
                    <tr>
                        <td>Email</td>
                        <td>info@kyotohut.com</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>1234-567 890</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>123 This Street <br></br>
                            Lund, 222 22 </td>
                    </tr>
                </table>

          </div>
        </div>
      </div>
    </section>
  );
}
