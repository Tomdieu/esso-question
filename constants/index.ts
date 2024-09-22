import LogoImage from "@/assets/images/img8.jpeg"
import { Href } from "expo-router";

export const images = {
    LogoImage
}

export const btnLables:{label:string,route?:string}[] = [
    { label: 'PB',route:"/(root)/(forms)/problem" },
    { label: 'Sol',route:"/(root)/(forms)/solution" },
    { label: 'Re',route:"/(root)/(forms)/resultat" },
    { label: 'OD',route:"/(root)/(forms)/outil_developement" },
    { label: 'Vc',route:"/(root)/(forms)/voie_consomation" },
    { label: 'Fc',route:"/(root)/(forms)/forme_capitatlisation" },
    { label: 'Fab',route:"/(root)/(forms)/modele_architectural" },
    { label: 'Str' ,route:"/(root)/(forms)/structurateur"},
    { label: 'Mo' ,route:"/(root)/(forms)/mode_de_pensee"},
    // { label: 'Phi' ,route:"/(root)/(forms)/p"},
  ];