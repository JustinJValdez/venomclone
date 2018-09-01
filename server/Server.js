const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');



app.use(bodyParser.json());

const tickets = [];

app.post('/api/tickets', (req, res) => {
  tickets.push(req.body);
  res.send(tickets);
});

app.get('/api/tickets', (req, res) => {
  res.send(tickets);
});

app.delete('/api/tickets/:index', (req, res) => {
  const { index } = req.param
  tickets.splice(index, 1);
  res.send(tickets);

});

app.put('/api/tickets/:index', (req, res) => {
  const { index } = req.param
  tickets[index].seat = req.query.seat;
  res.send(tickets);
});

app.listen(4000, () => {
  console.log('Listen on port 4000')
});