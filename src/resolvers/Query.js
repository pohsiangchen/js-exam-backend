const { getUserId } = require('../utils');

const Query = {
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
  },
  history(parent, args, context) {
    return context.prisma.history(args.where);
  },
  async histories(parent, args, context) {
    const { edges, pageInfo } = await context.prisma.historiesConnection(args);
    const aggregate = await context.prisma
      .historiesConnection(args)
      .aggregate();
    return {
      edges,
      pageInfo,
      aggregate
    };
  },
  interview(parent, args, context) {
    return context.prisma.interview(args.where) || null;
  },
  async interviews(parent, args, context) {
    const { edges, pageInfo } = await context.prisma.interviewsConnection(args);
    const aggregate = await context.prisma
      .interviewsConnection(args)
      .aggregate();
    return {
      edges,
      pageInfo,
      aggregate
    };
  },
  question(parent, args, context) {
    return context.prisma.question(args.where) || null;
  },
  async questions(parent, args, context) {
    const { edges, pageInfo } = await context.prisma.questionsConnection(args);
    const aggregate = await context.prisma
      .questionsConnection(args)
      .aggregate();
    return {
      edges,
      pageInfo,
      aggregate
    };
  },
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
  },
  snapComment(parent, args, context) {
    return context.prisma.snapComment(args.where);
  },
  async snapComments(parent, args, context) {
    const { edges, pageInfo } = await context.prisma.snapCommentsConnection(
      args
    );
    const aggregate = await context.prisma
      .snapCommentsConnection(args)
      .aggregate();
    return {
      edges,
      pageInfo,
      aggregate
    };
  },
  summary(parent, args, context) {
    return context.prisma.summary(args.where);
  },
  async summaries(parent, args, context) {
    const { edges, pageInfo } = await context.prisma.summariesConnection(args);
    const aggregate = await context.prisma
      .summariesConnection(args)
      .aggregate();
    return {
      edges,
      pageInfo,
      aggregate
    };
  },
  me(parent, args, context) {
    const id = getUserId(context);
    return context.prisma.user({ id });
  }
};

module.exports = { Query };
