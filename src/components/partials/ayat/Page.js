import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./Page.css";

const AyatPage = props => {
  let { words, timecodes } = props;
  if (timecodes && words) {
    words = JSON.parse(words.jsonArray.replace(/'/g, '"'));
    console.log("words", words);
    timecodes = JSON.parse(timecodes.jsonArray.replace(/'/g, '"'));
    console.log("timecodes", timecodes);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>word</th>
              <th>start</th>
              <th>end</th>
            </tr>
          </thead>
          <tbody>
            {words.map((elem, index) => {
              return (
                <tr key={index} style={{ direction: "ltr" }}>
                  <td className="arabicText">{elem}</td>
                  <td>
                    <input type="number" step="0.1" min="0" value={timecodes[index][2]} />
                  </td>
                  <td>
                    <input type="number" step="0.1" min="0" value={timecodes[index][3]} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const recitationSuraAyatId = ownProps.match.params.id; // id = 14002255, 14 - recitationId, 002 - suraNum, 255 - ayatNum

  const timecodesCollection = state.firestore.data.timecodes;
  const wordsCollection = state.firestore.data.words;

  const timecodes = timecodesCollection ? timecodesCollection[recitationSuraAyatId] : null;
  const suraAyatId = recitationSuraAyatId.substr(-6); //last 6 symbols of id, without recitationId
  const words = wordsCollection ? wordsCollection[suraAyatId] : null;

  return { timecodes, words };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "timecodes" }]),
  firestoreConnect([{ collection: "words" }])
)(AyatPage);
