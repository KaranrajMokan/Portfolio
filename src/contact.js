import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons'



library.add(fab,faCertificate,faEnvelope);

export default function Contact(){

    function hello(e){
        e.target.style.backgroundSize = '100% 88%';
    }

    function bye(e){
        e.target.style.backgroundSize = '';
        
    }

    return(

    <div>
        
        <br/><br/><br/><br/><br/><br/>
        <div className="bod1">
            <div className="mar1">
                <div className="mar2">
                <span className="underline--magical" onMouseEnter={hello} onMouseLeave={bye}>Contact ME</span>
                </div>
            </div>
            <br/><br/><br/>
            <div className="unq_btn">
                <a href="mailto:karanrajmokan@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x gmail"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="gmail_color"> <FontAwesomeIcon icon={faEnvelope} /> </i>
                    </span>
                </a>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://t.me/SlytherinHere" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x tele"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="tele_color"> <FontAwesomeIcon icon={['fab','telegram-plane']} /> </i>
                    </span>
                </a>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://github.com/KaranrajMokan" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x github"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="github_color"> <FontAwesomeIcon icon={['fab','github']} /> </i>
                    </span>
                </a>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://www.linkedin.com/in/karanraj-mokan-b37a63171/" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x linkedin"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="linkedin_color"> <FontAwesomeIcon icon={['fab','linkedin-in']} /> </i>
                    </span>
                </a>
                <br/><br/>
                &nbsp;Mail 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Telegram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Github 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn
                <br/>
                <br/><br/><br/>
                <br/>
                <a href="https://wa.me/9025224063" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x wapp"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="wapp_color"> <FontAwesomeIcon icon={['fab','whatsapp']} /> </i>
                    </span>
                </a>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://twitter.com/karanrajmokan" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x twitter"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="twitter_color"> <FontAwesomeIcon icon={['fab', 'twitter']} /> </i>
                    </span>
                </a>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://www.instagram.com/_karanrajm_/" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x insta"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="insta_color"> <FontAwesomeIcon icon={['fab', 'instagram']} /> </i>
                    </span>
                </a>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://www.facebook.com/karanraj.mokan" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-layers fa-fw">
                        <i className="fa fa-stack-2x fb"> <FontAwesomeIcon icon={faCertificate} /> </i>
                        <i className="fb_color"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /> </i>
                    </span>
                </a>
                <br/><br/>
                <div className="contro">Whatsapp
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Twitter 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Instagram 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Facebook
                </div>
            </div>
        </div>
        <br/><br/><br/>
    </div>
    );
}