import React, { useState } from "react";
import styles from "./todo-item.module.scss";
import classNames from "classnames";

export function TodoItem({ id, todo, dragStart, dragOver, dragEnd, index }) {
  const [dragging, setDragging] = useState(false);

  const onDragStart = (event) => {
    setDragging(true);
    dragStart(event, index);
  };

  const onDragOver = (event) => {
    dragOver(event, index);
  };

  const onDragEnd = (event) => {
    setDragging(false);
    dragEnd();
  };

  return (
    <li
      className={classNames(
        "py-3 px-4 border-2  border-gray-300 rounded-lg my-3 cursor-move",
        { [styles.dragging]: dragging }
      )}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      draggable
    >
      <div className={classNames("flex justify-between", styles.detail)}>
        <span className="font-medium text-base whitespace-nowrap text-ellipsis overflow-x-hidden w-90 mr-3">
          {todo}
        </span>
        <span className="text-gray-700">
          <i className="fa-solid fa-grip-vertical"></i>
        </span>
      </div>
    </li>
  );
}
