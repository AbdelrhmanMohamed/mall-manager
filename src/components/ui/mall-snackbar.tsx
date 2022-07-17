import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useAppSelector } from "app/hooks";

export default function MallSnackbar() {
  const { enqueueSnackbar } = useSnackbar();
  const { message, type, count } = useAppSelector((state) => ({
    message: state.notification.message,
    type: state.notification.type,
    count: state.notification.count,
  }));
  useEffect(() => {
    if (count > 0 && message !== "") {
      enqueueSnackbar(message, {
        variant: type,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, message, type, enqueueSnackbar]);

  return <></>;
}
