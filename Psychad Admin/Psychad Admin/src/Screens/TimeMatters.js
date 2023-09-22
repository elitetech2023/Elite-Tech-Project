import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockForTimeMatters from '../components/PdfBlockForTimeMatters'
import { Link } from 'react-router-dom';

const TimeMatters = () => {
    return (
      <div>
        <h1>Time Matters!</h1>
        <div className='pdf-block-container'>
        <PdfBlockForTimeMatters />
        </div>
        <div className="floating-button">
          <Link to='/fileupload'>
              <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          </Link>
        </div>
      </div>
    );
};

export default TimeMatters;