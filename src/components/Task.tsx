import { FC } from 'react';

//

const bordBox = {
  width: '200px',
  borderColor: 'green',
  borderStyle: 'solid',
  listStyleType: 'none',
};

//

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: {
    filename: string;
    fileSize: number;
  };
}

const Task: FC<ITask> = ({ id, title, order, description, userId, boardId, columnId, files }) => {
  return (
    <>
      <li style={bordBox}>
        <h4>
          {order} -- {title}
        </h4>
        <p>{description}</p>
        <img src={files.filename} alt='avatar' />
        <button>Dell Task</button>
      </li>
    </>
  );
};

export default Task;
