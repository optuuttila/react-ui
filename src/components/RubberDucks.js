import React from 'react'

const RubberDucks = ({ rubberDucks }) => {
  return (
    <div>
      <center><h1>Rubber ducks list</h1></center>
      {rubberDucks.map((rubberDuck) => (
        <div className="card" key={rubberDuck.rubberDuckId}>
          <div className="card-body">
            <h2 className="card-title">{rubberDuck.name}</h2>
            <p className="card-text">Color: {rubberDuck.color}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default RubberDucks