module.exports = {
  Query: {
    history(parent, args, context) {
      return context.prisma.history(args.where);
    },
    async histories(parent, args, context) {
      const { edges, pageInfo } = await context.prisma.historiesConnection(
        args
      );
      const aggregate = await context.prisma
        .historiesConnection(args)
        .aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  }
};
