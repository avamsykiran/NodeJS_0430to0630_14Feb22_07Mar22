
const hello = () => "Hello! ";
const bye = () => "Bye! ";

exports.sayHello = userName => hello() + userName;
exports.sayBye = userName => bye() + userName;