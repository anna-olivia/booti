import colors from '../styles/Colors.module.css';

const Footer = () => {
    return (
        <footer className={`container-fluid text-light d-flex justify-content-center pt-2 ${colors.customBg}`}>
            <p> Ich bin ein footer &copy; </p>
        </footer>
    ) 
}

export default Footer;