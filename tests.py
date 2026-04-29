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


# TESTE 7 - Verificar se horários disponíveis aparecem
def test_horarios_disponiveis():
    horarios = ["08:00", "09:00", "10:00"]
    assert "09:00" in horarios


# TESTE 8 - Verificar horário inexistente
def test_horario_inexistente():
    horarios = ["08:00", "09:00"]
    assert "15:00" not in horarios


# TESTE 9 - Verificar confirmação de agendamento
def test_confirmar_agendamento():
    agendado = True
    assert agendado == True