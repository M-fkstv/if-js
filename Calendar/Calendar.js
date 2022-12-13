// CALENDAR

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (dayOfWeek >= daysInWeek) {
    throw new Error("Error");
  }

  const month = [];
  for (let i = 1; i <= daysInMonth; i++) {
    // Собирает массив
    month.push(i);
  }

  //Временная переменная, добавляет дни из предыдущего месяца в начало
  const temp = [...month.slice(-dayOfWeek), ...month]; // ,...calendar.slice(0, dayOfWeek)

  const calendarMonth = [];
  for (let i = 0; i < temp.length; i + daysInWeek) {
    calendarMonth.push(temp.splice(0, daysInWeek));
    // Разбивает на недели
  }

  for (let i = 1; i < daysInWeek; i++) {
    if (calendarMonth.slice(-1)[0].length < daysInWeek) {
      calendarMonth.slice(-1)[0].push(i);
    }
    //Добавляет дни в конец месяца
  }

  return calendarMonth;
};

const calendarMonth = getCalendarMonth(30, 7, 4);

console.log(calendarMonth);
