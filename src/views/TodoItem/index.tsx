import React from 'react';
import { ITodo } from '../../types';

// 可以根据需要抽离到一个单独的文件然后引入使用
interface TodosItemProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}
interface TodosItemState {
  // 可选
  isEditing?: boolean;
}

// 类组件
export class TodosItem extends React.Component<TodosItemProps, TodosItemState> {
  render() {
    return <div className="">todo</div>;
  }
}

// 无状态函数组件
/* function MyForm(props: FormProps) {
  
} */
