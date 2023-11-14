import time
import psutil

def net_in(inf = 'wlo2'):   #change the inf variable according to the interface
    net_in_ps = psutil.net_io_counters(pernic=True, nowrap=True)[inf]
    
    net_in_1 = net_in_ps.bytes_recv
    time.sleep(1)
    net_in_2 = net_in_ps.bytes_recv
    net_in_result = net_in_2 - net_in_1

    net_in_result_mbps = round(net_in_result /1024 /1024, 3)
    print(net_in_result_mbps)
    net_in_thresh = 1.5
    if net_in_result_mbps <= net_in_thresh:
        print("Network in Warning, NetSpeed at:", net_in_result_mbps, "mbps")

def net_out(inf = 'wlo2'):   #change the inf variable according to the interface
    net_out_ps = psutil.net_io_counters(pernic=True, nowrap=True)[inf]
    net_out_1 = net_out_ps.bytes_sent
    time.sleep(1)
    net_out_2 = net_out_ps.bytes_sent
    net_out_result = net_out_2 - net_out_1
    net_out_result_mbps = round(net_out_result /1024 /1024 , 3)
    print(net_out_result_mbps)
    net_out_thresh = 1.5
    if net_out_result_mbps <= net_out_thresh:
        print("Network out Warning, NetSpeed at:", net_out_result_mbps, "mbps")

net_in()
net_out()

def net_usage(inf = 'wlo2'):   #change the inf variable according to the interface
    net_stat = psutil.net_io_counters(pernic=True, nowrap=True)[inf]
    
    net_in_1 = net_stat.bytes_recv
    net_out_1 = net_stat.bytes_sent
    time.sleep(1)
    net_stat = psutil.net_io_counters(pernic=True, nowrap=True)[inf]
    net_in_2 = net_stat.bytes_recv
    net_out_2 = net_stat.bytes_sent

    net_in = round((net_in_2 - net_in_1) / 1024 / 1024, 3)
    net_out = round((net_out_2 - net_out_1) / 1024 / 1024, 3)

    print(f"Current net-usage:\nIN: {net_in} MB/s, OUT: {net_out} MB/s")

net_usage()

print("-------------------------------------------------------------------")
print("ex1 = " + str(psutil.net_io_counters(pernic=False, nowrap=True)))
print("ex2 = " + str(psutil.net_io_counters(pernic=True, nowrap=True)))

rede = psutil.net_io_counters(pernic=False, nowrap=True)

print("bytes enviados = " + str(rede.bytes_sent))
print("bytes recebidos = " + str(rede.bytes_recv))

print("Número de pacotes enviados = " + str(rede.packets_sent))
print("Número de pacotes recebidos = " + str(rede.packets_recv))

print("Total de erros enquanto enviava = " + str(rede.errout))
print("Total de erros enquanto recebia = " + str(rede.errin))

print("interrompidos")

print("----------------------------Conexões-----------------------------")
print(psutil.net_connections(kind='inet'))
conexao_rede = psutil.net_connections()
endereco_interface_card  = psutil.net_if_addrs()

print(conexao_rede)
print("\naaa = " + str(endereco_interface_card))


# print(psutil.net_if_stats())
print(psutil.net_if_stats().get('wlo2').isup)
