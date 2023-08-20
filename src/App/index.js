import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import ShowName from '../components/ShowName';
import ShowFeature from '../components/ShowFeatures';
import PersonNumber from '../components/PersonNumber';


function App() {
  const [personData, setPersonData] = useState('');
  const [idPerson, setIdPerson] = useState('1');
  const [isLoading, setIsLoading] = useState(false);

  const getPersonData = async() => {
    setIsLoading(true)
    const result = await axios.get(`https://swapi.dev/api/people/${idPerson}/`);
    console.log(result);
    setPersonData(result.data);
    setIsLoading(false)
  };

  useEffect(() => {
    getPersonData();
  }, [idPerson]);

  return (
    <div className="App">
      <PersonNumber
        getPerson={setIdPerson}
        isLoad={isLoading}
      />
      <ShowName 
        name={personData.name}
      />
      <ShowFeature 
        features={personData}
      />
    </div>
  );
}

export default App;
