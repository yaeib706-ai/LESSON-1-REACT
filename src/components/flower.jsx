import React from 'react';

const Flower = (props) => {

 
const flowerName = props.flowerName?props.flowerName :"ורד";
const petalColor = props.petalColor ?props.petalColor : "red";
const leafColor = props.leafColor ?props.leafColor : "green";

 
  const flowerStyle = {
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  backgroundColor: petalColor,
color: leafColor,

    textAlign: 'center'
  };

  
  const petalStyle = {
     
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  const leafStyle = {

    fontSize: '14px',
    fontStyle: 'italic'
  };
    const handleClick = () => {
    alert(`אני פרח מסוג ${flowerName}`);
  };

  return (
  <div style={flowerStyle} onClick={handleClick}>

      <h2>פרטים על הפרח</h2>
      {/* הצגת המשתנים המעוצבים */}
      <p>
        <strong>{flowerName}</strong> שם הפרח:
      </p>
      <p style={petalStyle}>
        {petalColor} צבע עלי הכותרת:
      </p>
      <p style={leafStyle}>
       {leafColor} צבע העלה המרכזי: 
      </p>
    </div>
  );
};

export default Flower;