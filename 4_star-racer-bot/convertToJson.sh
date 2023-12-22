#!/bin/bash

# Chemin vers le répertoire du script
SCRIPT_DIR=$(dirname "$0")
OUTPUT_DIR=$SCRIPT_DIR/ods_files

# Assure-toi que le répertoire de sortie existe
mkdir -p $OUTPUT_DIR

# Générer un horodatage avec la date et l'heure pour le nom de fichier
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
CSV_FILE="${OUTPUT_DIR}/${TIMESTAMP}_repos.csv"
ODS_FILE="${OUTPUT_DIR}/${TIMESTAMP}_repos.ods"

# Convertir JSON en CSV en utilisant la version locale de json2csv
$SCRIPT_DIR/node_modules/.bin/json2csv -i $SCRIPT_DIR/repos.json -o $CSV_FILE

# Convertir CSV en ODS avec LibreOffice et s'assurer qu'il soit sauvegardé dans OUTPUT_DIR
/usr/bin/libreoffice --headless --convert-to ods --outdir $OUTPUT_DIR $CSV_FILE

# Supprime le fichier CSV intermédiaire si tu n'en as pas besoin
rm $CSV_FILE
