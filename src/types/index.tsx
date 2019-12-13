// 创建类型接口
export interface IProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// state类型
export interface StoreState {
  count: number
}

