import { useState, useEffect } from "react";
import PersonTile from "./components/PersonTile";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function getPeople() {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: "GET",
      });
      const data = await result.json();
      setPeople(data);
    }
    getPeople()
  }, []);
  return (
    <div>
      {people.length === 0 ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {people.map((e) => (
            <PersonTile name={e.name} phone={e.phone} id={e.id} key={e.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;