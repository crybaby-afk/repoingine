import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch('https://troublemaker-git-main-crybabys-projects-3a3996be.vercel.app/bots')
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const handleAddBot = (bot) => {
    if (!yourArmy.some((armyBot) => armyBot.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const handleReleaseBot = (bot) => {
    setYourArmy(yourArmy.filter((armyBot) => armyBot.id !== bot.id));
  };

  const handleDischargeBot = (bot) => {
    fetch('https://troublemaker-git-main-crybabys-projects-3a3996be.vercel.app/bots', { method: 'DELETE' })
      .then(() => setBots(bots.filter((b) => b.id !== bot.id)))
      .then(() => setYourArmy(yourArmy.filter((armyBot) => armyBot.id !== bot.id)));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={yourArmy} onRelease={handleReleaseBot} onDischarge={handleDischargeBot} />
      <BotCollection bots={bots} onAddBot={handleAddBot} />
    </div>
  );
}

export default App;
