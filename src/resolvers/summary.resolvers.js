module.exports = {
  Query: {
    summary(parent, args, context) {
      return context.prisma.summary(args.where);
    },
    async summaries(parent, args, context) {
      const { edges, pageInfo } = await context.prisma.summariesConnection(
        args
      );
      const aggregate = await context.prisma
        .summariesConnection(args)
        .aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  }
};
