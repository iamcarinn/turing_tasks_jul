function a() {
    return []+[];
};
console.log(a());
/////////////////////
function b() {
    return [10]+[1];
};
console.log(b());
/////////////////////
function c() {
    return []-[];
};
console.log(c());
////////////////
function d() {
    return +[];
};
console.log(d());
////////////////
function e() {
    return +{};
};
console.log(e());
////////////////
function f() {
    return {}+{};
};
console.log(f());
////////////////
function g() {
    return {}-{};
};
console.log(g());
////////////////
function h() {
    return !{};
};
console.log(h());
////////////////
function i() {
    return [] == [];
};
console.log(i());
////////////////
function j() {
    return {} === {};
};
console.log(j());