import React from 'react';

function YourBotCard({ bot, onRelease, onDischarge }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => onRelease(bot)}>Release</button>
      <button onClick={() => onDischarge(bot)}>Discharge</button>
    </div>
  );
}

export default YourBotCard;
