var fs = require("fs");
var path = require("path");

export const writeFile = (fileName, fileData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, fileData, err => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
};

export const readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

export const getMockDataPath = (dirName, queryName) => {
  return path.join(dirName, "/__mock_data__/", queryName + ".json");
};
