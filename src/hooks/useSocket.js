import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = (serverURL) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      return false;
    }

    const newSocket = io.connect(serverURL, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token,
      },
    });

    setSocket(newSocket);
    setOnline('enable');
  }, [serverURL, token]);

  // useEffect(() => {
  //   socket?.on('emitAllUsers', (allUsers) => {
  //     dispatch(actionsChat(allUsers));
  //   });
  // }, [socket, dispatch]);

  return { socket, online };
};
