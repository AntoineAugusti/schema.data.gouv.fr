(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{758:function(e,t,n){"use strict";n.r(t);var r=n(44),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("MenuSchema"),e._v(" "),n("h1",{attrs:{id:"subventions"}},[e._v("Subventions")]),e._v(" "),n("p",[e._v("Spécification du modèle de données relatif aux subventions attribuées par une collectivité")]),e._v(" "),n("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),n("p",[e._v("Dans le but de renforcer la transparence financière des aides octroyées par les personnes publiques, les collectivités locales, de plus de 3500 habitants et plus de 50 agents, qui attribuent des subventions dont le montant annuel est supérieur à 23 000€ ont l’obligation, à compter du 1er août 2017, de rendre accessibles, sous forme électronique, dans un standard ouvert aisément réutilisable et exploitable par un système de traitement automatisé, les données essentielles de leurs conventions de subvention. La nature et les modalités de diffusion de ces données essentielles ont été fixées par voie réglementaire.")]),e._v(" "),n("p",[e._v("De fait, la spécification SCDL du modèle de données relatif aux subventions attribuées par une collectivité locale a été élaborée à partir des sources suivantes :")]),e._v(" "),n("ul",[n("li",[e._v("Documents de cadrage juridique\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000034600552",target:"",rel:"noopener noreferrer"}},[e._v("​Décret n° 2017-779 du 5 mai 2017 relatif à l'accès sous forme électronique aux données essentielles des conventions de subvention​")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000036040528",target:"",rel:"noopener noreferrer"}},[e._v("​Arrêté du 17 novembre 2017 relatif aux conditions de mises à disposition des données essentielles des conventions de subvention​")])])])]),e._v(" "),n("li",[e._v("Document de cadrage technique\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/etalab/format-subventions",target:"",rel:"noopener noreferrer"}},[e._v("​Format réglementaire pour la publication des données essentielles des conventions de subventions sur le dépôt Github de la mission Etalab​")])])])])]),e._v(" "),n("p",[e._v("Si nécessaire, elle sera mise à jour, adaptée et consolidée à partir des mêmes sources.")]),e._v(" "),n("h3",{attrs:{id:"avertissement"}},[e._v("Avertissement !")]),e._v(" "),n("p",[e._v("L'utilisation de cette spécification requiert de prêter une attention toute particulière aux points suivants :")]),e._v(" "),n("ul",[n("li",[e._v("Dans l'attente d'une "),n("a",{attrs:{href:"https://github.com/etalab/format-subventions/issues/2",target:"",rel:"noopener noreferrer"}},[e._v("éventuelle modification")]),e._v(" mais contrairement à ce qui est pour le moment prévu dans le format réglementaire, cette spécification énonce que, pour "),n("strong",[e._v("datesPeriodeVersement")]),e._v(",  le séparateur de dates pour une période est une barre oblique et pas un tiret du bas afin de respecter la norme internationale ISO 8601.")]),e._v(" "),n("li",[e._v("Pour s'y conformer, elle nécessite de créer une ligne par bénéficiaire et non une ligne par subvention. Dans le cas d'une subvention attribuée à plusieurs bénéficiaires, toutes les données de la subvention doivent être répétées à l'identique sur autant de lignes qu'il y a de bénéficiaires, à l'exception des champs suivants dont les valeurs varient : "),n("strong",[e._v("nomBeneficiaire")]),e._v(", "),n("strong",[e._v("idBeneficiaire")]),e._v(", et "),n("strong",[e._v("pourcentageSubvention")]),e._v(". Dans certains cas, les champs "),n("strong",[e._v("conditionsVersement")]),e._v(" et "),n("strong",[e._v("datesPeriodeVersement")]),e._v(" peuvent également varier d'un bénéficiaire à un autre, pour une même subvention.")])]),e._v(" "),n("h2",{attrs:{id:"outils"}},[e._v("Outils")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://go.validata.fr/table-schema?schema_name=scdl.subventions",target:"",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://scdl.opendatafrance.net/docs/assets/validata-logo-horizontal.png",alt:""}})]),e._v(" "),n("a",{attrs:{href:"https://go.validata.fr/table-schema?schema_name=scdl.subventions",target:"",rel:"noopener noreferrer"}},[e._v("Valider un fichier avec Validata")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://csv-gg.etalab.studio/?schema=scdl%2Fsubventions",target:"",rel:"noopener noreferrer"}},[e._v("Créer un fichier avec CSV Good Generator")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://scdl.opendatafrance.net/docs/templates/subventions.xlsx",target:"",rel:"noopener noreferrer"}},[e._v("Télécharger un fichier gabarit au format XLSX")])])]),e._v(" "),n("h2",{attrs:{id:"voir-aussi"}},[e._v("Voir aussi")]),e._v(" "),n("p",[e._v("Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :")]),e._v(" "),n("ul",[n("li",[e._v("adresser un message à "),n("a",{attrs:{href:"mailto:scdl@opendatafrance.email?subject=Subventions"}},[e._v("scdl@opendatafrance.email")])]),e._v(" "),n("li",[e._v("participer au "),n("a",{attrs:{href:"https://forum.etalab.gouv.fr/t/cadre-juridique-et-technique-de-louverture-des-donnees-de-subventions/4004",target:"",rel:"noopener noreferrer"}},[e._v("fil de discussion dédié sur le forum de la mission Etalab")])]),e._v(" "),n("li",[e._v("ouvrir un ticket sur le "),n("a",{attrs:{href:"https://git.opendatafrance.net/scdl/subventions/issues",target:"",rel:"noopener noreferrer"}},[e._v("dépôt GitLab d’OpenDataFrance")]),e._v(" ou sur le "),n("a",{attrs:{href:"https://github.com/etalab/format-subventions/issues/new",target:"",rel:"noopener noreferrer"}},[e._v("dépôt Github de la mission Etalab")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);