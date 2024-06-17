const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Função para obter coordenadas a partir do nome da cidade
const getCoordinates = async (city) => {
  const NOMINATIM_URL = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;
  const response = await axios.get(NOMINATIM_URL);
  if (response.data.length === 0) {
    throw new Error('Cidade não encontrada');
  }
  return response.data[0];
};

// Rota para obter os dados do Open-Meteo
app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  try {
    const location = await getCoordinates(city);
    const { lat, lon } = location;
    const OPEN_METEO_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_min,temperature_2m_max,precipitation_sum&timezone=auto`;
    const response = await axios.get(OPEN_METEO_URL);
    res.json({ weather: response.data, city: location.display_name });
  } catch (error) {
    console.error('Erro ao obter dados do Open-Meteo:', error);
    res.status(500).json({ error: 'Erro ao obter dados do Open-Meteo' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});