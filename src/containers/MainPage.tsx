import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BOARDS, KANBAN_SERVICE_API } from '../constants/api';
import { getAppiResource } from '../utils/network';

export interface IBoard {
  id: string;
  title: string;
  description: string;
}

/// DELL
const wrapBox = {
  gap: '20px',
};

const bordBox = {
  width: '300px',
  borderColor: 'red',
  borderStyle: 'solid',
  listStyleType: 'none',
  margin: '5px',
};
//DELL
function MainPage() {
  const [boards, setBoards] = useState<IBoard[]>([]);

  const getResource = async () => {
    const res = await getAppiResource(KANBAN_SERVICE_API + API_BOARDS);
    setBoards(res);
  };

  useEffect(() => {
    getResource();
  });

  return (
    <>
      <div>
        <button>Add Board</button>
      </div>
      <ul style={wrapBox}>
        {boards.map(({ id, title, description }) => (
          <li key={id} style={bordBox}>
            <Link to={'/board'} state={{ boardId: id }}>
              <h3>{title}</h3>
              <p className="descriptionBox">{description}</p>
            </Link>
            <button>Dell Board</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainPage;
