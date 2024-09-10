"use-client";

import BeforeMain from "./states/BeforeMain";
import LiveMain from "./states/LiveMain";

type mainContentProp = {
  title: string;
  description: string;
  state: string;
};

export default function MainContent({
  title,
  description,
  state,
}: mainContentProp) {
  return (
    <>
      {state === "before" ? <BeforeMain /> : <LiveMain />}
      <div
        className={`m-auto flex align-center justify-center flex-col gap-y-10 my-10 ${
          state === "before" ? "xl:w-9/12" : ""
        }`}
      >
        <h1 className="text-center text-6xl font-bold">{title}</h1>
        <p className="text-center">{description}</p>
        <button className="btn">Add to calendar</button>
      </div>
    </>
  );
}
