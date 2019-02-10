"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Exam",
    embedded: false
  },
  {
    name: "ExamStatus",
    embedded: false
  },
  {
    name: "History",
    embedded: false
  },
  {
    name: "Interview",
    embedded: false
  },
  {
    name: "InterviewStatus",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "QuestionSnapshot",
    embedded: false
  },
  {
    name: "QuestionType",
    embedded: false
  },
  {
    name: "SnapComment",
    embedded: false
  },
  {
    name: "Summary",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/js-exam/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Exam",
    embedded: false
  },
  {
    name: "ExamStatus",
    embedded: false
  },
  {
    name: "History",
    embedded: false
  },
  {
    name: "Interview",
    embedded: false
  },
  {
    name: "InterviewStatus",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "QuestionSnapshot",
    embedded: false
  },
  {
    name: "QuestionType",
    embedded: false
  },
  {
    name: "SnapComment",
    embedded: false
  },
  {
    name: "Summary",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
