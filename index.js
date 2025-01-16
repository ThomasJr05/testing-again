const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let total = distance1 + distance2;
  res.send(total.toString());
});

app.get('/total', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

app.get('/speed', (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString());
});

app.get('/eta', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

app.get('/calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);

  let totalCalories = (duration1 + duration2) * caloriesPerMinute;
  res.send(totalCalories.toString());
});

app.get('/interest-earned', (req, res) => {
  let P = parseFloat(req.query.P);
  let R = parseFloat(req.query.R);
  let T = parseFloat(req.query.T);

  let I = (P * R * T) / 100;
  res.send(I.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
