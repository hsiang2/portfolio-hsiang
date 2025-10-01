
import { Icon } from "@iconify/react"
import { Col, Row } from "antd"
// import AboutDetail from "../components/AboutDetail"
import Footer from "../components/Footer"
import Header from "../components/Header"

const AboutPage = () => {
    return(
        <div className="mainLayout">
            <Header />
            <div className="layoutContent container">
                About
                {/* <AboutDetail /> */}
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default AboutPage