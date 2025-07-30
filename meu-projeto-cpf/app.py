from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def apenas_numeros(cpf):
    return cpf.isdigit()

def tem_11_digitos(cpf):
    return len(cpf) == 11

def digitos_iguais(cpf):
    return cpf == cpf[0] * 11

def calcular_primeiro_digito(cpf):
    soma = sum(int(cpf[i]) * (10 - i) for i in range(9))
    verificador1 = (soma * 10) % 11
    return 0 if verificador1 >= 10 else verificador1

def calcular_segundo_digito(cpf,):
    soma = sum(int(cpf[i]) * (11 - i) for i in range(10))
    verificador2 = (soma * 10) % 11
    return 0 if verificador2 >= 10 else verificador2

# Comando para ROTA DA API

@app.route('/validar-cpf', methods=['POST'])
def validar_cpf():
    data = request.json  # pega os dados enviados em JSON
    cpf = data.get('cpf', '')  # pega o campo "cpf"


    if not apenas_numeros(cpf):
        return jsonify('CPF deve conter apenas números.')
    if not tem_11_digitos(cpf):
        return jsonify('CPF deve conter 11 dígitos.')
    if digitos_iguais(cpf):
        return jsonify('CPF inválido: dígitos repetidos.')

    v1 = calcular_primeiro_digito(cpf)
    if v1 != int(cpf[9]):
        return jsonify('Primeiro dígito verificador inválido.')

    v2 = calcular_segundo_digito(cpf)
    if v2 != int(cpf[10]):
        return jsonify('Segundo dígito verificador inválido.')

    # Se chegou aqui, o cpf é válido
    return jsonify('CPF válido!')

# Comando para iniciar o servidor

if __name__ == '__main__':
    app.run(debug=True)