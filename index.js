const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routers/authRoutes');
const crmRoutes = require('./routers/crmRoutes');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/crm', crmRoutes);
app.use('/auth', authRoutes);


// Rotas e lógica de negócios serão adicionadas aqui

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
