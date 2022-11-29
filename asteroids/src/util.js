
const Util = {
  // inherits: function inherits(childClass, parentClass) {
  //   //...
  // },

  distance: function(p1, p2) {
    let dist = sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[2]) ** 2);
  },

  // distance(point1, point2) {
  norm: function(p) {
    let norm = dist([0,0], [p[0], p[1]]);
  },

  randomVec: function(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale: function(vec, m) {
    console.log(vec,m)
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;