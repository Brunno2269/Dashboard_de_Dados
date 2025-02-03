from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

# Carregar dados fictícios
DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'sample_data.json')

def load_data():
    try:
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        app.logger.error("Arquivo de dados não encontrado.")
        return {}
    except json.JSONDecodeError:
        app.logger.error("Erro ao decodificar o arquivo JSON.")
        return {}

@app.route('/')
def index():
    app.logger.info("Carregando página inicial...")
    return render_template('index.html')

@app.route('/api/data')
def api_data():
    app.logger.info("Fornecendo dados via API...")
    data = load_data()
    if not data:
        return jsonify({"error": "Dados indisponíveis"}), 500
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)