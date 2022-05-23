import { FC, useEffect, useState } from 'react';
import { API_BOARDS, API_COLUMNS, API_TASKS, KANBAN_SERVICE_API } from '../constants/api';
import { getAppiResource } from '../utils/network';
import Task, { ITask } from './Task';

//
const bordBox = {
  width: '300px',
  borderColor: 'red',
  borderStyle: 'solid',
  listStyleType: 'none',
};
const wrapBox = {
  gap: '20px',
};
//

export interface IBoard {
  id: string;
  title: string;
  order: number;
  boardId: string;
}

const Board: FC<IBoard> = ({ id, title, order, boardId }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getResource = async () => {
    const res = await getAppiResource(
      KANBAN_SERVICE_API +
        API_BOARDS +
        '/' +
        boardId +
        '/' +
        API_COLUMNS +
        '/' +
        id +
        '/' +
        API_TASKS
    );
    setTasks(res);
  };

  useEffect(() => {
    getResource();
  });

  return (
    <>
      <li key={id} style={bordBox}>
        <div>
          <h3>
            {order} -- {title}
          </h3>
          <button>Dell Column</button>
        </div>

        <button>Add Task</button>
        <div style={{ borderColor: 'blue', borderStyle: 'solid', padding: '5px', margin: '5px' }}>
          <ul>
            <ul style={wrapBox}>
              {tasks.map((props) => (
                <Task key={id} {...props} />
              ))}
            </ul>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Board;
