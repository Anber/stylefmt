function inAtRule (rule) {
  var ret = false
  var current = rule.parent
  while (current.type !== 'root') {
    if (current.type === 'atrule') {
      ret = true
      break
    }
    current = current.parent
  }

  return ret
}

function getNestedRulesNum (rule) {
  var parent = rule.parent
  var num = 0

  while (parent.type !== 'root') {
    parent = parent.parent
    num++
  }

  return num
}

function isEmptyObject (obj) {
  for (var name in obj) {
    return false
  }
  return true
}

module.exports = {
  inAtRule: inAtRule,
  getNestedRulesNum: getNestedRulesNum,
  isEmptyObject: isEmptyObject
}
