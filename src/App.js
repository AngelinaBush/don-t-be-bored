
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import FaceOne from './face2.png'
import FaceTwo from './face1.png'
import Arrow from './arrow.png'

function App() {

  const [activity, setActivity] = useState('');
  const [image, setImage] = useState(true);


  const getActivity = useCallback(async() => {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    setActivity(data.activity)
  }, [])

  useEffect(() => {
    getActivity()
  }, [getActivity])

  const changeActivity = () => {
    if (!image) {
      getActivity();
    }
    else {
      setActivity('hmm...')
    }

    setImage((image) => !image)
  }

  return (
    <div className="App">


      <img src={Arrow} className='arrow' alt="arrow"/>
      <img src={Arrow} className='arrow2' alt="arrow"/>

      <div className='container'>
        <h1>If you are bored, click the button and get an idea to fill your free time.</h1>
      </div>

      <div  className='container'>
          <button className={image ? 'btn green' : 'btn red'} onClick={changeActivity}>
              {image ? <img src={FaceTwo} width="180px" alt="face"/>  : <img src={FaceOne} width="180px" alt="face"/>}
          </button>

      </div>

      <div className='container activity'>
          <h2> {activity}</h2>
      </div>

    </div>
  );
}

export default App;
