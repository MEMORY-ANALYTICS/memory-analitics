var app = express();

var graficoCoreHoraRouter = require("../src/routes/graficos");

app.use(cors());

app.use("/graficos", graficoCoreHoraRouter)