const { prisma } = require('../src/generated/prisma-client');
const { jsQuestionList, reactjsQuestionList } = require('./constants');

const setup = async () => {
  await prisma.createUser({
    email: 'admin@innovasolutions.com',
    name: 'Admin',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m' // "secret42"
  });
  jsQuestionList.forEach(async question => {
    await prisma.createQuestion({
      type: 'JAVASCRIPT',
      name: question.name,
      content: question.content,
      test: question.test
    });
  });
  reactjsQuestionList.forEach(async question => {
    await prisma.createQuestion({
      type: 'REACTJS',
      name: question.name,
      content: question.content,
      test: question.test
    });
  });
};

setup();
