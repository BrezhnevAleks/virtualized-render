import { CSSProperties, ReactElement } from "react";

export interface ICustomVirtualListProps {
  itemsCount: number;
  itemHeight: number;
  windowHeight: number;
  renderItemsCount: number;
  renderItem: (params: IRenderItemParams) => ReactElement | null;
}

interface IRenderItemParams {
  arrIndex: number;
  style: CSSProperties;
}
