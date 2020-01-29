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
        {Description(scenario.description)}
      </div>
      {Tags(scenario.tags)}
    </article>
  );
}

function Description(aText) {
  var description = aText.map((desc, i) => {
    if (Array.isArray(desc)) {
      return List(desc, i);
    } else {
      return <p key={i} className="text-grey-700 text-base mb-4">{desc}</p>;
    }
  });

  return (
    <div>
      {description}
    </div>
  );
}

function List(List, key) {
  var items = List.map((item, i) => {
    return <li key={i}>{item}</li>
  });

  return(
    <ul key={key} className="list-disc list-inside mb-2">{items}</ul>
  );
}

function Tags(aTags) {
  var tags = aTags.map((tag, i) => {
    var styleClasses = "inline-block rounded-full px-3 py-1 text-sm font-semibold m-2 ";
    styleClasses += (i === 0) ? "bg-black-200 text-white-700" : "bg-gray-200 text-gray-700";
    return <span key={i} className={styleClasses}>{tag}</span>;
  });

  return (
    <div className="px-6 py-4">
      {tags}
    </div>
  );
}

export default TrelloCards;