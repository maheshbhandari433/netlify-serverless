fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `{
      stops(name: "rautatieasema" ) {
        gtfsId
        name
         stoptimesWithoutPatterns {
            serviceDay
            scheduledArrival
            headsign
            trip {
              route {
                shortName
                agency {
                  name
                }
              }
              wheelchairAccessible
              bikesAllowed
            }
            
          } 
      }  
    }` ,
    variables : { }
  })
})
  .then((res) => res.json())
  .then((result) => console.log(result))