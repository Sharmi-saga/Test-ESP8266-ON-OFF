const client = mqtt.connect('wss://test.mosquitto.org:8081');
const statusText = document.getElementById('status-text');

client.on('connect', () => {
  console.log("Connected to MQTT broker");
  statusText.innerHTML = "Status: <strong>Connected to MQTT broker</strong>";
});

function sendCommand(state) {
  client.publish("led/control", state);
  statusText.innerHTML = `Status: <strong>LED is ${state}</strong>`;
  console.log("Sent:", state);
}
