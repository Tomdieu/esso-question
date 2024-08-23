export type Question = {
  id: number;
  text: string;
  type: "text" | "checkbox" | "radio";
  subQuestions?: Question[];
  choices?: string[];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Quel est votre problème ?", // problème
    type: "text",
  },
  {
    id: 2,
    text: "Quelle est votre solution ?",
    type: "text",
  },
  {
    id: 3,
    text: "Quel est votre résultat ?", // résultat
    type: "text",
  },
  {
    id: 4,
    text: "Quel est votre outil de développement ?",
    type: "checkbox",
    choices: [
      "service",
      "circuit de production",
      "circuit de distribution",
      "entreprise",
      "organisation",
      "marché",
      "secteur économique",
      "région",
      "programme",
      "système",
    ],
  },
  {
    id: 5,
    text: "Quelle est la voie de consommation ?",
    type: "checkbox",
    choices: [
      "esprit",
      "yeux",
      "nez",
      "cerveau",
      "peau",
      "langue",
      "oreilles",
      "organes",
      "nature",
      "Consciences",
      "personnalité",
    ],
  },
  {
    id: 6,
    text: "Quelle est votre forme de capitalisation ?",
    type: "radio",
    choices: [
      "Livre",
      "logiciel",
      "vidéo",
      "émission radio/TV",
      "media",
      "son",
      "couleurs",
      "figures géométriques", // géométriques
      "État liquide",
      "État solide",
      "État gazeux",
      "État intermédiaire",
      "émotions",
      "Éducation", // Éducation
      "presse écrite",
      "vocabulaire",
    ],
  },
  {
    id: 7,
    text: "Quel est votre modèle architectural ?", // modèle
    type: "radio",
    choices: [
      "Intégré",
      "Dissocié deux blocs",
      "Dissocié trois blocs",
      "Système intégré ",
      "Système dissocié ",
    ],
    subQuestions: [
      {
        id: 71, // Adjusted sub-question id
        text: "Configurations : ",
        type: "checkbox",
        choices: ["Geo", "Bio", "Eco", "Cognitif", "Énergie", "Force"],
      },
    ],
  },
  {
    id: 8,
    text: "Quel est votre structurateur ?",
    type: "radio",
    choices: ["Interne", "Externe", "Mixte", "Normatif", "Modérateur"], // Corrected: Mixed -> Mixte, Normafif -> Normatif, Moderateur -> Modérateur
    subQuestions: [
      {
        id: 81, // Adjusted sub-question id
        text: "Nature",
        type: "checkbox",
        choices: [
          "Bouton",
          "Pédale", // Pédale
          "Levier",
          "Manivelle",
          "Clavier",
          "Capteur",
          "Quantificateurs",
          "Interface",
        ],
      },
      {
        id: 82, // Adjusted sub-question id
        text: "Action : ",
        type: "checkbox",
        choices: [
          "Biochimique",
          "Biologie",
          "Chimique",
          "Émotionnelle", // Émotionnelle
          "Linguistique",
          "Mathématique", // Mathématique
          "Mentale",
          "Numérique", // Numérique
        ],
      },
    ],
  },
  {
    id: 9,
    text: "Quelle est votre idée ?", // idée
    type: "text",
  },
  {
    id: 10,
    text: "Choisir le mode de pensée :",
    type: "text",
  },
];
