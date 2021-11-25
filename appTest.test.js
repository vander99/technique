const express = require("express"); // import express
var mainRoute = require('./routes'); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
var bodyParser = require('body-parser')

var mainRoute = require('./routes');

var app = express() 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(mainRoute)

describe('test simple: POST /maxSurfaceEauOpt [2,1,3] => 1',()=>{
  test("Should calculate the water surface [2,1,3] => 1",async ()=>{
    await request(app).post("/maxSurfaceEauOpt").send({
      buildingsHeightList: [2,1,3]
    })
    .then((response)=>{
      expect(response.request.res.text).toBe("1")
    })
  })
})

describe('test simple: POST /maxSurfaceEauOpt [3,1,0,1,4] => 7',()=>{
  test("Should calculate the water surface [3,1,0,1,4] => 7",async ()=>{
    await request(app).post("/maxSurfaceEauOpt").send({
      buildingsHeightList: [3,1,0,1,4]
    })
    .then((response)=>{
      expect(response.request.res.text).toBe("7")
    })
  })
})

describe('test simple: POST /maxSurfaceEauOpt [5,4,3,0,3,4,5] => 11',()=>{
  test("Should calculate the water surface [5,4,3,0,3,4,5] => 11",async ()=>{
    await request(app).post("/maxSurfaceEauOpt").send({
      buildingsHeightList: [5,4,3,0,3,4,5]
    })
    .then((response)=>{
      expect(response.request.res.text).toBe("11")
    })
  })
})

describe('test complexe: POST /maxSurfaceEauOpt [2,2,4,1,1,3,3,2,2,3,3] => 6',()=>{
  test("Should calculate the water surface [2,2,4,1,1,3,3,2,2,3,3] => 6",async ()=>{
    await request(app).post("/maxSurfaceEauOpt").send({
      buildingsHeightList: [2,2,4,1,1,3,3,2,2,3,3]
    })
    .then((response)=>{
      expect(response.request.res.text).toBe("6")
    })
  })
})

describe('test complexe: POST /maxSurfaceEauOpt [0,1,2,3,4,5,4,3,2,1,0] => 0',()=>{
  test("Should calculate the water surface [0,1,2,3,4,5,4,3,2,1,0] => 0",async ()=>{
    await request(app).post("/maxSurfaceEauOpt").send({
      buildingsHeightList: [0,1,2,3,4,5,4,3,2,1,0]
    })
    .then((response)=>{
      expect(response.request.res.text).toBe("0")
    })
  })
})

describe('test limite: POST /maxSurfaceEauOpt [0,0,0,0,1,0] => 0',()=>{
  test("Should calculate the water surface [0,0,0,0,1,0] => 0",async ()=>{
    await request(app).post("/maxSurfaceEauOpt").send({
      buildingsHeightList: [0,0,0,0,1,0]
    })
    .then((response)=>{
      expect(response.request.res.text).toBe("0")
    })
  })
})







