import arrows from '../img/arrows.png';
import { Button } from "./Button";
import  "./Title.css";
import { Button1 } from './Button1';





export function Header() {
    return (
        <section>
             <img className="footer-logo" src={arrows} alt="Logo" />
            < Button />
            <p className='title'>Sprint overview</p>
            < Button1 />


            
        </section>
    )
}