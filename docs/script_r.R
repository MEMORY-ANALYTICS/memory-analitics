
dados_climatempo$DataHora = paste(dados_climatempo$Data, dados_climatempo$Hora)

dados_climatempo$DataHora <- as.POSIXct(dados_climatempo$DataHora)

dados_climatempo$Data <- NULL
dados_climatempo$Hora <- NULL

library(ggplot2)

grafico_temperatura <- ggplot(dados_climatempo, aes(x=DataHora, y = Temperatura)) + 
geom_point() + 
labs(x="Hora",y="Temperatura (°C)") +
ggtitle("Temperatura em São Paulo") +
geom_smooth(method = "lm") 




grafico_umidade <- ggplot(dados_climatempo, aes(x=DataHora, y = Umidade)) + 
  geom_point() + 
  labs(x="Hora",y="Umidade (%)") +
  ggtitle("Umidade em São Paulo") +
  geom_smooth(method = "lm") 

grafico_pressao<- ggplot(dados_climatempo, aes(x=DataHora, y = Pressao)) + 
  geom_point() + 
  labs(x="Hora",y="Pressão (hPa)") +
  ggtitle("Pressão em São Paulo") +
  geom_smooth(method = "lm") 


grafico_umidade

grafico_pressao

grafico_temperatura

