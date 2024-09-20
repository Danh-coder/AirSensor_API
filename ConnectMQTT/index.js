import mqtt from "mqtt"
import dotenv from "dotenv";
// Access .ENV variables
dotenv.config()

const protocol = 'mqtt'
const host = process.env.BROKER_MQTT
const port = process.env.PORT_MQTT
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `${protocol}://${host}:${port}`
// console.log(connectUrl);

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 30 * 1000,
    username: process.env.USERNAME_MQTT,
    password: process.env.PASSWORD_MQTT,
    reconnectPeriod: 1000,
})

export default client;