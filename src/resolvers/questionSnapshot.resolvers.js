module.exports = {
  Query: {
    questionSnapshot(parent, args, context) {
      return context.prisma.questionSnapshot(args.where) || null;
    },
    async questionSnapshots(parent, args, context) {
      const {
        edges,
        pageInfo
      } = await context.prisma.questionSnapshotsConnection(args);
      const aggregate = await context.prisma
        .questionSnapshotsConnection(args)
        .aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  }
};
