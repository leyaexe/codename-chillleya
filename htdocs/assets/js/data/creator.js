var url = "https://leyavr.github.io/codename-chillleya/";
const file = {
  creator: "data/creator_name.txt",
  staffs: "data/lists/staffs.txt",
  vips: "data/lists/vips.txt",
};
const id = {
  creator: "creatorData",
  staffs: "staffsData",
  vips: "vipsData",
};

function logConsole({ file, status, data }) {
  if (status == "error") {
    console.warn(
      `[LeyaVR.github.io](Codename: Chill Leya) Request failed for ${file}: ${data}`
    );
  } else if (status == "success") {
    console.log(
      `[LeyaVR.github.io](Codename: Chill Leya) Request succeeded for ${file} !`
    );
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseText(response) {
  return response.text();
}

function innerHTML({ id, data }) {
  document.getElementById(id).innerHTML = data;
}

fetch(url + file.creator)
  .then(checkStatus)
  .then(parseText)
  .then(function (data) {
    logConsole({
      file: file.creator,
      status: "success",
      data: data,
    });
    innerHTML({ id: id.creator, data: data });
  })
  .catch(function (error) {
    logConsole({
      file: file.creator,
      status: "error",
      data: error,
    });
    innerHTML({ id: id.creator, data: error });
  });