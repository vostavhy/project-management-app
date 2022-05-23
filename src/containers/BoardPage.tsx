import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { API_BOARDS, API_COLUMNS, KANBAN_SERVICE_API, TEST_BOARD_ID } from '../constants/api';
import { getAppiResource } from '../utils/network';

export interface IBoard {
  id: string;
  title: string;
  description: string;
}

interface IBoardId {
  id: string;
}

/// DELL
const wrapBox = {
  display: 'flex',
  flexdirection: 'row',
  gap: '20px',
};
const descriptionBox = {
  width: '50px',
  overflow: 'hidden',
  // whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

const bordBox = {
  width: '300px',
  borderColor: 'red',
  borderStyle: 'solid',
  listStyleType: 'none',
};
//DELL
function BoardPage() {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const PromiseboarId = useLocation();
  console.log(PromiseboarId.state);
  const state = PromiseboarId.state as IBoardId;
  const { id } = state;

  const getResource = async () => {
    const res = await getAppiResource(
      KANBAN_SERVICE_API + API_BOARDS + '/' + id + '/' + API_COLUMNS
    );
    setBoards(res);
  };

  // getResource();
  useEffect(() => {
    getResource();
  });

  return (
    <>
      <div>
        <button>Add Column</button>
      </div>
      <ul style={wrapBox}>
        {boards.map(({ id, title, description }) => (
          <li key={id} style={bordBox}>
            <a href="#">
              <h3>{title}</h3>
              <p style={descriptionBox}>{description}</p>
            </a>
            <button>Add Task</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BoardPage;
