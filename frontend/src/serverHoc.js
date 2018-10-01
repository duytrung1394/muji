import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// SSR向けのサーバーサイドでrender可能なHoc, 将来的には hoc.js と共通化したい
// TODO: essentialHoc みたいなのを分離して、Providerなど本質的に重要なものだけはそこに入れるのが正しい気がする
const SimpleHoc = (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default SimpleHoc;
