import React from "react";
import "./Quizzies.css";

function Quizzies() {
  return (
    <div className="container mb-5" style={{ maxWidth: '800px', margin: 'auto' }}>
      <div className="row">
        <div className="col-12 ">
          <p className="fw-bold" style={{ fontSize: '20px' }}>
            1. Which of the following sentences is correct?
          </p>
          <div>
            <input type="radio" name="sentenceCorrectness" id="one" />
            <label htmlFor="one" className="box-q first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject" style={{ verticalAlign: 'middle' }}>
                  When it's raining, people's umbrellas are all you're going to see from above.
                </span>
              </div>
            </label>
            <input type="radio" name="sentenceCorrectness" id="two" />
            <label htmlFor="two" className="box-q second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject" style={{ verticalAlign: 'middle' }}>
                  When it's raining, people's umbrellas are all your going to see from above.
                </span>
              </div>
            </label>
            <input type="radio" name="sentenceCorrectness" id="three" />
            <label htmlFor="three" className="box-q third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject" style={{ verticalAlign: 'middle' }}>
                  When it's raining, peoples' umbrellas are all you're going to see from above.
                </span>
              </div>
            </label>
            <input type="radio" name="sentenceCorrectness" id="four" />
            <label htmlFor="four" className="box-q forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject" style={{ verticalAlign: 'middle' }}> None of the above </span>
              </div>
            </label>
          </div>
        </div>
        <div className="col-12">
          <p className="fw-bold mt-5" style={{ fontSize: '20px' }}>
            2. Complete the following sentence: Alice couldn't ______ the humiliation any longer and stormed out of the room red as a beet.
          </p>
          <div className="row">
            <div className="col-md-6">
              <input type="radio" name="sentenceCompletion" id="five" />
              <label htmlFor="five" className="box-q fifth w-100">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject">bear</span>
                </div>
              </label>
            </div>
            <div className="col-md-6">
              <input type="radio" name="sentenceCompletion" id="six" />
              <label htmlFor="six" className="box-q sixth w-100">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject">bare</span>
                </div>
              </label>
            </div>
            <div className="col-md-6">
              <input type="radio" name="sentenceCompletion" id="seven" />
              <label htmlFor="seven" className="box-q seventh w-100">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject">beet</span>
                </div>
              </label>
            </div>
            <div className="col-md-6">
              <input type="radio" name="sentenceCompletion" id="eight" />
              <label htmlFor="eight" className="box-q eighth w-100">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject"> None of the above </span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary q-btn px-4 py-2 fw-bold">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizzies;