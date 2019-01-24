// Replace with the URL where a Kafka REST service is listening
var clusters = [
/*            
    {
      NAME: "prod",
      KAFKA_REST: "/api",
      MAX_BYTES: "50000", 	// Sets the default maximum amount of bytes to fetch from each topic
      RECORD_POLL_TIMEOUT: "3000",
      COLOR: "#141414", // Optional
      DEBUG_LOGS_ENABLED: true
    },*/
    {
      NAME: "dev",
      KAFKA_REST: "http://39.105.135.11:50010",
      MAX_BYTES: "50000",
      COLOR: "#141414",
      RECORD_POLL_TIMEOUT: "3000",
      DEBUG_LOGS_ENABLED: true
    },
    /*
    {
        NAME: "UAT",
        KAFKA_REST: "https://cp1.demo.playground.landoop.com/api/kafka-rest-proxy",
        MAX_BYTES: "250000",     // Sets the default maximum amount of bytes to fetch from each topic
       RECORD_POLL_TIMEOUT: "5500",
        COLOR: "#141414", // Optional
        DEBUG_LOGS_ENABLED: true
    },
    {
        NAME: "SIT",
        KAFKA_REST: "https://cp2.demo.playground.landoop.com/api/kafka-rest-proxy",
        MAX_BYTES: "250000",     // Sets the default maximum amount of bytes to fetch from each topic
        RECORD_POLL_TIMEOUT: "5500",
        COLOR: "#141414", // Optional
        DEBUG_LOGS_ENABLED: true
    }  */  
  ];