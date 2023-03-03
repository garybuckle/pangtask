import React from "react";
import { css, combine } from "$pangea/css.ts";

const Rating = ({ initialRating }: { initialRating: number }) => {
  const [rating, setRating] = React.useState(initialRating);
  return (
    <>
      <div
        className={css`
          margin-top: 3rem;
        `}
      >
        <h1>Task Manager</h1>

        <button
          onClick={() => setRating(rating + 1)}
          className={css`
            font-size: 1.5rem;
            background-color: green;
            color: white;
            width: 20rem;
          `}
        >
          Vote
        </button>
        <h2>Version {rating}</h2>
      </div>
    </>
  );
};

export { Rating as default };
