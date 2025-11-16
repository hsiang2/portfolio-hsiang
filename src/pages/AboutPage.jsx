
// import { Icon } from "@iconify/react"
// import { Col, Row } from "antd"
// import AboutDetail from "../components/AboutDetail"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
    const [imgLoaded, setImgLoaded] = useState(false)
    useEffect(()=> {
         if (!imgLoaded) return

        const ctx = gsap.context(() => {
            // 進場動畫（載入時執行一次）
            gsap.from("#about", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
            })

            // // 出場動畫（隨捲動）
            // gsap.to("#about", {
            // y: -60,
            // opacity: 0,
            // scrollTrigger: {
            //     trigger: "#about",
            //     start: "top top+=100", // header 高度後開始
            //     end: "bottom+=100 top", // 略往下滑就消失
            //     scrub: true,
            //     // markers: true
            // }
            // })
        })
        return () => ctx.revert()
    }, [imgLoaded])

    return(
        <div className="mainLayout">
            <Header />
            <div className="layoutContent container">
                <div 
                id="about"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    opacity: imgLoaded ? 1 : 0, 
                }}>
                    <img src='/images/portrait.png' alt='portrait' width={150} 
                        onLoad={() => setImgLoaded(true)}
                    />
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