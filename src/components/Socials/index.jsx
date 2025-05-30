import {SOCIALS} from '../../Module/General';
import './style.css';

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
          <i className="fab fa-3x fa-instagram"></i>
        </a>
      </div>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
          <i className="fab fa-3x fa-linkedin-in"></i>
        </a>
      </div>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.facebook}>
          <i className="fab fa-3x fa-facebook"></i>
        </a>
      </div>
    </div>
  );
}
