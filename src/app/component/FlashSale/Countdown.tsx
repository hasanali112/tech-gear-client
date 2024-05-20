import Container from "../shared/Container/Container";

const Countdown = () => {
  return (
    <div className="bg-white p-5 mb-5">
      <Container className="flex items-center gap-5">
        <h1 className="text-purple-500 text-xl">On Sale Now</h1>
        <h1>
          Ends In <span className="bg-purple-500 text-white p-3">02</span> :{" "}
          <span className="bg-purple-500 text-white p-3">10</span> :{" "}
          <span className="bg-purple-500 text-white p-3">00</span>
        </h1>
      </Container>
    </div>
  );
};

export default Countdown;
