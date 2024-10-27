-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS codeur_esso_final;
-- Switch to the newly created database
USE codeur_esso_final;

CREATE TABLE IF NOT EXISTS codeur_data
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS problems
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    problem        VARCHAR(255),
    geometry       VARCHAR(255),
    algebra        VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS classe_problems
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255),
    problem_id INT,
    FOREIGN KEY (problem_id) REFERENCES problems (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS nature_classe_problems
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255),
    problem_id INT,
    FOREIGN KEY (problem_id) REFERENCES problems (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS nature_ecart_problems
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255),
    problem_id INT,
    FOREIGN KEY (problem_id) REFERENCES problems (id) ON DELETE CASCADE ,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS solutions
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS outil_developements
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

-- Create the Resultat table
CREATE TABLE IF NOT EXISTS resultats
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS voie_consomations
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS etat_matiers
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS structurateurs
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    typology       VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER NULL ,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS str_nature_composant
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255),
    str_id     INT,
    FOREIGN KEY (str_id) REFERENCES structurateurs (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS str_action
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255),
    str_id     INT       NOT NULL,
    FOREIGN KEY (str_id) REFERENCES structurateurs (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS forme_capitalisations
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER NULL ,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS modele_architecturals
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER NULL ,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS modele_architecturals_config
(
    id         INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255) NOT NULL,
    variable   VARCHAR(255),
    fab_id     INT,
    FOREIGN KEY (fab_id) REFERENCES modele_architecturals (id) ON DELETE CASCADE,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS moules
(
    id                       INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    echelle                  VARCHAR(255),
    forme_geometrique        VARCHAR(255),
    nature_transformation    VARCHAR(255),
    quantite                 INTEGER,
    nature_composant_amouler VARCHAR(255),
    created_at               TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at               TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id           INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS mo_matier_premiere
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`    VARCHAR(255),
    mo_id      INTEGER,
    FOREIGN KEY (mo_id) REFERENCES moules (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS mode_pensees
(
    id             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS source_inspirations
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS philosophies
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value`        VARCHAR(255),
    od2            VARCHAR(255),
    sujet          VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS projets
(
    id                      INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_name            VARCHAR(255) NOT NULL,
    nature_od               VARCHAR(255) NOT NULL,
    modele_architectural_id INT          NOT NULL,
    auteur                  VARCHAR(255) NOT NULL,
    user_id                 INT          NOT NULL,
    is_deleted              boolean               DEFAULT false,
    created_at              TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (modele_architectural_id) REFERENCES modele_architecturals (id),
    codeur_data_id          INTEGER      NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);


-- table de produits

CREATE TABLE IF NOT EXISTS produits
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE

);

-- table de service

CREATE TABLE IF NOT EXISTS services
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);


-- table de circuit de productions

CREATE TABLE IF NOT EXISTS circuit_productions
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

-- Table de circuit de distributions

CREATE TABLE IF NOT EXISTS circuit_distributions
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    variant        VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

-- Table etablissement

