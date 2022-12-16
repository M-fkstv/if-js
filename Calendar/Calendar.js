// CALENDAR

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (dayOfWeek >= daysInWeek) {
    throw new Error("Error");
  }

  const month = [];
  for (let i = 0; i < daysInMonth; i++) {
    // Собирает массив
    month[i] = {
      dayOfMonth: i + 1,
      notCurrentMonth: false,
      // selectedDay: true,
    };
  }
  console.log(month);

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
  const temp1 = [...addToBegin, ...month, ...addToEnd];
  console.log(temp1);

  addToBegin.forEach((item) => {
    item.notCurrentMonth = true;
  });

  addToEnd.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const calendarMonth = [];
  for (let i = 0; i < temp1.length; i + daysInWeek) {
    calendarMonth.push(temp1.splice(0, daysInWeek));
    // Разбивает на недели
  }

  return calendarMonth;
};

const calendarMonth = getCalendarMonth(30, 7, 2);

console.log(calendarMonth);
