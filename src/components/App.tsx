import React, { useState, useEffect } from 'react';
import { GraphComponent } from './GraphComponent';
import { FilterComponent } from './FilterComponent';
import axios from 'axios';


function App() {
  const [link, setLink] = useState('http://api.coindesk.com/v1/bpi/historical/close.json' )
  const [ infoData, setInfoData ] = useState({})
  const [ newArrData, setNewArrData] = useState({})
  const [ arrayData, setArrayData ] = useState({})

  useEffect(() => {
    axios.get(link)
    .then((response) => {
            setInfoData({...response.data[`bpi`]})
            setNewArrData({...infoData})
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        setArrayData(Object.entries(infoData))
    }, [infoData])

  return (
    <div>
        <FilterComponent 
        infoData={infoData}
        setLink={setLink}
        />
        <GraphComponent arrayData={infoData}/>
    </div>
  );
}

export default App;
