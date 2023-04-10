import React, { useState, useEffect } from 'react';

interface BitcoinPriceProps {
  currency: string;
}

interface BitcoinPrice {
  last: number;
  high: number;
  low: number;
  volume: number;
}

const BitcoinPrice: React.FC<BitcoinPriceProps> = ({ currency }) => {
  const [price, setPrice] = useState<BitcoinPrice | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.bitstamp.net/api/v2/ticker/btc${currency}/`,
        //add Origin header to avoid CORS error
        {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
      );
      const data = await response.json();
      setPrice(data);
    };
    fetchData();
    //change the interval to 5 minutes  5 * 60 * 1000
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [currency]);

  if (!price) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg">
      <h2 className="text-xl font-medium mb-4">Bitcoin Price</h2>
      <p className="text-lg mb-2">
        Last Price: {price.last.toFixed(2)} {currency.toUpperCase()}
      </p>
      <p className="text-lg mb-2">
        High Price: {price.high.toFixed(2)} {currency.toUpperCase()}
      </p>
      <p className="text-lg mb-2">
        Low Price: {price.low.toFixed(2)} {currency.toUpperCase()}
      </p>
      <p className="text-lg mb-2">
        Volume: {price.volume.toFixed(2)} BTC
      </p>
    </div>
  );
};

export default BitcoinPrice;
