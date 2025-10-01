// import styles from './projectList.module.css'

import ProjectItem from "../ProjectItem"
import projects from '../../json/projects.json'
import styles from './projectList.module.css'

const ProjectList = ({ type }) => {
    const targetProjects = projects.filter((project) => project.category === type)
    
    return (
        <div className={styles.background}>
            {targetProjects.map((project) => 
                <ProjectItem key={project.id} project={project}  />
            )}
        </div>
    )
    
}

export default ProjectList