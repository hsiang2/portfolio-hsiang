
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
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    <img src='/images/portrait.png' alt='portrait' width={150} />
                    <div style={{
                        maxWidth: '40rem'
                        }}
                    >
                        <h2 
                        style={{
                                fontFamily: 'Cormorant, serif',
                                fontWeight: 'bold',
                                fontSize: '2rem',
                            }}
                        >
                        Hsiang-Hsiang Tsai
                    </h2>
                    <p>MSc Computer Science student with a background in digital design. Skilled in front-end development using React.js and Swift, with experience in full-stack web development. Interested in developing applications with a focus on user experience and design.</p>
                </div>
                    
                </div>
                
              
                {/* <AboutDetail /> */}
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default AboutPage