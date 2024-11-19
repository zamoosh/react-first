function Like() {
  return (
    <>
      <span onClick={() => console.log("clicked like")}>
        <i
          style={{ width: 20, height: 20, backgroundColor: "red" }}
          className={"fa-heart fa-regular"}
        >
          lorem lksjdfwe
        </i>
      </span>
    </>
  );
}

export default Like;
