import React from 'react';
import { IProps } from '../../types'

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<IProps> {
  public render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        <br />
        <br />
        <button onClick={onIncrement} style={{ marginRight: 20 }}>
          {' '}
          +{' '}
        </button>
        <button onClick={onDecrement}> - </button>
      </p>
    );
  }
}
