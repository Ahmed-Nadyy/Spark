import React from 'react'

function Feedback() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mx-auto " style={{ maxWidth: '700px' }}>
        <div className="card" >
          <div className="card-header bg-primary mb-5">
            <h5 className="card-title text-white mt-2 text-center" id="exampleModalLabel">Feedback request</h5>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
              <p>
                <strong>Your opinion matters</strong>
              </p>
              <p>
                Have some ideas how to improve our product?
                <strong> Give us your feedback.</strong>
              </p>
            </div>
            <hr />
            <form className="px-4 form-inline" onSubmit={handleSubmit}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <p className="text-center mb-4"><strong>Your rating:</strong></p>
                <div className="d-flex flex-row">
                  <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
                    <label className="form-check-label" htmlFor="radio3Example1">Very good</label>
                  </div>
                  <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
                    <label className="form-check-label" htmlFor="radio3Example2">Good</label>
                  </div>
                  <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
                    <label className="form-check-label" htmlFor="radio3Example3">Mediocre</label>
                  </div>
                  <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
                    <label className="form-check-label" htmlFor="radio3Example4">Bad</label>
                  </div>
                  <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
                    <label className="form-check-label" htmlFor="radio3Example5">Very bad</label>
                  </div>
                </div>
                <p className="text-center mt-4"><strong>What could we improve?</strong></p>
                {/* Message input */}
                <div className="form-outline mb-4">
                  <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""}></textarea>
                  <p className="text-center my-3"><strong>Your feedback</strong></p>
                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
