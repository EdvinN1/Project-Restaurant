export default function() {
    return (
        <section>
        <div className="container-contact">
            <h2>Get in touch!</h2>
            <p>If you have any questions or need help, please fill out the form below. We do our best to respond within 1 business day.</p>
        </div>    
        <div className="contact-box">
            <div className="contact-left">
                <h3>Send your request</h3>
                <form>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="John Doe"></input>
                        </div>
                        <div className="input-group">
                            <label>Phone</label>
                            <input type="text" placeholder="+46"></input>
                        </div>        
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Email</label>
                            <input type="text" placeholder="john.doe@gmail.com"></input>
                        </div>
                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" placeholder="Enter a subject"></input>
                        </div>        
                    </div>
                </form>
            </div>
            <div className="contact-right">
                <h3>Reach us here</h3>
            </div>
        </div>
        </section>
    )
}