fetch(
  "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",
  { mode: "no-cors" },
  {
    method: "POST",
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "HYaALwVmDXmsh5n3tIR5AcLh9a98p1CoC9vjsnNxT8BfGXIo7Z",
      "content-type": "application/x-www-form-urlencoded"
    },
    body: {
      inboundDate: "2019-09-10",
      cabinClass: "business",
      children: "0",
      infants: "0",
      country: "US",
      currency: "USD",
      locale: "en-US",
      originPlace: "SFO-sky",
      destinationPlace: "LHR-sky",
      outboundDate: "2019-09-01",
      adults: "1"
    }
  }
)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
