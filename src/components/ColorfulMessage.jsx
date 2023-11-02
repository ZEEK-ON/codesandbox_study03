import React from "react";

export const ColorfulMessage = (props) => {
  // const ColorfulMessage = (props) => {
  // 分割代入を使用することで毎回引数であるpropsを使用しなくて済む
  const { color, children } = props;
  const contentStyle = {
    // colorに対してcolorと言う名前をつかうのであれば省略可能
    color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

// 下記だと一つしかできない
// export default ColorfulMessage;
