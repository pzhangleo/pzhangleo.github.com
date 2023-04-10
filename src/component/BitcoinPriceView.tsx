import React, { useState, useEffect } from 'react';

interface BitcoinPriceProps {
  currency: string;
}

interface BitcoinPrice {
  USD: String;
}

const BitcoinPriceView: React.FC<BitcoinPriceProps> = ({ currency }) => {
  const [price, setPrice] = useState<BitcoinPrice | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${currency}&api_key=fc7af115e9a270c513c311c0b92e10337d9d93eff3c7e245efdef79fec6f1341`,
        {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
      );
      console.log(response);
      if(!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setPrice(data);
    };
    fetchData();
    //change the interval to 5 minutes  5 * 60 * 1000
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [currency]);

  if (!price) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg">
      <h2 className="text-xl font-medium mb-4">Bitcoin Price</h2>
      <p className="text-lg mb-2">
        Price: ${price.USD} {currency.toUpperCase()}
      </p>

    </div>
  );
};

export default BitcoinPriceView;
