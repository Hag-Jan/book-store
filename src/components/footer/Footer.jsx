import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social-media">
                <div className="footer-social-media-text">Follow us on social media</div>
                <div className="footer-social-media-icons">
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'red' }} className="bi bi-instagram"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: '#2980b9' }} className="bi bi-facebook"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'red' }} className="bi bi-youtube"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'skyblue' }} className="bi bi-twitter"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'skyblue' }} className="bi bi-telegram"></i>
                    </div>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Usefull links</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Home</li>
                        <li className="footer-link">Authors</li>
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Contact Us</li>
                        <li className="footer-link">Register</li>
                    </ul>
                </div>
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Contact Information</h3>
                    <div className="footer-address-wrapper">
                        <div className="footer-address-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            USA - LA
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-telephone-fill"></i>
                            123-456-1234
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-envelope-fill"></i>
                            info@info.com
                        </div>
                    </div>
                </div>
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">About Us</h3>
                    <p className="footer-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique et ipsum fuga possimus impedit distinctio sed rem, beatae, voluptas esse error laboriosam nemo rerum corporis voluptates dignissimos minima, natus enim?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique et ipsum fuga possimus impedit distinctio sed rem, beatae, voluptas esse error laboriosam nemo rerum corporis voluptates dignissimos minima, natus enim?
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;