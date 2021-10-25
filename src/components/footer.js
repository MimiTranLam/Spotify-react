import React from "react"
import logo from '../images/logo.png';

const Footer = () => {
    return <footer>
        <div className="f-container">
        <div className="row-1">
            <div className="row-1-left">
                <div id="col-left"><img src={logo} alt="logo" style={{width:"130px"}}></img></div>
                <div className="mid-cols">
                    <div className="col-title">Company</div>
                    <a href="#">About</a>
                    <a href="#">Jobs</a>
                    <a href="#">For the Record</a>
                </div>
                <div className="mid-cols">
                    <div className="col-title">Communities</div>
                    <a href="#">For Artists</a>
                    <a href="#">Developers</a>
                    <a href="#">Brands</a>
                    <a href="#">Investors</a>
                    <a href="#">Vendors</a>
                </div>
                <div className="mid-cols">
                    <div className="col-title">Useful Links</div>
                    <a href="#">Support</a>
                    <a href="#">Web Player</a>
                    <a href="#">Free Mobile App</a>
                    <a href="#">2020 Wrapped</a>
                </div>
            </div>
            <div className="row-1-right">
                <a id="ig-icon"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                <a id="tw-icon"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a id="fb-icon"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            </div>
        </div>

        <div className="row-2"><i class="globe-icon fas fa-globe-americas"></i>USA</div>

        <div className="row-3">
            <div className="row-3-left">
                <a href="#">Legal</a>
                <a href="#">Privacy Center</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookies</a>
                <a href="#">About Ads</a>
                <a href="#">Additional CA Privacy Disclosures</a>
            </div>
            <div id="row-3-right">© 2020 Spotify AB</div>
        </div>
        </div>
    </footer>
}

export default Footer;