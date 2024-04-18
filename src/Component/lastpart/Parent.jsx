import Children1 from "./Children1";
import Children2 from "./Children2";
import Children3 from "./Children3";
import Children4 from "./Children4";
import imgtest from "./IMG&ICN/WhatsApp Image 2023-02-21 at 21.37.34.jpeg";
import stars from "./IMG&ICN/stars.png";

export default function Parent() {
  return (
    <>
      <Children1 />
      <Children2 />
      <div style={{ backgroundColor: "#D9ECFF" }}>
        <Children3 />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <Children4
              Discraption="Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur."
              Name="Ahmed 3tef"
              img={imgtest}
              icon={stars}
            />
            <Children4
              Discraption="Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur."
              Name="Ahmed moh"
              img={imgtest}
              icon={stars}
            />
            <Children4
              Discraption="Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur."
              Name="Ahmed 3tef"
              img={imgtest}
              icon={stars}
            />
            <Children4
              Discraption="Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur."
              Name="Ahmed 3tef"
              img={imgtest}
              icon={stars}
            />
            <Children4
              Discraption="Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur."
              Name="Ahmed 3tef"
              img={imgtest}
              icon={stars}
            />
          </div>
        </div>
      </div>
    </>
  );
}
