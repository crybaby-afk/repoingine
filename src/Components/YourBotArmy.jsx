import React from 'react';
import YourBotCard from './YourBortCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div>
        <h2>Your Bot Army</h2>
        <div className="bot-army">
        {army.map((bot) => (
          <YourBotCard key={bot.id} bot={bot} onRelease={onRelease} onDischarge={onDischarge} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
