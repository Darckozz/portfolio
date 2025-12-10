// État global pour stocker le projet actuellement affiché
let currentProject = {
    id: null,
    title: null
};

// --- Sélection des Éléments DOM ---
const navLinks = document.querySelectorAll('.nav-link');
const pageContents = document.querySelectorAll('.page-content');
const homeLink = document.getElementById('home-link');
const projectCards = document.querySelectorAll('.project-card');
const projectDetailTitle = document.getElementById('project-detail-title');
const backToWorkButton = document.getElementById('back-to-work');
const figmaLinkButton = document.getElementById('figma-link-button-discreet');
const projectVisual = document.getElementById('project-detail-visual'); 
const processCards = document.querySelectorAll('.process-card');
const backToProjectDetailButton = document.getElementById('back-to-project-detail');
const currentProjectNameSpan = document.getElementById('current-project-name');
const processDetailTitle = document.getElementById('process-detail-title');
const processContentDiv = document.getElementById('process-content');
const contentContainer = document.getElementById('content-container');
const TRANSITION_DURATION = 400; // Doit correspondre au CSS (0.4s)

// --- NOUVEAUX ÉLÉMENTS DOM POUR LE ZOOM ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-modal-btn');


// --- Données des Études de Cas (Nettoyées et fusionnées) ---
const projectProcessDetails = {
    // --- Projet 1 : Transport à la Demande IDFM (Desktop) ---
    "1": {
        analyse: `
            <p>Pour mieux comprendre les <strong>besoins, motivations et difficultés</strong> des utilisateurs du Transport à la Demande (TàD) en Île-de-France, nous avons mené une recherche centrée sur l’utilisateur combinant entretiens semi-directifs, observations et sondages en ligne. L’objectif était de mettre en évidence les <strong>points de friction</strong> et d’identifier des pistes d’amélioration pour le parcours de réservation.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Méthodologie & Participants</h3>
            <div class="space-y-4">
                <p class="font-semibold text-gray-800">Participants :</p>
                <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li><strong>8 utilisateurs</strong> représentant différents profils : 2 étudiants, 2 actifs avec horaires irréguliers, 2 seniors peu familiers du numérique, 2 résidents de zones périphériques.</li>
                </ul>
                <p class="font-semibold text-gray-800">Méthodes :</p>
                <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li><strong>Entretiens semi-directifs (45 min) :</strong> Questions ouvertes sur les habitudes de déplacement, difficultés et attentes.</li>
                    <li><strong>Observation / Contextual Inquiry :</strong> Suivi de 3 participants lors d’une recherche de transport ou d’un trajet TàD pour observer les comportements réels.</li>
                    <li><strong>Sondage en ligne (25 réponses simulées) :</strong> Collecte de données quantitatives sur la fréquence d’utilisation et la perception de la simplicité du service.</li>
                </ul>
            </div>
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Focus Méthodes Qualitatives :</h3>
            <p>Des entretiens semi-directifs ont été menés pour comprendre les attentes, ainsi que des sessions de shadowing pour observer les comportements réels (ex : l'hésitation sur la saisie des adresses) qui n'auraient pas été mentionnés en entretien.</p>
                        <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Synthèse de la Recherche & Enseignements</h3>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Points récurrents observés :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Difficulté à localiser sa zone :</strong> Les utilisateurs ne comprennent pas toujours la notion de zone de service TàD. Les résidents périphériques se sentent parfois perdus.</li>
                <li><strong>Méconnaissance des arrêts :</strong> Les utilisateurs expriment la crainte d’entrer une adresse non desservie, entraînant frustration et hésitation.</li>
                <li><strong>Complexité pour les novices :</strong> Certains seniors ont du mal à naviguer dans l’interface et à comprendre l’ordre des étapes.</li>
                <li><strong>Recherche manuelle fastidieuse :</strong> Les utilisateurs aimeraient que la géolocalisation et des suggestions automatiques réduisent le temps de saisie.</li>
                <li><strong>Besoin de feedback clair :</strong> Lorsqu’aucun trajet n’est disponible, le message générique ne permet pas de comprendre pourquoi ni d’explorer des alternatives.</li>
            </ul>

            <h4 class="text-xl font-bold text-gray-900 mt-8 mb-3">Citations & Verbatims représentatifs :</h4>
            <div class="space-y-3 italic text-gray-600 border-l-4 border-red-300 pl-4">
                <p>« Je ne sais jamais si mon arrêt est dans la bonne zone, j’ai peur de me tromper. » – <em>Étudiant</em></p>
                <p>« Quand il n’y a pas de bus, je ne sais pas quoi faire, ça m’énerve. » – <em>Actif</em></p>
                <p>« L’interface est un peu compliquée, je préfère demander à mon petit-fils de m’aider. » – <em>Senior</em></p>
                <p>« J’aimerais pouvoir juste cliquer sur ma position et que l’appli propose le trajet. » – <em>Résident périphérique</em></p>
            </div>

            <h4 class="text-xl font-bold text-gray-900 mt-8 mb-3">Résultats Clés du Sondage (Simulés) :</h4>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-red-50">
                        <tr>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-red-800">Question</th>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-red-800">Réponse majoritaire</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 text-sm">
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Fréquence d’utilisation du TàD</td>
                            <td class="px-4 py-2 text-gray-600">40 % occasionnellement</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Confort avec les outils numériques</td>
                            <td class="px-4 py-2 text-gray-600">44 % moyen</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Importance de la géolocalisation</td>
                            <td class="px-4 py-2 text-gray-600">72 % très importante</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Frustration principale</td>
                            <td class="px-4 py-2 text-gray-600">Choix de la zone (56 %)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">Cartes d'Empathie (Empathy Maps) 🧭</h3>
            <p>Pour formaliser les besoins et frustrations des utilisateurs, nous avons construit des <strong>Empathy Maps</strong> pour chaque profil type, servant de référence pour la définition des problèmes (étape suivante).</p>
            
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil 1 – Ethan, Étudiant Urbain (22 ans)</h4>
                    <img src="carte-d'empathie-ethan.png" alt="Empathy Map pour Ethan, étudiant urbain" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100" onerror="this.onerror=null; this.src='https://placehold.co/300x400/7f1d1d/ffffff?text=Empathy+Map+Ethan';" />
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil 2 – Jean-Pierre, Senior Novice (68 ans)</h4>
                    <img src="carte-d'empathie-jean-pierre.png" alt="Empathy Map pour Jean-Pierre, senior peu familier du numérique" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100" onerror="this.onerror=null; this.src='https://placehold.co/300x400/7f1d1d/ffffff?text=Empathy+Map+Jean-Pierre';" />
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil 3 – Charline, Active Flexible (40 ans)</h4>
                    <img src="carte-d'empathie-charline.png" alt="Empathy Map pour Charline, active avec horaires irréguliers" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100" onerror="this.onerror=null; this.src='https://placehold.co/300x400/7f1d1d/ffffff?text=Empathy+Map+Charline';" />
                </div>
            </div>

            <h4 class="text-xl font-bold text-gray-900 mt-8 mb-3">Insights Généraux :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>La <strong>géolocalisation</strong> et les <strong>suggestions automatiques</strong> sont essentielles pour réduire les frictions de saisie.</li>
                <li>Les utilisateurs novices ont besoin d’un <strong>accompagnement progressif</strong> (tutoriel ou guides).</li>
                <li>Les messages d’erreur doivent être <strong>clairs, explicatifs</strong> et proposer des alternatives pour ne pas décourager l’utilisateur.</li>
            </ul>
        `,
        definition: `
            <p>La <strong>Définition / Synthèse (TàD IDFM)</strong> est l'étape où nous avons transformé les données brutes des entretiens et sondages en informations exploitables.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Cartographie du Parcours Utilisateur (User Journey Map)</h3>
            <p>Nous avons créé une cartographie du parcours utilisateur actuel pour identifier précisément les moments de douleur (pain points) et les opportunités d'amélioration. Les points critiques étaient :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Découverte du service :</strong> Confusion sur les zones desservies.</li>
                <li><strong>Saisie de l'adresse :</strong> Le système de recherche d'arrêt est peu performant.</li>
                <li><strong>Absence de trajet :</strong> Le feedback en cas d'indisponibilité n'est pas utile.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Problème à résoudre (HMW - How Might We)</h3>
            <p>Sur la base de cette analyse, le principal défi défini était : <strong>Comment pourrions-nous simplifier la saisie des adresses et la sélection des zones de TàD pour les utilisateurs novices, tout en garantissant un feedback clair en cas d'échec de réservation ?</strong></p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Personas Clés</h3>
            <p>Les trois personas créés (Ethan, Jean-Pierre, Charline) ont été finalisés et utilisés pour valider toutes les décisions de conception ultérieures. (Voir l'étape d'empathie pour les profils initiaux).</p>
        `,
        ideation: `
            <p>La phase d'<strong>Idéation (TàD IDFM)</strong> a été un atelier collaboratif de 2 jours mobilisant l'équipe de design, un développeur et un représentant client (Product Owner). L'objectif était de générer un maximum de solutions créatives pour répondre aux besoins prioritaires définis.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Techniques utilisées :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Brainstorming :</strong> Session libre pour générer des idées sur la refonte du tableau de bord.</li>
                <li><strong>Crazy 8s :</strong> Sketching rapide de 8 variations de l'écran de réservation en 8 minutes. </li>
                <li><strong>Dot Voting :</strong> Utilisation de pastilles pour voter collectivement sur les idées les plus prometteuses et les plus réalisables techniquement.</li>
            </ul>
            
            <p class="mt-4">Cette phase a permis de transformer des concepts abstraits en esquisses tangibles, jetant les bases des futurs wireframes.</p>
        `,
        prototypage: `
            <p>La phase de <strong>Prototypage (TàD IDFM)</strong> a englobé la conception Basse Fidélité (wireframes) et Haute Fidélité (maquettes UI) dans Figma. L'objectif était de matérialiser les idées validées lors de l'Idéation.
            Nous avons également formalisé les <strong>fonctionnalités prioritaires</strong>:</p>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Simplification du formulaire de réservation (réduction des champs obligatoires).</li>
                <li>Visualisation claire de la position du véhicule en temps réel sur une carte.</li>
                <li>Possibilité d'enregistrer des adresses favorites pour une réservation rapide. (Fonctionnalité Must-Have)</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Haute Fidélité (Maquettes UI)</h3>
            <p>Les wireframes ont été habillés en utilisant la charte graphique existante d'IDFM. Les efforts ont porté sur :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Accessibilité :</strong> Assurer un contraste suffisant et des tailles de texte adaptées, notamment pour la population senior.</li>
                <li><strong>Clarté des données :</strong> Utilisation de cartes et d'icônes claires pour représenter les arrêts et la position du véhicule en temps réel.</li>
                <li><strong>Feedback :</strong> Conception de messages d'erreur et de succès non intrusifs et explicatifs.</li>
            </ul>
        `,
        tests: `
            <p>La phase finale a été le <strong>Test Utilisateur & Itération (TàD IDFM)</strong>, mené avec 5 utilisateurs n'ayant pas participé à la phase de recherche initiale, afin de mesurer l'efficacité de nos solutions.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Métrique et Tâches :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Tâche 1 :</strong> Réserver un trajet aller-retour pour la semaine prochaine (critique : succès).</li>
                <li><strong>Tâche 2 :</strong> Modifier l'heure de départ d'une réservation existante (critique : efficacité).</li>
                <li><strong>Tâche 3 :</strong> Ajouter une adresse à ses favoris (critique : satisfaction).</li>
            </ul>
            
            <p class="font-semibold mt-4">Résultats Clés :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Le **taux de réussite de la tâche de réservation** est passé de 65% (ancienne interface observée) à **95%** (nouvelle interface testée).</li>
                <li>**Point de friction :** Le processus de modification a révélé une confusion sur l'emplacement du bouton d'édition, menant à une itération.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Itération</h3>
            <p>Suite aux tests, le bouton de modification a été déplacé du menu contextuel vers un bouton d'action principal et son label a été clarifié. Cette amélioration a permis de remonter le taux de réussite de la tâche de modification de 70% à 90%.</p>
        `
    },
    
    // --- Projet 2 : Le Médoc à la Carte (Desktop/Mobile) ---
    "2": {
        analyse: `
            <p>La phase d'<strong>Empathie / Analyse Utilisateur (Le Médoc à la Carte)</strong> a été axée sur le tourisme œnologique en Gironde. Nous avons mené une analyse concurrentielle des plateformes de réservation de visites de châteaux et des sites de guides touristiques pour identifier les lacunes en matière d'expérience utilisateur dans ce secteur.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Méthodes de Recherche :</h3>
            <p>Des entretiens ont été menés auprès de deux groupes distincts : **5 propriétaires/responsables de châteaux** pour comprendre leurs contraintes de gestion des visites, et **10 touristes** (locaux et internationaux) pour évaluer leurs habitudes de planification de voyage.</p>
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Problématique :</h3>
            <p>Comment créer une expérience de découverte fluide qui équilibre l'information sur les domaines viticoles et la simplicité de réservation d'itinéraires personnalisés ?</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Points Clés Révélés :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Les touristes internationaux trouvent difficile de consolider les informations sur les visites en français.</li>
                <li>Les propriétaires de châteaux ont besoin d'un outil de gestion des réservations simple et non intrusif.</li>
                <li>L'importance de la géolocalisation pour créer des itinéraires optimisés.</li>
            </ul>
        `,
        definition: `
             <p>Le travail de <strong>Définition / Synthèse (Médoc)</strong> a abouti à la création de deux Personas : **Marc, le Connaisseur** (recherche des crus classés et une expérience approfondie) et **Léa, l'Organisatrice** (recherche un itinéraire simple et rapide pour toute sa famille).</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Scénario de Léa :</h3>
            <p>Léa doit pouvoir sélectionner trois châteaux différents sur une journée, voir un itinéraire cartographié entre eux, et les réserver en moins de 10 minutes. Le scénario a mis l'accent sur la facilité de tri et de filtrage par "familial" ou "rapide".</p>
        `,
        ideation: `
            <p>L'<strong>Idéation / Conceptualisation (Médoc)</strong> a impliqué des workshops de sketchs pour concevoir le module de carte interactive. L'enjeu était de visualiser les domaines sans surcharger l'interface.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Solutions Innovantes :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Utilisation d'une carte vectorielle stylisée pour mettre en évidence les zones AOC.</li>
                <li>Développement d'une "Carte de Vœux" (Wishlist) pour les châteaux à visiter plus tard.</li>
            </ul>
        `,
        prototypage: `
            <p>La phase de <strong>Prototypage (Médoc)</strong> a mis l'accent sur le responsive design (Mobile First) pour s'assurer que la carte interactive restait utilisable sur petit écran. Le maquettage Haute Fidélité a utilisé une palette de couleurs inspirée des teintes du vin (bordeaux, ocre, doré) pour une immersion visuelle.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Fonctionnalités Clés Implémentées :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Filtre par type de vin/AOC.</li>
                <li>Création et sauvegarde d'un itinéraire multi-étapes via un "constructeur d'itinéraire" dynamique.</li>
                <li>Interface multilingue (Français/Anglais).</li>
            </ul>
        `,
        tests: `
            <p>Les <strong>Tests Utilisateurs & Itération (Médoc)</strong> ont été effectués sur le prototype Figma final. La métrique principale était le temps nécessaire pour réserver un itinéraire personnalisé de 3 châteaux.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Résultats & Itération :</h3>
            <p>Le temps de réalisation de la tâche a été réduit de 40% par rapport aux sites concurrents. Un point de friction a été identifié : les utilisateurs n'utilisaient pas la fonctionnalité de sauvegarde des itinéraires, pensant qu'elle ne servait que pour la réservation finale. L'itération a consisté à renommer le bouton et ajouter une infobulle explicative.</p>
        `
    },
    
    // --- Projet 3 : Allociné (Desktop) ---
    "3": {
        analyse: `
            <p>L'<strong>Analyse (Allociné)</strong> s'est concentrée sur la plateforme Desktop d'Allociné, ciblant l'expérience de découverte de films. L'analyse heuristique a montré une saturation de l'information et un manque de personnalisation flagrant des recommandations.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Méthodes de Recherche & Objectifs :</h3>
            <p>Des entretiens et un "Card Sorting" ont été utilisés pour comprendre comment les utilisateurs (cinéphiles occasionnels et réguliers) regroupaient naturellement les films (par genre, réalisateur, humeur, etc.). Les objectifs étaient :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Améliorer la pertinence des suggestions de films.</li>
                <li>Simplifier l'interface de navigation pour les utilisateurs non habitués.</li>
                <li>Mettre en valeur les fonctionnalités sociales (avis, notation).</li>
            </ul>
            <p class="mt-4">Les utilisateurs valorisent les recommandations basées sur l'humeur ou les critères sociaux (ce que leurs amis regardent) davantage que les simples catégories de genre classiques.</p>
        `,
        definition: `
             <p>Le <strong>Définition / Synthèse (Allociné)</strong> principal créé est **Thomas, le Cinéphile Social**, qui cherche un film à regarder ce soir avec des amis et se fie aux notes critiques et aux tendances sur les plateformes de streaming.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Besoin Clé :</h3>
            <p>Une section "Tendance chez vos amis" ou "Recommandé pour votre humeur" pour faciliter la prise de décision rapide.</p>
        `,
        ideation: `
            <p>L'<strong>Idéation / Conceptualisation (Allociné)</strong> a généré plusieurs concepts pour l'affichage de la fiche film. Nous avons utilisé le concept de "Design Sprint" pour prototyper rapidement une nouvelle page d'accueil axée sur la découverte.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Idées Retenues :</h3>
            <p>Utiliser des cartes de films grand format avec des bandes-annonces en autoplay (muet) pour un impact visuel maximal sur la page d'accueil.</p>
        `,
        prototypage: `
            <p>La phase de <strong>Prototypage (Allociné)</strong> a revu l'architecture de l'information pour désencombrer la page d'accueil. L'enjeu était de réduire le nombre d'éléments cliquables sans réduire la richesse du catalogue. Le maquettage Haute Fidélité a privilégié un thème sombre pour mettre en valeur les visuels des films (posters).</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Fonctionnalités Clés Implémentées :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Système de notation plus clair (fusion des notes presse et spectateurs).</li>
                <li>Module de recommandation par "Humeur" ou "Activité Récente".</li>
                <li>Espace personnel des listes de films à voir (Watchlist) plus accessible.</li>
            </ul>
        `,
        tests: `
            <p>Les <strong>Tests Utilisateurs & Itération (Allociné)</strong> ont comparé l'ancienne et la nouvelle interface. La tâche clé était de "trouver un film de science-fiction récent et bien noté".</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Bilan & Itération :</h3>
            <p>Le taux de succès de la tâche a augmenté de 25% grâce à l'amélioration du filtre de recherche et à la clarté du nouveau système de notation. Une itération a été nécessaire sur la couleur des boutons d'action (Ajouter à ma liste) pour un meilleur contraste.</p>
        `
    }
};


