var app = express();



app.use(cors());

app.use("/graficos", graficoCoreHoraRouter)