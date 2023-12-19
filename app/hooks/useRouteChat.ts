import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import useConversation from "./useConverastion";
import { HiUsers } from "react-icons/hi2";

const useRouteChat = () => {
  const pathName = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/chat",
        icon: HiChat,
        active: pathName === "/chat" || !!conversationId,
      },
      {
        label: "ChatUsers",
        href: "/chatUsers",
        icon: HiUsers,
        active: pathName === "/chatUsers",
      },
    ],
    [pathName, conversationId]
  );

  return routes;
};

export default useRouteChat;
