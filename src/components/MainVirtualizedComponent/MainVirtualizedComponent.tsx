import { FC } from "react";
import { CustomVirtualList } from "../CustomVirtualList/CustomVirtualList";
import { IMainVirtualizedComponentProps } from "./types";

const MainVirtualizedComponent: FC<IMainVirtualizedComponentProps> = ({
  items,
}) => {
  return (
    <>
      <h1>Virtual render</h1>
      <CustomVirtualList
        itemsCount={items.length || 0}
        renderItemsCount={10}
        itemHeight={40}
        windowHeight={items.length ? 400 : 0}
        renderItem={({ arrIndex, style }) => {
          const item = items[arrIndex];
          return (
            <div key={item.id} style={style}>
              <label>{`Item number ${item.id + 1}`}</label>
            </div>
          );
        }}
      />
    </>
  );
};

export default MainVirtualizedComponent;
