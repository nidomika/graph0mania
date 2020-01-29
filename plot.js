function handleChange(target) {
    const reader = new FileReader();
    reader.onload = handleReaderLoad;
    reader.readAsText(target.files[0]);
}

function handleReaderLoad(event) {
    const parsedObject = JSON.parse(event.target.result);
    console.log('parsed object', parsedObject);
    const output = parsedObject.participants.map(({
        name
    }) => ({
        name,
        counts: {},
    }))
    parsedObject.messages.forEach(message => {
        // Find the correct participant in the output object
        const outputParticipant = output.find(({
            name
        }) => name === message.sender_name)

        // Increment the reaction counts for that participant
        message.reactions.forEach(({
            reaction
        }) => {
            if (!outputParticipant.counts[reaction]) {
                outputParticipant.counts[reaction] = 1
            } else {
                outputParticipant.counts[reaction] += 1
            }
        })
    })
}
// parsedObject.messages.forEach(message => {
//     // Find the correct participant in the output object
//     const outputParticipant = output.find(({
//         name
//     }) => name === message.sender_name)

//     // Increment the reaction counts for that participant
//     message.reactions.forEach(({
//         reaction
//     }) => {
//         if (!outputParticipant.counts[reaction]) {
//             outputParticipant.counts[reaction] = 1
//         } else {
//             outputParticipant.counts[reaction] += 1
//         }
//     })
// })

// const output = parsedObject.participants.map(({
//     name
// }) => ({
//     name,
//     counts: {},
// }))
// const output = parsedObject.participants.map(({
//     name
// }) => ({
//     name,
//     counts: {},
// }))

function timestampConverter(timestamp) {
    const time = new Date(timestamp);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let i = time.getMonth();
    console.log(months[i], time.getFullYear());
}