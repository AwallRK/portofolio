import './Footer.scss';

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>

            <footer className="footer-container">
                <div className="footer-content">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Awalludin Sairan. All Rights Reserved.
                    </p>
                    <a href="#top" onClick={scrollToTop} className="footer-back-to-top">
                        Back to Top &uarr;
                    </a>
                </div>
            </footer>
        </>
    );
}