function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    const calculateOrbitalPeriod = (avgAlt) => {
      const a = earthRadius + avgAlt;
      const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
      return Math.round(T);
    };
  
    return arr.map(({ name, avgAlt }) => ({
      name: name,
      orbitalPeriod: calculateOrbitalPeriod(avgAlt),
    }));
  }
  
  const objects = [
    { name: 'ISS', avgAlt: 420 },
    { name: 'Hubble Space Telescope', avgAlt: 559 },
    // Add more objects as needed
  ];
  
  const results = orbitalPeriod(objects);
  console.log(results);
  