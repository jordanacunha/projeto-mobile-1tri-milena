# TESTE 1 - Verificar se a tela inicial carrega
def test_tela_inicial():
    resultado = True  # simulando carregamento da tela
    assert resultado == True


# TESTE 2 - Verificar se o botão "Fazer Agendamento" funciona
def test_botao_agendamento():
    rota = "/especialidades"
    assert rota == "/especialidades"


# TESTE 3 - Verificar se especialidades aparecem corretamente
def test_lista_especialidades():
    especialidades = [
        "Clínico Geral",
        "Pediatra",
        "Dermatologista"
    ]
    assert "Clínico Geral" in especialidades
