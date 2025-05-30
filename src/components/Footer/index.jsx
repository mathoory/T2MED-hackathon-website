import {useEffect, useState} from 'react';
import {FOOTER, SOCIALS, TOP_SECTION} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import cross from './assets/cross.svg';
import facebook from './assets/facebook.png';
import instruction from './assets/Hackathon_instructions.pdf';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
//     <Row key={index}';
//------------------------------------------------------------------
import './style.scss';

// eslint-disable-next-line no-unused-vars
const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
          where we will be hosting PUBLIC workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} alt="close" />
    </div>
  );
};

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [template, setTemplate] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.facebook}>
              <img src={facebook} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
        </div>

        <div className="Register_a">
          {/* <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a> */}
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={SOCIALS.email}>
              <Btn
                type="sponsor_btn"
                class="Volunteer"
                overlay="Send an email"
              />
            </a>
          )}
        </div>
        <div className="footer_info">
          <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={'https://md.technion.ac.il/t2med/'}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Privacy Policy</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={instruction}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Hackathon Instructions</p>
            </a>
          )}
          <p>
            Designed by{' '}
            <a
              href="https://www.instagram.com/mariarchiedesign"
              target="_blank"
              rel="noreferrer"
            >
              Maria Shadrin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
