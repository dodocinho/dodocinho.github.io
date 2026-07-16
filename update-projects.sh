#!/bin/bash

set -u

# Lista de submodules (caminho relativo ao projeto principal)
SUBMODULES=(
  "src/projects/shaderslab"
  "src/projects/shadervegas"
)

PROJECT_ROOT=$(pwd)

# Atualiza os submodules
echo "Atualizando submodules..."
git submodule update --init --recursive

# Faz o build de cada submodule
for SUBMODULE in "${SUBMODULES[@]}"; do
  if [[ ! -d "$SUBMODULE" ]]; then
    echo "Aviso: submodule inexistente em $SUBMODULE, pulando..."
    continue
  fi

  echo "Fazendo build de $SUBMODULE..."
  if (cd "$SUBMODULE" && npm ci && npm run build); then
    echo "Build concluído para $SUBMODULE."
  else
    echo "Aviso: build falhou em $SUBMODULE, mantendo a publicação do restante."
  fi
done

# Copia os builds para a pasta public/projects
echo "Copiando builds para public/projects..."
mkdir -p "$PROJECT_ROOT/public/projects"
for SUBMODULE in "${SUBMODULES[@]}"; do
  if [[ ! -d "$SUBMODULE/dist" ]]; then
    echo "Aviso: nenhum dist encontrado em $SUBMODULE, pulando cópia."
    continue
  fi

  PROJECT_NAME=$(basename "$SUBMODULE")
  rm -rf "$PROJECT_ROOT/public/projects/$PROJECT_NAME"
  cp -r "$SUBMODULE/dist" "$PROJECT_ROOT/public/projects/$PROJECT_NAME"

  # Corrige os caminhos no index.html
  echo "Ajustando caminhos no index.html de $PROJECT_NAME..."
  sed -i.bak \
    -e "s|href=\"/|href=\"/projects/$PROJECT_NAME/|g" \
    -e "s|src=\"/|src=\"/projects/$PROJECT_NAME/|g" \
    -e "s|href='/|href='/projects/$PROJECT_NAME/|g" \
    -e "s|src='/|src='/projects/$PROJECT_NAME/|g" \
    "$PROJECT_ROOT/public/projects/$PROJECT_NAME/index.html"

  # Remove o backup criado pelo sed (opcional)
  rm -f "$PROJECT_ROOT/public/projects/$PROJECT_NAME/index.html.bak"
done

echo "Processo concluído!"
