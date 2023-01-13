import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Footer({ footer_text: text }) {
  return <h4>{text ? text : "Default footer"}</h4>;
}

export default function HomePage() {
  const scientists = [
    {
      name: "Ada Lovelace",
      role: "creating the first computer program.",
    },
    {
      name: "Grace Hopper",
      role: "inventing computing methods and devices, like the compiler.",
    },
    {
      name: "Margaret Hamilton",
      role: "developing programs that influence how today's computers work.",
    },
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    console.log("TEST SENDING CONSOLE LOG\n");
    scientists.forEach((scientist) =>
      console.log(`${scientist.name}: ${scientist.role}\n`),
    );
  }

  return (
    <>
      <div>
        <Header title="🚀 Code To The 🌝 !" />
        <ul>
          {scientists.map((scientist) => (
            <li key={scientist.name}>
              {scientist.name} was known for {scientist.role}
            </li>
          ))}
        </ul>
        <button onClick={handleClick}> Like! ({likes})</button>
        <Footer footer_text="Shipped Code To The Moon!" />
      </div>
    </>
  );
}
