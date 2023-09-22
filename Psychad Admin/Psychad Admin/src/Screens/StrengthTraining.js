import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockForStrengthAndTraining from '../components/PdfBlockForStrengthAndTraining';
import { Link } from 'react-router-dom';

const StrengthTraining = () => {
  return (
    <div>
      <h1>Strength Training!</h1>
      <div className='pdf-block-container'>
        <PdfBlockForStrengthAndTraining />
      </div>
      <div className="floating-button">
        <Link to='/fileuploadStrengthTraining'>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </Link>
      </div>
    </div>
  );
};

export default StrengthTraining;