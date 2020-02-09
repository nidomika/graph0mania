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
    document.querySelector('#groupName').textContent = `your group name is ${groupName}.`;
  } else {
    document.querySelector('#groupName').textContent = '';
  }

  const data = parsedObject.messages.map((message, index) => ({
    x: message.timestamp_ms,
    y: parsedObject.messages.length - index
  }))

  const dataset = {
    label: `number of messages over time with ${yourPartner}`,
    fill: false,
    borderColor: generateColor(),
    borderWidth: 2,
    radius: 0,
    data
  };

  myChart.data.datasets.push(dataset);
  myChart.update();
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
  if (document.querySelector('#giveData').value !== '') {
    console.log('bravo, file uploaded succsessfully');
    location.href = '#graphMe';

    if (myChart.data.datasets.length > 0) {
      setTimeout(function () {
        document.querySelector('#add').textContent = 'add another one'
      }, 1000);
    }
  } else {
    window.alert(`you didn't actually upload any file, did you?`);
    console.log('no file uploaded');
  }
}

function generateColor() {
  const rgb = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ].join(', ');

  return `rgba(${rgb}, 0.7)`;
}