"use client";

import { Button, Card, Typography } from "@material-tailwind/react";
import { format } from "date-fns";

const TABLE_HEAD = ["Room number", "Date", "Price", ""];

const room = [
  {
    roomId: "001",
    availableTimes: [
      {
        id: 12,
        startTime: 1704067200000,
        endTime: 1704412800000,
        pricePerNight: 10,
        status: "OPEN",
        timeFrameId: 28,
        deleted: false,
      },
      {
        id: 13,
        startTime: 1735689600000,
        endTime: 1736035200000,
        pricePerNight: 10,
        status: "OPEN",
        timeFrameId: 28,
        deleted: false,
      },
      {
        id: 14,
        startTime: 1767225600000,
        endTime: 1767484800000,
        pricePerNight: 10,
        status: "OPEN",
        timeFrameId: 28,
        deleted: false,
      },
    ],
  },
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

interface ListRoomProps {
  handleChooseRoomProp: (roomId: any, data: any, visible: boolean) => void;
}

const ListRoom: React.FC<ListRoomProps> = ({ handleChooseRoomProp }) => {
  const handleChooseRoom = (roomId: any, data: any) => {
    handleChooseRoomProp(roomId, data, true);
  };
  return (
    <Card className="h-full w-full overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {room.map((item: any, index) =>
            item.availableTimes.map((availableTime: any, index: any) => {
              const isLast = index === room.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={availableTime.id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.roomId}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {`${format(
                        new Date(availableTime.startTime),
                        "dd/MM/yyyy"
                      )} - ${format(
                        new Date(availableTime.endTime),
                        "dd/MM/yyyy"
                      )}`}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {availableTime.pricePerNight}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <button
                      type="button"
                      onClick={() => handleChooseRoom(item.roomId, availableTime)}
                      className="bg-common text-white rounded-md hover:bg-blue-500 p-2 flex items-center justify-center"
                    >
                      Choose Room
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default ListRoom;
