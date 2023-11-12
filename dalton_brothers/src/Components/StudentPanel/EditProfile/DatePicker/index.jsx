import React from "react";
import DayJsAdapter from "@date-io/dayjs";

createVuetify({
  date: {
    adapter: DayJsAdapter,
  },
});

const DatePicker = () => {
  return DatePicker;
};

export { DatePicker };
