

// JSX => Javascript + HTML Combined
function Basic() {
    let h1style ={
        color:"blue",
        backgroundColor:"black",
        textAlign
    }
  return (
    <div className="basic">
      <h1 style={h1style}> Hey Welcome to Basics </h1> 
      <p>This is a basic component. </p>{" "}
      {/* This is normal html which will not be calcualated */}
      <p>2+3</p>
        {/* This is JSX which will be calculated */}
        <p>{2 + 3}</p>
        <p>{5>3 ? "Hello":"hi"}</p>
    </div>
  );
}

export default Basic;
