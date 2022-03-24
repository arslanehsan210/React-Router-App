
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
    const   {width}   = useWindowSize();
    // console.log('helo ',  s)
    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 762 ? 'mobile' : width < 978 ? 'tablet' : 'laptop'}
            
        </header>
    )
}

export default Header