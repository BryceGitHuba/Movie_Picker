// Format dates as M/D/YYYY
module.exports = {
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  formatTime: (runtime) => {
    const hour = Math.floor(runtime / 60);
    const minute = runtime % 60;

    switch (true) {
        // 1 hour
        case runtime === 60:
          return `${hour} hour`;
        // 2 hours
        case runtime === 120:
          return `${hour} hours`;
        // 3 hours
        case runtime === 180:
          return `${hour} hours`;
        // 4 hours
        case runtime === 240:
          return `${hour} hours`;
        // Up to 59 minutes
        case runtime < 60:
          return `${minute} minutes`;
        // 1 hour(s) and 30 minutes
        default:
          return `${hour} hour(s) and ${minute} minutes`;
    }
  },
};