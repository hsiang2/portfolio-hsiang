// import { Link } from 'react-router-dom'
// import Button from '../Button'
import styles from './projectItem.module.css'

const ProjectItem = ({ project }) => {
    return (
        <div className={styles.item}>
          
            {/* <div style={{width: "100%", height:"0px",position: "relative",paddingBottom:"56.250%"}}><iframe src={project.video} width="100%" height="100%" allowFullScreen allow="autoplay" style={{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden", border: "none"}}></iframe></div> */}
            {/* <video width="100%" src={project.video} autoPlay loop controls muted playsInline /> */}
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>{project.name}</h1>
                    <p className={styles.description}>{project.description}</p>
                </div>
                {/* <Link to={`/id/${project.id}`}>
                    <Button>查看更多</Button>
                </Link> */}
            </div>
            
        </div>
    )
    
}

export default ProjectItem