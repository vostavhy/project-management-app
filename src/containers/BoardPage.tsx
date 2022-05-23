import { useState } from 'react';
import { API_GET_ALL_BOARDS, KANBAN_SERVICE_API } from '../constants/api';
import { getAppiResource } from '../utils/network';

function BoardPage() {
  const [boards, setBoards] = useState(null);

  const getResource = async () => {
    const res = await getAppiResource(KANBAN_SERVICE_API + API_GET_ALL_BOARDS);
    console.log(res);
    setBoards(res);
  };
  getResource();

  return (
    <>
      <div>BoardPage</div>
    </>
  );
}

export default BoardPage;
