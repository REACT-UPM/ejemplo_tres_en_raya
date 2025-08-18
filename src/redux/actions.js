export function fetchDataAction (payload) {
  console.log("fetchDataAction", payload);
  return {
    type: 'FETCH_DATA',
    payload
  }
}

export function playPosition(payload) {
  console.log("playPosition", payload);
  return {
    type: "PLAY_POSITION",
    payload
  };
}


export function reset() {
  return {
    type: "RESET"
  };
}