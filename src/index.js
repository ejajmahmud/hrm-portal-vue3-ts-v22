const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/status', (req, res) => {
    res.json({
        app: 'hrm-portal-vue3-ts-v22',
        tech: 'TypeScript / Vue 3 Pinia',
        category: 'Human Resource Management (HRM)',
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`[hrm-portal-vue3-ts-v22] Server running on port ${PORT}`);
});
