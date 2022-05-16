import React from "react";

const List = ({ data }) => {
  const list = data.map((item) => {
    return <li>{item}</li>;
  });

  return <ul>{list}</ul>;
};

export default List;
