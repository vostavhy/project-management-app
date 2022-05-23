import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Board from '../components/Board';
import { API_BOARDS, API_COLUMNS, KANBAN_SERVICE_API } from '../constants/api';
import { getAppiResource } from '../utils/network';

export interface IColumns {
  id: string;
  title: string;
  order: number;
}

interface IBoardId {
  boardId: string;
}

/// DELL
const wrapBox = {
  display: 'flex',
  flexdirection: 'row',
  gap: '20px',
};

//DELL
function BoardPage() {
  const [columns, setColumns] = useState<IColumns[]>([]);
  const PromiseboarId = useLocation();
  console.log(PromiseboarId.state);
  const state = PromiseboarId.state as IBoardId;
  const { boardId } = state;

  const getResource = async () => {
    const res = await getAppiResource(
      KANBAN_SERVICE_API + API_BOARDS + '/' + boardId + '/' + API_COLUMNS
    );
    setColumns(res);
  };

  useEffect(() => {
    getResource();
  });

  return (
    <>
      <div>
        <Link to={'/main'}>Choose board</Link>
        <button>Add Column</button>
      </div>
      <ul style={wrapBox}>
        {columns.map(({ id, title, order }) => (
          <Board key={id} id={id} title={title} order={order} boardId={boardId} />
        ))}
      </ul>
    </>
  );
}

export default BoardPage;
