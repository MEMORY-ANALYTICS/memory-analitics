filtroTempo = "ALLTIME"
regressao = false
qtdRegressao = 0
function setFiltroTodos() {
    filtroTempo = "ALLTIME"
    togglePersoEspacoTempo.innerHTML = 'Todo o Tempo'
    atualizarVariaveis()
}
function setFiltroDia() {
    togglePersoEspacoTempo.innerHTML = 'Dia'
    filtroTempo = "DAY"
    atualizarVariaveis()
}
function setFiltroSemana() {
    togglePersoEspacoTempo.innerHTML = 'Semana'
    filtroTempo = "WEEK"
    atualizarVariaveis()

}
function setFiltroMes() {
    togglePersoEspacoTempo.innerHTML = 'Mes'
    filtroTempo = "MONTH"
    atualizarVariaveis()

}
function setFiltroAno() {
    togglePersoEspacoTempo.innerHTML = 'Ano'
    filtroTempo = "YEAR"
    atualizarVariaveis()
}
function setFiltroTR() {
    togglePersoEspacoTempo.innerHTML = 'Últimos Registros'
    filtroTempo = "REALTIME"
    atualizarVariaveis()
}
function setAllFalse() {
    if (filtrosDashboard.cpuUso) {
        persoCpuUso.classList.remove('bg')
        persoCpuUso.classList.remove('bg-info')
        persoCpuUso.classList.remove('border')
        persoCpuUso.classList.remove('rounded')
        persoCpuUso.classList.remove('text-white')
        filtrosDashboard.cpuUso = false
    }
    if (filtrosDashboard.ram) {
        persoRam.classList.remove('bg')
        persoRam.classList.remove('bg-info')
        persoRam.classList.remove('border')
        persoRam.classList.remove('rounded')
        persoRam.classList.remove('text-white')
        filtrosDashboard.ram = false
    }
    if (filtrosDashboard.disco) {
        persoDisco.classList.remove('bg')
        persoDisco.classList.remove('bg-info')
        persoDisco.classList.remove('border')
        persoDisco.classList.remove('rounded')
        persoDisco.classList.remove('text-white')
        filtrosDashboard.disco = false
    }
    if (filtrosDashboard.cpuFreq) {
        persoCpuFreq.classList.remove('bg')
        persoCpuFreq.classList.remove('bg-info')
        persoCpuFreq.classList.remove('border')
        persoCpuFreq.classList.remove('rounded')
        persoCpuFreq.classList.remove('text-white')
        filtrosDashboard.cpuFreq = false
    }
    if (filtrosDashboard.pacoteRecebido) {
        persoPacotesRecebidos.classList.remove('bg')
        persoPacotesRecebidos.classList.remove('bg-info')
        persoPacotesRecebidos.classList.remove('border')
        persoPacotesRecebidos.classList.remove('rounded')
        persoPacotesRecebidos.classList.remove('text-white')
        filtrosDashboard.pacoteRecebido = false
    }
    if (filtrosDashboard.pacoteEnviado) {
        persoPacoresEnviados.classList.remove('bg')
        persoPacoresEnviados.classList.remove('bg-info')
        persoPacoresEnviados.classList.remove('border')
        persoPacoresEnviados.classList.remove('rounded')
        persoPacoresEnviados.classList.remove('text-white')
        filtrosDashboard.pacoteEnviado = false
    }
    if (filtrosDashboard.mbRecebido) {
        persoMbRecebidos.classList.remove('bg')
        persoMbRecebidos.classList.remove('bg-info')
        persoMbRecebidos.classList.remove('border')
        persoMbRecebidos.classList.remove('rounded')
        persoMbRecebidos.classList.remove('text-white')
        filtrosDashboard.mbRecebido = false
    }
    if (filtrosDashboard.mbEnviado) {
        persoMbEnviados.classList.remove('bg')
        persoMbEnviados.classList.remove('bg-info')
        persoMbEnviados.classList.remove('border')
        persoMbEnviados.classList.remove('rounded')
        persoMbEnviados.classList.remove('text-white')
        filtrosDashboard.mbEnviado = false
    }
    if (filtrosDashboard.transmissao) {
        persoTransmissaoRede.classList.remove('bg')
        persoTransmissaoRede.classList.remove('bg-info')
        persoTransmissaoRede.classList.remove('border')
        persoTransmissaoRede.classList.remove('rounded')
        persoTransmissaoRede.classList.remove('text-white')
        filtrosDashboard.transmissao = false
    }
    if (filtrosDashboard.latencia) {
        persoLatenciaRede.classList.remove('bg')
        persoLatenciaRede.classList.remove('bg-info')
        persoLatenciaRede.classList.remove('border')
        persoLatenciaRede.classList.remove('rounded')
        persoLatenciaRede.classList.remove('text-white')
        filtrosDashboard.latencia = false
    }
    if (filtrosDashboard.temperatura) {
        togglePersoTemperatura.classList.remove('btn')
        togglePersoTemperatura.classList.remove('btn-info')
        togglePersoTemperatura.classList.add('btn')
        togglePersoTemperatura.classList.add('btn-primary')
        togglePersoTemperatura.classList.remove('border')
        togglePersoTemperatura.classList.remove('rounded')
        filtrosDashboard.temperatura = false
    }
    if (filtrosDashboard.processosQtd) {
        persoProcessosQtd.classList.remove('bg')
        persoProcessosQtd.classList.remove('bg-info')
        persoProcessosQtd.classList.remove('border')
        persoProcessosQtd.classList.remove('rounded')
        persoProcessosQtd.classList.remove('text-white')
        filtrosDashboard.processosQtd = false
    }
    if (filtrosDashboard.processosRam) {
        persoProcessosRam.classList.remove('bg')
        persoProcessosRam.classList.remove('bg-info')
        persoProcessosRam.classList.remove('border')
        persoProcessosRam.classList.remove('rounded')
        persoProcessosRam.classList.remove('text-white')
        filtrosDashboard.processosRam = false
    }
    if (filtrosDashboard.processosCpu) {
        persoProcessosCpu.classList.remove('bg')
        persoProcessosCpu.classList.remove('bg-info')
        persoProcessosCpu.classList.remove('border')
        persoProcessosCpu.classList.remove('rounded')
        persoProcessosCpu.classList.remove('text-white')
        filtrosDashboard.processosCpu = false
    }
}
eixosRegressao = {
    x,
    y
}
function setFiltroCpuUso() {
    if (filtrosDashboard.cpuUso) {
        if (regressao) {
            qtdRegressao--
        }
        persoCpuUso.classList.remove('bg')
        persoCpuUso.classList.remove('bg-info')
        persoCpuUso.classList.remove('border')
        persoCpuUso.classList.remove('rounded')
        persoCpuUso.classList.remove('text-white')
        filtrosDashboard.cpuUso = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.cpu.registrosCpu.percentUso;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como USO CPU!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.cpu.registrosCpu.percentUso;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como USO CPU!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoCpuUso.classList.add('bg')
                persoCpuUso.classList.add('bg-info')
                persoCpuUso.classList.add('border')
                persoCpuUso.classList.add('rounded')
                persoCpuUso.classList.add('text-white')
                filtrosDashboard.cpuUso = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoCpuUso.classList.add('bg')
            persoCpuUso.classList.add('bg-info')
            persoCpuUso.classList.add('border')
            persoCpuUso.classList.add('rounded')
            persoCpuUso.classList.add('text-white')
            filtrosDashboard.cpuUso = true
        }
    }
}
function setFiltroRam() {
    if (filtrosDashboard.ram) {
        if (regressao) {
            qtdRegressao--
        }
        persoRam.classList.remove('bg')
        persoRam.classList.remove('bg-info')
        persoRam.classList.remove('border')
        persoRam.classList.remove('rounded')
        persoRam.classList.remove('text-white')
        filtrosDashboard.ram = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.ram.registrosRam;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como USO RAM!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.ram.registrosRam;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como USO RAM!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoRam.classList.add('bg')
                persoRam.classList.add('bg-info')
                persoRam.classList.add('border')
                persoRam.classList.add('rounded')
                persoRam.classList.add('text-white')
                filtrosDashboard.ram = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoRam.classList.add('bg')
            persoRam.classList.add('bg-info')
            persoRam.classList.add('border')
            persoRam.classList.add('rounded')
            persoRam.classList.add('text-white')
            filtrosDashboard.ram = true
        }
    }
}
function setFiltroDisco() {
    if (filtrosDashboard.disco) {
        if (regressao) {
            qtdRegressao--
        }
        persoDisco.classList.remove('bg')
        persoDisco.classList.remove('bg-info')
        persoDisco.classList.remove('border')
        persoDisco.classList.remove('rounded')
        persoDisco.classList.remove('text-white')
        filtrosDashboard.disco = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.disco.registrosDisco.percentUso;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como DISCO USO!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.disco.registrosDisco.percentUso;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como DISCO USO!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoDisco.classList.add('bg')
                persoDisco.classList.add('bg-info')
                persoDisco.classList.add('border')
                persoDisco.classList.add('rounded')
                persoDisco.classList.add('text-white')
                filtrosDashboard.disco = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoDisco.classList.add('bg')
            persoDisco.classList.add('bg-info')
            persoDisco.classList.add('border')
            persoDisco.classList.add('rounded')
            persoDisco.classList.add('text-white')
            filtrosDashboard.disco = true
        }
    }
}
function setFiltroCpuFreq() {
    if (filtrosDashboard.cpuFreq) {
        if (regressao) {
            qtdRegressao--
        }
        persoCpuFreq.classList.remove('bg')
        persoCpuFreq.classList.remove('bg-info')
        persoCpuFreq.classList.remove('border')
        persoCpuFreq.classList.remove('rounded')
        persoCpuFreq.classList.remove('text-white')
        filtrosDashboard.cpuFreq = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.cpu.registrosCpu.frequencia;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como CPU FREQUÊNCIA!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.cpu.registrosCpu.frequencia;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como CPU FREQUÊNCIA!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoCpuFreq.classList.add('bg')
                persoCpuFreq.classList.add('bg-info')
                persoCpuFreq.classList.add('border')
                persoCpuFreq.classList.add('rounded')
                persoCpuFreq.classList.add('text-white')
                filtrosDashboard.cpuFreq = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoCpuFreq.classList.add('bg')
            persoCpuFreq.classList.add('bg-info')
            persoCpuFreq.classList.add('border')
            persoCpuFreq.classList.add('rounded')
            persoCpuFreq.classList.add('text-white')
            filtrosDashboard.cpuFreq = true
        }
    }
}
function setFiltroPacoteRecebido() {
    if (filtrosDashboard.pacoteRecebido) {
        if (regressao) {
            qtdRegressao--
        }
        persoPacotesRecebidos.classList.remove('bg')
        persoPacotesRecebidos.classList.remove('bg-info')
        persoPacotesRecebidos.classList.remove('border')
        persoPacotesRecebidos.classList.remove('rounded')
        persoPacotesRecebidos.classList.remove('text-white')
        filtrosDashboard.pacoteRecebido = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.rede.registrosRede.pacotesRecebidos;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como Pacotes Recebidos!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.rede.registrosRede.pacotesRecebidos;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como Pacotes Recebidos!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoPacotesRecebidos.classList.remove('bg')
                persoPacotesRecebidos.classList.remove('bg-info')
                persoPacotesRecebidos.classList.remove('border')
                persoPacotesRecebidos.classList.remove('rounded')
                persoPacotesRecebidos.classList.remove('text-white')
                filtrosDashboard.pacoteRecebido = false
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoPacotesRecebidos.classList.add('bg')
            persoPacotesRecebidos.classList.add('bg-info')
            persoPacotesRecebidos.classList.add('border')
            persoPacotesRecebidos.classList.add('rounded')
            persoPacotesRecebidos.classList.add('text-white')
            filtrosDashboard.pacoteRecebido = true
        }
    }
}
function setFiltroPacoteEnviado() {
    if (filtrosDashboard.pacoteEnviado) {
        if (regressao) {
            qtdRegressao--
        }
        persoPacoresEnviados.classList.remove('bg')
        persoPacoresEnviados.classList.remove('bg-info')
        persoPacoresEnviados.classList.remove('border')
        persoPacoresEnviados.classList.remove('rounded')
        persoPacoresEnviados.classList.remove('text-white')
        filtrosDashboard.pacoteEnviado = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.rede.registrosRede.pacotesEnviados;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como PACOTES ENVIADOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.rede.registrosRede.pacotesEnviados;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como PACOTES ENVIADOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoPacoresEnviados.classList.add('bg')
                persoPacoresEnviados.classList.add('bg-info')
                persoPacoresEnviados.classList.add('border')
                persoPacoresEnviados.classList.add('rounded')
                persoPacoresEnviados.classList.add('text-white')
                filtrosDashboard.pacoteEnviado = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoPacoresEnviados.classList.add('bg')
            persoPacoresEnviados.classList.add('bg-info')
            persoPacoresEnviados.classList.add('border')
            persoPacoresEnviados.classList.add('rounded')
            persoPacoresEnviados.classList.add('text-white')
            filtrosDashboard.pacoteEnviado = true
        }
    }
}
function setFiltroMbRecebido() {
    if (filtrosDashboard.mbRecebido) {
        if (regressao) {
            qtdRegressao--
        }
        persoMbRecebidos.classList.remove('bg')
        persoMbRecebidos.classList.remove('bg-info')
        persoMbRecebidos.classList.remove('border')
        persoMbRecebidos.classList.remove('rounded')
        persoMbRecebidos.classList.remove('text-white')
        filtrosDashboard.mbRecebido = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.rede.registrosRede.MbRecebidos;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como MEGABYTES RECEBIDOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.rede.registrosRede.MbRecebidos;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como MEGABYTES RECEBIDOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoMbRecebidos.classList.add('bg')
                persoMbRecebidos.classList.add('bg-info')
                persoMbRecebidos.classList.add('border')
                persoMbRecebidos.classList.add('rounded')
                persoMbRecebidos.classList.add('text-white')
                filtrosDashboard.mbRecebido = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoMbRecebidos.classList.add('bg')
            persoMbRecebidos.classList.add('bg-info')
            persoMbRecebidos.classList.add('border')
            persoMbRecebidos.classList.add('rounded')
            persoMbRecebidos.classList.add('text-white')
            filtrosDashboard.mbRecebido = true
        }
    }
}
function setFiltroMbEnviado() {
    if (filtrosDashboard.mbEnviado) {
        if (regressao) {
            qtdRegressao--
        }
        persoMbEnviados.classList.remove('bg')
        persoMbEnviados.classList.remove('bg-info')
        persoMbEnviados.classList.remove('border')
        persoMbEnviados.classList.remove('rounded')
        persoMbEnviados.classList.remove('text-white')
        filtrosDashboard.mbEnviado = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.rede.registrosRede.MbEnviados;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como MEGABYTES ENVIADOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.rede.registrosRede.MbEnviados;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como MEGABYTES ENVIADOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoMbEnviados.classList.add('bg')
                persoMbEnviados.classList.add('bg-info')
                persoMbEnviados.classList.add('border')
                persoMbEnviados.classList.add('rounded')
                persoMbEnviados.classList.add('text-white')
                filtrosDashboard.mbEnviado = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoMbEnviados.classList.add('bg')
            persoMbEnviados.classList.add('bg-info')
            persoMbEnviados.classList.add('border')
            persoMbEnviados.classList.add('rounded')
            persoMbEnviados.classList.add('text-white')
            filtrosDashboard.mbEnviado = true
        }
    }
}
function setFiltroTransmissao() {
    if (filtrosDashboard.transmissao) {
        if (regressao) {
            qtdRegressao--
        }
        persoTransmissaoRede.classList.remove('bg')
        persoTransmissaoRede.classList.remove('bg-info')
        persoTransmissaoRede.classList.remove('border')
        persoTransmissaoRede.classList.remove('rounded')
        persoTransmissaoRede.classList.remove('text-white')
        filtrosDashboard.transmissao = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.rede.registrosRede.mbpsTransmissao;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como TRANSMISSÃO DA REDE!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.rede.registrosRede.mbpsTransmissao;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como TRANSMISSÃO DA REDE!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoTransmissaoRede.classList.add('bg')
                persoTransmissaoRede.classList.add('bg-info')
                persoTransmissaoRede.classList.add('border')
                persoTransmissaoRede.classList.add('rounded')
                persoTransmissaoRede.classList.add('text-white')
                filtrosDashboard.transmissao = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoTransmissaoRede.classList.add('bg')
            persoTransmissaoRede.classList.add('bg-info')
            persoTransmissaoRede.classList.add('border')
            persoTransmissaoRede.classList.add('rounded')
            persoTransmissaoRede.classList.add('text-white')
            filtrosDashboard.transmissao = true
        }
    }
}
function setFiltroLatencia() {
    if (filtrosDashboard.latencia) {
        if (regressao) {
            qtdRegressao--
        }
        persoLatenciaRede.classList.remove('bg')
        persoLatenciaRede.classList.remove('bg-info')
        persoLatenciaRede.classList.remove('border')
        persoLatenciaRede.classList.remove('rounded')
        persoLatenciaRede.classList.remove('text-white')
        filtrosDashboard.latencia = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.rede.registrosRede.msRede;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como LATENCIA REDE!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.rede.registrosRede.msRede;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como LATENCIA REDE!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoLatenciaRede.classList.add('bg')
                persoLatenciaRede.classList.add('bg-info')
                persoLatenciaRede.classList.add('border')
                persoLatenciaRede.classList.add('rounded')
                persoLatenciaRede.classList.add('text-white')
                filtrosDashboard.latencia = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoLatenciaRede.classList.add('bg')
            persoLatenciaRede.classList.add('bg-info')
            persoLatenciaRede.classList.add('border')
            persoLatenciaRede.classList.add('rounded')
            persoLatenciaRede.classList.add('text-white')
            filtrosDashboard.latencia = true
        }
    }
}
function setFiltroTemperatura() {
    if (filtrosDashboard.temperatura) {
        if (regressao) {
            qtdRegressao--
        }
        togglePersoTemperatura.classList.remove('btn')
        togglePersoTemperatura.classList.remove('btn-info')
        togglePersoTemperatura.classList.add('btn')
        togglePersoTemperatura.classList.add('btn-primary')
        togglePersoTemperatura.classList.remove('border')
        togglePersoTemperatura.classList.remove('rounded')
        filtrosDashboard.temperatura = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = componentes.cpu.registrosCpu.temperatura;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como TEMPERATURA DO CPU!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = componentes.cpu.registrosCpu.temperatura;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como TEMPERATURA DO CPU!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                togglePersoTemperatura.classList.remove('btn')
                togglePersoTemperatura.classList.remove('btn-primary')
                togglePersoTemperatura.classList.add('btn')
                togglePersoTemperatura.classList.add('btn-info')
                togglePersoTemperatura.classList.add('border')
                togglePersoTemperatura.classList.add('rounded')
                filtrosDashboard.temperatura = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            togglePersoTemperatura.classList.remove('btn')
            togglePersoTemperatura.classList.remove('btn-primary')
            togglePersoTemperatura.classList.add('btn')
            togglePersoTemperatura.classList.add('btn-info')
            togglePersoTemperatura.classList.add('border')
            togglePersoTemperatura.classList.add('rounded')
            filtrosDashboard.temperatura = true
        }
    }
}
function setFiltroProcessosQtd() {
    if (filtrosDashboard.processosQtd) {
        if (regressao) {
            qtdRegressao--
        }
        persoProcessosQtd.classList.remove('bg')
        persoProcessosQtd.classList.remove('bg-info')
        persoProcessosQtd.classList.remove('border')
        persoProcessosQtd.classList.remove('rounded')
        persoProcessosQtd.classList.remove('text-white')
        filtrosDashboard.processosQtd = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = processos.qtdProcessos;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como QUANTIDADE DE PROCESSOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = processos.qtdProcessos;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como QUANTIDADE DE PROCESSOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoProcessosQtd.classList.add('bg')
                persoProcessosQtd.classList.add('bg-info')
                persoProcessosQtd.classList.add('border')
                persoProcessosQtd.classList.add('rounded')
                persoProcessosQtd.classList.add('text-white')
                filtrosDashboard.processosQtd = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoProcessosQtd.classList.add('bg')
            persoProcessosQtd.classList.add('bg-info')
            persoProcessosQtd.classList.add('border')
            persoProcessosQtd.classList.add('rounded')
            persoProcessosQtd.classList.add('text-white')
            filtrosDashboard.processosQtd = true
        }
    }
}
function setFiltroProcessosRam() {
    if (filtrosDashboard.processosRam) {
        if (regressao) {
            qtdRegressao--
        }
        persoProcessosRam.classList.remove('bg')
        persoProcessosRam.classList.remove('bg-info')
        persoProcessosRam.classList.remove('border')
        persoProcessosRam.classList.remove('rounded')
        persoProcessosRam.classList.remove('text-white')
        filtrosDashboard.processosRam = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = processos.usoRam;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como USO DE RAM DOS PROCESSOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = processos.usoRam;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como USO DE RAM DOS PROCESSOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoProcessosRam.classList.add('bg')
                persoProcessosRam.classList.add('bg-info')
                persoProcessosRam.classList.add('border')
                persoProcessosRam.classList.add('rounded')
                persoProcessosRam.classList.add('text-white')
                filtrosDashboard.processosRam = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoProcessosRam.classList.add('bg')
            persoProcessosRam.classList.add('bg-info')
            persoProcessosRam.classList.add('border')
            persoProcessosRam.classList.add('rounded')
            persoProcessosRam.classList.add('text-white')
            filtrosDashboard.processosRam = true
        }
    }
}
function setFiltroProcessosCpu() {
    if (filtrosDashboard.processosCpu) {
        if (regressao) {
            qtdRegressao--
        }
        persoProcessosCpu.classList.remove('bg')
        persoProcessosCpu.classList.remove('bg-info')
        persoProcessosCpu.classList.remove('border')
        persoProcessosCpu.classList.remove('rounded')
        persoProcessosCpu.classList.remove('text-white')
        filtrosDashboard.processosCpu = false
    } else {
        if (regressao) {
            if (qtdRegressao <= 1) {
                qtdRegressao++
                if (qtdRegressao == 1) {
                    eixosRegressao.x = processos.usoCpu;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo X Definido!",
                        text: `Eixo X definido como USO DE CPU DOS PROCESSOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else if (qtdRegressao == 2) {
                    eixosRegressao.y = processos.usoCpu;
                    Swal.fire({
                        icon: "success",
                        title: "Eixo Y Definido!",
                        text: `Eixo Y definido como USO DE CPU DOS PROCESSOS!`,
                        footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                persoProcessosCpu.classList.add('bg')
                persoProcessosCpu.classList.add('bg-info')
                persoProcessosCpu.classList.add('border')
                persoProcessosCpu.classList.add('rounded')
                persoProcessosCpu.classList.add('text-white')
                filtrosDashboard.processosCpu = true
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Limite de variáveis!",
                    text: `A regressão linear usa apenas eixo X e Y!`,
                    footer: 'A primeira variável selecionada é o eixo X e a segunda o eixo Y!'
                });
            }
        } else {
            persoProcessosCpu.classList.add('bg')
            persoProcessosCpu.classList.add('bg-info')
            persoProcessosCpu.classList.add('border')
            persoProcessosCpu.classList.add('rounded')
            persoProcessosCpu.classList.add('text-white')
            filtrosDashboard.processosCpu = true
        }
    }
}
function definirXeY() {


}
function calcularRegressaoLinear(X, Y) {
    // X
    eixoX = eixoX.map(function (valor) {
        return parseFloat(valor);
    });
    // Y
    eixoY = eixoY.map(function (valor1) {
        return parseFloat(valor1);
    });

    // Calcular a média de x e y
    var xSum = 0;
    var ySum = 0;
    for (var i = 0; i < eixoX.length; i++) {
        xSum += eixoX[i];
        ySum += eixoY[i];
    }
    console.log(xSum, ySum)
    var xMean = xSum / eixoX.length;
    var yMean = ySum / eixoX.length;
    console.log(xMean, ySum)

    // Calcular os coeficientes da regressão:
    // O numerador é a soma dos produtos dos desvios de X em relação à média de X e dos desvios de Y em relação à média de Y
    // para cada par de dados (X - X̄) * (Y - Ȳ)
    // A variável denominator é usada para calcular a soma dos quadrados dos desvios de x em relação à sua média.
    // X (X - X̄)^2
    //CALCULAR A INCLINAÇÃO a = Σ((X - X̄)(Y - Ȳ)) / Σ((X - X̄)²)

    var numerator = 0;
    var denominator = 0;
    for (var i = 0; i < eixoX.length; i++) {
        numerator += (eixoX[i] - xMean) * (eixoY[i] - yMean);
        denominator += (eixoX[i] - xMean) * (eixoX[i] - xMean) ^ 2;
        console.log(numerator, denominator)
    }
    //Inclinação (Beta)
    var a = numerator / denominator;
    //var a = 0.04
    //Interceptação (Alfa)
    var b = yMean - a * xMean;
    //var b = 91.7

    console.log(a, b);

    var r = RSquared(yMean, a, b);
    var Rsq = r.Rsq
    console.log("R")
    console.log(Rsq)


    return { a, b, Rsq };
}
function RSquared(yMean, a, b) {
    // formula: Rsq = 1 - (SSE / SSTO)


    // Calcular a soma dos quadrados totais (SSTO)
    var SSTO = 0;
    for (var i = 0; i < eixoX.length; i++) {
        SSTO += Math.pow((eixoY[i] - yMean), 2);
    }

    // Calcular a soma dos quadrados dos erros (SSE)
    var SSE = 0;
    for (var i = 0; i < eixoX.length; i++) {
        SSE += Math.pow((eixoY[i] - (a * eixoX[i] + b)), 2);
    }

    // Calcular o R-quadrado múltiplo
    var Rsq = 1 - (SSE / SSTO);
    Rsq = Rsq * 100

    return { Rsq }
}

function qtdDadosKPI() {
    let lengthDataHora = dataHora.length;
    let lengthUsoCpu = processos.usoCpu.length;
    let lengthUsoRam = processos.usoRam.length;
    let lengthQtdProcessos = processos.qtdProcessos.length;
    let lengthRegistrosCpuPercentUso = componentes.cpu.registrosCpu.percentUso.length;
    let lengthRegistrosCpuFrequencia = componentes.cpu.registrosCpu.frequencia.length;
    let lengthRegistrosCpuTemperatura = componentes.cpu.registrosCpu.temperatura.length;
    let lengthRegistrosRam = componentes.ram.registrosRam.length;
    let lengthRegistrosDiscoPercentUso = componentes.disco.registrosDisco.percentUso.length;
    let lengthRegistrosDiscoArmazenamento = componentes.disco.registrosDisco.armazenamento.length;
    let lengthRegistrosRedePacotesRecebidos = componentes.rede.registrosRede.pacotesRecebidos.length;
    let lengthRegistrosRedePacotesEnviados = componentes.rede.registrosRede.pacotesEnviados.length;
    let lengthRegistrosRedeMbRecebidos = componentes.rede.registrosRede.MbRecebidos.length;
    let lengthRegistrosRedeMbEnviados = componentes.rede.registrosRede.MbEnviados.length;
    let lengthRegistrosRedeMbpsTransmissao = componentes.rede.registrosRede.mbpsTransmissao.length;
    let lengthRegistrosRedeMsRede = componentes.rede.registrosRede.msRede.length;
    let qtdDados =
        lengthDataHora +
        lengthUsoCpu +
        lengthUsoRam +
        lengthQtdProcessos +
        lengthRegistrosCpuPercentUso +
        lengthRegistrosCpuFrequencia +
        lengthRegistrosCpuTemperatura +
        lengthRegistrosRam +
        lengthRegistrosDiscoPercentUso +
        lengthRegistrosDiscoArmazenamento +
        lengthRegistrosRedePacotesRecebidos +
        lengthRegistrosRedePacotesEnviados +
        lengthRegistrosRedeMbRecebidos +
        lengthRegistrosRedeMbEnviados +
        lengthRegistrosRedeMbpsTransmissao +
        lengthRegistrosRedeMsRede + qtdOcorrenciasTotal;
    quantidadeDados.innerHTML = qtdDados
}
function formatarDataParaString(dataString) {
    var data = new Date(dataString);
    var dia = adicionarZero(data.getUTCDate());
    var mes = adicionarZero(data.getUTCMonth() + 1); // Os meses em JavaScript são zero-based
    var ano = data.getUTCFullYear();
    var horas = adicionarZero(data.getUTCHours());
    var minutos = adicionarZero(data.getUTCMinutes());
    var segundos = adicionarZero(data.getUTCSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

function adicionarZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

function atualizarVariaveis() {
    processos = {
        usoCpu: [],
        usoRam: [],
        qtdProcessos: [],
    }
    dataHora = []
    componentes = {
        cpu: {
            registrosCpu: {
                percentUso: [],
                frequencia: [],
                temperatura: []
            }
        },
        ram: {
            registrosRam: []
        },
        disco: {
            registrosDisco: {
                percentUso: [],
                armazenamento: []
            }
        },
        rede: {
            registrosRede: {
                pacotesRecebidos: [],
                pacotesEnviados: [],
                MbRecebidos: [],
                MbEnviados: [],
                mbpsTransmissao: [],
                msRede: []
            }
        }
    }
    console.log(`ATUALIZANDO VARIÁVEIS PARA O SERVIDOR: ${listaServidores.options[listaServidores.selectedIndex].text}`)
    selectCpu(filtroTempo)
    selectRam(filtroTempo)
    selectDisco(filtroTempo)
    selectRede(filtroTempo)
    setTimeout(() => {
        qtdDadosKPI()
        dataHora = dataHora.map(formatarDataParaString);
    }, 2000);
}

function chamarOcorrencias() {
    selectGraficoOcorrenciaComponente()
    selectGraficoOcorrenciaProcesso()
    selectGraficoOcorrenciaRede()
    selectGraficoOcorrenciaTemperatura()
}
var qtdOcorrenciasTotal
function atualizarDadosOcorrencias() {
    if (typeof graficoOcorrencias !== 'undefined') {
        graficoOcorrencias.destroy()
    }
    createOcorrencias(ctx)
    graficoOcorrencias.data.datasets[0].data.push(qtdOcorrenciasComponente, qtdOcorrenciasTemperatura, qtdOcorrenciasRede, qtdOcorrenciasProcessos)
    graficoOcorrencias.update()
    var variaveis = [
        { nome: 'Componentes', valor: qtdOcorrenciasComponente },
        { nome: 'Rede', valor: qtdOcorrenciasRede },
        { nome: 'Temperatura', valor: qtdOcorrenciasTemperatura },
        { nome: 'Processos', valor: qtdOcorrenciasProcessos }
    ];

    // Encontrar a variável com o maior valor
    var maiorVariavel;
    var maiorValor = -Infinity;

    for (var i = 0; i < variaveis.length; i++) {
        if (variaveis[i].valor > maiorValor) {
            maiorValor = variaveis[i].valor;
            maiorVariavel = variaveis[i].nome;
        }
    }
    qtdOcorrenciasTotal = qtdOcorrenciasComponente + qtdOcorrenciasTemperatura + qtdOcorrenciasRede + qtdOcorrenciasProcessos
    maiorAreaChamados.innerHTML = maiorVariavel
    qtdOcorrenciasKPI.innerHTML = qtdOcorrenciasTotal
}
function persoLinha() {
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    togglePersoTipoGrafico.innerHTML = 'Linha | Atualizar'
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    togglePersoTipoGrafico.onclick = function () {
        persoLinha()
        setTimeout(() => {
            atualizarVariaveis()
        }, 3000);
    };
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    createPersoLinha(ctx3)
    if (filtroTempo != "REALTIME") {
        graficoPerso.data.labels = dataHora
        if (filtrosDashboard.cpuUso) {
            graficoPerso.data.datasets.push({
                label: 'Uso CPU',
                data: componentes.cpu.registrosCpu.percentUso,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.ram) {
            graficoPerso.data.datasets.push({
                label: 'Uso RAM',
                data: componentes.ram.registrosRam,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.disco) {
            graficoPerso.data.datasets.push({
                label: 'Uso Disco',
                data: componentes.disco.registrosDisco.percentUso,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        // COLOCAR ARMAZENAMENTO DO DISCO
        if (filtrosDashboard.temperatura) {
            graficoPerso.data.datasets.push({
                label: 'Temperatura CPU',
                data: componentes.cpu.registrosCpu.temperatura,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.cpuFreq) {
            graficoPerso.data.datasets.push({
                label: 'Frequencia CPU',
                data: componentes.cpu.registrosCpu.frequencia,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.latencia) {
            graficoPerso.data.datasets.push({
                label: 'Latência da Rede',
                data: componentes.rede.registrosRede.msRede,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.pacoteEnviado) {
            graficoPerso.data.datasets.push({
                label: 'Pacotes enviados',
                data: componentes.rede.registrosRede.pacotesEnviados,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.pacoteRecebido) {
            graficoPerso.data.datasets.push({
                label: 'Pacortes Recebidos',
                data: componentes.rede.registrosRede.pacotesRecebidos,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.mbEnviado) {
            graficoPerso.data.datasets.push({
                label: 'Mega Bytes Enviados',
                data: componentes.rede.registrosRede.MbEnviados,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.mbRecebido) {
            graficoPerso.data.datasets.push({
                label: 'Mega Bytes Recebidos',
                data: componentes.rede.registrosRede.MbRecebidos,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.transmissao) {
            graficoPerso.data.datasets.push({
                label: 'Taxa de transmissão (MBps))',
                data: componentes.rede.registrosRede.mbpsTransmissao,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.processosQtd) {
            graficoPerso.data.datasets.push({
                label: 'Quantidade de Processos',
                data: processos.qtdProcessos,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.processosRam) {
            graficoPerso.data.datasets.push({
                label: 'Uso de Ram pelos processos',
                data: processos.usoRam,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.processosCpu) {
            graficoPerso.data.datasets.push({
                label: 'Uso de CPU pelos Processos',
                data: processos.usoCpu,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
    } else {
        graficoPerso.data.labels = (dataHora.reverse())
        if (filtrosDashboard.cpuUso) {
            graficoPerso.data.datasets.push({
                label: 'Uso CPU',
                data: componentes.cpu.registrosCpu.percentUso.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.ram) {
            graficoPerso.data.datasets.push({
                label: 'Uso RAM',
                data: componentes.ram.registrosRam,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.disco) {
            graficoPerso.data.datasets.push({
                label: 'Uso Disco',
                data: componentes.disco.registrosDisco.percentUso.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        // COLOCAR ARMAZENAMENTO DO DISCO
        if (filtrosDashboard.temperatura) {
            graficoPerso.data.datasets.push({
                label: 'Temperatura CPU',
                data: componentes.cpu.registrosCpu.temperatura.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.cpuFreq) {
            graficoPerso.data.datasets.push({
                label: 'Frequencia CPU',
                data: componentes.cpu.registrosCpu.frequencia.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.latencia) {
            graficoPerso.data.datasets.push({
                label: 'Latência da Rede',
                data: componentes.rede.registrosRede.msRede.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.pacoteEnviado) {
            graficoPerso.data.datasets.push({
                label: 'Pacotes enviados',
                data: componentes.rede.registrosRede.pacotesEnviados.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.pacoteRecebido) {
            graficoPerso.data.datasets.push({
                label: 'Pacortes Recebidos',
                data: componentes.rede.registrosRede.pacotesRecebidos.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.mbEnviado) {
            graficoPerso.data.datasets.push({
                label: 'Mega Bytes Enviados',
                data: componentes.rede.registrosRede.MbEnviados.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.mbRecebido) {
            graficoPerso.data.datasets.push({
                label: 'Mega Bytes Recebidos',
                data: componentes.rede.registrosRede.MbRecebidos.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.transmissao) {
            graficoPerso.data.datasets.push({
                label: 'Taxa de transmissão (MBps))',
                data: componentes.rede.registrosRede.mbpsTransmissao.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.processosQtd) {
            graficoPerso.data.datasets.push({
                label: 'Quantidade de Processos',
                data: processos.qtdProcessos.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.processosRam) {
            graficoPerso.data.datasets.push({
                label: 'Uso de Ram pelos processos',
                data: processos.usoRam.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
        if (filtrosDashboard.processosCpu) {
            graficoPerso.data.datasets.push({
                label: 'Uso de CPU pelos Processos',
                data: processos.usoCpu.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            })
        }
    }
    graficoPerso.update()
}
function persoBarra() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    togglePersoTipoGrafico.innerHTML = 'Barra | Atualizar'
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    togglePersoTipoGrafico.onclick = function () {
        atualizarVariaveis()
        persoBarra()
    };
    createPersoBarra(ctx3)
    graficoPerso.data.labels = dataHora
    if (filtrosDashboard.cpuUso) {
        graficoPerso.data.datasets.push({
            label: 'Uso CPU',
            data: componentes.cpu.registrosCpu.percentUso,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.ram) {
        graficoPerso.data.datasets.push({
            label: 'Uso RAM',
            data: componentes.ram.registrosRam,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.disco) {
        graficoPerso.data.datasets.push({
            label: 'Uso Disco',
            data: componentes.disco.registrosDisco.percentUso,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    // COLOCAR ARMAZENAMENTO DO DISCO
    if (filtrosDashboard.temperatura) {
        graficoPerso.data.datasets.push({
            label: 'Temperatura CPU',
            data: componentes.cpu.registrosCpu.temperatura,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.cpuFreq) {
        graficoPerso.data.datasets.push({
            label: 'Frequencia CPU',
            data: componentes.cpu.registrosCpu.frequencia,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.latencia) {
        graficoPerso.data.datasets.push({
            label: 'Latência da Rede',
            data: componentes.rede.registrosRede.msRede,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.pacoteEnviado) {
        graficoPerso.data.datasets.push({
            label: 'Pacotes enviados',
            data: componentes.rede.registrosRede.pacotesEnviados,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.pacoteRecebido) {
        graficoPerso.data.datasets.push({
            label: 'Pacortes Recebidos',
            data: componentes.rede.registrosRede.pacotesRecebidos,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.mbEnviado) {
        graficoPerso.data.datasets.push({
            label: 'Mega Bytes Enviados',
            data: componentes.rede.registrosRede.MbEnviados,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.mbRecebido) {
        graficoPerso.data.datasets.push({
            label: 'Mega Bytes Recebidos',
            data: componentes.rede.registrosRede.MbRecebidos,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.transmissao) {
        graficoPerso.data.datasets.push({
            label: 'Taxa de transmissão (MBps))',
            data: componentes.rede.registrosRede.mbpsTransmissao,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.processosQtd) {
        graficoPerso.data.datasets.push({
            label: 'Quantidade de Processos',
            data: processos.qtdProcessos,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.processosRam) {
        graficoPerso.data.datasets.push({
            label: 'Uso de Ram pelos processos',
            data: processos.usoRam,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.processosCpu) {
        graficoPerso.data.datasets.push({
            label: 'Uso de CPU pelos Processos',
            data: processos.usoCpu,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    graficoPerso.data.datasets = [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
function persoDispersao() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    setAllFalse()
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    togglePersoTipoGrafico.innerHTML = 'Dispersão | Atualizar'
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    togglePersoTipoGrafico.onclick = function () {
        persoDispersao()
        atualizarVariaveis()
    };
    createPersoDispersao(ctx3)
    graficoPerso.type = 'line'
    graficoPerso.data.datasets = [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
function persoSetores() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    togglePersoTipoGrafico.innerHTML = 'Setores | Atualizar'
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    togglePersoTipoGrafico.onclick = function () {
        atualizarVariaveis()
        persoSetores()
    };
    createPersoSetores(ctx3)
    graficoPerso.type = 'line'
    graficoPerso.data.datasets = [{
        label: 'My First Dataset',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
function persoRegressao() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    togglePersoTipoGrafico.innerHTML = 'Regressão | Atualizar'
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    togglePersoTipoGrafico.onclick = function () {
        atualizarVariaveis()
        persoRegressao()
    };
    regressao = true
    // createPersoRegressao(ctx3)
    // graficoPerso.data.datasets = [{
    //     type: 'line',
    //     label: ' ',
    //     data: []
    // }, {
    //     type: 'line',
    //     label: ' ',
    //     data: [],
    // }]
    // graficoPerso.update()
}

// Criação dos gráficos

var ctx = document.getElementById('graficoOcorrencias');

function createOcorrencias(ctx) {

    graficoOcorrencias = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Componente', 'Temperatura', 'Rede', 'Processo'],
            datasets: [{
                label: 'Registros',
                data: [],
                borderWidth: 1
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
}

var ctx2 = document.getElementById('graficoCorrelacao');
createlive(ctx2)

function createlive(ctx2) {

    graficoLiveTempCPU = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Gráfico Personalizado'
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
}

var ctx3 = document.getElementById('graficoPersonalizado');

function createPersoBarra(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            title: {
                display: true,
                text: 'Gráfico Personalizado'
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
}
function createPersoLinha(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            title: {
                display: true,
                text: 'Gráfico Personalizado'
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
            },
        }
    });
}
function createPersoDispersao(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'scatter',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            title: {
                display: true,
                text: 'Gráfico Personalizado'
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
}
function createPersoSetores(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            title: {
                display: true,
                text: 'Gráfico Personalizado'
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
}
function createPersoRegressao(ctx3) {

    graficoPerso = new Chart(ctx3, {
        data: {
            labels: ['Registros'],
            datasets: []
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}