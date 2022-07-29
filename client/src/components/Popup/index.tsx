import React from "react";
import '../../scss/Styles/Popup.scss';
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'
 
const Popup = ({handleClose, feedbackMessage}: any) => {
  return (
    <div className="popup" onClick={handleClose}>
        <div className="popup__popupInner">
          {feedbackMessage === 200 ?
            (<div>
                <p className="popup__message">Your feedback has been sent succefully</p>
                <p className="popup__message"><AiFillCheckCircle fontSize={50} color='green'/></p>
            </div>)
          : (<div>
                <p className="popup__message">There was an error in sending your feedback</p>
                <p className="popup__message"><MdCancel fontSize={50} color='red'/></p>
            </div>)}    
        </div>
    </div>
  );
};
 
export default Popup;