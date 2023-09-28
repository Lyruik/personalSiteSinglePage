//import

export default function Infobox() {
  const infoDump = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor mollitia autem voluptatum neque repellendus iste debitis aliquid, necessitatibus beatae corporis distinctio unde, voluptatibus assumenda dignissimos sunt illum, at quibusdam.",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat blanditiis voluptatum a ratione harum distinctio obcaecati! Minus consequuntur officia magnam voluptas, molestias corporis iste? Velit impedit consequuntur nam sunt!",
    },
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ex veniam ipsa fugit assumenda iure recusandae odit perferendis, ad laboriosam corporis accusantium hic! Officia omnis iste facere officiis, animi consequatur!",
    },
  ];

  return (
    <div id="infoTextBox">
      {infoDump.map((info, idx) => {
        return (
          <p key={`infobox${idx}`} className="infoText" id={`infoTextId${idx}`}>
            {info.text}
          </p>
        );
      })}
    </div>
  );
}
