// filepath: c:\Workspace\T2MED\src\components/CongratsSection/index.jsx
import winnerPhoto from '../../Module/Assets/DSC_7129.JPG';
import './style.css';

export default function CongratsSection() {
  return (
    <div className="congrats-section-winners">
      <h1 className="congrats-title-winners">
        Congratulations to the winners of T2MED 2025:{' '}
        <span className="team-name">
          OvaSync
          <br />
        </span>
      </h1>
      <div className="congrats-photo-frame-winners">
        <img
          src={winnerPhoto}
          alt="OvaSync Team"
          className="congrats-photo-winners"
          style={{paddingTop: '18px', paddingBottom: '18px'}}
        />
      </div>
      <div className="winner-details">
        <h2>1st Place – OvaSync</h2>
        <p>
          <strong>Team Members:</strong> Nitzan Shaked, Dor Chen, Gal Hanuka,
          Noa Levi, Dina Alexandrovich
        </p>
        <p>A novel approach to support IVF treatment.</p>
      </div>
      <div className="other-winners">
        <div className="other-winner-block">
          <h3 className="second-place">2nd Place – UviGyn</h3>
          <p>
            <strong>Team Members:</strong> Lotem Bijaoui, Noa Lavy, Idan Tzachy,
            Roi Wayner
          </p>
          <p>Early detection technology for gynecological health.</p>
        </div>
        <div className="other-winner-block">
          <h3 className="third-place">3rd Place – Eff-x</h3>
          <p>
            <strong>Team Members:</strong> Amit Kaminer, Amit Kedem Weizman,
            Tuval Lipman, Noam Gati
          </p>
          <p>A digital tool to help prevent surgical equipment loss.</p>
        </div>
        <div className="other-winner-block">
          <h3 className="audience-choice">
            Audience Favorite Award In Memoery of{' '}
            <a
              href="https://remember.bio/he/remember_pages/%d7%a1%d7%a8%d7%9f-%d7%91%d7%9e%d7%99%d7%9c-%d7%90%d7%9c%d7%95%d7%9f-%d7%a1%d7%a4%d7%a8%d7%90%d7%99-%d7%96%d7%9c/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1a0dab',
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              Capt. Alon Safrai
            </a>{' '}
            – CervEase
          </h3>
          <p>
            <strong>Team Members:</strong> Omri Leshem, Lior Ravia, Tal Angel,
            Nicole Abramenkov, Hadas Levi
          </p>
          <p>An innovative device for safer gynecological procedures.</p>
        </div>
        <div className="other-winner-block">
          <h3 className="judges-mention">Judges' Special Mention – TRACEKIT</h3>
          <p>
            <strong>Team Members:</strong> Shai Karidi-Heller, Noa Braun, Gil
            Yeredor, Wassim Muosa, Talie Mordinson
          </p>
          <p>
            A trauma-informed at-home kit enabling safe collection and
            preservation of forensic evidence.
          </p>
        </div>
      </div>
      <p className="congrats-message-winners">
        Thank you to all participants, mentors, and sponsors for making T2MED
        2025 an unforgettable event.
        <br />
        See you next year for more innovation and inspiration!
      </p>
    </div>
  );
}
