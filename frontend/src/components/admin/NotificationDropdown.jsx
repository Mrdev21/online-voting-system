import { useEffect, useState } from "react";
import {
  FaBell,
  FaUserPlus,
  FaVoteYea,
  FaCheckCircle,
  FaUserShield,
} from "react-icons/fa";

import {
  getNotifications,
  markAllAsRead,
} from "../../services/notificationService";

function NotificationDropdown() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const response = await getNotifications();
      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "USER":
        return <FaUserPlus className="text-cyan-400" />;

      case "CANDIDATE":
        return <FaUserShield className="text-green-400" />;

      case "ELECTION":
        return <FaVoteYea className="text-yellow-400" />;

      case "VOTE":
        return <FaCheckCircle className="text-purple-400" />;

      default:
        return <FaBell className="text-cyan-400" />;
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await markAllAsRead();
      loadNotifications();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute right-0 top-14 z-50 w-88 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">

      <div className="flex items-center justify-between border-b border-slate-800 p-5">

        <h2 className="flex items-center gap-2 text-lg font-bold text-white">
          <FaBell />
          Notifications
        </h2>

        <span className="rounded-full bg-cyan-500 px-2 py-1 text-xs text-white">
          {notifications.filter((n) => !n.isRead).length}
        </span>

      </div>

      <div className="max-h-96 overflow-y-auto">

        {notifications.length === 0 ? (
          <div className="p-8 text-center text-slate-400">
            No Notifications
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className={`flex cursor-pointer items-start gap-4 border-b border-slate-800 p-4 transition hover:bg-slate-800 ${
                !item.isRead ? "bg-slate-800/40" : ""
              }`}
            >
              <div className="mt-1 text-xl">
                {getIcon(item.type)}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}

      </div>

      {notifications.length > 0 && (
        <button
          onClick={handleMarkAllRead}
          className="w-full border-t border-slate-800 p-4 text-center font-semibold text-cyan-400 transition hover:bg-slate-800"
        >
          Mark all as read
        </button>
      )}
    </div>
  );
}

export default NotificationDropdown;