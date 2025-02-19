import React from "react";

const Menu = (props) => {
  const menuArr = props.menuArr;

  const arrMap = menuArr.map((item, index) => (
    <li key={index}>
      <a href={item.url}>{item.text}</a>
    </li>
  ));

  const ulElement = <ul>{arrMap}</ul>;

  return <React.Fragment>{ulElement}</React.Fragment>;
};

export default Menu;