// --- Fonctions de Navigation ---

function getActivePage() {
    return document.querySelector('.page-content.is-visible');
}

/**
 * Affiche une page avec une transition de fondu et ajuste la hauteur du conteneur.
 * @param {string} pageId - L'ID de la page à afficher (work, about, contact, project-detail, process-detail).
 * @param {string} [projectId=null] - L'ID du projet sélectionné.
 * @param {string} [projectTitle=null] - Le titre du projet sélectionné.
 * @param {string} [processId=null] - L'ID de l'étape du processus sélectionné.
 * @param {string} [processTitle=null] - Le titre de l'étape du processus sélectionné.
 */
function showPage(pageId, projectId = null, projectTitle = null, processId = null, processTitle = null) {
    const activePage = getActivePage();
    const nextPage = document.querySelector(`[data-page-content="${pageId}"]`);
    const TRANSITION_DURATION_MS = TRANSITION_DURATION;

    // S'assurer que la modale de zoom est fermée lors du changement de page
    if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }


    if (!nextPage) {
        console.error(`Page ID '${pageId}' non trouvée.`);
        return;
    }

    // Vérification de non-rechargement si la page demandée est déjà affichée
    if (activePage === nextPage) {
        if (pageId === 'work' && (currentProject.id !== null || activePage.id === 'page-project-detail' || activePage.id === 'page-process-detail')) {
            currentProject.id = null;
            currentProject.title = null;
        } else {
            return;
        }
    }


    // --- MISE À JOUR IMMÉDIATE DU LIEN DE NAVIGATION ---
    let activeNavPage = pageId;
    if (pageId === 'project-detail' || pageId === 'process-detail') {
        activeNavPage = 'work';
    } else if (activePage && activePage.dataset.pageContent === 'project-detail' && pageId === 'work') {
        activeNavPage = 'work';
    }

    navLinks.forEach(link => {
        link.classList.remove('is-active', 'text-gray-900', 'text-gray-600');
        link.classList.add('text-gray-600');
        if (link.dataset.page === activeNavPage) {
            link.classList.add('is-active', 'text-gray-900');
        }
    });

    // --- ÉTAPE 1: PRÉPARATION & DÉBUT DE TRANSITION DE SORTIE (Fade-out & Hauteur initiale) ---
    if (activePage && activePage !== nextPage) {
        // Définir la hauteur actuelle pour commencer la transition de taille
        const initialHeight = activePage.offsetHeight;
        contentContainer.style.minHeight = `${initialHeight}px`;

        activePage.classList.remove('is-visible');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Attendre la fin du fondu-out (TRANSITION_DURATION_MS) avant de masquer l'ancienne page
        setTimeout(startContentUpdate, TRANSITION_DURATION_MS);

    } else {
        // Pas de page active, démarrer directement
        window.scrollTo({ top: 0, behavior: 'smooth' });
        startContentUpdate();
    }

    // --- ÉTAPE 2: GESTION DU CONTENU ET CALCUL DE LA NOUVELLE HAUTEUR ---
    function startContentUpdate() {
        if (activePage && activePage !== nextPage) {
            activePage.classList.add('hidden');
        }

        // 2.1 Mettre à jour le contenu dynamique (Même logique que l'original)
        if (pageId === 'process-detail' && processId && processTitle) {
            if (!currentProject.title || !currentProject.id) {
                showPage('work');
                return;
            }
            const projectContent = projectProcessDetails[currentProject.id];
            const content = (projectContent && projectContent[processId]) ? projectContent[processId] :
                "<p>Contenu détaillé non disponible pour cette étape ou ce projet.</p>";
            processDetailTitle.textContent = processTitle;
            currentProjectNameSpan.textContent = currentProject.title;
            processContentDiv.innerHTML = content;
            
            setupImageZoom();
        }
        
        if (pageId === 'project-detail' && projectTitle && projectId) {
            currentProject.id = projectId;
            currentProject.title = projectTitle;
            projectDetailTitle.textContent = projectTitle;
            if (figmaLinkButton) {
                figmaLinkButton.href = `https://www.figma.com/file/project-${projectId}-prototype`;
            }

            // ********** LOGIQUE POUR L'IMAGE DU PROJET **********
            if (projectVisual) {
                if (projectId === '1') {
                    // Afficher l'image pour le projet IDFM (ID 1)
                    projectVisual.classList.remove('hidden');
                } else {
                    // Masquer l'image pour les autres projets
                    projectVisual.classList.add('hidden');
                }
            }
            // ************************************************************
        }

        // Si on quitte la page détail, on cache l'image
        if (pageId !== 'project-detail' && projectVisual) {
             projectVisual.classList.add('hidden');
        }
        
        // 2.2 Préparer la nouvelle page, la rendre visible (mais toujours opacité 0) pour calculer sa hauteur
        nextPage.classList.remove('hidden');
        nextPage.classList.remove('is-visible'); // S'assurer qu'elle n'est pas visible

        // Lire la hauteur de la nouvelle page (elle est maintenant dans le DOM et son contenu a été mis à jour)
        const targetHeight = nextPage.offsetHeight;

        // 2.3 Déclencher l'animation de hauteur du conteneur
        // Cela lance la transition CSS de 'min-height'
        contentContainer.style.minHeight = `${targetHeight}px`;

        // 2.4 Déclencher le fondu-in après un petit délai (microtask delay) pour permettre au navigateur de commencer l'animation de hauteur
        setTimeout(() => {
            nextPage.classList.add('is-visible');
            
            // --- ÉTAPE 3: FIN DE TRANSITION ET NETTOYAGE (Hauteur) ---
            // Attendre la fin de la transition d'opacité ET de hauteur pour enlever la min-height fixe
            setTimeout(() => {
                // S'assurer que la min-height est remise à 'auto' une fois l'animation terminée.
                contentContainer.style.minHeight = 'auto'; 
            }, TRANSITION_DURATION_MS); 
        }, 10);
    }
}

