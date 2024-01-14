from scapy.all import rdpcap
from scapy.layers.inet import TCP, IP, ICMP
import argparse

def detecter_anomalies(paquets, report):
    seuil_trafic = 1000000

    total_octets = 0

    for paquet in paquets:
        if IP in paquet and TCP in paquet:
            data_size = len(paquet[TCP].payload)
            total_octets += data_size

    if total_octets > seuil_trafic:
        report.write(f"Anomalie détectée : Volume de trafic anormalement élevé : {total_octets} octets\n")

def analyser_paquets(capture_file, report_file):
    with open(report_file, "w") as report:
        try: 
            paquets = rdpcap(capture_file)
        except Exception as e:
            print(f"Impossible de lire le fichier {capture_file}")
            print(e)
            return

        for paquet in paquets:
            if IP in paquet and TCP in paquet:
                src_ip = paquet[IP].src
                dst_ip = paquet[IP].dst
                src_port = paquet[TCP].sport
                dst_port = paquet[TCP].dport
                data_size = len(paquet[TCP].payload)

                if paquet[TCP].flags & 0x02:
                    report.write(f"Upload détecté de {src_ip}:{src_port} vers {dst_ip}:{dst_port}, Taille: {data_size} octets\n")
                elif paquet[TCP].flags & 0x08:
                    report.write(f"Download détecté de {dst_ip}:{dst_port} vers {src_ip}:{src_port}, Taille: {data_size} octets\n")

            if ICMP in paquet:
                report.write(f"Paquet ICMP: {paquet.summary()}\n")

            if "192.168.1.1" in paquet.summary():
                report.write(f"Communication avec 192.168.1.1: {paquet.summary()}\n")

        detecter_anomalies(paquets, report)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Analyseur de trafic réseau")
    parser.add_argument("file_capture", help="Fichier de capture réseau")
    parser.add_argument("report_file", help="Fichier de rapport")
    args = parser.parse_args()

    analyser_paquets(args.file_capture, args.report_file)

file_capture = "./capture_reseau_1.pcapng"
report_file = "./report.txt"
