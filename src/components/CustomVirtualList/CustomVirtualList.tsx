import { useState } from "react";
import { ICustomVirtualListProps } from "./types";
import type { FC, UIEvent } from "react";
import "./CustomVirtualList.styles.css";

export const CustomVirtualList: FC<ICustomVirtualListProps> = ({
  itemsCount,
  itemHeight,
  renderItem,
  windowHeight,
}) => {
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = itemsCount * itemHeight;

  const indexStart = Math.floor(scrollTop / itemHeight);
  const indexEnd = Math.min(
    itemsCount - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const renderedItems = [];
  for (let i = indexStart; i <= indexEnd; i++) {
    renderedItems.push(
      renderItem({
        arrIndex: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%",
          backgroundColor: "#89e84e",
          display: "flex",
          justifyContent: "space-around",
        },
      })
    );
  }

  const onScroll = (e: UIEvent<HTMLDivElement>) =>
    setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="custom-virtual-list" onScroll={onScroll}>
      {itemsCount ? (
        <div style={{ position: "relative", height: `${innerHeight}px` }}>
          {renderedItems}
        </div>
      ) : (
        <div className="no-elements">No elements</div>
      )}
    </div>
  );
};
