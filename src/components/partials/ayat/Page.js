import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const AyatPage = props => {
  const { words, timecodes } = props;
  if (timecodes && words) {
    return (
      <div>
        <p>timecodes: {timecodes.jsonArray}</p>
        <p>words: {words.jsonArray}</p>
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
