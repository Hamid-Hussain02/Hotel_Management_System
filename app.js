const bodyParser =require('body-parser')
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

const userRoutes =require('./routers/user')
const reservationRoutes =require('./routers/reservation')
const hotelRoutes =require('./routers/hotel')
const roomRoutes =require('./routers/room')
const billRoutes =require('./routers/bill')

const multiParty =require('connect-multiparty')

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

require('dotenv').config();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multiParty())

PORT = process.env.PORT || 3000;




const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hotel Management System",
        version: "1.0.0",
        description: "Hotel Management System to Reseve rooms",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routers/*.js"],
  };

  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));





app.use('/api/user',userRoutes)
app.use('/api/reservation',reservationRoutes)
app.use('/api/hotel',hotelRoutes)
app.use('/api/room',roomRoutes)
app.use('/api/bill',billRoutes)

app.listen(PORT, () => {
    console.log(`listing on http://127.0.0.1:${process.env.PORT}`)
})
