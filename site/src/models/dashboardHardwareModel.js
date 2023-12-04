const db = require('../config/db');

const DashboardHardwareModel = {
getCpuUsage: async (fkServidor) => {
    const query = 'SELECT r.valorRegistro, r.dtHoraRegistro FROM registro r INNER JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = "CPU" AND c.fkServidor = ?';
    const [rows] = await db.query(query, [fkServidor]);
    return rows;
},

getRamUsage: async (fkServidor) => {
    const query = 'SELECT r.valorRegistro, r.dtHoraRegistro FROM registro r INNER JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = "RAM" AND c.fkServidor = ?';
    const [rows] = await db.query(query, [fkServidor]);
    return rows;
},

getDiskUsage: async (fkServidor) => {
    const query = 'SELECT r.valorRegistro, r.dtHoraRegistro FROM registro r INNER JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = "DISCO" AND c.fkServidor = ?';
    const [rows] = await db.query(query, [fkServidor]);
    return rows;
},
};

module.exports = DashboardHardwareModel;
