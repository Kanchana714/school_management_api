const pool = require('../config/db');
const getDistance = require('../utils/distanceCalc');

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  pool.query(
    'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'School added successfully' });
    }
  );
};

exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;
    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: 'Invalid coordinates' });
    }
  
    pool.query('SELECT * FROM schools', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
  
      const userLat = parseFloat(latitude);
      const userLon = parseFloat(longitude);
      const sorted = results.map(school => {
        const distance = getDistance(userLat, userLon, school.latitude, school.longitude);
        return { ...school, distance: +distance.toFixed(2) };
      }).sort((a, b) => a.distance - b.distance);
  
      res.json(sorted);
    });
  };