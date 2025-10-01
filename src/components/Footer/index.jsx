import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import styles from './footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
            <hr color='#5D718E' size='50px' style={{marginTop: '0', marginBottom: '0.4rem'}}/>
            <hr color='#5D718E' size='50px' style={{margin: '0'}}/>
            <div className={`container ${styles.content}`}>
                <Link to='/'>
                    <h1 className={styles.title}>Hsiang²</h1>
                </Link>
                <div>
                    <h3 className={styles.contactTitle}>Contact</h3>
                    <div className={styles.contactItem} style={{marginBottom: '1.4rem'}}>
                        <Icon icon='material-symbols:mail-outline' />
                        <p>hsiang2.tsai@gmail.com</p>
                    </div>
                    {/* <div className={styles.contactItem}>
                        <Icon icon='material-symbols:phone-android' />
                        <p>0929200289</p>
                    </div> */}
                </div>
            </div>
            <div className={styles.footerBottom}>
                <h4>© {currentYear} Hsiang</h4>
            </div>
        </footer>
    )
    
}

export default Footer