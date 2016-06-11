Data into json: 
[{
    From 
    To
    take off date time 
    arrive Date time
    Total price
    travel duration time
    how many stops
    airline
 }
]


2016-10-13T06:00-07:00
2016-10-14T10:00+01:00
"2016-10-23T10:55+01:00"
"2016-10-23T23:18-07:00"


"Gb0VT9h-fi4WuAAG"
"Gb0VT9h-fi4WuAAG"

e.g.  ticket format (One way )
{
    "from" : "SFO",
    "to" : "TPE",
    "tripOption":[
    {    
        "saleTotal" : "USD501.90",            
        "outbound" : {        
            "departureTime" : "2016-04-27T01:40-07:00",
            "arrivalTime" : "2016-04-28T06:00+08:00",
            "duration" : "10h50m",
            "stops" : 0,
            "carrierCombination":"CI03"
        },
        "inbound" : {}
    },
    {
        "saleTotal" : "USD547.90",           
        "outbound" : {        
            "departureTime" : "2016-04-27T13:40-07:00",
            "arrivalTime" : "2016-04-28T18:30+08:00",
            "duration" : "13h50m",        
            "stops" : 0,
            "carrierCombination":"UA122"
        },
        "inbound" : {}
    }
    ]
}

e.g.   ticket format (Round trip)
{
    "from" : "OAK",
    "to" : "LGW",
        
    "tripOption":[
    {
        "saleTotal" : "USD623.90",    
        "outbound" : {
            "departureTime" : "2016-10-13T19:55-07:00",
            "arrivalTime" : "2016-10-14T14:00+01:00",
            "duration" : "10h05m",
            "stops" : 0,
            "carrierCombination":"DY7074"
        },
        "inbound" : {
            "departureTime" : "2016-10-23T13:00+01:00",
            "arrivalTime" : "2016-10-23T16:00-07:00",
            "duration" : "11h00m",
            "stops" : 0,
            "carrierCombination":"DY7073"       
        }
    },
    {
        "saleTotal" : "USD925.66",
        "outbound" : {        
            "departureTime" : "2016-10-13T06:00-07:00",
            "arrivalTime" :   "2016-10-14T10:00+01:00",           
            "duration" : "20h0m",        
            "stops" : 2,
            "carrierCombination":"AS3461AS784WS1"
        },
        "inbound" : {
            "departureTime" : "2016-10-23T10:55+01:00",
            "arrivalTime" :   "2016-10-23T23:18-07:00",           
            "duration" : "20h23m",        
            "stops" : 2,
            "carrierCombination":"WS2AS2119AS3486"
        }
    }
    ]
}









2 solutions found.

Solution#   1   Sale Price: USD501.90
         Slice 0  CI   3 SFO 2016-04-27T01:40-07:00 TPE 2016-04-28T06:00+08:00

Solution#   2   Sale Price: USD547.90
         Slice 0  UA 871 SFO 2016-04-27T13:40-07:00 TPE 2016-04-28T18:30+08:00

         
         
2 solutions found.

Solution#   1   Sale Price: USD664.00
         Slice 0
             CZ1081 OAK 2016-04-27T16:16-07:00 LAX 2016-04-27T17:45-07:00
             CZ 328 LAX 2016-04-27T23:50-07:00 CAN 2016-04-29T05:40+08:00
             CZ3097 CAN 2016-04-29T11:30+08:00 TPE 2016-04-29T13:30+08:00

Solution#   2   Sale Price: USD981.40
         Slice 0
             AS 345 OAK 2016-04-27T06:00-07:00 SEA 2016-04-27T08:00-07:00
             AS 440 SEA 2016-04-27T09:20-07:00 LAX 2016-04-27T11:56-07:00
             CI   5 LAX 2016-04-27T16:00-07:00 TPE 2016-04-28T21:05+08:00
