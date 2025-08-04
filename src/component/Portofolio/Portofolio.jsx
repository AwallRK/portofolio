import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portofolio.scss";

// --- Data for the portfolio items ---
const items = [
    {
        id: 1,
        title: "Shiro Sushi POS System",
        img: "https://res.cloudinary.com/dqrpbn29z/image/upload/v1754325610/Screenshot_2025-08-04_at_23.39.48_n134sl.png",
        desc: "A full-stack web application for a sushi restaurant, including admin and user interfaces with role-based access, product management, and order tracking.",
        technologies: ["React", "Redux", "Tailwind CSS", "Express.js", "PostgreSQL"],
        link: "https://github.com/AwallRK/Shiro-Sushi",
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Kuro Rent Frontend App",
        img: "https://res.cloudinary.com/dqrpbn29z/image/upload/v1754325177/Screenshot_2025-08-04_at_23.32.12_jn9l7u.png",
        desc: "A responsive frontend app built with React and Vite for a rental platform. Features include seamless navigation, API integration, and smooth UX with modern build tools.",
        technologies: ["React", "Vite", "React Router", "Axios", "SweetAlert2"],
        link: "https://kuro-rent.web.app/pub",
        category: "Frontend",
    },
    {
        id: 3,
        title: "Decorient Web Admin",
        img: "https://res.cloudinary.com/dqrpbn29z/image/upload/v1754325278/Screenshot_2025-08-04_at_23.34.18_smxvzi.png",
        desc: "Admin dashboard for managing project updates with rich text editing, charts, carousels, and email notifications. Built with a modern Next.js stack.",
        technologies: ["Next.js", "MongoDB", "Radix UI", "Zod", "Tiptap"],
        link: "https://decorientpage.vercel.app/",
        category: "Admin Panel",
    },
    {
        id: 4,
        title: "AWS SaaS Analytics Dashboard",
        img: "https://res.cloudinary.com/dqrpbn29z/image/upload/v1754325415/1706005920825_1_jxz1gx.jpg",
        desc: "A data visualization dashboard analyzing AWS SaaS sales across industries and regions. Features time series analysis, cohort tracking, and profitability breakdowns.",
        technologies: ["Tableau", "Excel", "Power BI", "Figma", "Data Cleaning"],
        link: "https://www.linkedin.com/posts/awalludin-sairan_tableau-datavisualization-learninginprogress-activity-7155507463151120384-n7-o",
        category: "Analytics",
    },
];

// --- Single Portfolio Item Component ---
const Single = ({ item }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section className="portfolio-item">
            <div className="container">
                {/* Image Container */}
                <div className="image-container" ref={ref}>
                    <img src={item.img} alt={item.title} />
                </div>
                {/* Text Content Container with Parallax */}
                <motion.div className="text-container" style={{ y }}>
                    <h2>{item.title}</h2>
                    <span className="category">{item.category}</span>
                    <p>{item.desc}</p>
                    {/* Technology Tags */}
                    <div className="technologies">
                        {item.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="buttons">
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="button primary"
                        >
                            See Demo
                        </motion.a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- Main Portfolio Component ---
export default function App() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            {/* Sticky Header */}
            <div className="portfolio-header">
                <h1>Featured Works</h1>
                {/* Animated Progress Bar */}
                <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
            </div>
            {/* Map through items and render a Single component for each */}
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}
