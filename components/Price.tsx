interface PriceProps {
  type: string;
  description: string;
  monthPrice: number;
  yearPrice: number;
  time?: boolean;
}

export const Price: React.FC<PriceProps> = ({
  type,
  description,
  monthPrice,
  yearPrice,
  time,
}) => {
  return (
    <div
      className={`${
        type === "Pro"
          ? "pro-price-container custom-border-top "
          : "general-price-container "
      } mx-auto my-8 lg:my-0 lg:mx-4 px-4 py-8 lg:w-88`}
    >
      <h3
        className={`${type === "Pro" ? "text-white" : "text-white"} text-3xl`}
      >
        {type}
      </h3>
      <p className="my-8 w-72 mx-auto">{description}</p>
      <div className="my-4">
        <p
          className={`${
            type === "Pro" ? "text-white" : "text-black"
          } text-4xl tracking-widest`}
        >
          ${time ? yearPrice : monthPrice}.00
        </p>
        <p>per {time ? "year" : "month"}</p>
      </div>

      <button
        className={`${
          type === "Pro" ? "pro-price-button" : "general-price-button"
        } mt-4 py-3 px-16 tracking-widest`}
      >
        PICK PLAN
      </button>
    </div>
  );
};
