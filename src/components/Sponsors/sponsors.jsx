import {useEffect, useRef, useState} from 'react';
import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  const {srcx, altText} = props;

  const imageRef = useRef(null);

  // Function to determine if an image is square or rectangular
  const isSquareOrRectangular = image => {
    if (image) {
      const {naturalWidth, naturalHeight} = image;
      const aspectRatio = naturalWidth / naturalHeight;

      if (aspectRatio >= 0.95 && aspectRatio <= 1.2) {
        return 'square';
      } else if (aspectRatio > 1) {
        return 'rectangular';
      } else {
        return 'square';
      }
    }
    return 'square';
  };

  const [imageType, setImageType] = useState('square');

  useEffect(() => {
    const img = imageRef.current;
    if (img && img.complete) {
      setImageType(isSquareOrRectangular(img));
    }
  }, [srcx]);

  return (
    <div className="Sponsor">
      <img ref={imageRef} src={srcx} alt={altText} className={imageType} />
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring?</h3>
      <a href={SOCIALS.email}>
        <Btn
          className="sponsor_btn"
          type="Sponsor us"
          overlay="Send an email"
        />
      </a>
    </div>
  );
}

export {Sponsor, SponsorsHead, SponsorUS};
