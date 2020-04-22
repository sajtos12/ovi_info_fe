import React from 'react';

const Csoportok = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-body">
          <div className="title">Csoportok</div>
          <div className="columns is-centered">
            <div className="column is-half">
              <table className="table">
                <thead>
                  <tr>
                    <th>Csoport neve</th>
                    <th>Létszám</th>
                    <th>Szerkesztés</th>
                    <th>Törlés</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Csoportok;
