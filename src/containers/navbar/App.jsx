import {useEffect, useRef, useState} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import technion100 from '../../Module/Assets/sponsorsLogos/technion100_medicine_eng.png';
import HomePage from '../Home/HomePage';
import logoClose from './assets/ham-c.svg';
import hamLogo from './assets/ham.svg';
import './styles.scss';

import {MdxContent} from '../Mdx';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(1, 41, 67);
    }
  }
`;

// const MdxContent = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: 'red'
//       }}
//     >
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>

//     </div>
//   );
// };

const NAVBAR = props => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      {/* Mobile logo, always visible */}
      <img className="mobile-logo" src={technion100} alt="Company Logo" />

      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className="links">Home</span>
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ</span>
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">Prizes</span>
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">Sponsors</span>
                </Link>
              </li>
              <li>
                <Link to={`#judges`}>
                  <span className="links">Judges</span>
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">Team</span>
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
                alt="Close menu"
              />
            </ul>
            <img
              className="company-logo"
              src={technion100}
              alt="Company Logo"
            />
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
          alt="Open menu"
        />
      </nav>

      <Switch>
        <Route path="/blog" exact={true}>
          <MdxContent />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
