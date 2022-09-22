
  

# SMART HOME SECURITY HYBRID APP (FullStack)

**Smart Home Security App** Uses **Ionic 4**, **Socket.io**, **API REST** over **HTTPS**, **Node-red**, **Mosquito** (MQTT-Broker),**MongoDB** (With mongoose) and **JWT** for authentification and validation.

  

# How To Use:

  

- For Browser Test :

```

cd SmartHomeSecurityApp

npm install 

cd server 

npm install

cd ..

ionic serve --lab

```

- For Mobile app Test :

- - Server Side (BackEnd): <br/>
 ```
Run "npm start"
```
- - Ionic Mobile app Side (FrontEnd):<br/> 


For android test , instead of "ionic serve --lab" :

 ```
run "ionic cordova run andoid" 
```
For iOS test :
``` 
run "ionic cordova run ios"
```

  
  

# Pre-Requirement: <br/>

- You need to have node-red installed and running , copy what's in the nodes-red.json and imported in your current flow. <br/>

- Install mosquito (MQTT Broker) and launch it. <br/>

- Install MongoDB and start it.


# SHC Mobile App Screenshot:<br/>

![](https://i.imgur.com/t10fUoM.png)
![](https://i.imgur.com/Nyn1jFd.png)
![](https://i.imgur.com/kpcfk9b.png)
![](https://i.imgur.com/g5f4wMA.png)
![](https://i.imgur.com/Y1uZRCa.png)
![](https://i.imgur.com/l1MFCRG.png)
![](https://i.imgur.com/pfopP2B.png)
![](https://i.imgur.com/d6iEA7p.png)
![](https://i.imgur.com/ECU7jA5.png)


**Notes**

- You will have both HTTP and HTTPS(TLS) communication running on port 3000 and port 8443 but keep in mind that every request coming on HTTP port 3000 will be redirected to HTTPS port 8443 <br/>
- In order to test the app ,You need to register at first and make sure you uses "home_1" as your Home code in order to subscribe to the same home code as node-red provides.<br/>
- If encountred any issue with packages ,run "npm audit fix -f" on the root directory and in the server directory as well.

  

