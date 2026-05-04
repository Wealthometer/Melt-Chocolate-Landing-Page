import React from "react";
import Chocolate from "../assets/images/choclate-bg-2.png";

const Parallax = () => {
  return (
    <section className="inner-container h-screen py-20">
      <div
        className="h-full rounded-xl bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${Chocolate})`,
        }}
      />
    </section>
  );
};

export default Parallax;
