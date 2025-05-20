import React from 'react';
import {Btn} from '../Landing/index.jsx';
import './style.css';

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({placeholder, formLink, content}) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Send an email" link={formLink} />
      </a>
    </div>
  );
};

const Member = ({info}: {info: any}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {github, role, name, img, linkedin, bio} = info;
  return (
    <div className="member">
      <img src={img} className="member-img" alt={name} />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      {bio && (
        <div className="bio-box">
          <p className="bio">{bio}</p>
        </div>
      )}
      <div className="social-links">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export {JoinTeam, Member};
