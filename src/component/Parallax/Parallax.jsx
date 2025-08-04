import { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'


const Parallax = ({ type }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const ygBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const ygText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])

    return (
        <div className="parallax"
            ref={ref}
            style={{
                background: type === 'services'
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)"
            }}>
            <motion.h1 style={{ y: ygText }}>{type === 'services' ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div style={{ y: ygBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})` }} className="planets"></motion.div>
            <div className="mountains"></div>
            <motion.div style={{ x: ygBg }} className="stars"></motion.div>
        </div>

    )
}

export default Parallax 