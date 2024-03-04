function solution(s) {
  return s
    .split(" ")
    .map((str) =>
      str === ""
        ? ""
        : str[0].toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()
    )
    .join(" ");
}
