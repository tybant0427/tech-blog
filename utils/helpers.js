// module.exports = {
//   // Formats date to display correctly when passed into handlebars
//   format_date: date => {
//     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   }
// };

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    // Using JavaScript Date methods, we get and format the month, date, and year
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      // We add five years to the 'year' value to calculate the end date
      new Date(date).getFullYear()
    }`;
  },
};
