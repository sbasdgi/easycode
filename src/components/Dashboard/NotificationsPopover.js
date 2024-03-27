import PropTypes from "prop-types";
import { useState, useRef } from "react";
// @mui
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  IconButton,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
// utils
// import { fToNow } from '../../utils/formatTime';
// components
import { Scrollbar, MenuPopover } from "components";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  // {
  //   id: "11",
  //   title: 'Your order is placed',
  //   description: 'waiting for shipping',
  //   avatar: null,
  //   type: 'order_placed',
  //   createdAt: '111,33',
  //   isUnRead: true,
  // },
  // {
  //   id: "11",
  //   title: 'dfweweee',
  //   description: 'answered to your comment on the Minimal',
  //   avatar: '/static/mock-images/avatars/avatar_2.jpg',
  //   type: 'friend_interactive',
  //   createdAt: '111,33',
  //   isUnRead: true,
  // },
  // {
  //   id: "11",
  //   title: 'You have new message',
  //   description: '5 unread messages',
  //   avatar: null,
  //   type: 'chat_message',
  //   createdAt: '111,33',
  //   isUnRead: false,
  // },
  // {
  //   id: "11",
  //   title: 'You have new mail',
  //   description: 'sent from Guido Padberg',
  //   avatar: null,
  //   type: 'mail',
  //   createdAt: '111,33',
  //   isUnRead: false,
  // },
  // {
  //   id: "11",
  //   title: 'Delivery processing',
  //   description: 'Your order is being shipped',
  //   avatar: null,
  //   type: 'order_shipped',
  //   createdAt: '111,33',
  //   isUnRead: false,
  // },
];

export default function NotificationsPopover() {
  const anchorRef = useRef(null);

  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        color="error"
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          bgcolor: "error.lighter",
        }}
      >
        <Badge badgeContent={totalUnRead} color="error" variant="dot">
          <NotificationsActiveRoundedIcon fontSize="small" color="error" />
        </Badge>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 360, p: 0, mt: 1.5, ml:3 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">اعلان های جدید</Typography>
            {notifications.length > 0 ? (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                شما {totalUnRead} پیام ناخوانده دارید
              </Typography>
            ) : (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                اعلان جدیدی وجود ندارد.
              </Typography>
            )}
          </Box>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {notifications.length > 0 && (
          <>
            <Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
              <List
                disablePadding
                subheader={
                  <ListSubheader
                    disableSticky
                    sx={{ py: 1, px: 2.5, typography: "overline" }}
                  >
                    جدید
                  </ListSubheader>
                }
              >
                {notifications.slice(0, 2).map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </List>

              <List
                disablePadding
                subheader={
                  <ListSubheader
                    disableSticky
                    sx={{ py: 1, px: 2.5, typography: "overline" }}
                  >
                    خوانده شده
                  </ListSubheader>
                }
              >
                {notifications.slice(2, 5).map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </List>
            </Scrollbar>

            <Divider sx={{ borderStyle: "dashed" }} />

            <Box sx={{ p: 1 }}>
              <Button fullWidth disableRipple>
                دیدن همه
              </Button>
            </Box>
          </>
        )}
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <NotificationsActiveRoundedIcon />
            {"notification.createdAt"}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: notification.avatar ? (
      <img alt={notification.title} src={notification.avatar} />
    ) : null,
    title,
  };
}
