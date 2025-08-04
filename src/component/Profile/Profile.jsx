import './profile.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }

}

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "200%",

        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20
        }
    }
}



const Profile = () => {
    return <div className="profile">
        <div className="wrapper">
            <motion.div variants={textVariants} className='textContainerProfile' initial='initial' animate='animate'>
                <motion.h2 variants={textVariants}>AWALLUDIN SAIRAN</motion.h2>
                <motion.h1 variants={textVariants}>Data Analyst, Fullstack Developer & Mentor</motion.h1>
                <motion.div variants={textVariants} className='buttons'>
                    <motion.button variants={textVariants}>See The Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src="/scroll.png" alt="" animate='scrollButton' />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
            Learner Gamer Developer
        </motion.div>
        <motion.div className='imgContainer' whileHover={{ scale: 1.2 }}>
            <img src="/photo.png" alt="" />
        </motion.div>
    </div >
}

export default Profile;