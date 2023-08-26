from connection import executar
import psutil as ps
import platform as plat
from time import sleep as s
import os

osv = plat.uname()
print(osv.system)


while True:
    os.system('clear')
    # -=-=-=-=-=-=-=-=-=-= CPU -=-=-=-=-=-=-=-=-=-=

    tempo_ocioso = ps.cpu_times().idle
    tempo_uso_kernel = ps.cpu_times().system

    qtd_cpus_virtuais = ps.cpu_count()
    qtd_cpus_fisicos = ps.cpu_count(logical=False)

    uso_cpus = ps.cpu_percent(interval=None, percpu=True)

    interrupcoes_cpu = ps.cpu_stats().interrupts

    frequencia_cpu_atual = ps.cpu_freq().current
    frequencia_cpu_max = ps.cpu_freq().max
    frequencia_cpu_min = ps.cpu_freq().min

    print(f"""
------------------ CPU --------------------- 
Tempo Ocioso == {'{:.2f}'.format(tempo_ocioso/1000)}s
Tempo de Uso do Kernel == {'{:.2f}'.format(tempo_uso_kernel/1000)}s
Quantidade de CPUs Virtuais == {qtd_cpus_virtuais}
Quantidade de CPUs Fisicos == {qtd_cpus_fisicos}
% de Uso das CPUs == {uso_cpus}%
Tempo de interrupções da CPU == {'{:.2f}'.format(interrupcoes_cpu/1000)}s
Frequência Atual da CPU == {'{:.2f}'.format(frequencia_cpu_atual/1000)}GHz
Frequência Máxima da CPU == {'{:.2f}'.format(frequencia_cpu_max/1000)}GHz
Frequência Mínima da CPU == {'{:.2f}'.format(frequencia_cpu_min/1000)}GHz
    """)

    # -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=

    memoria_usada = ps.virtual_memory().used
    memoria_total = ps.virtual_memory().total
    memoria_livre = ps.virtual_memory().free
    memoria_disponivel = ps.virtual_memory().available

    print(f"""
 ------------------ Memória --------------------- 
 Memória Total == {memoria_total/1000000000:.2f} GByte
 Memória Usada == {memoria_usada/1000000000:.2f} GByte
 Memória Livre == {memoria_livre/1000000000:.2f} GByte
 Memória Disponível == {memoria_disponivel/1000000000:.2f} GByte
 """)

    # -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=

    particoes_disco = ps.disk_partitions()[0].device
    uso_total_disco = ps.disk_usage(particoes_disco[0]).total
    disco_usado = ps.disk_usage(particoes_disco[0]).used
    disco_livre = ps.disk_usage(particoes_disco[0]).free
    porcent_disco = ps.disk_usage(particoes_disco[0]).percent

    print(f"""
------------------ Disco --------------------- 
Partições do Disco == {particoes_disco}
Uso Total do Disco == {uso_total_disco/1000000000:.2f}
Quantidade de Disco Usada (Gb) == {disco_usado/1000000000:.2f}
Quantidade de Disco Livre (Gb) == {disco_livre/1000000000:.2f}
Uso do Disco (%) == {porcent_disco}%
""")

    # -=-=-=-=-=-=-=-=-=-= Rede -=-=-=-=-=-=-=-=-=-=

    bytes_enviados = ps.net_io_counters().bytes_sent
    bytes_recebidos = ps.net_io_counters().bytes_recv

    qtd_erros_entrada = ps.net_io_counters().errin
    qtd_erros_saida = ps.net_io_counters().errout

    velocidade_rede_cabo = ps.net_if_stats()['enp1s0'].speed
    cabo_conectado = ps.net_if_stats()['enp1s0'].isup

    print(f"""
------------------ Rede --------------------- 
Bytes Enviados == {bytes_enviados}
Bytes Recebidos == {bytes_recebidos}
Quantidade de Erros na Entrada == {qtd_erros_entrada}
Quantidade de Erros na Saida == {qtd_erros_saida}
Velocidade da Rede por Cabo == {velocidade_rede_cabo}
Cabo Conectado? == {cabo_conectado}
""")
    
    lista = []
    # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

    for i in range(0,len(ps.sensors_temperatures()['nvme'])):
        temperatura_cpu_label = ps.sensors_temperatures()['nvme'][i].label
        temperatura_cpu_atual = ps.sensors_temperatures()['nvme'][i].current
        lista.append([temperatura_cpu_label,temperatura_cpu_atual])

    print(f"""
------------------ Temperatura --------------------- 
Temperaturas do Entorno da CPU == {lista}
""")

    s(10)