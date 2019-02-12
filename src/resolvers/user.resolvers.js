const { getUserId } = require('../utils');

module.exports = {
  Query: {
    me(parent, args, context) {
      const id = getUserId(context);
      return context.prisma.user({ id });
    }
  },
  User: {
    hostedInterviews({ id }, args, context) {
      return context.prisma.user({ id }).hostedInterviews();
    }
  }
};
