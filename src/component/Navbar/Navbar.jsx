import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'
const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />
            <div className='wrapper'>
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}><motion.a href="https://www.linkedin.com/in/awalludin-sairan/">Mashirou Dev</motion.a></motion.span>
                <div className='social'>

                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://www.instagram.com/leixiwang/"><img src="/instagram.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://www.linkedin.com/in/awalludin-sairan/"><img src="https://i.pinimg.com/564x/db/c3/94/dbc394d8c833cd0780797758a9ed264e.jpg" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://github.com/AwallRK" style={{ width: '20px', height: '20px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREZqjWyJx235EV6pe-6GJDN7tFYaT6b-NWE_wSkjWe8VlKj_FHgx86keQjwnGTnEk24I&usqp=CAU" alt="" /></motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar