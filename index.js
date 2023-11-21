document.getElementById('sendmsg').onclick = function() {
    var webhookurl = document.getElementsByClassName("webhookurl")[0].value
    var msg = document.getElementsByClassName("msg")[0].value
    var body = JSON.stringify({
        "content": msg,
        "attachments": []
      })
    if (webhookurl.includes("https://discord.com/api/webhooks/") === false) {
        document.getElementById('errorsandshit').innerHTML = "invalid webhook url"
        return
    }
    if (body === JSON.stringify({
        "content": "",
        "attachments": []
      })) {
        document.getElementById('errorsandshit').innerHTML = "cannot send empty message"
        return
    }
    webhookurl.replace(" ", "")
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookurl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(body);
    document.getElementById('errorsandshit').innerHTML = "sent message"
};