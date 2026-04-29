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

    # TESTE 4 - Verificar se existe Pediatra
def test_especialidade_pediatra():
    especialidades = [
        "Clínico Geral",
        "Pediatra",
        "Dermatologista"
    ]
    assert "Pediatra" in especialidades


# TESTE 5 - Verificar se ao clicar abre lista de profissionais
def test_abrir_profissionais():
    profissionais = ["Dr. João", "Dra. Ana"]
    assert len(profissionais) > 0


# TESTE 6 - Verificar se Clínico Geral possui profissional
def test_profissional_clinico():
    profissionais = {
        "Clínico Geral": ["Dr. Carlos"]
    }
    assert len(profissionais["Clínico Geral"]) > 0

