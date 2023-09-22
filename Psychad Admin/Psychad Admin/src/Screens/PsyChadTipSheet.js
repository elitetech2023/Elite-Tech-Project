import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PdfBlockFforPsychadTipsSheet from '../components/PdfBlockFforPsychadTipsSheet'
import { Link } from 'react-router-dom';

const PsyChadTipSheet = () => {
    return (
      <div>
      <h1>PsyChad Tip Sheet!</h1>
      <div className='pdf-block-container'>
      <PdfBlockFforPsychadTipsSheet />
      </div>
      <div className="floating-button">
        <Link to="/fileUploadTipSheet">
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </Link>
      </div>
    </div>
    );
};

export default PsyChadTipSheet;