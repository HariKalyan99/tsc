interface NumberInterface {
  value: number;
}

const Counter = ({ value }: NumberInterface) => {
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default Counter;
