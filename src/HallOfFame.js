import React from 'react'


import './HallOfFame.css'

const HallOfFame = ({ entries, reset }) => (
  <div className="hallOfFame">
    <p>
      Félicitation Vous avez gané en {entries} coup(s) 🎉🎉🎉
    </p>
    <p className="celebration">
      <button onClick={reset}>Reset</button>
    </p>
  </div>
)


export default HallOfFame

// == Internal helpers ==============================================