export interface IItem {
  id: number;
}
const items: IItem[] = Array.from({ length: 100 }, (_, index) => ({
  id: index,
}));

export default items;
