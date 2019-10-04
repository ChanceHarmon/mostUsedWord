'use strict'

const mostCommon = (str) => {
  let set = New Set ();
  const findWord = (str, count) => {
    for (let i = 0; i < str.length; i++) {
      if (set has str[i].value) {
        str[i].count = str[i].count + 1
      };
      if (set doesNotContain str.[i].value) {
        set.add str[i].value
      }
    }
    return set.value.count //highest count, not sure how to wrie this part.
  }
};

