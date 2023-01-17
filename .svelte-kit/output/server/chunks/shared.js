let assets = "";
let base = "";
let version = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_building(value) {
}
function set_version(value) {
  version = value;
}
export {
  assets as a,
  base as b,
  set_version as c,
  set_building as d,
  set_paths as s,
  version as v
};
