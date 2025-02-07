import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';

import bnaizion from './Assets/sponsorsLogos/bnai_zion-modified.png';
import carmel from './Assets/sponsorsLogos/carmel-modified.png';
import haemek from './Assets/sponsorsLogos/haemek-modified.png';
import hililyafe from './Assets/sponsorsLogos/hilel_yafe-modified.png';
import medicine from './Assets/sponsorsLogos/medicine-modified.png';
import rambam from './Assets/sponsorsLogos/Rambam-modified.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import gili from './Assets/teami/Gili Gipsz.jpg';
import irina from './Assets/teami/irina.jpeg';
import mattan from './Assets/teami/Mattan Hoory.jpeg';
import or from './Assets/teami/Or.jpeg';
import yoel from './Assets/teami/Yoel_levy.jpg';

const TOP_SECTION = {
  TITLE: 'T2MED 2025',
  Typed_effect: [
    '3 days of innovation',
    'Solve medical challenges',
    'Transform healthcare'
  ],
  SHORT_DESCRIPTION:
    'Join us on 14-16 May 2025 at the Technion Faculty of Medicine for an interdisciplinary hackathon focused on medical innovation and entrepreneurship.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  MENTORS_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: 'https://forms.gle/iCerARQavxdMeMkp8'
};

const SOCIALS = {
  instagram:
    'https://www.instagram.com/t2med_?igsh=MW1kYXc3d3gxNmdhbw%3D%3D&utm_source=qr',
  discord: '',
  linkedin: 'https://www.linkedin.com/company/t2med/',
  facebook: 'https://www.facebook.com/share/15SdCSEa8a/?mibextid=wwXIfr',
  twitter: 'https://x.com/t2med3ds',
  devpost: '',
  email: 'mailto:t2medtechnion@gmail.com',
  mail: 't2medtechnion@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is T2MED?',
  LONG_DESCRIPTION:
    'T2MED is a unique 3-day hackathon happening on 14-16 May 2025 at the Technion Faculty of Medicine. Unlike other hackathons, T2MED is deeply rooted in clinical challenges, bringing together students from all faculties to collaborate with doctors, medical researchers, and healthcare professionals from top hospitals and clinics. Work alongside real clinicians, tackle pressing medical problems, and develop innovative solutions with direct guidance from experts. Gain hands-on experience, expand your network in both medicine and technology, and compete for incredible prizes!',
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
    day: '15-5-2025',
    events: [
      {
        title: 'Hackathon Continues',
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
        'The best project, judged by innovation, feasibility, and impact, will win the prizes worth ten thousand shekels, more prizes to be announced soon!'
    },
    {
      icon: <i className="second fas fa-4x fa-medal"></i>,
      type: 'Second Place',
      content:
        'The runner-up will receive an exciting prize package worth thousands of shekels, recognizing their outstanding creativity and execution. Additional surprises await!'
    },
    {
      icon: <i className="third fas fa-4x fa-award"></i>,
      type: 'Third Place',
      content:
        'A standout project will be recognized with the third-place prize worth hundereds of shekels.'
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
      name: 'Irina Shkalikov',
      role: 'Medicine and Biomedical Engineering',
      linkedin: 'https://www.linkedin.com/in/irina-shkalikov/',
      img: irina
    },
    {
      name: 'Gili Gipsz',
      role: 'Medicine and Biomedical Engineering | Co-founder & CTO at Speculate Gynecology',
      linkedin: 'https://www.linkedin.com/in/gili-gipsz/',
      img: gili
    },
    {
      name: 'Or Ginsburg',
      role: 'Medicine | Co-founder & CEO at Speculate Gynecology',
      linkedin: 'https://www.linkedin.com/in/or-ginsburg/',
      img: or
    }
  ],
  [
    //Array 2
    {
      name: 'Yoel Levy',
      role: 'Medicine and Biomedical Engineering',
      linkedin: 'https://www.linkedin.com/in/yoelevy/',
      img: yoel
    },
    {
      name: 'Mattan Hoory',
      role: 'Data Science and Biotechnology',
      linkedin: 'https://www.linkedin.com/in/mattan-hoory-2224b3239/',
      img: mattan
    }
  ]
];

const JudgesInfo = [
  [
    //   //Array 1
    //   {
    //     name: 'Rehan',
    //     role: 'Organizer',
    //     github: '',
    //     linkedin: '',
    //     img: irina
    //   },
    //   {
    //     name: 'Moon',
    //     role: 'Organizer',
    //     github: '',
    //     linkedin: '',
    //     img: moon
    //   },
    //   {
    //     name: 'Ryah Garcia',
    //     role: 'Organizer',
    //     github: '',
    //     linkedin: '',
    //     img: Ryah
    //   }
    // ],
    // [
    //   //Array 2
    //   {
    //     name: 'Lyanola',
    //     role: 'Organizer',
    //     github: '',
    //     linkedin: '',
    //     img: lyin
    //   },
    //   {
    //     name: 'Zoheb',
    //     role: 'Organizer',
    //     github: '',
    //     linkedin: '',
    //     img: zoha
    //   }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: medicine}, {src: carmel}, {src: rambam}], //Array 1
  [{src: hililyafe}, {src: haemek}, {src: bnaizion}] //Array 2
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
        content:
          'No worries! You can join a team and brainstorm ideas together during the hackathon.'
      },
      {
        label: 'I have more questions?',
        content: 'Reach us directly, we would be happy to help you.',
        link: {
          text: 'Send us an email',
          url: 'mailto:t2medtechnion@gmail.com'
        }
      },
      {
        label: 'Are there prizes?',
        content:
          'Yes! Winning teams will receive amazing prizes worth thousand of shekels, and participants have the opportunity to pitch their ideas to experts.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! All participants will receive exclusive T2MED swag.'
      }
    ]
  ]
];

export {
  calenderStartingDate,
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  MIDDLE_SECTION,
  Prizeinfo,
  schedule,
  SOCIALS,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
};
