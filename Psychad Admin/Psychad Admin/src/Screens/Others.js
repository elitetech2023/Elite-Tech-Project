import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockforOthers from '../components/PdfBlockforOthers';
import { Link } from 'react-router-dom';

const Others = () => {
    return (
      <div>
      <h1>Others!</h1>
      <div className='pdf-block-container'>
      <PdfBlockforOthers />
      </div>
      <div className="floating-button">
        <Link to="/fileUploadOthers">
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </Link>
      </div>
    </div>
    );
};

export default Others;