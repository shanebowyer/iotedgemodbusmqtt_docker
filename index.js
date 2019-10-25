'use strict'

let edgeRouter = require('iotedgemodbusmqtt')
let config = require('./config.json')


let commands = [
    {
        index: 0,
        RTUAddress: 1,
        functionCode: 3,
        register: 4354,
        output: [],
        input: "AI1",
        cofsSP: 1,
        cofsValue: null
    },
    {
        index: 1,
        RTUAddress: 1,
        functionCode: 3,
        register: 4355,
        output: [],
        input: "AI3",
        cofsSP: 3,
        cofsValue: null
    }
]

let options = {
    rtuId: config.rtuId,
    commPort: '/dev/ttyUSB0',
    baud: 19200 , 
    commands: commands, 
    mqttServer: config.mqttServer,
    mqttPort: config.mqttPort,
    mqttUserName: config.mqttUserName,
    mqttPassword: config.mqttPassword,
    mqttSubscribe: config.mqttSubscribe, 
    txTimeSP: 10,
    enable232: 'true'
}

edgeRouter.start(options)
