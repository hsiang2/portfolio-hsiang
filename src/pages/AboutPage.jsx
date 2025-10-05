
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
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <img src='/images/portrait.png' alt='portrait' width={150} />
                    <h2 
                    style={{
                            fontFamily: 'Cormorant, serif',
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            opacity: '1'
                        }}
                    >
                        Hsiang-Hsiang Tsai
                    </h2>
                </div>
              
              
                {/* <AboutDetail /> */}
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default AboutPage