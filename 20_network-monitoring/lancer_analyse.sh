#!/bin/bash
cd "$(dirname "$0")"
sudo python3 network-analysis.py capture_reseau_1.pcapng report.txt
