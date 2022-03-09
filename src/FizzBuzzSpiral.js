import { getSpiralStyle } from "./getSpiralStyle";

export default function FizzBuzzSpiral({count = 15}) {
  let FizzBuzzSpiralArray = [];
  for (let i = 1; i <= count; i++) {
    let content = "";
    if (i % 3 === 0) content += "Fizz";
    if (i % 5 === 0) content += "Buzz";
    FizzBuzzSpiralArray.push(
      <div style={getSpiralStyle(i - 1)} key={i}>
        {(content && <strong>{content}</strong>) || i}
      </div>
    );
  }

  return (<>{FizzBuzzSpiralArray}</>);
}
