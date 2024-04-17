import React from 'react'
import { useTheme } from '../ThemeContext';
function Footer() {
    const { theme } = useTheme();
    return (
        <footer className={`py-4 mt-auto ${theme === 'light' ? 'bg-white' : 'bg-dark-blue text-white'}`}>
            <div className="container px-5">
                <div className="row align-items-center justify-content-center flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; Web Dev Sweta {new Date().getFullYear()}</div></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer