import { Tabs } from "antd"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectList from "../components/ProjectList"


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
        {
          key: 'illustration',
          label: `Illustration`,
          children: <ProjectList type='illustration' />,
        },
      ];
      
    return(
        <div className="mainLayout">
            <Header />
            <div className="layoutContent">
                <div className="container" style={{paddingLeft: '1.25rem', paddingRight: '1.25rem'}}>
                    <h1 style={{
                        // fontFamily: 'DM Serif Display, serif',
                        fontFamily: 'Cormorant, serif',
                        fontWeight: 'bold',
                        fontSize: '6rem',
                        
                    }}>
                        Hsiang² 
                    </h1>
                     <h1 style={{
                         fontFamily: 'Cactus Classical Serif, serif',
                        // fontFamily: 'Noto Serif TC, serif',
                        // fontWeight: 'bold', 
                        opacity: '0.5',
                        display: 'inline-block',
                        marginRight: '1rem'
                    }}>相襄</h1>
                    
                    <h1 style={{
                        // fontFamily: 'Noto Serif TC, serif',
                        // fontWeight: 'bold', 
                        display: 'inline-block',
                        opacity: '0.5',
                        marginBottom: '7.7rem'
                    }}> Portfolio</h1>
                </div>
                
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={items}
                    tabBarStyle={{
                        // color: '#BFC8E1',
                        // marginBottom: '6.5rem'
                    }}
                />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default HomePage