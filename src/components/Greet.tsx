type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {" "}
        {props.isLoggedIn
          ? `Welcome ${props.name} you have ${props.count} messages`
          : "Welcome Guest"}{" "}
      </h2>
    </div>
  );
};
