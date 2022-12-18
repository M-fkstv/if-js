const getYear = new Date().getFullYear();
const getMonth = new Date().getMonth();
const firstDayOfMonth = new Date(getYear, getMonth, 1).getDay(); // первый день месяца

const daysinmonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getCalendarMonth = (
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate
) => {
  if (dayOfWeek >= daysInWeek) {
    throw new Error("Error");
  }

  const month = [];
  for (let i = 0; i < daysInMonth; i++) {
    // Собирает массив
    month[i] = {
      dayOfMonth: i + 1,
      notCurrentMonth: false,
      selectedDay: false,
      currentDay: false,
    };
  }
  console.log("month", month);

  for (const days of month) {
    if (days.dayOfMonth === new Date().getDate()) {
      days.currentDay = true;
    }
  }

  //Временная переменная, добавляет дни из предыдущего месяца в начало
  // const addToBegin = [...month.slice(month.length - dayOfWeek)];
  const addToBegin = JSON.parse(
    JSON.stringify(month.slice(month.length - dayOfWeek))
  );
  const temp = [...addToBegin, ...month];
  // const addToEnd = [...month.slice(0, daysInWeek - (temp.length % daysInWeek))]; //добавляет дни в конец
  // Why [...] doesn't work???
  const addToEnd = JSON.parse(
    JSON.stringify(month.slice(0, daysInWeek - (temp.length % daysInWeek)))
  );

  addToBegin.forEach((item) => {
    item.notCurrentMonth = true;
  });

  addToEnd.forEach((item) => {
    item.notCurrentMonth = true;
  });

  let temp1;
  addToEnd.length === daysInWeek
    ? (temp1 = [...addToBegin, ...month])
    : (temp1 = [...addToBegin, ...month, ...addToEnd]);

  for (let i = checkInDate; i <= checkOutDate; i++) {
    temp1[i + 1].selectedDay = true;
  }

  const calendarMonth = [];
  for (let i = 0; i < temp1.length; i + daysInWeek) {
    calendarMonth.push(temp1.splice(0, daysInWeek));
    // Разбивает на недели
  }

  return calendarMonth;
};

const calendarMonth = getCalendarMonth(
  daysinmonth(2022, 12),
  7,
  firstDayOfMonth,
  16,
  30
);

console.log(calendarMonth);
