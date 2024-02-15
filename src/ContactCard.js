import './App.css';
import github from './logos/github.png'
import instagram from './logos/instagram.png'
import linkedin from './logos/linkedin.png'
import mail from './logos/mail.png'

export const ContactCard = () => {
    return <div className="contactParent">
        <a target="_blank" href='https://github.com/Harshithalwan'>
            <img src={github}/>
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/harshithalwan/'>
            <img src={linkedin}/>
        </a>
        <a target="_blank" href='https://www.instagram.com/harshit_halwan/'>
            <img src={instagram}/>
        </a>
        <a target="_blank" href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=harshithalwan@gmail.com&tf=1'>
            <img src={mail}/>
        </a>
    </div>
}