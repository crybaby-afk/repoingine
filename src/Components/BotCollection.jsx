import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onAddBot }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onAddBot={onAddBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
