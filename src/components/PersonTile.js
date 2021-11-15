const PersonTile = ({ name, phone, id }) => {
  
    return (
      <div>
        <p>ID : {id}</p>
        <br />  
        <p>Name : {name}</p>
        <br />
        <p>Phone : {phone}</p>
      </div>
    );
  };
  
  export default PersonTile;