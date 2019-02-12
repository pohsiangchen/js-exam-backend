module.exports = {
  Query: {
    exam(parent, args, context) {
      return context.prisma.exam(args.where);
    },
    async exams(parent, args, context) {
      const { edges, pageInfo } = await context.prisma.examsConnection(args);
      const aggregate = await context.prisma.examsConnection(args).aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  }
};
