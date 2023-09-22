import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockFforLackOfMotivation from '../components/PdfBlockFforLackOfMotivation';
import { Link } from 'react-router-dom';

const LackofMotivation = () => {
  return (
    <div>
      <h1>Lack of Motivation!</h1>
      <div className='pdf-block-container'>
        <PdfBlockFforLackOfMotivation />
      </div>
      <div className="floating-button">
        <Link to="/fileUploadMotivation">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </Link>
      </div>
    </div>
  );
};

export default LackofMotivation;