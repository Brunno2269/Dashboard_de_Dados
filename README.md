![Captura de tela de 2025-02-03 14-29-43](https://github.com/user-attachments/assets/e4c38227-cd10-44a2-a6f0-211099cffd4b)

# Dashboard de Dados

Este é um projeto de dashboard interativo desenvolvido com Flask, HTML, CSS, JavaScript e Chart.js. Ele exibe gráficos dinâmicos para análise de dados fictícios, como vendas mensais e distribuição de categorias de produtos.

## Funcionalidades

- **Gráficos Dinâmicos**: Visualize dados em gráficos de linha e pizza.
- **Responsividade**: Interface adaptável para diferentes dispositivos (desktop, tablet e celular).
- **Backend Simples**: API RESTful para fornecer dados ao frontend.
- **Design Moderno**: Estilo limpo e profissional com animações suaves.

## Estrutura do Projeto

ecommerce/
│
├── app.py                  # Backend principal (Flask)
├── static/                 # Arquivos estáticos
│   ├── css/                # Estilos CSS
│   ├── js/                 # Lógica JavaScript
│   └── images/             # Imagens dos produtos
│
├── templates/              # Templates HTML
│   ├── base.html           # Template base
│   ├── index.html          # Página inicial
│   └── 404.html            # Página de erro 404
│
├── data/                   # Dados fictícios
│   └── sample_data.json    # Dados de exemplo para os gráficos
│
├── README.md               # Documentação do projeto
└── LICENSE                 # Licença do projeto 

## Como Executar o Projeto

### Pré-requisitos

- Python 3.x instalado.
- Pip (gerenciador de pacotes Python).

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Brunno2269/Dashboard_de_Dados.git
   cd dashboard-de-dados
