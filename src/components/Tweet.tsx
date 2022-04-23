type TweetProps = {
  text: string;
}

function Tweet(props:TweetProps) {
  return (
    <div>
      {props.text}
    </div>
  );
}

export default Tweet;