/*        in js everything is an object         */
/*        function is also an object         */
function wallah(number) {
  return number * 5;
}
wallah.power = 2;
// console.log(wallah(5));
// console.log(wallah.power);
// console.log(wallah.prototype);
function main(username, order) {
  this.username = username;
  this.order = order;
  return this;
}
main.prototype.printMe = function () {
  console.log(`wellcome ${this.username}`);
};
const first_user = new main("walid", 1);
const second_user = new main("sijan", 2);
first_user.printMe();
/*this bunch of code doesn't work in arrow function*/
