const updatedMessagingData = [];

function handleChange(target) {
  const reader = new FileReader();
  reader.onload = onReaderLoad;
  reader.readAsBinaryString(target.files[0]);
}

function onReaderLoad(e) {
  const parsedObject = JSON.parse(fixFbJson(e.target.result));

  let yourPartner = parsedObject.participants[0].name;
  let partners = parsedObject.participants.length;
  let groupName = parsedObject.title; //for 2 people convos, yourPartner = groupName

  if (partners > 2) {
    yourPartner = `${partners} people`;
    document.getElementById('groupName').textContent = `your group name is ${groupName}.`;
  } else {
    document.getElementById('groupName').textContent = '';
  }

  document.getElementById('messagingPartner').textContent = `it seems like you've been messaging with ${yourPartner}.`;

  parsedObject.messages.forEach((message, index) => {
    updatedMessagingData.push({
      x: message.timestamp_ms,
      y: index
    });
  });
}

function fixFbJson(json) {
  const textDecoder = new TextDecoder();
  return json.replace(/\\u00(..)\\u00(..)/g, (...args) => {
    const p1 = parseInt(args[1], 16);
    const p2 = parseInt(args[2], 16);
    return textDecoder.decode(new Int8Array([p1, p2]));
  });
}

function isUploaded() {
  if (document.getElementById('giveData').value !== '') {
    console.log('bravo, file uploaded succsessfully');
    location.href = '#graphMe';
  } else {
    window.alert('you didn\'t actually upload any file, did you?');
    console.log('no file uploaded');
  }
}

function getPoints(array) {
  const x = array.x;
  const y = array.y;
  const result = {};
  x.forEach((x, i) => result[x] = y[i]);
  return result;
}