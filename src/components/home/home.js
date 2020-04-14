import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.loginReducer.user);
  const kindergarten = useSelector((state) => state.loginReducer.kindergarten);

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="columns">
          <div className="column">
            <div className="title">Főoldal</div>
            <div className="subtitle">Óvoda: {kindergarten.name}</div>
            <div className="subtitle">OM: {kindergarten.om}</div>
          </div>
          <div className="column">
            <div className="title">Bejelentkezve</div>
            <div className="subtitle">Név: {user.name}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
