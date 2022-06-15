// domain/.netlify/functions/hello

const items = [
  { id: 1, name: "eric" },
  { id: 2, name: "mike" },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