/**
 * Configure les gestionnaires d'événements pour le zoom d'image.
 * Cible toutes les balises <img> dans #process-content et les rend cliquables.
 */
function setupImageZoom() {
    // S'assurer de retirer les anciens gestionnaires d'événements avant d'en ajouter de nouveaux
    const oldImages = processContentDiv.querySelectorAll('img');
    oldImages.forEach(img => {
        img.onclick = null;
        img.classList.remove('cursor-pointer');
    });

    const images = processContentDiv.querySelectorAll('img');

    // 1. Ajouter le curseur "pointeur" aux images (pour l'UX)
    images.forEach(img => {
        img.classList.add('cursor-pointer');
        
        // 2. Ajouter l'écouteur de clic
        img.onclick = function() {
            modal.classList.remove('hidden');
            modal.classList.add('flex'); // Utiliser 'flex' pour centrer le contenu
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            
            // Empêcher le défilement du body lorsque la modale est ouverte
            document.body.style.overflow = 'hidden';
        }
    });
}

// --- Event Listeners pour la Modale ---

// 1. Fermer la modale en cliquant sur le bouton X
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Rétablir le défilement
    });
}

// 2. Fermer la modale en cliquant en dehors de l'image (sur l'arrière-plan)
if (modal) {
    modal.addEventListener('click', (e) => {
        // Vérifie si le clic a eu lieu sur l'arrière-plan de la modale elle-même (et non sur l'image)
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto'; // Rétablir le défilement
        }
    });
}


// --- Event Listeners Généraux ---

// 1. Navigation principale
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;
        showPage(pageId);
    });
});

// 2. Lien de retour à l'accueil/Projets (Titre principal)
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(homeLink.dataset.page);
});

// 3. Clic sur une carte de projet (stocke le projet sélectionné)
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.projectId;
        const projectTitle = card.dataset.projectTitle;
        showPage('project-detail', projectId, projectTitle);
    });
});

// 4. Bouton de retour dans la page détail du projet (revient à 'work')
backToWorkButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('work');
});

// 5. Clic sur une carte du PROCESSUS (mène à 'process-detail')
processCards.forEach(card => {
    card.addEventListener('click', () => {
        const processId = card.dataset.processId;
        const processTitle = card.dataset.processTitle;
        showPage('process-detail', currentProject.id, currentProject.title, processId, processTitle);
    });
});

// 6. Bouton de retour dans la page détail du processus (revient à 'project-detail')
backToProjectDetailButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('project-detail', currentProject.id, currentProject.title);
});


// 7. Initialisation
document.addEventListener('DOMContentLoaded', () => {
    showPage('work');
});
