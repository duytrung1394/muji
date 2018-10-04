import React from "react";
import EcPanelWrapper from "./ecPanel.style";

const EcPanel = props => {
  const { title, items } = props;
  return (
    <EcPanelWrapper>
      <section>
        <header>
          <h3>{title}</h3>
          <span>すべての{title}</span>
        </header>
        <ul>
          {items.map(item => {
            return (
              <li><img src={item.img_src} alt=""/></li>
            );
          })}
        </ul>
      </section>
    </EcPanelWrapper>
  );
}

export default EcPanel;
