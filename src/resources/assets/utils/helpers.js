function joinClasses(primaryClass = '', restClasses) {
    if (!restClasses) {
        return primaryClass
    }
    return primaryClass.concat(' ', restClasses.join(' ')).trim();
}

function noop() {}

export {
  joinClasses,
  noop,
}
