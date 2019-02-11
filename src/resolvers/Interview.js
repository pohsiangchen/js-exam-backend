const Interview = {
  host: ({ id }, args, context) => {
    return context.prisma.interview({ id }).user();
  }
};

module.exports = {
  Interview
};
