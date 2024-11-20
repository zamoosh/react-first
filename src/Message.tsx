let count = 0;

function Message() {
  count++;
  const name = "Mohammad Rahimi" + count;
  return <h1>Hello {name}!</h1>;
}

export default Message;
