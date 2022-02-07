import React from "react";
import "./index.css"

function Modal({handleModalClose, description}) {
  return (
    <div className="modal-outer">
        <div className="modal modalShow" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Description</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}/>
            </div>    
            <div className="modal-body">
                <p>{description===''? "Nothing to show here." : description}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Modal;
