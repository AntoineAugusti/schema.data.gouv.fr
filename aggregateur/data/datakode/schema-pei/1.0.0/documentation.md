---
permalink: /datakode/schema-pei/latest/documentation.html
redirect_from: /datakode/schema-pei/1.0.0/documentation.html
title: Documentation de Point d'Eau Incendie (PEI)
version: 1.0.0
---

## PEI

Point d'Eau Incendie (PEI)

Spécification du modèle de données relatif aux PEI

- Schéma créé le : 12/03/2021
- Site web : https://gitlab.com/datakode/schema-pei
- Version : 1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [insee](#numéro-insee---propriété-insee) | chaîne de caractères  | Oui |
| [id_sdis](#identifiant-interne-du-pei-pour-le-sdis---propriété-id_sdis) | chaîne de caractères  | Non |
| [id_gestion](#identifiant-interne-du-pei-pour-le-gestionnaire---propriété-id_gestion) | chaîne de caractères  | Non |
| [nom_gest](#nom-du-gestionnaire-responsable-de-distribution---propriété-nom_gest) | chaîne de caractères  | Non |
| [ref_terr](#numéro-ou-référence-du-point-d’eau-visible-sur-le-terrain---propriété-ref_terr) | chaîne de caractères  | Non |
| [type_pei](#type-de-point-d’eau-incendie---propriété-type_pei) | chaîne de caractères  | Oui |
| [type_rd](#précision-sur-le-type-de-point-d’eau-incendie-défini-dans-le-règlement-départemental-deci.-typologie-utilisée-au-niveau-local-pour-caractériser-le-type-de-point-d’eau---propriété-type_rd) | chaîne de caractères  | Oui |
| [diam_pei](#diamètre-intérieur-du-poteau-ou-de-la-bouche---propriété-diam_pei) | nombre réel  | Non |
| [diam_cana](#propriété-diam_cana) | nombre réel  | Non |
| [source_pei](#propriété-source_pei) | chaîne de caractères  | Non |
| [statut](#statut-du-point-d’eau---propriété-statut) | chaîne de caractères  | Non |
| [nom_etab](#dans-le-cas-d’un-statut-privé,-nom-de-l’établissement-propriétaire---propriété-nom_etab) | chaîne de caractères  | Non |
| [situation](#situation-du-pei---propriété-situation) | chaîne de caractères  | Non |
| [press_dyn](#pression-dynamique-en-bars-au-débit-nominal---propriété-press_dyn) | nombre réel  | Non |
| [press_stat](#pression-statique-en-bars---propriété-press_stat) | nombre réel  | Non |
| [debit](#valeur-de-débit-mesuré-exprimé-en-m3/h-sous-une-pression-de-1-bar---propriété-debit) | nombre réel  | Non |
| [volume](#capacité-volumique-utile-de-la-source-d’eau-en-m3---propriété-volume) | nombre réel  | Non |
| [disponible](#valide-à-la-date-de-dernière-mise-à-disposition-des-données---propriété-disponible) | booléen  | Non |
| [date_dispo](#date-de-dernier-changement-d’état-de-disponibilité---propriété-date_dispo) | date  | Non |
| [date_mes](#date-de-mise-en-service-du-pei---propriété-date_mes) | date  | Non |
| [date_maj](#date-de-dernière-mise-à-jour-de-la-donnée---propriété-date_maj) | date  | Non |
| [date_ct](#date-du-dernier-contrôle-technique---propriété-date_ct) | date  | Non |
| [date_ro](#date-de-la-dernière-reconnaissance-opérationnelle---propriété-date_ro) | date  | Non |
| [prec](#classes-de-précision---propriété-prec) | chaîne de caractères  | Non |
| [x](#x-en-lambert-93-(précision-de-2-décimales)---propriété-x) | nombre réel  | Non |
| [y](#y-en-lambert-93-(précision-de-2-décimales)---propriété-y) | nombre réel  | Non |
| [lon](#longitude---propriété-lon) | nombre réel  | Non |
| [lat](#latitude---propriété-lat) | nombre réel  | Non |

#### Numéro INSEE - Propriété `insee`

> *Description : Numéro INSEE de la commune sur laquelle le PEI est situé. Dans le cas d’un plan d’eau et des cours d’eau plusieurs points d’aspiration peuvent y être associés. On prend alors en compte la localisation du point d’aspiration pour identifier la commune<br/>Ex : 34172*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant interne du PEI pour le SDIS - Propriété `id_sdis`

> *Description : Identifiant interne du PEI pour le SDIS<br/>Ex : 34172.02080*
- Valeur optionnelle
- Type : chaîne de caractères

#### Identifiant interne du PEI pour le gestionnaire - Propriété `id_gestion`

> *Description : Identifiant interne du PEI pour le gestionnaire<br/>Ex : 42*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du gestionnaire responsable de distribution - Propriété `nom_gest`

> *Description : Nom du gestionnaire responsable de distribution<br/>Ex : BRL*
- Valeur optionnelle
- Type : chaîne de caractères

#### Numéro ou référence du point d’eau visible sur le terrain - Propriété `ref_terr`

> *Description : Numéro ou référence du point d’eau visible sur le terrain<br/>Ex : 2080*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type de point d’eau incendie - Propriété `type_pei`

> *Description : Signification : PI (Poteau d’Incendie), BI (Prise d’eau sous pression, notamment bouche d’incendie), PA (Point d’aspiration aménagé (point de puisage…)), CI (Citerne aérienne ou enterrée) Cette typologie est issue du règlement national (p. 39). Si ce dernier évoluait, cette typologie évoluerait en conséquence<br/>Ex : PI*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - PI
    - BI
    - PA
    - CI

#### Précision sur le type de point d’eau incendie défini dans le règlement départemental DECI. Typologie utilisée au niveau local pour caractériser le type de point d’eau - Propriété `type_rd`

> *Description : Précision sur le type de point d’eau incendie défini dans le règlement départemental DECI. Typologie utilisée au niveau local pour caractériser le type de point d’eau<br/>Ex : poteau*
- Valeur obligatoire
- Type : chaîne de caractères

#### Diamètre intérieur du poteau ou de la bouche - Propriété `diam_pei`

> *Description : Norme européenne : Poteau Incendie NF EN 14384 (Février 2006) NF S 61 213 CN (Avril 2007) (valeurs possibles : 80, 100 ou 150 ; 80 = 1 prise de 65 - 100 = 2 prises de diamètre 65, 1 prise de diamètre 100 - 150 = 2 prises de diamètre 100) Bouche Incendie NF EN 14339 (Février 2006) NF S 61 211 CN (Avril 2007) (valeur possible : 1 prise de diamètre 100).<br/>Ex : 100*
- Valeur optionnelle
- Type : nombre réel
- Valeurs autorisées : 
    - 80
    - 100
    - 150

#### Propriété `diam_cana`

> *Description : Diamètre de la canalisation exprimé en mm pour les PI et BI<br/>Ex : 60*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `source_pei`

> *Description : Source du point d’eau<br/>Ex : reseau_aep*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - citerne
    - plan_eau
    - piscine
    - puits
    - cours_eau
    - reseau_aep
    - reseau_irrigation

#### Statut du point d’eau - Propriété `statut`

> *Description : Le statut du point d’eau est décrit dans le règlement national (p. 43)<br/>Ex : prive*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - public
    - prive

#### Dans le cas d’un statut privé, nom de l’établissement propriétaire - Propriété `nom_etab`

> *Description : Dans le cas d’un statut privé, nom de l’établissement propriétaire<br/>Ex : GIFI*
- Valeur optionnelle
- Type : chaîne de caractères

#### Situation du PEI - Propriété `situation`

> *Description : Adresse ou informations permettant de faciliter la localisation du point d’eau sur le terrain<br/>Ex : Rue Clement Ader*
- Valeur optionnelle
- Type : chaîne de caractères

#### Pression dynamique en bars au débit nominal - Propriété `press_dyn`

> *Description : Pression dynamique en bars au débit nominal<br/>Ex : 4*
- Valeur optionnelle
- Type : nombre réel

#### Pression statique en bars - Propriété `press_stat`

> *Description : Pression statique en bars<br/>Ex : 4.5*
- Valeur optionnelle
- Type : nombre réel

#### Valeur de débit mesuré exprimé en m3/h sous une pression de 1 bar - Propriété `debit`

> *Description : Valeur de débit mesuré exprimé en m3/h sous une pression de 1 bar<br/>Ex : 80*
- Valeur optionnelle
- Type : nombre réel

#### Capacité volumique utile de la source d’eau en m3 - Propriété `volume`

> *Description : Si la source est inépuisable, ne pas renseigner ce champ (cours d’eau ou plan d’eau pérenne)<br/>Ex : 620*
- Valeur optionnelle
- Type : nombre réel

#### Valide à la date de dernière mise à disposition des données - Propriété `disponible`

> *Description : <br/>Ex : 1*
- Valeur optionnelle
- Type : booléen

#### Date de dernier changement d’état de disponibilité - Propriété `date_dispo`

> *Description : Date de dernier changement d’état de disponibilité<br/>Ex : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date de mise en service du PEI - Propriété `date_mes`

> *Description : Date de mise en service du PEI<br/>Ex : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date de dernière mise à jour de la donnée - Propriété `date_maj`

> *Description : Date de dernière mise à jour de la donnée<br/>Ex : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date du dernier contrôle technique - Propriété `date_ct`

> *Description : Date du dernier contrôle technique<br/>Ex : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date de la dernière reconnaissance opérationnelle - Propriété `date_ro`

> *Description : Date de la dernière reconnaissance opérationnelle<br/>Ex : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Classes de précision - Propriété `prec`

> *Description : 01 (0 à 1 m), 05 (de 1 à 5 m), 10 (de 5 à 10 m), 99 (plus de 10 m), vide si inconnu<br/>Ex : 05*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - 01
    - 05
    - 10
    - 99

#### x en lambert 93 (précision de 2 décimales) - Propriété `x`

> *Description : x en lambert 93 (précision de 2 décimales)<br/>Ex : 723894.42*
- Valeur optionnelle
- Type : nombre réel

#### y en lambert 93 (précision de 2 décimales) - Propriété `y`

> *Description : y en lambert 93 (précision de 2 décimales)<br/>Ex : 6262032.84*
- Valeur optionnelle
- Type : nombre réel

#### Longitude - Propriété `lon`

> *Description : Coordonnée de longitude exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point<br/>Ex : 3.2951013*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre -180 et 180

#### Latitude - Propriété `lat`

> *Description : Coordonnée de latitude  exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point<br/>Ex : 43.4569932*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre -90 et 90