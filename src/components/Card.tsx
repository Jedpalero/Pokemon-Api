import "../index.css";

type CardProps = {
  name: string;
};

const Card = ({ name }: CardProps) => {
  return (
    <>
      <div className="size-[12rem] border text-white">
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Card;
