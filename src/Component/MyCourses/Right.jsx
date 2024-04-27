import OneVideo from "./OneVideo";


export default function Right() {
  return (
    <div
      style={{
        border: "1px solid #E0E0E0",
        borderRadius: "5px",
        padding: "10px",
        width: "250px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "10px",
      }}
    >
      <div className="container my-4">
        <div className="row">
          <div className="col" style={{ padding: 0 }}>
            <div className="underline font-two-b">MODULE</div>
            <div
              style={{
                color: "#1F2029",
                background: "#1F2029",
                marginBottom: "5px",
                height: "5px",
              }}
              className="border w-100"
            ></div>
          </div>
        </div>
      </div>

      <OneVideo
        nameOfVideo={"Welcome!"}
        percentage={100}
        timeOFVideo={"3:20"}
      />
      <OneVideo
        nameOfVideo={"What is product design?"}
        percentage={70}
        timeOFVideo={"13:09"}
      />
      <OneVideo
        nameOfVideo={"Product designer role de..."}
        percentage={50}
        timeOFVideo={"7:34"}
      />
      <OneVideo
        nameOfVideo={"A little bit of a backgrou..."}
        percentage={30}
        timeOFVideo={"5:12"}
      />
      <OneVideo
        nameOfVideo={"Benefits of being a prod..."}
        percentage={20}
        timeOFVideo={"8:45"}
      />
      <OneVideo
        nameOfVideo={"Is this a career for me"}
        percentage={90}
        timeOFVideo={"7:22"}
      />
      <OneVideo
        nameOfVideo={"Misconceptions about p..."}
        percentage={0}
        timeOFVideo={"3:20"}
      />


    </div>
  );
}
