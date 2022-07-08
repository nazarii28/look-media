import React from 'react';
import classes from './History.module.sass'
import TrackList from "../../components/TrackList";
import {useSelector} from "react-redux";

const History = () => {
  const {history} = useSelector(state => state.history)

  return (
    <div>
      <h1>History</h1>
      <TrackList songs={history}/>
    </div>
  );
};

export default History;