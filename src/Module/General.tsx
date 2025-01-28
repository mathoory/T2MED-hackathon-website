import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'T2MED 2025',
  Typed_effect: ['3 days of innovation', 'Solve medical challenges', 'Transform healthcare'],
  SHORT_DESCRIPTION:
    'Join us on 14-16 May 2025 at the Technion Faculty of Medicine for an interdisciplinary hackathon focused on medical innovation and entrepreneurship.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  MENTORS_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://forms.gle/iCerARQavxdMeMkp8'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/t2med_?igsh=MW1kYXc3d3gxNmdhbw%3D%3D&utm_source=qr',
  discord: '',
  linkedin: 'https://www.linkedin.com/company/t2med/',
  facebook: 'https://www.facebook.com/share/15SdCSEa8a/?mibextid=wwXIfr',
  twitter: '',
  devpost: '',
  email: '',
  mail: ''
};

const MIDDLE_SECTION = {
  TITLE: 'What is T2MED?',
  LONG_DESCRIPTION:
    'T2MED is a thrilling 3-day hackathon happening on 14-16 May 2025 at the Technion Faculty of Medicine. It brings together students from all faculties to solve real-world medical challenges through workshops, hands-on mentorship, and competition. Collaborate with brilliant minds, gain insights from top-notch experts, and compete for amazing prizes!',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: false,
    src: ''
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.gle/iCerARQavxdMeMkp8'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 5,
  year: 2025
};

const schedule = [
  {
    day: '5-5-2025',
    events: [
      {
        title: 'Orientation Meeting',
        timings: '9:00 AM - 12:00 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '14-5-2025',
    events: [
      {
        title: 'Hackathon Kickoff',
        timings: '9:00 AM',
        link: ''
      }
    ]
  },
  {
    day: '16-5-2025',
    events: [
      {
        title: 'Final Presentations & Awards',
        timings: '3:00 PM - 6:00 PM',
        link: ''
      }
    ]
  }
];


/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'First Place',
      content:
        'The best project, judged by innovation, feasibility, and impact, will win the top prize.'
    },
    {
      icon: <i className="second fas fa-4x fa-medal"></i>,
      type: 'Second Place',
      content:
        'The second-best project will be rewarded for its exceptional contribution.'
    },
    {
      icon: <i className="third fas fa-4x fa-award"></i>,
      type: 'Third Place',
      content:
        'A standout project will be recognized with the third-place prize.'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a collaborative event where participants solve challenges and create innovative solutions over a limited period of time.'
      },
      {
        label: 'Who can participate?',
        content:
          'Students from all faculties at the Technion, including technology, sciences, medicine, and business.'
      },
      {
        label: 'Do I need a team to register?',
        content:
          'No, you can register individually and form a team at the orientation meeting on 5 May 2025.'
      },
      {
        label: 'How many people can be in a team?',
        content:
          'Teams should have 4-5 members, including at least one medical student.'
      }
    ],
    [
      {
        label: 'What if I don’t have a project idea?',
        content: 'No worries! You can join a team and brainstorm ideas together during the hackathon.'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly, we would be happy to help you.'
      },
      {
        label: 'Are there prizes?',
        content:
          'Yes! Winning teams will receive amazing prizes, and participants have the opportunity to pitch their ideas to experts.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! All participants will receive exclusive T2MED swag.'
      }
    ]
  ]
];

export {
  calenderStartingDate, FOOTER, frequentlyAskedQuestions, JudgesInfo, MIDDLE_SECTION, Prizeinfo, schedule, SOCIALS, sponsorLogos,
  TeamInfo, TOP_SECTION
};

