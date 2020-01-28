import React from 'react';
import TrelloData from './trello.json';

function TrelloCards() {
  var cards = TrelloData.scenarios.map((scenario, i) => {
    return TrelloCard(scenario, i);
  });

  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

function TrelloCard(scenario, i) {
  // console.log(scenario);
  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg" key={i}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{scenario.name}</div>
        <p className="text-gray-700 text-base">
          {scenario.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{scenario.owner}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{scenario.bData ? "" : "Requires Data"}</span>
      </div>
    </article>
  );
}

export default TrelloCards;