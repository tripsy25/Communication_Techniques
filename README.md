# Communication_Techniques

Long Polling: 
npm run start
http://localhost:5011/
http://localhost:5011/updateData?data=%22need%20data1%22

LongPolling -> Req sent by client -> Server gives response only when the data is updated otherwise timeout may happen or it may stay in pending state. (Good for large systems with large user base)
ShortPolling -> Req sent by client in a regular interval of time even though data may not be updated on the server (Good for small systems with low user base)

Web Socket:
npm run start

Full Duplex connection
<img width="1873" height="984" alt="image" src="https://github.com/user-attachments/assets/f09869a5-b555-4c1a-a7d1-9fa77c2c38a7" />
