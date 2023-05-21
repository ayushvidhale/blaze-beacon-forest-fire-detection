import React, { useState, useEffect } from 'react';

const Gas = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://api.thingspeak.com/channels/2100842/fields/2.json?api_key=YJ9FFCQGN5VFGJK4';
      const response = await fetch(apiUrl);
      const data = await response.json();
      const latestValue = data.feeds.reverse().find((feed) => feed.field3 !== null)?.field3;
      const parsedValue = latestValue !== null ? parseInt(latestValue, 10) : null;
      setValue(parsedValue);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {value !== null ? <p>{value}</p> : <p>--</p>}
    </div>
  );
};

export default Gas;
