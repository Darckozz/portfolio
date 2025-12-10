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


// --- Données des Études de Cas (Corrigées et mises à jour) ---
const projectProcessDetails = {
    // --- Projet 1 : Transport à la Demande IDFM (Desktop) ---
    "1": {
        analyse: `
            <p>Pour mieux comprendre les <strong>besoins, motivations et difficultés</strong> des utilisateurs du Transport à la Demande (TàD) en Île-de-France, nous avons mené une recherche centrée sur l’utilisateur combinant entretiens semi-directifs, observations et sondages en ligne. L’objectif était de mettre en évidence les <strong>points de friction</strong> et d’identifier des pistes d’amélioration pour le parcours de réservation.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">🔍 Méthodologie & Participants</h3>
            <div class="space-y-4 p-4 border rounded-xl bg-gray-50">
                <p class="font-semibold text-gray-800">Participants :</p>
                <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li><strong>8 utilisateurs</strong> représentant différents profils : 2 étudiants, 2 actifs avec horaires irréguliers, 2 seniors peu familiers du numérique, 2 résidents de zones périphériques.</li>
                    <li><em>Ces profils ont servi de base à la création des 3 Personas (Ethan, Jean-Pierre, Charline) pour synthétiser les besoins et les comportements.</em></li>
                </ul>
                <p class="font-semibold text-gray-800">Méthodes de Recherche :</p>
                <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li><strong>Entretiens semi-directifs (45 min) :</strong> Questions ouvertes sur les habitudes de déplacement, difficultés et attentes.</li>
                    <li><strong>Observation (Contextual Inquiry) :</strong> Suivi de 3 participants lors d’une recherche de transport ou d’un trajet TàD pour observer les comportements réels.</li>
                    <li><strong>Sondage en ligne (25 réponses simulées) :</strong> Collecte de données quantitatives sur la fréquence d’utilisation et la perception de la simplicité du service.</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">💡 Synthèse de la Recherche & Enseignements Clés</h3>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Principaux Points de Friction :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Difficulté de la notion de zone (Priorité) :</strong> Les utilisateurs ne comprennent pas toujours la zone de service TàD (56% de frustration principale, voir tableau).</li>
                <li><strong>Méconnaissance des arrêts :</strong> Crainte d’entrer une adresse non desservie, source de frustration et d’hésitation.</li>
                <li><strong>Complexité pour les novices (Seniors) :</strong> Difficulté à naviguer dans l’interface et à comprendre la séquence des étapes de réservation TàD.</li>
                <li><strong>Recherche manuelle fastidieuse :</strong> Forte demande pour la <strong>géolocalisation</strong> et les suggestions automatiques (72% jugée très importante).</li>
                <li><strong>Manque de feedback clair :</strong> Messages d'erreur génériques ("Aucun service disponible") qui n'expliquent pas le problème et ne proposent pas d'alternatives.</li>
            </ul>

            <h4 class="text-xl font-bold text-gray-900 mt-8 mb-3">Verbatims Utilisateurs :</h4>
            <div class="space-y-3 italic text-gray-600 border-l-4 border-red-300 pl-4 bg-red-50 p-4 rounded-lg">
                <p>« Je ne sais jamais si mon arrêt est dans la bonne zone, j’ai peur de me tromper. » – <em>Étudiant</em></p>
                <p>« Quand il n’y a pas de bus, je ne sais pas quoi faire, ça m’énerve. » – <em>Actif</em></p>
                <p>« L’interface est un peu compliquée, je préfère demander à mon petit-fils de m’aider. » – <em>Senior</em></p>
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
                            <td class="px-4 py-2 text-gray-600"><strong>72 % très importante</strong></td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Frustration principale</td>
                            <td class="px-4 py-2 text-gray-600"><strong>Choix de la zone (56 %)</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">Cartes d'Empathie (Empathy Maps) 🧭</h3>
            <p>Ces cartes formalisent les émotions, pensées, actions et paroles des utilisateurs pour définir leurs besoins réels.</p>
            
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil Ethan Étudiant (22 ans)</h4>
                    <img src="empathie-ethan.png" alt="Empathy Map pour Ethan, étudiant urbain" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x400/7f1d1d/ffffff?text=Empathy+Map+Ethan';" />
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil Jean-Pierre Senior (68 ans)</h4>
                    <img src="empathie-jean-pierre.png" alt="Empathy Map pour Jean-Pierre, senior peu familier du numérique" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x400/7f1d1d/ffffff?text=Empathy+Map+Jean-Pierre';" />
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil Charline Active (40 ans)</h4>
                    <img src="empathie-charline.png" alt="Empathy Map pour Charline, active avec horaires irréguliers" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x400/7f1d1d/ffffff?text=Empathy+Map+Charline';" />
                </div>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mt-8 mb-3">Synthèse des Insights (Vers la Définition) :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>La conception doit se concentrer sur l'<strong>accompagnement visuel</strong> et l'<strong>automatisation</strong> des tâches répétitives.</li>
                <li>Le besoin d'un <strong>guide contextuel</strong> est fort pour rassurer les utilisateurs les moins à l'aise (Jean-Pierre).</li>
                <li>Chaque point de blocage doit être géré par un <strong>feedback clair et une alternative</strong> pour éviter l'abandon.</li>
            </ul>
        `,
        definition: `
            <p>À partir des observations, interviews et retours utilisateurs recueillis, la phase de synthèse a permis de transformer les données brutes en problèmes clairement définis, d’identifier les profils utilisateurs majeurs et de formuler un problème central à résoudre.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">🎯 Personas & besoins prioritaires</h3>
            <p>Trois profils principaux émergent de la recherche :</p>
            
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil Ethan (Étudiant)</h4>
                    <img src="persona-ethan.png" alt="Photo de profil Persona Ethan" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/4c1d95/ffffff?text=Persona+Ethan';" />
                    <ul class="list-disc list-inside text-sm mt-4 text-left mx-auto max-w-fit space-y-1 text-gray-600">
                        <li><strong>Problématique :</strong> Temps perdu avec les étapes manuelles et l'incertitude sur la desserte.</li>
                        <li><strong>Besoin clé :</strong> Rapidité, Géolocalisation automatique, Fluidité comme les apps de VTC.</li>
                    </ul>
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil Jean-Pierre (Senior)</h4>
                    <img src="persona-jean-pierre.png" alt="Photo de profil Persona Jean-Pierre" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/9a3412/ffffff?text=Persona+Jean-Pierre';" />
                    <ul class="list-disc list-inside text-sm mt-4 text-left mx-auto max-w-fit space-y-1 text-gray-600">
                        <li><strong>Problématique :</strong> Compréhension difficile du système de zones, crainte de faire une erreur.</li>
                        <li><strong>Besoin clé :</strong> Clarté, Accompagnement (guide ou tutoriel), Messages rassurants.</li>
                    </ul>
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Profil Charline (Active)</h4>
                    <img src="persona-charline.png" alt="Photo de profil Persona Charline" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/15803d/ffffff?text=Persona+Charline';" />
                    <ul class="list-disc list-inside text-sm mt-4 text-left mx-auto max-w-fit space-y-1 text-gray-600">
                        <li><strong>Problématique :</strong> Manque d'alternatives et d'explications en cas de trajet impossible.</li>
                        <li><strong>Besoin clé :</strong> Fiabilité, Processus rapide, Informations claires sur la disponibilité du service.</li>
                    </ul>
                </div>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🧩 Problèmes clés identifiés</h3>
            <p>L’analyse des retours convergents fait émerger 4 axes d’insatisfaction majeurs, qui constituent le socle de notre intervention :</p>
            <ol class="list-decimal list-inside space-y-3 ml-4">
                <li><strong>Difficulté à comprendre la notion de zone</strong>
                    <p class="text-gray-600 text-sm pl-4">Les utilisateurs ne savent pas toujours dans quelle zone se trouvent leurs arrêts. <em>Conséquences : hésitation, abandon dès la page d’accueil.</em></p>
                </li>
                <li><strong>Saisie trop manuelle et manque d’assistance</strong>
                    <p class="text-gray-600 text-sm pl-4">Le service nécessite de taper des arrêts ou des adresses sans aide. <em>Absence de suggestions intelligentes ou géolocalisées.</em></p>
                </li>
                <li><strong>Manque de feedback explicatif</strong>
                    <p class="text-gray-600 text-sm pl-4">En cas d’erreur ou de trajet indisponible, les messages sont génériques. <em>Les utilisateurs ne comprennent pas pourquoi le service ne propose rien.</em></p>
                </li>
                <li><strong>Difficulté des novices à suivre le parcours</strong>
                    <p class="text-gray-600 text-sm pl-4">Les étapes d’un TàD sont spécifiques et non familières. <em>Sans guide ou tutoriel, les utilisateurs ont l’impression de “faire mal”.</em></p>
                </li>
            </ol>
            
            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">📝 User Stories (HMW déclinés)</h3>
            <p>Ces courtes phrases, écrites du point de vue de l'utilisateur, aident à définir et prioriser les fonctionnalités de la solution :</p>
            <ul class="list-disc list-inside space-y-2 ml-4 italic text-gray-700">
                <li>En tant qu'<strong>étudiant (Ethan)</strong>, je veux **utiliser ma position actuelle comme départ**, afin de **réduire la saisie manuelle** et gagner du temps.</li>
                <li>En tant que **senior (Jean-Pierre)**, je veux **que la carte m'affiche clairement les arrêts de ma zone**, afin de **ne pas me tromper d'adresse** lors de ma réservation.</li>
                <li>En tant qu'**active (Charline)**, je veux **un message qui m'explique clairement pourquoi mon trajet n'est pas disponible**, afin de **savoir immédiatement quelle alternative choisir**.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">💡 Énoncés d'Hypothèse (Testables)</h3>
            <p>Ces énoncés formalisent les convictions de l'équipe de conception qui seront mesurées lors des tests :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Hypothèse "Nous Croyons" :</strong> Nous pensons qu'une **expérience de réservation guidée** et intégrant la **géolocalisation** augmentera le **taux de succès** des recherches de trajets de <strong>plus de 20%</strong>.</li>
                <li><strong>Hypothèse "Si/Alors" :</strong> Si nous affichons un **code visuel clair** pour les arrêts hors-service, alors **l'hésitation des utilisateurs novices** concernant la zone diminuera de **30%**.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🗺️ Parcours Utilisateur (User Journey Maps)</h3>
            <p>Trois parcours clés ont été modélisés pour visualiser l'expérience actuelle (avant la conception) et identifier les points de douleur spécifiques à chaque Persona (voir les images cliquables ci-dessous).</p>
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Parcours Ethan</h4>
                    <img src="parcours-ethan.png" alt="User Journey Map pour la Réservation Rapide" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/4c1d95/ffffff?text=Journey+1';" />
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Parcours Jean-Pierre</h4>
                    <img src="parcours-jean-pierre.png" alt="User Journey Map pour le Traitement d'Erreur" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/9a3412/ffffff?text=Journey+2';" />
                </div>
                <div class="text-center p-4 border rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Parcours Charline</h4>
                    <img src="parcours-charline.png" alt="User Journey Map pour la Consultation d'Information" class="w-full h-auto object-cover rounded-lg mt-3 border border-gray-100 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/15803d/ffffff?text=Journey+3';" />
                </div>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🧠 Insight UX majeur</h3>
            <div class="bg-red-100 border-l-8 border-red-500 p-6 rounded-lg my-4 shadow-inner">
                <p class="text-xl font-bold text-red-800">
                    Les utilisateurs ne souhaitent pas <strong>“chercher un trajet”</strong>, ils souhaitent <strong>“être guidés vers une solution disponible”</strong>.
                </p>
                <p class="text-base text-gray-700 mt-2">
                    La friction vient principalement du manque d’accompagnement, d’aides visuelles et d’automatisation.
                </p>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">🔥 Problème central reformulé</h3>
            <p class="italic text-gray-700 border-l-4 border-red-300 pl-4">Comment simplifier la recherche de trajet et réduire les erreurs de saisie en guidant l’utilisateur — même novice — vers un trajet disponible dès son arrivée sur la plateforme ?</p>
            
            <p class="font-semibold mt-4">Version concise façon “How Might We” (HMW) :</p>
            <blockquote class="text-xl font-bold text-red-800 border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-lg my-4">
                HMW : Comment pourrions-nous aider l’utilisateur à trouver rapidement un trajet valide, sans connaissance préalable des zones ni des arrêts ?
            </blockquote>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">🎯 Objectif de conception</h3>
            <p>Créer un parcours de réservation fluide, assisté et compréhensible, intégrant les 5 piliers suivants :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Automatisation :</strong> Géolocalisation automatique.</li>
                <li><strong>Assistance à la saisie :</strong> Suggestions intelligentes d’arrêts valides.</li>
                <li><strong>Gestion de l'erreur :</strong> Feedback clair et actionnable.</li>
                <li><strong>Accessibilité :</strong> Accompagnement (guide) pour les novices.</li>
                <li><strong>Clarté :</strong> Visualisation plus intuitive des zones et arrêts.</li>
            </ul>
            <p class="italic text-sm mt-4 text-gray-500">Cette problématique guidera les phases suivantes : idéation, prototypage et tests.</p>
        `,
        ideation: `
            <p>Cette phase vise à transformer le problème central en solutions concrètes en utilisant les enseignements tirés de la recherche utilisateur et de l'audit concurrentiel.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">✍️ Énoncés d'Objectif (Focus sur les Personas)</h3>
            <p>Pour garantir que les idées restent centrées sur l'humain, les besoins ont été reformulés :</p>
            <ul class="list-disc list-inside space-y-2 ml-4 italic text-gray-700">
                <li><strong>Jean-Pierre</strong> est un senior peu familier du numérique qui a besoin de **parcours très simples et assistés visuellement** parce que l'interface actuelle est source de confusion et d'hésitation.</li>
                <li><strong>Ethan</strong> est un étudiant pressé qui a besoin d'une **recherche rapide et automatisée (géolocalisation)** parce que le processus manuel de sélection de zone et de saisie d'arrêts est fastidieux et fait perdre du temps.</li>
                <li><strong>Charline</strong> est une active avec des horaires irréguliers qui a besoin de **messages clairs et de suggestions alternatives** en cas d'indisponibilité parce que les messages génériques l'empêchent de comprendre la cause de l'échec et de planifier un plan B.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🔹 Audit Concurrentiel et Opportunités</h3>
            <p>L'étude des concurrents (Citymapper, Uber) met en lumière des standards UX essentiels pour le TàD :</p>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-red-50">
                        <tr>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-red-800">Concurrent</th>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-red-800">Force observée</th>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-red-800">Opportunité pour IDFM TàD</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 text-sm">
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Citymapper / Moovit</td>
                            <td class="px-4 py-2 text-gray-600">Détection automatique de la position (Géolocalisation GPS).</td>
                            <td class="px-4 py-2 text-gray-600">Intégrer la géolocalisation pour <strong>réduire la friction de saisie</strong> et l'hésitation sur les zones.</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 text-gray-700 font-medium">Uber</td>
                            <td class="px-4 py-2 text-gray-600">Guides et aides optionnelles pour les nouveaux utilisateurs.</td>
                            <td class="px-4 py-2 text-gray-600">Mettre en place un <strong>guide de prise en main optionnel</strong> pour faciliter l'adoption par les <strong>novices (Jean-Pierre)</strong>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p class="font-semibold mt-4">➡️ Lacune identifiée & Opportunité Unique :</p>
            <blockquote class="italic text-gray-700 border-l-4 border-red-300 pl-4 my-2">L'opportunité est de lier la géolocalisation à une **visualisation claire des zones desservies** et de proposer un **feedback explicatif** avec des alternatives contextuelles.</blockquote>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">💡 Génération d'Idées (Brainstorming & Conceptualisation)</h3>
            <p>Les pistes d'amélioration sont regroupées en concepts clés et correspondent aux solutions proposées aux problèmes HMW :</p>

            <div class="space-y-6 mt-6">
                
                <div class="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                    <h4 class="text-xl font-bold text-red-800 mb-2">Concept 1 : L'Assistant de Zone Intelligent</h4>
                    <ul class="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
                        <li><strong>A. Utiliser la géolocalisation :</strong> Pré-remplir automatiquement le départ et la zone de l'utilisateur.</li>
                        <li><strong>B. Affichage visuel contraint :</strong> Afficher sur la carte interactive uniquement les arrêts et adresses desservies <em>dès la première interaction</em>.</li>
                        <li><strong>C. Saisie guidée :</strong> Mise à jour dynamique des arrêts d'arrivée disponibles après la sélection du départ (**"Sélection départ contraint l'arrivée"**).</li>
                    </ul>
                </div>

                <div class="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                    <h4 class="text-xl font-bold text-red-800 mb-2">Concept 2 : Le Diagnostic de Trajet (Feedback Actionnable)</h4>
                    <ul class="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
                        <li><strong>D. Remplacer le message générique :</strong> Remplacer "Aucun service disponible" par un **diagnostic clair** (Ex: Trajet non disponible à cette heure, arrêt hors zone, ou pas de place disponible).</li>
                        <li><strong>E. Suggestions d'alternatives :</strong> Afficher les prochains horaires de bus estimés même si le trajet actuel est manqué, ou proposer des **arrêts alternatifs géolocalisés à proximité**.</li>
                    </ul>
                </div>
                
                <div class="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                    <h4 class="text-xl font-bold text-red-800 mb-2">Concept 3 : Le Guide Progressif (Accompagnement Novice)</h4>
                    <ul class="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
                        <li><strong>F. Tutoriel optionnel :</strong> Mettre en place un **tutoriel interactif et optionnel** lors de la première visite (inspiré d'Uber).</li>
                        <li><strong>G. Simplification :</strong> Simplifier les étapes, notamment la connexion/inscription en la rendant la plus rapide possible (ex: connexion via Google/Apple) ou en l'intégrant naturellement à la fin de l'opération.</li>
                    </ul>
                </div>

            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🖼️ Prototypage et Visualisation (Storyboards)</h3>
            <p>Les concepts clés ci-dessus servent de base pour les wireframes et storyboards (représentant les interactions clés) de la prochaine phase. Les visualisations se concentreront sur :</p>
            <ul class="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
                <li><strong>Écran d'Arrivée :</strong> Intégrer un bouton <strong>"Utiliser ma position actuelle"</strong> visible, avec la carte zoomée sur les zones desservies.</li>
                <li><strong>Écran de Sélection :</strong> Mise en œuvre du système où la **carte des Arrivées** se met à jour instantanément après la sélection du Départ (Concept 1C).</li>
                <li><strong>Écran de Résultat d'Échec :</strong> Conception de l'encart de feedback qui explique le <strong>"pourquoi"</strong> et propose des horaires et/ou arrêts alternatifs (Concept 2D & 2E).</li>
            </ul>
        `,
        prototypage: `
            <p>La phase de <strong>Prototypage (TàD IDFM)</strong> a englobé la conception Basse Fidélité (wireframes) et Haute Fidélité (maquettes UI) dans Figma. L'objectif était de matérialiser les idées validées lors de l'Idéation.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Basse Fidélité (Wireframes)</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Création de <strong>flux utilisateurs (User Flows)</strong> détaillés pour la réservation et la modification.</li>
                <li><strong>Wireframes desktop</strong> se concentrant sur la simplicité du formulaire (réduction des champs obligatoires).</li>
                <li>Validation de l'architecture d'information : navigation par onglets pour différencier la recherche et les trajets favoris.</li>
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
                <li>Le <strong>taux de réussite de la tâche de réservation</strong> est passé de 65% (ancienne interface observée) à <strong>95%</strong> (nouvelle interface testée).</li>
                <li><strong>Point de friction :</strong> Le processus de modification a révélé une confusion sur l'emplacement du bouton d'édition, menant à une itération.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Itération</h3>
            <p>Suite aux tests, le bouton de modification a été déplacé du menu contextuel vers un bouton d'action principal et son label a été clarifié. Cette amélioration a permis de remonter le taux de réussite de la tâche de modification de 70% à 90%.</p>
        `
    },
    
    // --- Projet 2 : Le Médoc à la Carte (Desktop/Mobile) ---
    "2": {
        analyse: `
            <p>La <strong>Empathie / Analyse Utilisateur (Le Médoc à la Carte)</strong> a été axée sur le tourisme œnologique en Gironde. Nous avons mené une analyse concurrentielle des plateformes de réservation de visites de châteaux et des sites de guides touristiques pour identifier les lacunes en matière d'expérience utilisateur dans ce secteur.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Problématique :</h3>
            <p>Comment créer une expérience de découverte fluide qui équilibre l'information sur les domaines viticoles et la simplicité de réservation d'itinéraires personnalisés ?</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Objectifs :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Définir la typologie des utilisateurs (touriste œnophile, local curieux, organisateur de groupe).</li>
                <li>Cartographier le flux d'information requis pour une visite de cave (horaires, prix, langues).</li>
            </ul>
        `,
        definition: `
            <p>Le travail de <strong>Définition / Synthèse (Médoc)</strong> a abouti à la création de deux Personas : <strong>Marc, le Connaisseur</strong> (recherche des crus classés et une expérience approfondie) et <strong>Léa, l'Organisatrice</strong> (recherche un itinéraire simple et rapide pour toute sa famille).</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Recherche Utilisateur :</h3>
            <p>Nous avons mené des entretiens auprès de deux groupes distincts : 5 propriétaires ou responsables de châteaux pour comprendre leurs contraintes de gestion des visites, et 10 touristes (locaux et internationaux) pour évaluer leurs habitudes de planification de voyage.</p>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Points Clés Révélés :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Les touristes internationaux trouvent difficile de consolider les informations sur les visites en français.</li>
                <li>Les propriétaires de châteaux ont besoin d'un outil de gestion des réservations simple et non intrusif.</li>
                <li>L'importance de la géolocalisation pour créer des itinéraires optimisés.</li>
            </ul>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Scénario de Léa :</h4>
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
            <p>La phase de <strong>Prototypage (Médoc)</strong> a mis l'accent sur le responsive design. Le wireframing a d'abord été fait pour la version mobile (<strong>Mobile First</strong>), en s'assurant que la carte interactive restait utilisable sur petit écran. Le maquettage Haute Fidélité a utilisé une palette de couleurs inspirée des teintes du vin (bordeaux, ocre, doré) pour une immersion visuelle.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Fonctionnalités Clés :</h3>
            <p>La <strong>Définition des Fonctionnalités (Médoc)</strong> a mis en avant le besoin d'un "constructeur d'itinéraire" dynamique et de filtres avancés pour les types de visites (dégustation, atelier, repas).</p>

            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Priorités (Must-Have) :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Filtre par type de vin/AOC.</li>
                <li>Création et sauvegarde d'un itinéraire multi-étapes.</li>
                <li>Interface multilingue (Français/Anglais).</li>
            </ul>
        `,
        tests: `
            <p>Les <strong>Tests Utilisateurs & Itération (Médoc)</strong> ont comparé l'ancienne et la nouvelle interface. La métrique principale était le temps nécessaire pour réserver un itinéraire personnalisé de 3 châteaux.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Résultats & Itération :</h3>
            <p>Le temps de réalisation de la tâche a été réduit de 40% par rapport aux sites concurrents. Un point de friction a été identifié : les utilisateurs n'utilisaient pas la fonctionnalité de sauvegarde des itinéraires, pensant qu'elle ne servait que pour la réservation finale. L'itération a consisté à renommer le bouton et ajouter une infobulle explicative.</p>
        `
    },
    
    // --- Projet 3 : Allociné (Desktop) ---
    "3": {
        analyse: `
            <p>L'<strong>Analyse (Allociné)</strong> s'est concentrée sur la plateforme Desktop d'Allociné, ciblant l'expérience de découverte de films. L'analyse heuristique a montré une saturation de l'information et un manque de personnalisation flagrant des recommandations.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Objectifs de l'Étude de Cas :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Améliorer la pertinence des suggestions de films.</li>
                <li>Simplifier l'interface de navigation pour les utilisateurs non habitués.</li>
                <li>Mettre en valeur les fonctionnalités sociales (avis, notation).</li>
            </ul>
        `,
        definition: `
            <p>Le <strong>Définition / Synthèse (Allociné)</strong> principal créé est <strong>Thomas, le Cinéphile Social</strong>, qui cherche un film à regarder ce soir avec des amis et se fie aux notes critiques et aux tendances sur les plateformes de streaming.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Recherche Utilisateur :</h3>
            <p>Des entretiens ont été menés avec des cinéphiles occasionnels et réguliers (8 utilisateurs). Nous avons utilisé la méthode du "Card Sorting" pour comprendre comment ils regroupaient naturellement les films (par genre, réalisateur, humeur, etc.).</p>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Conclusion Clé :</h4>
            <p>Les utilisateurs valorisent les recommandations basées sur l'humeur ou les critères sociaux (ce que leurs amis regardent) davantage que les simples catégories de genre classiques.</p>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Besoin Clé :</h4>
            <p>Une section "Tendance chez vos amis" ou "Recommandé pour votre humeur" pour faciliter la prise de décision rapide.</p>
        `,
        ideation: `
            <p>L'<strong>Idéation / Conceptualisation (Allociné)</strong> a généré plusieurs concepts pour l'affichage de la fiche film. Nous avons utilisé le concept de "Design Sprint" pour prototyper rapidement une nouvelle page d'accueil axée sur la découverte.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Idées Retenues :</h3>
            <p>Utiliser des cartes de films grand format avec des bandes-annonces en autoplay (muet) pour un impact visuel maximal sur la page d'accueil.</p>
        `,
        prototypage: `
            <p>La phase de <strong>Prototypage (Allociné)</strong> a revu l'architecture de l'information pour désencombrer la page d'accueil. L'enjeu était de réduire le nombre d'éléments cliquables sans réduire la richesse du catalogue. Le maquettage Haute Fidélité a privilégié un thème sombre pour mettre en valeur les visuels des films (posters).</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Fonctionnalités Clés :</h3>
            <p>La <strong>Définition des Fonctionnalités (Allociné)</strong> a priorisé l'intégration d'un outil de filtration par "Humeur" et la refonte des listes de recommandations pour qu'elles soient visuellement plus impactantes.</p>

            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Priorités (Must-Have) :</h4>
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
            // Utiliser processId qui est maintenant correct (ex: 'definition' au lieu de 'entretiens')
            const content = (projectContent && projectContent[processId]) ? projectContent[processId] :
                "<p>Contenu détaillé non disponible pour cette étape ou ce projet.</p>";
            processDetailTitle.textContent = processTitle;
            currentProjectNameSpan.textContent = currentProject.title;
            processContentDiv.innerHTML = content;
            
            setupImageZoom(); // Configuration du zoom d'image après l'ajout du nouveau contenu
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
