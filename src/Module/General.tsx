import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';

import biztec from './Assets/sponsorsLogos/biztec.png';
import bnaizion from './Assets/sponsorsLogos/bnai_zion-modified.png';
import carmel from './Assets/sponsorsLogos/carmel-modified.png';
import haemek from './Assets/sponsorsLogos/haemek-modified.png';
import hhi from './Assets/sponsorsLogos/hhi.png';
import hililyafe from './Assets/sponsorsLogos/hilel_yafe-modified.png';
import rambam from './Assets/sponsorsLogos/Rambam-modified.png';
import rappaport from './Assets/sponsorsLogos/rappaport.png';
import road2 from './Assets/sponsorsLogos/road2.png';
import rticc from './Assets/sponsorsLogos/rticc-logo.png';

import ami from './Assets/judgei/ami.jpg';
import avi from './Assets/judgei/avi.jpg';
import benny from './Assets/judgei/benny.jpg';
import eliezer from './Assets/judgei/eliezer.png';
import hadas from './Assets/judgei/hadas.jpeg';
import nissan from './Assets/judgei/nissan.jpg';
import ronya from './Assets/judgei/ronya.jpeg';
import yaakov from './Assets/judgei/yaakov.jpg';
import yaron from './Assets/judgei/yaron.jpg';
import yona from './Assets/judgei/yona.png';
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

// Prizees
import first from './Assets/prizesi/first.png';
import second from './Assets/prizesi/second.png';
import third from './Assets/prizesi/third.png';

