// import styles from './projectList.module.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectItem from "../ProjectItem"
import projects from '../../json/projects.json'
import styles from './projectList.module.css'
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const ProjectList = ({ type }) => {
    const targetProjects = projects.filter((project) => project.category === type)

    const sectionRef = useRef(null)
    const trackRef = useRef(null)


    useEffect(()=> {
        const section = sectionRef.current
        const track = trackRef.current

        //  const bg = section
         
        // track 總寬度 - 視窗寬度 = 應該水平移動的距離
        const totalX = track.scrollWidth - section.clientWidth

        gsap.to(track, {
            x: -totalX,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top+=100",
                end: () => `+=${totalX}`,
                pin: true,         // 固定在視窗內
                scrub: 0.3,        // 加上慣性，讓它滑順
                anticipatePin: 1,  // 避免 pin 卡頓
                invalidateOnRefresh: true,
                //  markers: true,     

                // onUpdate: (self) => {
                //        bg.style.backgroundPositionX = `${-totalX * self.progress}px`
                // }
            }
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())

    }, [])
    
    return (
        // <div className={styles.background}>
            <section ref={sectionRef} className={styles.section}>
           
                    <div ref={trackRef} className={styles.track}>
                        {targetProjects.map((p) => 
                            // <div  className={styles.item}>
                                <ProjectItem project={p} key={p.id}  />
                            // </div>
                            
                        )}
                    </div>
             
               
            </section>
        // </div>
    )
    
}

export default ProjectList