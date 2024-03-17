module.exports = {
  // Format dates as M/D/YYYY
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate() + 1}/${new Date(date).getFullYear()}`;
  },
  // Formats the runtime (default: 1 hour(s) and 30 minute(s))
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
          return `${minute} minute(s)`;
        // 1 hour(s) and 30 minute(s)
        default:
          return `${hour} hour(s) and ${minute} minute(s)`;
    }
  },
};