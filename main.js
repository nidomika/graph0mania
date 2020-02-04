let yourPartner = '';
const messagingData = {
    x: [],
    y: []
};

function handleChange(target) {
    const reader = new FileReader();
    reader.onload = function handleReaderLoad(event) {
        const parsedObject = JSON.parse(fixFbJson(event.target.result));
        yourPartner = parsedObject.participants[0].name;
        let partners = parsedObject.participants.length;
        let groupName = parsedObject.title; //for 2 people convos, yourPartner = groupName
        if (partners > 2) {
            yourPartner = partners + " people";
            document.getElementById('groupName').textContent = "your group name is " + groupName;
        } else document.getElementById('groupName').textContent = "";
        document.getElementById('messagingPartner').textContent = "it seems like you've been messaging with " + yourPartner;
        parsedObject.messages.forEach((message, index) => {
            messagingData.x.push(moment(message.timestamp_ms).format('DD-MM-YYYY'));
            messagingData.y.push(index + 1);
        });
        // console.log(messagingData);
        // console.log(getPoints(messagingData));
    }
    reader.readAsBinaryString(target.files[0]);
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
    if (document.getElementById('giveData').value !== "") {
        console.log("bravo, file uploaded succsessfully");
        location.href = '#graphMe';
    } else {
        window.alert("you didn't actually upload any file, did you?");
        console.log("no file uploaded");
    }
}

function getPoints(array) {
    const x = array.x;
    const y = array.y;
    const result = {};
    x.forEach((x, i) => result[x] = y[i]);
    return result;
}