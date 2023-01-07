import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    console.log("TEST SENDING CONSOLE LOG\n")
  }

  return (
    <div>
      <Header title="🚀 Code To The 🌝" />
      <Header title="Ship Code To The Moon!" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}> Like! ({likes})</button>
    </div>
  );
}