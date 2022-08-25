const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: '../awsCerts/3f907ed215abe6aaf85bb77f95cb5c4717506be9a05e199be2f923ff0bb3c79a-private.pem.key',
  certPath: '../awsCerts/3f907ed215abe6aaf85bb77f95cb5c4717506be9a05e199be2f923ff0bb3c79a-certificate.pem.crt',
  caPath: '../awsCerts/AmazonRootCA1.pem',
  host: 'a1di9nm5bnmdld-ats.iot.us-east-1.amazonaws.com',
  clientId: 'semaforo_iot',
  region: 'us-east-1',
});

module.exports = { device };