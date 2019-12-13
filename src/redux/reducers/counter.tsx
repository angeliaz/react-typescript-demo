import { ModifyAction } from '../actions/counter';
import { DECREMENT, INCREMENT } from '../constants';
import { StoreState } from '../../types';

const initialState: StoreState = {
  count: 0
};

// 处理并返回 state
export default (state = initialState, action: ModifyAction) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};
