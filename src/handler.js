'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Your function executed successfully.. This is just a Hello World.!'
      },
      null,
      2
    ),
  };
};
