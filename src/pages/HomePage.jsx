import gsap from "gsap"
import { Tabs } from "antd"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectList from "../components/ProjectList"
import { useEffect } from "react"
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    
    const items = [
        {
          key: 'website',
          label: `Website`,
          children: <ProjectList type='website' />,
        },
        {
          key: 'mobile',
          label: `Mobile`,
          children: <ProjectList type='mobile' />,
        },
        {
          key: 'game',
          label: `Game`,
          children: <ProjectList type='game' />,
        },
        // {
        //   key: 'illustration',
        //   label: `Illustration`,
        //   children: <ProjectList type='illustration' />,
        // },
      ];

    useEffect(()=> {

        const ctx = gsap.context(() => {
            // 進場動畫（載入時執行一次）
            gsap.from("#titles h1", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
            })

            // 出場動畫（隨捲動）
            gsap.to("#titles", {
            y: -60,
            opacity: 0,
            scrollTrigger: {
                trigger: "#titles",
                start: "top top+=100", // header 高度後開始
                end: "bottom+=100 top", // 略往下滑就消失
                scrub: true,
                // markers: true
            }
            })
        })
        return () => ctx.revert()
    }, [])
      
      
    return(
        <div className="mainLayout">
            <Header />
            <div className="layoutContent">
                <div id="titles" className="container" style={{paddingLeft: '1.25rem', paddingRight: '1.25rem'}}>
                    <h1 style={{
                        // fontFamily: 'DM Serif Display, serif',
                        fontFamily: 'Cormorant, serif',
                        fontWeight: 'bold',
                        fontSize: '6rem',
                        opacity: '1'
                    }}
                        id='title1'
                    >
                        Hsiang² 
                    </h1>
                     <h1 style={{
                         fontFamily: 'Cactus Classical Serif, serif',
                        // fontFamily: 'Noto Serif TC, serif',
                        // fontWeight: 'bold', 
                        opacity: '0.5',
                        display: 'inline-block',
                        marginRight: '1rem'
                    }}
                    id='title2'
                    >相襄</h1>
                    
                    <h1 style={{
                        // fontFamily: 'Noto Serif TC, serif',
                        // fontWeight: 'bold', 
                        display: 'inline-block',
                        opacity: '0.5',
                        marginBottom: '7.5rem'
                    }}
                    id='title3'
                    > Portfolio</h1>
                </div>
                
                <Tabs
                    defaultActiveKey="website"
                    centered
                    items={items}
                    tabBarStyle={{
                        // color: '#BFC8E1',
                        // marginBottom: '6.5rem'
                    }}
                    destroyOnHidden
                />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default HomePage