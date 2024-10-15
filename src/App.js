import React, { useState } from 'react';
import './App.css';

const rewards = [
  { name: "Weapon", rarity: "Rare" },
  { name: "Consumable", rarity: "Common" },
  { name: "Material", rarity: "Common" }
];
class App extends React.Component {
  state = {
    name: "circle",
    animationDuration: "0s",
    rewardsCount: {},
    randomReward: null
  };

  startRotation = () => {
    const randomDuration = Math.floor(Math.random() * 10000) + 1;

    this.setState({
      name: "circle start-rotate",
      animationDuration: `1s`,
    });

    setTimeout(() => {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

      this.setState((prevState) => ({
        name: "circle start-rotate stop-rotate",
        randomReward,
        rewardsCount: {
          ...prevState.rewardsCount,
          [randomReward.name]: {
            count: (prevState.rewardsCount[randomReward.name]?.count || 0) + 1,
            rarity: randomReward.rarity,
          }
        }
      }));
    }, randomDuration);
  };

  render() {
    const { name, animationDuration, rewardsCount, randomReward } = this.state;

    return (
      <div>
        <div className="arrow"></div>
        <ul className={name} style={{ animationDuration: animationDuration }}>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$50</div>
          </li>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$20</div>
          </li>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$30</div>
          </li>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$60</div>
          </li>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$10</div>
          </li>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$40</div>
          </li>
          
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$30</div>
          </li>
          <li>
            <div className='text' contentEditable="false" spellCheck='false'>$25</div>
          </li>
        </ul>
        <div className="container">
          <button className='spin-button' onClick={this.startRotation}>SPIN</button>
        </div>
        {randomReward && (
          <div>
            <h2 className='reward-text'>You won: {randomReward.name} ({randomReward.rarity})</h2>
          </div>
        )}


        <table>
          <thead>
            <tr>
              <th>Reward</th>
              <th>Rarity</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(rewardsCount).map(([rewardName, { count, rarity }]) => (
              <tr key={rewardName}>
                <td>{rewardName}</td>
                <td>{rarity}</td>
                <td>{count}</td>
              </tr>
            ))}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
