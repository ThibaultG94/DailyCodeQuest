#!/bin/bash

# Chemin vers le répertoire du script
SCRIPT_DIR=$(dirname "$0")

# Exécute index.js pour récupérer les données et les sauvegarder dans un fichier JSON
/home/thibault/.nvm/versions/node/v19.0.0/bin/node $SCRIPT_DIR/index.js

# Attends un peu que le fichier JSON soit bien écrit
sleep 5

# Exécute le script shell pour convertir le fichier JSON en ODS
$SCRIPT_DIR/convertToJson.sh
