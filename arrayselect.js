function select(startIdx = 0, endIdx = 0, step = 1) {
  let temp = this;

  if (Math.abs(startIdx) < Math.abs(endIdx))
    temp = temp.slice(endIdx, startIdx);
  else if (startIdx !== 0 && endIdx !== 0) temp = temp.slice(startIdx, endIdx);
  else if (startIdx !== 0) temp = temp.slice(startIdx);
  else if (endIdx !== 0) temp = temp.slice(0, endIdx);

  if (step > 1) {
    temp = temp.filter((_, idx) => idx % step === 0);
  }

  return temp;
}

Array.prototype.select = select;

module.exports = select;
