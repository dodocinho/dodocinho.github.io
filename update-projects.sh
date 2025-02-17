#!/bin/bash

# Lista de submodules (caminho relativo ao projeto principal)
SUBMODULES=(
  "src/projects/shaderslab"
  # "src/projects/outro-projeto"
)

# Atualiza os submodules
echo "Atualizando submodules..."
git submodule update --init --recursive

# Faz o build de cada submodule
for SUBMODULE in "${SUBMODULES[@]}"; do
  echo "Fazendo build de $SUBMODULE..."
  cd $SUBMODULE
  npm install
  npm run build
  cd - >/dev/null
done

# Copia os builds para a pasta public/projects
echo "Copiando builds para public/projects..."
mkdir -p public/projects
for SUBMODULE in "${SUBMODULES[@]}"; do
  PROJECT_NAME=$(basename $SUBMODULE)
  cp -r $SUBMODULE/dist public/projects/$PROJECT_NAME

  # Corrige os caminhos no index.html
  echo "Ajustando caminhos no index.html de $PROJECT_NAME..."
  sed -i.bak \
    -e "s|href='/|href='/projects/$PROJECT_NAME/|g" \
    -e "s|src='/|src='/projects/$PROJECT_NAME/|g" \
    public/projects/$PROJECT_NAME/index.html

  # Remove o backup criado pelo sed (opcional)
  rm public/projects/$PROJECT_NAME/index.html.bak
done

echo "Processo concluído!"
