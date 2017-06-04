export  function timeFormater(value,type) {
  if(!value) return value = '';
  let date = new Date(value);
  let year  = date.getFullYear(),
    month = date.getMonth() + 1,
    day   = date.getDate(),
    hours  = date.getHours(),
    minutes = date.getMinutes(),
    seconds   = date.getSeconds(),
    v = [month, day, hours, minutes, seconds].map(v => v > 9 ? v : '0' + v),
    ret = type;
  ret = ret.replace(/yyyy/g, year);
  ret = ret.replace(/MM/g, v[0]);
  ret = ret.replace(/dd/g, v[1]);
  ret = ret.replace(/hh/g, v[2]);
  ret = ret.replace(/mm/g, v[3]);
  ret = ret.replace(/ss/g, v[4]);
  return ret;
}
