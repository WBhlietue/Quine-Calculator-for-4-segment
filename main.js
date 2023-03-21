function checkIs(n1, n2) {
  if (n1[0] == n2[0] && n1[1] == n2[1] && n1[2] == n2[2] && n1[3] != n2[3]) {
    return n1[0] + n1[1] + n2[2] + "-";
  }
  if (n1[0] == n2[0] && n1[1] == n2[1] && n1[2] != n2[2] && n1[3] == n2[3]) {
    return n1[0] + n1[1] + "-" + n1[3];
  }
  if (n1[0] == n2[0] && n1[1] != n2[1] && n1[2] == n2[2] && n1[3] == n2[3]) {
    return n1[0] + "-" + n2[2] + n1[3];
  }
  if (n1[0] != n2[0] && n1[1] == n2[1] && n1[2] == n2[2] && n1[3] == n2[3]) {
    return "-" + n1[1] + n2[2] + n1[3];
  }
  return "NULL";
}
function CheckIs1(str) {
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "1") {
      o++;
    }
  }
  return o == 1;
}
function Start(answers) {
  let listTemp = [];
  let asd = [];
  let list = [
    ["0000"],
    ["0001", "0100"],
    ["0011", "0101", "1001", "0110", "1010", "1100"],
    ["0111", "1011", "1101", "1110"],
    ["1111"],
  ];
  let returnList = [];
  let listBack = [...list];

  for (let y = 0; y < answers.length; y++) {
    let l = [];
    list[1] = answers[y];
    l.push([]);
    l[l.length - 1] = [...list];
    if (list[1].length == 0) {
      list = [["xxxx"]];
    } else if (list[1].length == 4) {
      list = [["oooo"]];
    } else {
      for (let x = 0; x < 4; x++) {
        for (let a = 1; a < list.length; a++) {
          for (let i = 0; i < list[a].length; i++) {
            let isUsed = false;
            for (let j = 0; j < list[a - 1].length; j++) {
              let str = checkIs(list[a - 1][j], list[a][i]);
              if (str != "NULL") {
                isUsed = true;
                if (!listTemp.includes(str)) {
                  listTemp.push(str);
                }
              }
            }
            if (!isUsed) {
              if (!listTemp.includes(list[a][i])) {
                console.log(list[a][i]);
                if (CheckIs1(list[a][i])) {
                  listTemp.push(list[a][i]);
                }
              }
            }
          }
          list[a - 1] = [...listTemp];
          listTemp = [];
        }

        list.pop();
        l.push([...list]);
      }
    }
    console.log(list);

    asd.push(list);
    list = [...listBack];
    returnList.push(l);
  }
  returnList.push(asd);
  return returnList;
}
