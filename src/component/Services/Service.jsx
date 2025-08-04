import { useRef } from 'react'
import './service.scss'
import { motion, useInView } from 'framer-motion'


const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100
    },
    animation: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Service = () => {
    const ref = useRef()
    const inView = useInView(ref, { margin: '-100px' })


    return (
        <motion.div className="service" variants={variants} initial="initial" ref={ref}
            whileInView={'animation'}>
            <motion.div className="textContainer" variants={variants} >
                <p>I believe in the power of continuous learning
                    <br />
                    I am committed to staying updated with the latest advancements in technology.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    <img src="https://cdn.elearningindustry.com/wp-content/uploads/2021/11/Animated-Video-Characters-In-eLearning-7-Tips.jpg" alt="" />

                </div>
                <div className="title text">

                    <p>I&#39;m a full stack developer with experience in the EdTech and training industries. I&#39;ve worked on web apps, helped build learning materials, and supported teams in solving real problems. I mainly use JavaScript, Python, and tools like React, Vue, and PostgreSQL. I&#39;m always trying to learn, improve, and build things that are useful for others.</p>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants} >

                <motion.div className="box" whileHover={{ backgroundColor: 'white', color: 'black' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" alt="Developer Icon" className="icon" />
                    <h2 style={{ textAlign: 'center' }}>Developer</h2>
                    <p>I build fullstack applications with clean code, performance in mind, and modern architecture.</p>
                    <p style={{ color: 'purple' }}>Tools I use:</p>
                    <ul>
                        <li>ReactJS, NextJS, VueJS</li>
                        <li>Node.js, Express.js</li>
                        <li>PostgreSQL, MongoDB</li>
                        <li>Tailwind CSS, Bootstrap</li>
                        <li>REST API, GraphQL, Redis</li>
                    </ul>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: 'white', color: 'black' }}>
                    <img src="https://cdn-icons-png.freepik.com/512/5145/5145822.png" alt="Analyst Icon" className="icon" />
                    <h2 style={{ textAlign: 'center' }}>Analyst / Strategist</h2>
                    <p>I analyze problems and connect business with technology.</p>
                    <p style={{ color: 'purple' }}>Tools & Experience:</p>
                    <ul>
                        <li>Power BI, Tableau, Excel</li>
                        <li>Financial reporting & budgeting</li>
                        <li>PLN Coop tax resolution</li>
                        <li>AWS SaaS dashboard analytics</li>
                    </ul>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: 'white', color: 'black' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png" alt="Mentor Icon" className="icon" />
                    <h2 style={{ textAlign: 'center' }}>Mentor / Educator</h2>
                    <p>I design learning paths and help others grow through structured teaching.</p>
                    <p style={{ color: 'purple' }}>Experience includes:</p>
                    <ul>
                        <li>Fullstack Instructor at Hacktiv8</li>
                        <li>Curriculum Developer for B2B</li>
                        <li>100+ students mentored</li>
                        <li>2.5+ years of teaching</li>
                    </ul>
                </motion.div>

            </motion.div>
        </motion.div >
    )
}

export default Service;