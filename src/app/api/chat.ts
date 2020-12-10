import { appDispatch } from "app/store";
import { IKey, IRecive } from "features/Chat";
import { insertMessage, setkeyId } from "features/Chat/chatSlice";
import io from "socket.io-client";

let socket: SocketIOClient.Socket;

export const createConnectiontChat = () => {
  socket = io.connect(process.env.REACT_APP_CHAT_URL as string);

  socket.emit("get_room_employee");

  socket.on("emp_room_and_your_id", (data: IKey) => {
    appDispatch(setkeyId(data));
  });

  socket.on("recive_from_admin", (data: IRecive) => {
    appDispatch(
      insertMessage({
        isSend: false,
        content: data.content,
      })
    );
  });
};

export const sendMessage = (
  value: string,
  clientId: string,
  roomId: string
) => {
  socket.emit("send_message_to_room_employee", {
    customerId: clientId,
    content: value,
    roomEmployeeId: roomId,
  });

  appDispatch(
    insertMessage({
      isSend: true,
      content: value,
    })
  );
};
