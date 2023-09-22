import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockFforDepression from '../components/PdfBlockFforDepression';
import { Link } from 'react-router-dom';

const Depression = () => {
    return (
      <div>
        <h1>Depression!</h1>

        <div className='pdf-block-container'>
        <PdfBlockFforDepression />
        </div>

        <div className="floating-button">
          <Link to='/fileuploadDepression'>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          </Link>
        </div>

      </div>
    );
};

export default Depression;