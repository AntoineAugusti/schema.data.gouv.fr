---
permalink: /CEREMA/schema-arrete-circulation-marchandises/0.5.0/documentation.html
redirect_from: null
title: Documentation de Schéma des arrêtés permanents de circulation pour le transport
  de marchandises
version: 0.5.0
---

## arrete-circulation-marchandises

Schéma des arrêtés permanents de circulation pour le transport de marchandises

Spécification du fichier d'échange relatif aux arrêtés permanents de circulation pour le transport de marchandises gérés par les collectivités.

- Schéma créé le : 30/04/2021
- Site web : https://github.com/CEREMA/schema-arrete-circulation
- Version : 0.1.1
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `ID`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [ID](#identifiant-de-l'entité---propriété-id) | chaîne de caractères  | Oui |
| [COLL_NOM](#nom-de-la-collectivité---propriété-coll_nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivité---propriété-coll_siret) | chaîne de caractères  | Non |
| [ARR_REF](#référence-de-l'arrêté---propriété-arr_ref) | chaîne de caractères  | Oui |
| [ARR_OBJET](#objet-de-l'arrêté---propriété-arr_objet) | chaîne de caractères  | Oui |
| [ARR_CONSIDERANT](#considérant-de-l'arrêté---propriété-arr_considerant) | chaîne de caractères  | Non |
| [ARR_DATE](#date-de-l'arrêté---propriété-arr_date) | date (format `%Y-%m-%d`) | Oui |
| [ARR_INSEE](#code-insee---propriété-arr_insee) | chaîne de caractères  | Oui |
| [ARR_URL](#url-d'accès-de-l'arrêté---propriété-arr_url) | chaîne de caractères (format `uri`) | Non |
| [REGL_ARTICLE](#article-du-règlement---propriété-regl_article) | nombre entier  | Non |
| [REGL_SOUS_ARTICLE](#sous-article-du-règlement---propriété-regl_sous_article) | chaîne de caractères  | Non |
| [REGL_MODALITE](#propriété-regl_modalite) | chaîne de caractères  | Oui |
| [VEH_TYPES](#propriété-veh_types) | chaîne de caractères  | Non |
| [VEH_PTAC](#poids-total-autorisé-en-charge---propriété-veh_ptac) | nombre réel  | Non |
| [VEH_LONG](#longueur-du-véhicule---propriété-veh_long) | nombre réel  | Non |
| [VEH_LARG](#largeur-du-largeur---propriété-veh_larg) | nombre réel  | Non |
| [VEH_HAUT](#largeur-du-largeur---propriété-veh_haut) | nombre réel  | Non |
| [VEH_USAGES](#types-d'usage---propriété-veh_usages) | chaîne de caractères  | Non |
| [VEH_MOTORS](#types-de-motorisation---propriété-veh_motors) | chaîne de caractères  | Non |
| [VEH_CQAS](#vignettes-crit'air---propriété-veh_cqas) | chaîne de caractères  | Non |
| [PERIODE_DEBUT](#date-d'entrée-en-vigueur-des-restrictions---propriété-periode_debut) | date (format `%Y-%m-%d`) | Non |
| [PERIODE_JH](#jours-et-heures-de-circulation---propriété-periode_jh) | chaîne de caractères  | Non |
| [EMPRISE_DESIGNATION](#nom-de-la-voie---propriété-emprise_designation) | chaîne de caractères  | Oui |
| [EMPRISE_SENS](#direction-ou-sens-de-circulation---propriété-emprise_sens) | chaîne de caractères  | Non |
| [EMPRISE_DEBUT](#début-de-la-section---propriété-emprise_debut) | chaîne de caractères  | Non |
| [EMPRISE_FIN](#fin-de-la-section---propriété-emprise_fin) | chaîne de caractères  | Non |
| [INTERV_DUREE](#durée-maximale-d'intervention---propriété-interv_duree) | heure  | Non |
| [INTERV_HMAX](#heure-maximale-d'intervention---propriété-interv_hmax) | heure  | Non |
| [GEOM_WKT](#géométrie-au-format-wkt---propriété-geom_wkt) | chaîne de caractères  | Non |
| [GEOM_SOURCE](#source-de-la-géométrie---propriété-geom_source) | chaîne de caractères  | Non |

#### Identifiant de l'entité - Propriété `ID`

> *Description : Il s'agit de l'identifiant de l'entité (ou ligne du tableau). Ce dernier doit être unique. L'entité élémentaire correspond à une voie entière règlementée (par ex. `Avenue Philippe Solari`) ou une portion de celle-ci (voir les champs `SECTION_DEBUT` et `SECTION_FIN`). L'identifiant peut tout simplement être auto-incrémenté (1, 2 ou 3,...). Il peut correspondre à la valeur `osm_id` de la voie règlementée (par exemple, `133`). Il peut également être un identifiant propre à une structure ou à une autre base de données (identifiant issu de la BDTOPO IGN, par exemple). [Vous pouvez créer des identifiants grâce à l'application Heidi d'Etalab](https://heidi.app.etalab.studio/).<br/>Ex : 133-3*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom de la collectivité.<br/>Ex : Commune d'Aix-en-Provence*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité sur le territoire de laquelle sont situés les équipements collectifs publics répertoriés dans le jeu de données. Il est composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.<br/>Ex : 22940028800010*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Référence de l'arrêté - Propriété `ARR_REF`

> *Description : Référence ou numéro de l'arrêté auquel se réfère la règlementation. Si l'arrêté a été mis à jour, la référence doit être celle de l'arrêté mis à jour et non celle de l'arrêté originel. Si l'arrêté ne possède pas de référence, mettre la valeur `NC`<br/>Ex : AP-13090-12*
- Valeur obligatoire
- Type : chaîne de caractères

#### Objet de l'arrêté - Propriété `ARR_OBJET`

> *Description : Objet ou titre de l'arrêté. Mettre `NC` si l'arrêté ne comprend pas d'objet.<br/>Ex : Arrêté règlementant la circulation dans le quartier Mazarin et du palais de Justice*
- Valeur obligatoire
- Type : chaîne de caractères

#### Considérant de l'arrêté - Propriété `ARR_CONSIDERANT`

> *Description : Considérant est le justificatif de la mise en place de la règlementation<br/>Ex : Considérant la dangerosité que représente le trafic des PL aux abords des groupes scolaires*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de l'arrêté - Propriété `ARR_DATE`

> *Description : Date de création ou de mise à jour de l'arrêté, au format ISO 8601 AAAA-MM-DD.<br/>Ex : 2021-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Code INSEE - Propriété `ARR_INSEE`

> *Description : Code INSEE de la commune sur laquelle s'applique l'arrêté<br/>Ex : 13090*
- Valeur obligatoire
- Type : chaîne de caractères
- Entre 5 et 5 caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### URL d'accès de l'arrêté - Propriété `ARR_URL`

> *Description : Adresse internet par laquelle accéder à l'arrêté, et donc au règlement.<br/>Ex : https://carte.st-paul-les-dax.fr/wp-content/uploads/2020/06/AM-10248.pdf*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Article du règlement - Propriété `REGL_ARTICLE`

> *Description : N° de l'article associé au règlement lorsqu'il existe<br/>Ex : 4*
- Valeur optionnelle
- Type : nombre entier

#### Sous-article du règlement - Propriété `REGL_SOUS_ARTICLE`

> *Description : Un article peut se décomposer en plusieurs sous-articles, contenant chacun une règlementation particulière. Ces sous-articles ont des numérotations.<br/>Ex : 4 bis*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `REGL_MODALITE`

> *Description : Modalité<br/>Ex : Autorise*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Autorise
    - Interdit

#### Propriété `VEH_TYPES`

> *Description : Types de véhicule<br/>Ex : Poids lourds|Véhicules utilitaires légers*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$`

#### Poids total autorisé en charge - Propriété `VEH_PTAC`

> *Description : Poids total autorisé en charge, exprimé en tonnes.<br/>Ex : 7.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 45

#### Longueur du véhicule - Propriété `VEH_LONG`

> *Description : Longueur maximale exprimée en mètres.<br/>Ex : 6.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 30

#### Largeur du Largeur - Propriété `VEH_LARG`

> *Description : Longueur maximale exprimée en mètres.<br/>Ex : 3.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 6

#### Largeur du Largeur - Propriété `VEH_HAUT`

> *Description : Longueur maximale exprimée en mètres.<br/>Ex : 2.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 6

#### Types d'usage - Propriété `VEH_USAGES`

> *Description : Types d'usage de véhicule. Séparer les valeurs par le caractère '|'.<br/>Ex : Bennes à ordures ménagères|Véhicules de police*
- Valeur optionnelle
- Type : chaîne de caractères

#### Types de motorisation - Propriété `VEH_MOTORS`

> *Description : Types de motorisation. Séparer les valeurs par le caractère '|'.<br/>Ex : Électrique|Hydrogène*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Electrique|Gaz Naturel pour Véhicules|Hydrogène))+$`

#### Vignettes crit'air - Propriété `VEH_CQAS`

> *Description : Vignettes crit'air. Voir la [classification des vignettes Crit'Air](https://www.certificat-air.gouv.fr/docs/tableaux_classement.pdf) sur le site [certificat-air.gouv.fr](https://www.certificat-air.gouv.fr). Séparer les étiquettes CQA par le caractère '|'.<br/>Ex : 1|2|3*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(100% électrique et Véhicules à hydrogène|1|2|3|4|5|Véhicule non classé))+$`

#### Date d'entrée en vigueur des restrictions - Propriété `PERIODE_DEBUT`

> *Description : Date d'entrée en vigueur des restrictions (en particulier pour les Zones à Faible Émission),, au format ISO 8601 AAAA-MM-DD.<br/>Ex : 2021-04-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Jours et heures de circulation - Propriété `PERIODE_JH`

> *Description : Jours et heures de circulation autorisés pour la circulation exprimés selon le format OpeningHours d'OpenStreetMap ([https://wiki.openstreetmap.org/wiki/Key:opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)). Ce format permet d'indiquer les week-ends (we), les jours fériés (PH) et les vacances scolaires (SH). Par exemple `Mo-Fr 09:00-17:00; PH 10:00-12:00; PH Su off` signifie : 'Du lundi au vendredi de 9h à 17h sauf les jours fériés où l'ouverture est de 10h à 12h, à l'exception des jours fériés tombant un dimanche'. `24/7` indique `Tous les jours`.<br/>Ex : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `((?:(?:^|;\s?)(((((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH)|(?:(?:|,)(Mo|Tu|We|Th|Fr|Sa|Su))+|((Mo|Tu|We|Th|Fr|Sa|Su)-(Mo|Tu|We|Th|Fr|Sa|Su))))\s((([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9]))(,(([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9])))?))|((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH) off)|(sunrise-sunset)))+$|(24/7))`

#### Nom de la voie - Propriété `EMPRISE_DESIGNATION`

> *Description : Nom de la voie, ou de la zone associée à la section règlementée.<br/>Ex : Avenue Philippe Solari, Commune d'Aix-en-Provence, Quartier Mazarin*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\–\'\’\s\d\u00C0-\u00FF\(\)]+$`

#### Direction ou sens de circulation - Propriété `EMPRISE_SENS`

> *Description : Direction ou sens de circulation associé à la règlementation. Pair : concerne la circulation le long des adresses à chiffre pair. `Nord` signifie vers le Nord, soit "vers le haut".<br/>Ex : Deux côtés*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Pair
    - Impair
    - Nord
    - Sud
    - Est
    - Ouest
    - Deux sens

#### Début de la section - Propriété `EMPRISE_DEBUT`

> *Description : Indication de l'endroit à partir duquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'.Ou bien coordonnées du point de l'endroit où commence la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.<br/>Ex : 22 avenue Philippe Solari, Croisement de l'avenue Philippe Solari avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin de la section - Propriété `EMPRISE_FIN`

> *Description : Indication de l'endroit jusqu'auquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'.Ou bien coordonnées du point de l'endroit où finit la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.<br/>Ex : 22 avenue Philippe Solari, Croisement de l'avenue Philippe Solari avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Durée maximale d'intervention - Propriété `INTERV_DUREE`

> *Description : Durée maximale d'intervention (au niveau d'une aire piétonne, par exemple). L'entrée et la sortie dans une zone peuvent être horodatées à la délivrance d'un ticket lors de la traversée d'une borne de passage.<br/>Ex : 03:00:00*
- Valeur optionnelle
- Type : heure

#### Heure maximale d'intervention - Propriété `INTERV_HMAX`

> *Description : Heure max à partir de laquelle les véhicules doivent quitter l'aire piétonne.<br/>Ex : 22:00:00*
- Valeur optionnelle
- Type : heure

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de la ligne exprimée au format [WKT (Well Know Text](https://fr.wikipedia.org/wiki/Well-known_text) sous le système de projection WGS84 (EPSG:4326). Sous QGIS ou PostGIS, il est particulièrement aisé de retrouver le WKT d'une géométrie (fonction `geom_to_wkt` sous QGIS et fonction [`ST_As_Text`](https://postgis.net/docs/ST_AsText.html) sous PostGIS). Vous avez aussi le choix de renseigner la géométrie au format GeoJSON grâce au champ `GEOM_JSON`.<br/>Ex : LineString (5.39340184 45.56538751, 5.41017215 45.56722934, 5.42510063 45.5679079)*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(MULTI|multi)?(LINESTRING|linestring)\(((|,\s?)\(((|,\s?)(-?[0-9](\.[0-9]+)?\s-?[0-9](\.[0-9]+)?))+\))+\)`

#### Source de la géométrie - Propriété `GEOM_SOURCE`

> *Description : Source de la géométrie<br/>Ex : BDTOPO IGN 2021*
- Valeur optionnelle
- Type : chaîne de caractères