CREATE TABLE IF NOT EXISTS etablissements
(
    id                      INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    moderateur_id           INT       NOT NULL,
    modele_architectural_id INT       NOT NULL,
    forme_capitalisation_id INT       NOT NULL,
    etat_matier             VARCHAR(255),
    FOREIGN KEY (moderateur_id) REFERENCES structurateurs (id),
    FOREIGN KEY (modele_architectural_id) REFERENCES modele_architecturals (id),
    FOREIGN KEY (forme_capitalisation_id) REFERENCES forme_capitalisations (id),

    produit_id              INTEGER   NOT NULL UNIQUE,
    service_id              INTEGER   NOT NULL UNIQUE,
    circuit_distribution_id INTEGER   NOT NULL UNIQUE,
    circuit_production_id   INTEGER   NOT NULL UNIQUE,

    FOREIGN KEY (produit_id) REFERENCES produits (id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE,
    FOREIGN KEY (circuit_production_id) REFERENCES circuit_distributions (id) ON DELETE CASCADE,
    FOREIGN KEY (circuit_production_id) REFERENCES circuit_productions (id) ON DELETE CASCADE,

    created_at              TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS projet_etablissement
(
    id               INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    projet_id        INTEGER   NOT NULL UNIQUE,
    etablissement_id INTEGER   NOT NULL,
    created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (projet_id, etablissement_id),
    FOREIGN KEY (projet_id) REFERENCES projets (id) ON DELETE CASCADE,
    FOREIGN KEY (etablissement_id) REFERENCES etablissements (id) ON DELETE CASCADE,
    updated_at       TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Organisation table

CREATE TABLE IF NOT EXISTS organisations
(
    id                             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    moderateur_id                  INT       NOT NULL,
    modele_architectural_id        INT       NOT NULL,
    forme_capitalisation_id        INT       NOT NULL,
    etat_matier                    VARCHAR(255),

    FOREIGN KEY (moderateur_id) REFERENCES structurateurs (id),
    FOREIGN KEY (modele_architectural_id) REFERENCES modele_architecturals (id),
    FOREIGN KEY (forme_capitalisation_id) REFERENCES forme_capitalisations (id),

    produit_id                     INTEGER   NOT NULL UNIQUE,
    service_id                     INTEGER   NOT NULL UNIQUE,
    circuit_distribution_court_id  INTEGER   NOT NULL UNIQUE,
    circuit_distribution_direct_id INTEGER   NOT NULL UNIQUE,
    circuit_distribution_long_id   INTEGER   NOT NULL UNIQUE,

    FOREIGN KEY (produit_id) REFERENCES produits (id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE,
    FOREIGN KEY (circuit_distribution_court_id) REFERENCES circuit_distributions (id) ON DELETE CASCADE,
    FOREIGN KEY (circuit_distribution_direct_id) REFERENCES circuit_distributions (id) ON DELETE CASCADE,
    FOREIGN KEY (circuit_distribution_long_id) REFERENCES circuit_distributions (id) ON DELETE CASCADE,

    created_at                     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projet_organisation
(
    id               INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    projet_id        INTEGER   NOT NULL UNIQUE,
    organisation_id INTEGER   NOT NULL,
    created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (projet_id, organisation_id),
    FOREIGN KEY (projet_id) REFERENCES projets (id) ON DELETE CASCADE,
    FOREIGN KEY (organisation_id) REFERENCES organisations (id) ON DELETE CASCADE,
    updated_at       TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Definition des formualaire

-- Codeur Forms Table

CREATE TABLE IF NOT EXISTS codeur_forms
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_data_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_data_id) REFERENCES codeur_data (id) ON DELETE CASCADE
);

-- Creativite

CREATE TABLE IF NOT EXISTS creativite
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_form_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_form_id) REFERENCES codeur_forms (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS creativite_item
(
    id                   INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    problem              TEXT,
    solution             TEXT,
    outil_developement   TEXT,
    forme_capitalisation TEXT,
    OD                   TEXT,
    FC                   TEXT,
    creativite_id        INTEGER   NOT NULL,
    FOREIGN KEY (creativite_id) REFERENCES creativite (id),
    created_at           TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Formulaire Innovation

CREATE TABLE IF NOT EXISTS innovation
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type           VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_form_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_form_id) REFERENCES codeur_forms (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS conceptuelle
(
    id            INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    innovation_id INTEGER,
    FOREIGN KEY (innovation_id) REFERENCES innovation (id)
);

CREATE TABLE IF NOT EXISTS conceptuelle_item
(
    id                 INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_developement TEXT,
    problem            TEXT,
    created_at         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS structurelle
(
    id            INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    innovation_id INTEGER,
    FOREIGN KEY (innovation_id) REFERENCES innovation (id)
);

CREATE TABLE IF NOT EXISTS structurelle_item
(
    id                    INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_developement    TEXT,
    forme_capitalisation  TEXT,
    modele_architecturale TEXT,
    structurateur         TEXT,
    created_at            TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    structurelle_id       INTEGER,
    FOREIGN KEY (structurelle_id) REFERENCES structurelle (id)
);

CREATE TABLE IF NOT EXISTS fonctionnelle
(
    id            INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    innovation_id INTEGER,
    FOREIGN KEY (innovation_id) REFERENCES innovation (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS fonctionnelle_item
(
    id                 INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_developement TEXT,
    solution           TEXT,
    created_at         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    fonctionnelle_id   INTEGER,
    FOREIGN KEY (fonctionnelle_id) REFERENCES fonctionnelle (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS combinatoire
(
    id            INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    innovation_id INTEGER,
    FOREIGN KEY (innovation_id) REFERENCES innovation (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS combinatoire_item
(
    id                    INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_developement    TEXT,
    solution              TEXT,
    forme_capitalisation  TEXT,
    modele_architecturale TEXT,
    structurateur         TEXT,
    created_at            TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    combinatoire_id       INTEGER,
    FOREIGN KEY (combinatoire_id) REFERENCES innovation (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS capitaliste
(
    id            INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    innovation_id INTEGER,
    FOREIGN KEY (innovation_id) REFERENCES innovation (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS capitaliste_item
(
    id                   INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_developement   TEXT,
    forme_capitalisation TEXT,
    created_at           TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    capitaliste_id       INTEGER,
    FOREIGN KEY (capitaliste_id) REFERENCES capitaliste (id) ON DELETE CASCADE
);

-- Formulaire Invention

CREATE TABLE IF NOT EXISTS invention
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type           VARCHAR(255),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    codeur_form_id INTEGER   NOT NULL,
    FOREIGN KEY (codeur_form_id) REFERENCES codeur_forms (id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS canon1
(
    id           INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    invention_id INTEGER,
    FOREIGN KEY (invention_id) REFERENCES invention (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS canon1_item
(
    id                    INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    canon1_id             INTEGER,
    source_inspiration    TEXT,
    outil_developement    TEXT,
    solution              TEXT,
    forme_capitalisation  TEXT,
    modele_architecturale TEXT,
    created_at            TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (canon1_id) REFERENCES canon1 (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS canon2
(
    id           INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    invention_id INTEGER,
    FOREIGN KEY (invention_id) REFERENCES invention (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS canon2_item
(
    id                    INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    canon2_id             INTEGER,
    solution1             TEXT,
    outil_developement    TEXT,
    solution              TEXT,
    problem               TEXT,
    forme_capitalisation  TEXT,
    modele_architecturale TEXT,
    created_at            TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (canon2_id) REFERENCES canon2 (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS canon3
(
    id           INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    invention_id INTEGER,
    FOREIGN KEY (invention_id) REFERENCES invention (id)  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS canon3_item
(
    id                    INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    canon3_id             INTEGER,
    outil_developement    TEXT,
    produit_naturelle     TEXT,
    solution              TEXT,
    problem               TEXT,
    forme_capitalisation  TEXT,
    modele_architecturale TEXT,
    created_at            TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (canon3_id) REFERENCES canon3 (id) ON DELETE CASCADE
);

-- Formulaire Prototype

CREATE TABLE IF NOT EXISTS formulaire_prototype
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeur_form_id INTEGER,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (codeur_form_id) REFERENCES codeur_forms (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS prototype_item
(
    id                      INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_developement      TEXT,
    configuration           TEXT,
    nature                  TEXT,
    etat_matier             TEXT,
    forme_capitalisation    TEXT,
    created_at              TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    formulaire_prototype_id INTEGER,
    FOREIGN KEY (formulaire_prototype_id) REFERENCES formulaire_prototype (id) ON DELETE CASCADE
);

-- Formulaire Source inspirations

CREATE TABLE IF NOT EXISTS formulaire_source_inspriation
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeur_form_id INTEGER,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (codeur_form_id) REFERENCES codeur_forms (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS formulaire_source_inspriation_item
(
    id                               INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at                       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                       TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    formulaire_source_inspriation_id INTEGER,
    FOREIGN KEY (formulaire_source_inspriation_id) REFERENCES formulaire_source_inspriation (id) ON DELETE CASCADE
);

-- Capitalisation immateriel forms

CREATE TABLE IF NOT EXISTS form_capitalisation_immaterielle
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeur_form_id INTEGER   NOT NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (codeur_form_id) REFERENCES codeur_forms (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS outils
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cycles
(
    id                                                       INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    certification_ou_diplome                                 VARCHAR(255) NOT NULL,
    duree_de_certification                                   VARCHAR(255) NOT NULL,
    savoir_a_enseigner                                       TEXT,
    objectif_general                                         TEXT,
    objectif_specifique                                      TEXT,
    theme_a_aborder                                          TEXT,
    programme                                                VARCHAR(255),
    origine_du_savoir_a_enseigner                            VARCHAR(2000),
    resources_educatives                                     TEXT,
    method_enseignement                                      TEXT,
    mode_apprentisage                                        TEXT,
    mode_evaluation                                          TEXT,
    planification_horizontal                                 TEXT,
    planification_vertical                                   TEXT,
    manuels_didactiques                                      TEXT,
    manuels_pedagogiques_et_didactiques                      TEXT,
    system_de_formation_des_formateurs                       TEXT,
    organigramme_et_administration_des_activites_didactiques TEXT,
    processeur_orientation_academique_et_professionnel       TEXT,
    outil_id                                                 INTEGER      NOT NULL UNIQUE,
    created_at                                               TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                                               TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS emission_tvs
(
    id                   INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom                  VARCHAR(255) NOT NULL,
    thematique_principal VARCHAR(255),
    duree                VARCHAR(255),
    synopsis             VARCHAR(255),
    cible                VARCHAR(255),
    bande_son            VARCHAR(255),
    bande_image          VARCHAR(255),
    informations         TEXT,
    source_information   VARCHAR(255),
    rubriques            TEXT,
    genres_journaliste   VARCHAR(255),
    conducteur           VARCHAR(255),
    auteurs              VARCHAR(255),
    presentateur         VARCHAR(255),
    decors               VARCHAR(255),
    fond_sonore          VARCHAR(255),
    outil_id             INTEGER      NOT NULL UNIQUE,
    created_at           TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS films
(
    id                INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom               VARCHAR(255) NOT NULL,
    document          TEXT,
    fiction           TEXT,
    synopsis          TEXT,
    personnage        TEXT,
    schema_actaniel   TEXT,
    environment       TEXT,
    decor_de_tournage TEXT,
    scene             TEXT,
    `sequence`        TEXT,
    scenario          TEXT,
    axe_thematique    TEXT,
    axe_dramatique    TEXT,
    auteur            TEXT,
    outil_id          INTEGER      NOT NULL UNIQUE,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE,
    created_at        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS livres
(
    id                 INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom                VARCHAR(255) NOT NULL,
    auteur             VARCHAR(255) NOT NULL,
    categorie          VARCHAR(255) NOT NULL,
    titre              VARCHAR(255) NOT NULL,
    sous_titre         VARCHAR(255) NOT NULL,
    premier_couvertue  TEXT,
    quatriem_couvertue TEXT,
    couleur            VARCHAR(255),
    avant_propos       TEXT,
    preface            TEXT,
    table_des_matieres TEXT,
    introduction       TEXT,
    partie             TEXT,
    chapitre           TEXT,
    emotions_generees  TEXT,
    schema_actanciel   TEXT,
    schema_narratif    TEXT,
    conclusion         TEXT,
    theme_general      TEXT,
    sous_theme         TEXT,
    bibiography        TEXT,
    outil_id           INTEGER      NOT NULL UNIQUE,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE,
    created_at         TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS logiciels
(
    id                            INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    problem_resolu                VARCHAR(255),
    donnee_entree                 VARCHAR(255),
    traitement                    TEXT,
    sortie                        TEXT,
    type_de_resultats             TEXT,
    modele_de_calcul              TEXT,
    fonctionnalites               TEXT,
    interface_principale          TEXT,
    interface_des_fonctionnalites TEXT,
    type_application              TEXT,
    language_de_programmation     VARCHAR(255),
    fonction                      TEXT,
    outil_id                      INTEGER   NOT NULL UNIQUE,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE,
    created_at                    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                    TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media_tvs
(
    id                     INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    planning_journalier    VARCHAR(255),
    mensuel                VARCHAR(255),
    saison                 VARCHAR(255),
    annuel                 VARCHAR(255),
    categorie_des_emotions VARCHAR(255),
    tranche_horaires       VARCHAR(255),
    duree_des_programmes   VARCHAR(255),
    thematique_abordees    VARCHAR(255),
    ligne_editoriale       VARCHAR(255),
    audience               VARCHAR(255),
    grille_des_programmes  TEXT,
    conducteurs_entennes   TEXT,
    poste_de_travail       TEXT,
    organigramme           TEXT,
    couvertue_geographique VARCHAR(255),
    outil_id               INTEGER   NOT NULL UNIQUE,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE,
    created_at             TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at             TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS press_ecrites
(
    id                     INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    thematique             VARCHAR(255),
    frequence_de_partition VARCHAR(255),
    cible                  VARCHAR(255),
    image                  VARCHAR(255),
    ligne_editoriale       VARCHAR(255),
    informations           TEXT,
    source_information     TEXT,
    genre_journaliste      TEXT,
    rubriques              TEXT,
    articles               TEXT,
    element_de_la_une      VARCHAR(255),
    auteurs                VARCHAR(255),
    outil_id               INTEGER   NOT NULL UNIQUE,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE,
    created_at             TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at             TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS capitalisation_immaterielle_item
(
    id                             INTEGER      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    outil_id                       INTEGER      NOT NULL,
    philosophie                    VARCHAR(255) NOT NULL,
    subjet                         VARCHAR(255),
    capitalisation_immaterielle_id INTEGER      NOT NULL,
    FOREIGN KEY (outil_id) REFERENCES outils (id) ON DELETE CASCADE,
    FOREIGN KEY (capitalisation_immaterielle_id) REFERENCES form_capitalisation_immaterielle (id) ON DELETE CASCADE
);

-- Formulaire Cev

CREATE TABLE IF NOT EXISTS formulaire_cev
(
    id             INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeur_form_id INTEGER   NOT NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Formulaire Maquettage

CREATE TABLE IF NOT EXISTS formulaire_maquettage
(
    id         INTEGER   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP          DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);