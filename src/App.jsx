import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("10");

  const getData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/`
      );
      const responseData = await response.json();
      console.log(responseData);
      const filtredData = await responseData.results.filter(
        (item) => item.id <= input
      );
      setData(filtredData);
      console.log(filtredData);
    } catch (e) {
      console.error("ошибка", e);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, [input]);
  return (
    <div > 
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => getData()}>addded</button>
      {data.map((item) => (
        <div key={item.id} >
          <h2>{item.name}</h2>
          <p>{item.status}</p>
          <img src={item.image} alt="" style={{ width: 100 }} />
        </div>
      ))}
    </div>
  );
};

export default App;
