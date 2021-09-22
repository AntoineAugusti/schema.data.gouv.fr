(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{640:function(e,t,n){"use strict";n.r(t);var s=n(44),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("MenuSchema"),e._v(" "),n("h1",{attrs:{id:"schema-des-lieux-de-stationnement"}},[e._v("Schéma des lieux de stationnement")]),e._v(" "),n("p",[e._v("Ce schéma permet de modéliser les stationnements en parcs publics et privés à usage public.")]),e._v(" "),n("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),n("p",[e._v("Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de "),n("a",{attrs:{href:"https://transport.data.gouv",target:"",rel:"noopener noreferrer"}},[e._v("transport.data.gouv.fr")]),e._v(" propose une solution simple et structurée pour l’ouverture des données de parcs de stationnement en France : la Base Consolidée des Données de Stationnement (BCS).")]),e._v(" "),n("p",[e._v("Il s’adresse à toute nouvelle agglomération qui souhaiterait se lancer dans l’ouverture d’une base décrivant les stationnements hors-voirie de son ressort territorial.")]),e._v(" "),n("p",[e._v("L’équipe de "),n("a",{attrs:{href:"https://transport.data.gouv",target:"",rel:"noopener noreferrer"}},[e._v("transport.data.gouv.fr")]),e._v(" mettra à disposition des acteurs un générateur CSV conforme au schéma de données, ainsi qu’un validateur pour les collectivités qui voudraient créer le fichier par leurs soins.")]),e._v(" "),n("h2",{attrs:{id:"cadre-juridique"}},[e._v("Cadre juridique")]),e._v(" "),n("p",[e._v("L'ouverture des données de stationnement nécessaires à l'information voyageur est une obligation légale, définie par le "),n("a",{attrs:{href:"https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32017R1926",target:"",rel:"noopener noreferrer"}},[e._v("règlement délégué (UE) 2017/1926")]),e._v(" concernant la mise à disposition de services d'informations sur les déplacements multimodaux. Le règlement statue la création d'un Point d'Accès National par pays membre, et que les données nécéssaires à l'information voyageur y soient mises à disposition. Le règlement exige la mise à disposition des données concernant la localisation des lieux permettant le stationnement à échéance du 1er décembre 2019 ; la mise à disposition de données dynamiques renseignant la disponibilité des lieux de stationnement à échéance du 1er décembre 2020 ; et l'information relative au coût de stationnement à échéance du 1er décembre 2021.")]),e._v(" "),n("p",[e._v("Ces obligations sont précisées en droit français par la loi d'orientation des mobilités (LOM), qui désigne les collectivités territoriales comme étant responsables de la mise à disposition des données sur la plateforme "),n("a",{attrs:{href:"https://transport.data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("transport.data.gouv.fr")]),e._v(", qui constitue le Point d'Accès National des données de mobilité pour la France.")]),e._v(" "),n("blockquote",[n("p",[e._v('Lorsqu’elles confient la gestion du stationnement en ouvrage ou sur voirie à un prestataire, les collectivités territoriales et leurs groupements sont responsables de la fourniture des données mentionnées au 3°. Elles peuvent en confier la charge à ce prestataire" (Article 9, alinéa 5)')])]),e._v(" "),n("p",[e._v("Les collectivités, et par extension leurs prestataires, ont la responsabilité de transmettre les données existantes les plus complètes possibles.")]),e._v(" "),n("p",[e._v("Afin de faciliter la réutilisation de ces données, et réduire le coût d'intégration de ces données dans des services tiers, un schéma a été défini afin d'assurer une harmonisation de ces données sur l'ensemble du territoire. Le schéma définit des informations "),n("strong",[e._v("nécessaires")]),e._v(" et des données "),n("strong",[e._v("additionnelles")]),e._v(". Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est cependant demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l'usager final.")]),e._v(" "),n("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),n("p",[e._v("La base des stationnements permet de regrouper en un unique fichier consolidé l'ensemble de l'offre de stationnement en France, dans un format standard et unifié. Cette standardisation des données facilite grandement le travail d'intégration de ces données par des services réutilisateurs.")]),e._v(" "),n("p",[e._v("La base présente plusieurs cas d'usage :")]),e._v(" "),n("ul",[n("li",[e._v("Elle permet de mettre en avant l'offre de stationnement d'une collectivité en permettant à des services de calcul d'itinéraire d'intégrer ces données. Cela permet notamment à ces services de proposer des itinéraires multimodaux à leurs usagers, combinant voiture et transports en commun par exemple ;")]),e._v(" "),n("li",[e._v("Elle peut servir également à apporter une plus grande transparence sur l'offre de stationnement existante dans une ville, et les tarifs qui y sont pratiqués.")])]),e._v(" "),n("h3",{attrs:{id:"donnees-tarifaires"}},[e._v("Données tarifaires")]),e._v(" "),n("p",[e._v("Les données tarifaires étant particulièrement complexes à modéliser, le parti a été pris de demander aux producteurs de données de transmettre la meilleure estimation possible des tarifs s'appliquant à un usager du parking exempt de tout abonnement ou avantage (pas d'abonnement, sans tarif résident ou tarif réduit…) par tranche horaire.")]),e._v(" "),n("p",[e._v("Il est utile de noter, à la fois du côté du producteur et du réutilisateur de ces données, que l'équipe transport.data.gouv.fr ne peut pas garantir l'exactitude de l'information transmise, et encourage l'usager final à consulter le site web du gestionnaire de parking afin d'obtenir une estimation la plus fiable possible des tarifs.")]),e._v(" "),n("h3",{attrs:{id:"transmission-des-donnees"}},[e._v("Transmission des données")]),e._v(" "),n("p",[e._v("Dans le but de constituer un répertoire consolidé des parcs de stationnement en France, les collectivités peuvent transmettre systématiquement les données relatives aux parcs de stationnement publics, ou privés à usage public.")]),e._v(" "),n("p",[e._v("Elles peuvent ajouter le mot-clef "),n("code",[e._v("stationnement")]),e._v(" lors de la publication du jeu de données sur leur espace de publication ou directement sur data.gouv.fr.")]),e._v(" "),n("p",[e._v("En cas de mise à jour d'un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l'équipe transport.data.gouv.fr afin de s'assurer que la mise à jour du fichier a bien été pris en compte et intégré à la base consolidée.")]),e._v(" "),n("h3",{attrs:{id:"format-de-fichier"}},[e._v("Format de fichier")]),e._v(" "),n("p",[e._v("Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. Aucune valeur ne peut contenir le caractère « point-virgule » choisi comme séparateur, sauf dans le cas des “listes ouvertes” ou on peut séparer les différentes attributs par des points virgules. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.")]),e._v(" "),n("p",[e._v("Nom du fichier : "),n("code",[e._v("Parking_nom_AAAAMMJJ.csv")]),e._v(" avec nom étant le nom de la collectivité productrice des données, par exemple "),n("code",[e._v("Parking_Ain_20191013.csv")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"fichiers-d-exemples"}},[e._v("Fichiers d'exemples")]),e._v(" "),n("p",[e._v("Vous pouvez télécharger des fichiers gabarits d'exemple.")]),e._v(" "),n("ul",[n("li",[e._v("Un "),n("a",{attrs:{href:"https://github.com/etalab/schema-stationnement/raw/v0.1.2/exemple-valide.csv",target:"",rel:"noopener noreferrer"}},[e._v("fichier au format CSV")]),e._v(" ;")]),e._v(" "),n("li",[e._v("Un "),n("a",{attrs:{href:"https://github.com/etalab/schema-stationnement/raw/v0.1.2/exemple-valide.xlsx",target:"",rel:"noopener noreferrer"}},[e._v("fichier au format tableur")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"mises-a-jour"}},[e._v("Mises à jour")]),e._v(" "),n("p",[e._v("Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.")]),e._v(" "),n("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),n("p",[e._v("Le Point d'accès national aux données de transport ("),n("a",{attrs:{href:"https://transport.data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("transport.data.gouv.fr")]),e._v(") réalise une consolidation régulière des fichiers déposés sur "),n("a",{attrs:{href:"https://data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("data.gouv.fr")]),e._v(" avec le mot-clé "),n("code",[e._v("stationnement")]),e._v(" respectant le format de référence décrit ici.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);