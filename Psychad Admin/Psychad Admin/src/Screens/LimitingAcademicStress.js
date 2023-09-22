import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockFforLimitingAcademicStress from '../components/PdfBlockFforLimitingAcademicStress';
import { Link } from 'react-router-dom';

const LimitingAcademicStress = () => {
    return (
      <div>
      <h1>Limiting Academic Stress!</h1>
      <div className='pdf-block-container'>
      <PdfBlockFforLimitingAcademicStress />
      </div>
      <div className="floating-button">
        <Link to="/fileUploadAcademicStress">
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </Link>
      </div>
    </div>
    );
};

export default LimitingAcademicStress;