import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { decrement, increment } from '../redux/actions/counter';
import Counter from '../views/Counter';
import { StoreState } from '../types';

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { value: number } => {
  return ({
    value: state.count
  })
};

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
});

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
