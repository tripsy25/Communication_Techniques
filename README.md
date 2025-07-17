# Communication_Techniques

Long Polling: 
npm run start
http://localhost:5011/
http://localhost:5011/updateData?data=%22need%20data1%22

LongPolling -> Req sent by client -> Server gives response only when the data is updated otherwise timeout may happen or it may stay in pending state. (Good for large systems with large user base)
ShortPolling -> Req sent by client in a regular interval of time even though data may not be updated on the server (Good for small systems with low user base)