const TOP_SECTION = {
  TITLE: 'T2MED 2025',
  Typed_effect: [
    'Thank you for joining us!',
    'Congratulations to all teams!',
    'See you in 2026!'
  ],
  SHORT_DESCRIPTION:
    'T2MED 2025 has concluded! Thank you to all participants, mentors, and sponsors for making it an unforgettable event. Stay tuned for next year’s hackathon – see you in 2026!',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  MENTORS_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: '' // Hide registration
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/t2med_',
  linkedin: 'https://www.linkedin.com/company/t2med/',
  facebook: 'https://www.facebook.com/t2med3ds/',
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
        title: 'Gathering & Refreshments',
        timings: '16:30 – 17:00',
        link: ''
      },
      {
        title:
          'Opening Talks (Auditorium): The T2MED Team – About T2MED and the orientation day',
        timings: '17:00 – 17:15',
        link: ''
      },
      {
        title:
          'Guest Talk (Auditorium): Dr. Shay Perek – Need-Based Innovation using the Biodesign Method',
        timings: '17:15 – 18:15',
        link: ''
      },
      {
        title:
          'Welcome Remarks (Food Hall): Prof. Yaron Har-Shai, Vice Dean for Strategic Development',
        timings: '18:30 – 18:45',
        link: ''
      },
      {
        title:
          'Round Tables (Food Hall): Team Building & Ideation – Participants and Mentors',
        timings: '18:45 – 19:45',
        link: ''
      },
      {
        title: 'Break',
        timings: '19:45 – 20:00',
        link: ''
      },
      {
        title: 'Pitches (Food Hall): Share your idea or challenge (3 min)',
        timings: '20:00 – 20:30',
        link: ''
      },
      {
        title:
          'Concluding Remarks & Online Check-In: Teams must confirm their registration',
        timings: '20:30',
        link: ''
      }
    ]
  },
  {
    day: '14-5-2025',
    events: [
      {
        title: 'Gathering',
        timings: '16:30 – 17:30',
        link: ''
      },
      {
        title: 'Opening Ceremony',
        timings: '17:30 – 18:15',
        link: ''
      },
      {
        title: 'Begin Working!',
        timings: '18:15',
        link: ''
      },
      {
        title: 'Brainstorming and Mentoring Block',
        timings: '18:30 – 20:30',
        link: ''
      },
      {
        title: 'Dinner',
        timings: '19:30',
        link: ''
      }
    ]
  },
  {
    day: '15-5-2025',
    events: [
      {
        title: 'Start Work + Breakfast',
        timings: '8:00 – 9:00',
        link: ''
      },
      {
        title: 'Morning Mentoring Session',
        timings: '9:00 – 11:30',
        link: ''
      },
      {
        title:
          'Lecture: "Medical Ethics and AI" – Salvatore Campisi-Pinto (PhD)',
        timings: '11:00 – 12:15',
        link: ''
      },
      {
        title: 'Lunch',
        timings: '13:30',
        link: ''
      },
      {
        title: 'Noon Mentoring Session',
        timings: '14:30 – 17:00',
        link: ''
      },
      {
        title: 'Yoga Break at "Pure Studio" Bat-Galim (limited spots)',
        timings: '15:30 – 17:00',
        link: ''
      },
      {
        title: 'Dinner',
        timings: '18:00',
        link: ''
      },
      {
        title: 'Evening Mentoring Session',
        timings: '18:00 – 20:00',
        link: ''
      },
      {
        title: '"How to Pitch" Workshop – Yael Katzman (Quatro)',
        timings: '19:00 – 20:30',
        link: ''
      },
      {
        title: 'Pitch Practice',
        timings: '20:30 – 22:00',
        link: ''
      }
    ]
  },
  {
    day: '16-5-2025',
    events: [
      {
        title: 'Final Work',
        timings: '8:00 – 10:15',
        link: ''
      },
      {
        title: 'Breakfast',
        timings: '9:00',
        link: ''
      },
      {
        title: 'Semi-finals',
        timings: '10:15 – 11:15',
        link: ''
      },
      {
        title: 'Finals',
        timings: '11:30 – 12:30',
        link: ''
      },
      {
        title: 'Judges’ Decisions & Lunch',
        timings: '12:30 – 13:30',
        link: ''
      },
      {
        title: 'Announcing the Winners & Final Ceremony',
        timings: '13:30 – 14:00',
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
      image: first,
      title: '1st Place'
    },
    {
      image: second,
      title: '2nd Place'
    },
    {
      image: third,
      title: '3rd Place'
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
      role: 'Biomedical and electrical engineering | Co-founder & CTO at Speculate Gynecology',
      linkedin: 'https://www.linkedin.com/in/gili-gipsz/',
      img: gili
    },
    {
      name: 'Or Ginsburg',
      role: 'Medicine and Biomedical Engineering | Co-founder & CEO at Speculate Gynecology',
      linkedin: 'https://www.linkedin.com/in/or-ginsburg/',
      img: or
    }
  ],
  [
    //Array 2
    {
      name: 'Yoel Levy',
      role: 'Medicine',
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
    //Array 1
    {
      name: 'Prof. Ami Aronheim',
      role: 'Dean, Ruth & Bruce Rappaport Faculty of Medicine, Technion',
      bio: 'Prof. Ami Aronheim is a leading molecular genetics researcher specializing in protein-protein interactions and signal transduction. With a Ph.D. in Biochemistry from the Weizmann Institute and postdoctoral training at UC San Diego, he established his laboratory in the Faculty of Medicine at the Technion in 1996, has published over 70 articles, and holds five patents. His work explores cancer-cardiac interactions, shedding light on disease progression. A longtime faculty member at the Technion, he previously served as Senior Vice Dean and, since 2023, has been the Dean of the Faculty of Medicine.',
      img: ami
    },
    {
      name: 'Dr. Avi Goldberg',
      role: 'CEO, Carmel Medical Center',
      bio: 'Dr. Avi Goldberg is a senior healthcare executive with extensive experience in hospital leadership, and health system management. He serves as CEO of Carmel medical center Since 2015, following his term as CEO of Yoseftal Hospital in Eilat. With an MPA from Harvard and an MHA from Ben-Gurion University, he specializes in strategic healthcare management and crisis response. He also lectures on healthcare management at the Technion and serves on Israel’s National Health Council.',
      img: avi
    },
    {
      name: 'Dr. Benyamine Abbou',
      role: 'Deputy Director, Hillel Yaffe Medical Center',
      bio: 'Dr. Abbou Benyamine is a seasoned healthcare executive and expert in general surgery with extensive experience in medical leadership and hospital management. He currently holds the position of Deputy Director at Hillel Yaffe Medical Center. With an MHA in Health Systems Management from BGU and advanced executive training from Tel Aviv University, he specializes in healthcare administration, strategic planning, and operational excellence.',
      img: benny
    }
  ],
  [
    //Array 2
    {
      name: 'Yaron Sheffer',
      role: 'Strategic & Innovation Director, Emek Medical Center',
      bio: 'A visionary leader with over 18 years of experience in healthcare innovation, strategic planning, and operational management. As Director of Strategy & Innovation at Emek Medical Center, he drives international partnerships, entrepreneurship, and hospital growth initiatives. Previously, he managed healthcare operations for Maccabi, overseeing large-scale medical teams and multimillion-dollar budgets. Passionate about digital health, he mentors startups and leads executive training programs. With a background in military medical training and an MBA in Nonprofit Management, he blends leadership, strategy, and hands-on execution to transform healthcare systems.',
      img: yaron
    },
    {
      name: 'Prof. Eliezer Shalev',
      role: 'President, Tel-Hai Academic College | Expert in Obstetrics & Gynecology',
      bio: 'Prof. Eliezer Shalev is a groundbreaking researcher and leader in obstetrics, gynecology, and fetal medicine, formerly heading the Ultrasound Unit at Sheba Medical Center (1988) And the Women & Maternity Division at HaEmek Medical Center (1989-2016). He served as Dean of the Technion Faculty of Medicine (2011–2016) and later Executive Pro-vice chancellor & Vice-Chancellor at Technion’s Guangdong campus in China. Since 2022, he has been President of Tel-Hai Academic College, leading its transition into the University of the Galilee. A recipient of the 2017 Lifetime Achievement Award in Medicine, he continues to pioneer research in childbirth and fertility. He is also the founder of the T2MED Hackathon, driving medical innovation.',
      img: eliezer
    },
    {
      name: 'Dr. Yona Vaisbuch',
      role: 'Ear & Skull Base Surgeon | Deputy Director, ENT & Surgical Division, Rambam | Head of Transformation | President, Biodesign Israel',
      bio: 'Dr. Yona Vaisbuch - Biodesign Israel founder and president. Dr. Vaisbuch is a graduate of the Sackler Faculty of Medicine at Tel Aviv University, Dr Vaisbuch specialized in otorhinolaryngology (ear, nose and throat medicine) at the Rabin Medical Center and underwent advanced training for ear and skull base surgery at Stanford University in California. He currently serves as a guest professor at Stanford and a specialist physician at Rambam Medical Center. He is the founder and former chairman of Mirsham, the Medical Interns’ Organization and a member of the Taub Center’s Health Committee. In addition, Dr. Vaisbuch serves as a medical advisor for medical startups and is a founding partner in a few medical ventures.',
      img: yona
    }
  ],
  [
    //Array 3
    {
      name: 'Nissan Elimelech',
      role: "Medtech serial entrepreneur, Augmedics' Founder & ex-CEO",
      bio: 'Nissan is a serial entrepreneur with two decades’ experience in various medical device markets and the inventor of 15 patents. He founded Augmedics, a MedTech company which develops and commercializes the xvision™ – The first Augmented-Reality Guidance System for spine surgery. Nissan served the company as its CEO for more than 7 years, raised $63m from top-tier US VCs, and led it from inception to a multi-million-dollar revenue organization with a full-scale US nationwide commercial team. Prior to Augmedics, he worked in Medtronic at the spine surgery unit, and in Neopharm at the general surgery unit. In addition, he co-founded and was the inventor of another medical device start-up, Medizn, which developed a smart surgical hernia mesh. Nissan is a Biomedical engineer and MBA graduate.',
      img: nissan
    },
    {
      name: 'Ronya Rubinstein',
      role: 'Entrepreneur, Endospot Founder & CEO',
      bio: 'Ronya Rubinstein is an entrepreneur with a passion for navigating the intersections of science, business, regulations, ethics, patents, legal,  reimbursement and people. Formerly, director of the R&D unit at Rambam hospital, Ronya has vast expertise in clinical trials, technology transfer and digital health, held various board positions including at Mego-Afkek and MindUp incubator. Ronya also serves as the head of the health and gender committee at the National Committee for advancing Women in Science.',
      img: ronya
    },
    {
      name: 'Yaakov Diminsky',
      role: 'CEO at Road2',
      bio: 'Yaakov Diminsky holds an MSc in Biomedical Engineering and an MBA from the Technion. He specializes in developing business and technological strategies for early-stage startups. Yaakov has a background in leading R&D for technologies that combine bio-sensing with artificial intelligence. He also lectures on business and technological development in the deep-tech field as part of startup acceleration programs.',
      img: yaakov
    }
  ],
  [
    //Array 4

    {
      name: 'Hadas Shachaf',
      role: 'Director of Pharmaceutical Services, Bnai Zion Medical Center',
      bio: 'Hadas Shachaf is the Director of Pharmacy Services at Bnei Zion Medical Center in Haifa. She focuses on improving medication safety and operational efficiency through pharmacy automation and cross-sector collaboration. In recent years, she has helped implement a centralized Unit Dose system and supported national and academic research on drug shortages and inventory management. Her work aims to combine innovation with practical solutions for public hospital settings.',
      img: hadas
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: carmel}, {src: haemek}, {src: hililyafe}], //Array 1
  [{src: rambam}, {src: bnaizion}, {src: road2}], //Array 2
  [{src: hhi}, {src: biztec}, {src: rticc}], //Array 3
  [{src: rappaport}] //Array 3
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
        label: 'What makes this hackathon special?',
        content:
          'T2MED is the only hackathon where cutting-edge medical innovation meets hands-on clinical expertise. Unlike other hackathons, we bring together the brightest minds from the faculty of medicine to collaborate with other Technion faculties. You’ll work directly with top physicians, clinical researchers, and hospital innovators from leading medical centers. Our expert mentors aren’t just tech specialists—they are practicing doctors, surgeons, and medtech pioneers who face real-world challenges every day. Plus, we have exclusive access to hospitals and specialized medtech professionals who will guide teams in developing solutions that can truly impact patient care. This is your chance to collaborate with the best in medicine, tech, and entrepreneurship, and turn your ideas into real, clinically viable solutions!'
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
        label: 'What will we do during the hackathon?',
        content:
          'During the hackathon, you will collaborate with a diverse team to tackle real-world medical challenges, develop innovative solutions, and create prototypes. You’ll receive mentorship from industry experts, gain hands-on experience with cutting-edge technologies, and pitch your ideas to a panel of judges.'
      }
    ],
    [
      {
        label: 'How many people can be in a team?',
        content:
          'Teams should have 4-5 members, including at least one medical student.'
      },
      {
        label: 'What if I don’t have a project idea?',
        content:
          'No worries! You can join a team and brainstorm ideas together during the hackathon.'
      },
      {
        label: 'Are there prizes?',
        content:
          'Yes! Winning teams will receive amazing prizes worth thousands of shekels, and participants have the opportunity to pitch their ideas to experts.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! All participants will receive exclusive T2MED swag.'
      },
      {
        label: 'I have more questions?',
        content: 'Reach us directly, we would be happy to help you.',
        link: {
          text: 'Send us an email',
          url: 'mailto:t2medtechnion@gmail.com'
        }
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
