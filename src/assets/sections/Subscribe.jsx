export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="container">
                <div className="subscribe-content">
                    <div className="text">
                        <h5 style={{ color: "#1262AE",textTransform: "uppercase" }}>subscribe to our newsletter</h5>
                        <h6 style={{ color: "#434343" }}>Get weekly updates</h6>
                    </div>
                    <form className="subscribe-form">
                        <h5 style={{color:"#576074"}} className="h5Regular">Fill in your details to join the party!</h5>
                        <div className="input-fields">
                            <input type="name" placeholder="Your name" required />
                            <input type="email" placeholder="Email address" required />
                        </div>
                        <div className="button">
                            <button>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}