(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{507:function(e,s,t){"use strict";t.r(s);var r=t(44),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h1",{attrs:{id:"schema-registres-d-entree-d-archives"}},[e._v("Schéma registres d'entrée d'archives")]),e._v(" "),t("p",[e._v("Ce schéma permet de modéliser les différents attributs des entrées dans les services publics d'archives.")]),e._v(" "),t("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),t("p",[e._v("En 2018, 86 kilomètres de documents et plus de 16000Go de données sont venus enrichir les collections des services publics d'archives français (Données du service interministériel des archives de France).")]),e._v(" "),t("p",[e._v("Dans une optique de gestion et de suivi de leurs fonds, les services d'archives consignent chaque entrée d'archives à partir de renseignements sommaires permettant d’identifier et de retracer toutes les arrivées de nouveaux documents (provenance, date d'arrivée dans le service, volume...) : c'est le registre des entrées.")]),e._v(" "),t("p",[e._v("Il est généralement directement tenu au sein d'un système d'information dédié aux archives (le SIA), mais il peut également être réalisé avec un tableur voir sur un cahier.")]),e._v(" "),t("p",[e._v("Dans son "),t("a",{attrs:{href:"https://www.gouvernement.fr/cadre-strategique-commun-de-modernisation-des-archives-3042",target:"",rel:"noopener noreferrer"}},[e._v("Cadre stratégique commun de modernisation des archives")]),e._v(", la Délégation interministérielle aux archives de France, mentionne dans les objectifs 2020-2024 :")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Objectif 1.4 : Numériser les archives et rendre les archives numériques aisément consultables et exploitables")])])]),e._v(" "),t("blockquote",[t("p",[e._v("Il conviendra également de généraliser l’open data dans les services d’archives de l’État et de recommander ce modèle aux services territoriaux d’archives.")])]),e._v(" "),t("p",[e._v("Pour en savoir plus sur la méthodologie de construction de ce schéma, consultez "),t("a",{attrs:{href:"https://github.com/Archivistes75/registre_entrees/blob/master/methodologie.md",target:"",rel:"noopener noreferrer"}},[e._v("ce document")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"cadre-juridique"}},[e._v("Cadre juridique")]),e._v(" "),t("ul",[t("li",[e._v("Livre II du Code du Patrimoine")]),e._v(" "),t("li",[e._v("Code des relations entre le public et l'administration")])]),e._v(" "),t("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),t("p",[e._v("Les services d'archives consignent systématiquement, au sein d'un registre des entrées, tous les nouveaux documents qui entrent dans les fonds. Cela permet d’identifier et de retracer toutes les entrées de nouveaux documents d’archives.")]),e._v(" "),t("p",[e._v("La création d'un schéma de données permet de standardiser la diffusion des données produites par les services d'archives.")]),e._v(" "),t("p",[e._v("Ces données informent sur la collecte des archives publiques et les acquisitions d'archives privées par les différentes institutions françaises.")]),e._v(" "),t("p",[e._v("Cette standardisation permet de faciliter la découverte des jeux de données et de les utiliser, notamment en simplifiant l'alignement à différentes échelles (utilisation sur des échelles locales ou nationales).")]),e._v(" "),t("h2",{attrs:{id:"description-du-schema"}},[e._v("Description du schéma")]),e._v(" "),t("p",[e._v("La documentation des champs est accessible "),t("a",{attrs:{href:"https://schema.data.gouv.fr/Archivistes75/registre_entrees/latest/documentation.html",target:"",rel:"noopener noreferrer"}},[e._v("ici")]),e._v(".")]),e._v(" "),t("p",[e._v("Un "),t("a",{attrs:{href:"https://raw.githubusercontent.com/Archivistes75/registre_entrees/master/exemple-valide.csv",target:"",rel:"noopener noreferrer"}},[e._v("gabarit")]),e._v(" au format tableur est également prévu pour faciliter la réalisation d'un registre des entrée au format du schéma.")]),e._v(" "),t("h2",{attrs:{id:"format-de-fichier"}},[e._v("Format de fichier")]),e._v(" "),t("p",[e._v("Le format de fichier retenu pour la publication des données est le CSV (Comma Separated Values, valeurs séparées par des virgules).")]),e._v(" "),t("p",[e._v("Les fichiers doivent, sauf exception et autant que possible, respecter les règles de formatage suivantes :")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("l’encodage des caractères est UTF-8,")])]),e._v(" "),t("li",[t("p",[e._v("le séparateur des colonnes est la virgule,")])]),e._v(" "),t("li",[t("p",[e._v("le séparateur des nombres décimaux est le point,")])]),e._v(" "),t("li",[t("p",[e._v("le séparateur de valeurs multiples dans un champ est le point-virgule,")])]),e._v(" "),t("li",[t("p",[e._v("si un champ contient une virgule, il doit être entouré de guillemets doubles,")])]),e._v(" "),t("li",[t("p",[e._v("chaque ligne doit avoir le même nombre de champs,")])]),e._v(" "),t("li",[t("p",[e._v("le type MIME ou Content-Type est text/csv.")])])]),e._v(" "),t("p",[t("strong",[e._v("Recommandations pour le nommage des fichiers")]),e._v(" :")]),e._v(" "),t("p",[e._v("Les fichiers doivent, sauf exception et autant que possible, respecter les règles de nommage suivantes :")]),e._v(" "),t("p",[t("code",[e._v("AAAAMMJJ_idProducteur_registre_des_entrees_millesime.csv")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("AAAAMMJJ : Date de création du fichier")])]),e._v(" "),t("li",[t("p",[e._v("idServArch : identifiant du service d'archives (ex. FRAD_001)")])]),e._v(" "),t("li",[t("p",[e._v("registre_des_entrees : nom du fichier, en minuscules non accentuées")])]),e._v(" "),t("li",[t("p",[e._v("millésime : année des entrées")])]),e._v(" "),t("li",[t("p",[e._v("extension : Si les règles de formatage sont respectées, l'extension est .csv")])])]),e._v(" "),t("p",[t("strong",[e._v("Exemple")]),e._v(" : "),t("code",[e._v("20201012_FRAD_001_registre_des_entrees_2020.csv")])]),e._v(" "),t("p",[t("strong",[e._v("Recommandations pour la mise en conformité")]),e._v(" :")]),e._v(" "),t("p",[e._v("Ces conseils reprennent ceux du "),t("a",{attrs:{href:"https://scdl.opendatafrance.net/docs/recommandations-relatives-aux-jeux-de-donnees.html",target:"",rel:"noopener noreferrer"}},[e._v("Schéma des données locales publié par Open Data france")])]),e._v(" "),t("p",[e._v("Les fichiers doivent comporter :")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Toutes les colonnes, y compris celles dont les cellules ne sont pas renseignées, dans le bon ordre, et avec des en-têtes correctement nommées sur la première ligne (nom correspondant strictement au schéma)")])]),e._v(" "),t("li",[t("p",[e._v("Autant de lignes que nécessaire comprenant des cellules dont les valeurs peuvent être obligatoires (elles doivent être impérativement renseignées) ou optionnelles (elles sont seulement recommandées ou soumises à condition de disponibilité / pertinence)")])]),e._v(" "),t("li",[t("p",[e._v('Traitement des cellules vides (absence de valeur ou valeur équivalente à 0) : ces cellules doivent être laissées vides. Dans le cas où une valeur numérique est égale à zéro elle doit être écrite 0.0 (zéro [point] zéro), et, dans le cas où des caractères spéciaux sont utilisés pour remplacer des valeurs manquantes (ex. "-" ou "NaN"), cela doit être mentionné dans les métadonnées.')])]),e._v(" "),t("li",[t("p",[e._v("Les dates doivent être formées selon la norme 8601 : YYYY-MM-DD.")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);