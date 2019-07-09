function logger({ getState }) {
  return next => action => {
    console.log("*-*-*-*")
    console.log("will dispatch", action)
    console.log("state before dispatch", getState())
    const returnedValue = next(action)
    console.log("state after dispatch: ", getState())
    console.log("-*-*-*-")
    return returnedValue;
  }
}

export default logger;