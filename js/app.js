// État global pour stocker le projet actuellement affiché
let currentProject = {
    id: null,
    title: null
};

// --- Sélection des Éléments DOM ---
const navLinks = document.querySelectorAll('.nav-link');
const pageContents = document.querySelectorAll('.page-content');
const homeLink = document.getElementById('home-link');
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
const TRANSITION_DURATION = 500; // Modifié à 500 pour s'aligner parfaitement avec le CSS (0.5s)

// --- ÉLÉMENTS DOM POUR LE ZOOM ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-modal-btn');


// --- Données des Études de Cas ---
const projectProcessDetails = {
    // --- Projet 1 : Transport à la Demande IDFM (Desktop) ---
    "1": {
        analyse: `
            <p>Pour mieux comprendre les <strong>besoins, motivations et difficultés</strong> des utilisateurs du Transport à la Demande (TàD) en Île-de-France, nous avons mené une recherche centrée sur l’utilisateur combinant entretiens semi-directifs, observations et sondages en ligne. L’objectif était de mettre en évidence les <strong>points de friction</strong> et d’identifier des pistes d’amélioration pour le parcours de réservation.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">🔍 Méthodologie & Participants</h3>
            <div class="space-y-4 p-4 border border-neutral-800 rounded-xl bg-neutral-900/50">
                <p class="font-semibold text-neutral-200">Participants :</p>
                <ul class="list-disc list-inside space-y-1 ml-4 text-neutral-300">
                    <li><strong>8 utilisateurs</strong> représentant différents profils : 2 étudiants, 2 actifs avec horaires irréguliers, 2 seniors peu familiers du numérique, 2 résidents de zones périphériques.</li>
                    <li><em>Ces profils ont servi de base à la création des 3 Personas (Ethan, Jean-Pierre, Charline) pour synthétiser les besoins et les comportements.</em></li>
                </ul>
                <p class="font-semibold text-neutral-200">Méthodes de Recherche :</p>
                <ul class="list-disc list-inside space-y-1 ml-4 text-neutral-300">
                    <li><strong>Entretiens semi-directifs (45 min) :</strong> Questions ouvertes sur les habitudes de déplacement, difficultés et attentes.</li>
                    <li><strong>Observation (Contextual Inquiry) :</strong> Suivi de 3 participants lors d’une recherche de transport ou d’un trajet TàD pour observer les comportements réels.</li>
                    <li><strong>Sondage en ligne (25 réponses simulées) :</strong> Collecte de données quantitatives sur la fréquence d’utilisation et la perception de la simplicité du service.</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">💡 Synthèse de la Recherche & Enseignements Clés</h3>
            
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Principaux Points de Friction :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4 text-neutral-300">
                <li><strong>Difficulté de la notion de zone (Priorité) :</strong> Les utilisateurs ne comprennent pas toujours la zone de service TàD (56% de frustration principale, voir tableau).</li>
                <li><strong>Méconnaissance des arrêts :</strong> Crainte d’entrer une adresse non desservie, source de frustration et d’hésitation.</li>
                <li><strong>Complexité pour les novices (Seniors) :</strong> Difficulté à naviguer dans l'interface et à comprendre la séquence des étapes de réservation TàD.</li>
                <li><strong>Recherche manuelle fastidieuse :</strong> Forte demande pour la <strong>géolocalisation</strong> et les suggestions automatiques (72% jugée très importante).</li>
                <li><strong>Manque de feedback clair :</strong> Messages d'erreur génériques ("Aucun service disponible") qui n'expliquent pas le problème et ne proposent pas d'alternatives.</li>
            </ul>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Verbatims Utilisateurs :</h4>
            <div class="space-y-3 italic text-neutral-300 border-l-4 border-amber-400 pl-4 bg-neutral-900/30 p-4 rounded-lg">
                <p>« Je ne sais jamais si mon arrêt est dans la bonne zone, j’ai peur de me tromper. » – <em>Étudiant</em></p>
                <p>« Quand il n’y a pas de bus, je ne sais quoi faire, ça m’énerve. » – <em>Actif</em></p>
                <p>« L’interface est un peu compliquée, je préfère demander à mon petit-fils de m’aider. » – <em>Senior</em></p>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Résultats Clés du Sondage (Simulés) :</h4>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
                    <thead class="bg-neutral-900">
                        <tr>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-amber-400">Question</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-amber-400">Réponse majoritaire</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-neutral-800 text-sm text-neutral-300">
                        <tr>
                            <td class="px-4 py-3 font-medium">Fréquence d’utilisation du TàD</td>
                            <td class="px-4 py-3">40 % occasionnellement</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3 font-medium">Confort avec les outils numériques</td>
                            <td class="px-4 py-3">44 % moyen</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3 font-medium">Importance de la géolocalisation</td>
                            <td class="px-4 py-3"><strong class="text-amber-400">72 % très importante</strong></td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3 font-medium">Frustration principale</td>
                            <td class="px-4 py-3"><strong class="text-amber-400">Choix de la zone (56 %)</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">Cartes d'Empathie (Empathy Maps) 🧭</h3>
            <p>Ces cartes formalisent les émotions, pensées, actions et paroles des utilisateurs pour définir leurs besoins réels.</p>
            
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Profil Ethan Étudiant (22 ans)</h4>
                    <img src="empathie-ethan.png" alt="Empathy Map pour Ethan, étudiant urbain" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x400/121212/ffffff?text=Empathy+Map+Ethan';" />
                </div>
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Profil Jean-Pierre Senior (68 ans)</h4>
                    <img src="empathie-jean-pierre.png" alt="Empathy Map pour Jean-Pierre, senior peu familiers" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x400/121212/ffffff?text=Empathy+Map+Jean-Pierre';" />
                </div>
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Profil Charline Active (40 ans)</h4>
                    <img src="empathie-charline.png" alt="Empathy Map pour Charline, active" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x400/121212/ffffff?text=Empathy+Map+Charline';" />
                </div>
            </div>
            <h4 class="text-xl font-bold text-white mt-8 mb-3">Synthèse des Insights (Vers la Définition) :</h4>
            <ul class="list-disc list-inside space-y-2 ml-4 text-neutral-300">
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
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Profil Ethan (Étudiant)</h4>
                    <img src="persona-ethan.png" alt="Photo de profil Persona Ethan" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/121212/ffffff?text=Persona+Ethan';" />
                    <ul class="list-disc list-inside text-sm mt-4 text-left mx-auto max-w-fit space-y-1 text-neutral-400">
                        <li><strong>Problématique :</strong> Temps perdu avec les étapes manuelles et l'incertitude sur la desserte.</li>
                        <li><strong>Besoin clé :</strong> Rapidité, Géolocalisation automatique, Fluidité.</li>
                    </ul>
                </div>
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Profil Jean-Pierre (Senior)</h4>
                    <img src="persona-jean-pierre.png" alt="Photo de profil Persona Jean-Pierre" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/121212/ffffff?text=Persona+Jean-Pierre';" />
                    <ul class="list-disc list-inside text-sm mt-4 text-left mx-auto max-w-fit space-y-1 text-neutral-400">
                        <li><strong>Problématique :</strong> Compréhension difficile des zones, crainte de faire une erreur.</li>
                        <li><strong>Besoin clé :</strong> Clarté, Accompagnement, Messages rassurants.</li>
                    </ul>
                </div>
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Profil Charline (Active)</h4>
                    <img src="persona-charline.png" alt="Photo de profil Persona Charline" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/121212/ffffff?text=Persona+Charline';" />
                    <ul class="list-disc list-inside text-sm mt-4 text-left mx-auto max-w-fit space-y-1 text-neutral-400">
                        <li><strong>Problématique :</strong> Manque d'alternatives en cas de trajet impossible.</li>
                        <li><strong>Besoin clé :</strong> Fiabilité, Processus rapide, Informations claires.</li>
                    </ul>
                </div>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🧩 Problèmes clés identifiés</h3>
            <p>L’analyse des retours convergents fait émerger 4 axes d’insatisfaction majeurs :</p>
            <ol class="list-decimal list-inside space-y-3 ml-4 text-neutral-300">
                <li><strong>Difficulté à comprendre la notion de zone</strong>
                    <p class="text-neutral-400 text-sm pl-4">Les utilisateurs ne savent pas toujours dans quelle zone se trouvent leurs arrêts.</p>
                </li>
                <li><strong>Saisie trop manuelle et manque d’assistance</strong>
                    <p class="text-neutral-400 text-sm pl-4">Le service nécessite de taper des arrêts ou des adresses sans aide ou suggestion intelligente.</p>
                </li>
                <li><strong>Manque de feedback explicatif</strong>
                    <p class="text-neutral-400 text-sm pl-4">En cas d’erreur ou de trajet indisponible, les messages sont génériques.</p>
                </li>
                <li><strong>Difficulté des novices à suivre le parcours</strong>
                    <p class="text-neutral-400 text-sm pl-4">Sans guide ou tutoriel, les utilisateurs ont l’impression de “faire mal”.</p>
                </li>
            </ol>
            
            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">📝 User Stories (HMW déclinés)</h3>
            <ul class="list-disc list-inside space-y-2 ml-4 italic text-neutral-300">
                <li>En tant qu'<strong>étudiant (Ethan)</strong>, je veux utiliser ma position actuelle comme départ, afin de réduire la saisie manuelle.</li>
                <li>En tant que <strong>senior (Jean-Pierre)</strong>, je veux que la carte m'affiche clairement les arrêts de ma zone, afin de ne pas me tromper d'adresse.</li>
                <li>En tant qu'<strong>active (Charline)</strong>, je veux un message qui m'explique clairement pourquoi mon trajet n'est pas disponible, afin de savoir immédiatement quelle alternative choisir.</li>
            </ul>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🗺️ Parcours Utilisateur (User Journey Maps)</h3>
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Parcours Ethan</h4>
                    <img src="parcours-ethan.png" alt="User Journey Map Ethan" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/121212/ffffff?text=Journey+Ethan';" />
                </div>
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Parcours Jean-Pierre</h4>
                    <img src="parcours-jean-pierre.png" alt="User Journey Map Jean-Pierre" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/121212/ffffff?text=Journey+Jean-Pierre';" />
                </div>
                <div class="text-center p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-md">
                    <h4 class="font-bold text-lg text-neutral-200 mb-2">Parcours Charline</h4>
                    <img src="parcours-charline.png" alt="User Journey Map Charline" class="w-full h-auto object-cover rounded-lg mt-3 border border-neutral-800 cursor-pointer" onerror="this.onerror=null; this.src='https://placehold.co/300x200/121212/ffffff?text=Journey+Charline';" />
                </div>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">🧠 Insight UX majeur</h3>
            <div class="bg-neutral-900 border border-neutral-800 p-6 rounded-lg my-4 shadow-inner">
                <p class="text-xl font-bold text-amber-400">
                    Les utilisateurs ne souhaitent pas “chercher un trajet”, ils souhaitent “être guidés vers une solution disponible”.
                </p>
            </div>

            <blockquote class="text-xl font-bold text-amber-400 border-l-4 border-amber-400 pl-4 py-2 bg-neutral-900/40 rounded-lg my-4">
                HMW : Comment pourrions-nous aider l’utilisateur à trouver rapidement un trajet valide, sans connaissance préalable des zones ni des arrêts ?
            </blockquote>
        `,
        ideation: `
            <p>Cette phase vise à transformer le problème central en solutions concrètes en utilisant les enseignements tirés de la recherche utilisateur.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">🔹 Audit Concurrentiel & Opportunités</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
                    <thead class="bg-neutral-900">
                        <tr>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-amber-400">Concurrent</th>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-amber-400">Force observée</th>
                            <th class="px-4 py-2 text-left text-sm font-semibold text-amber-400">Opportunité IDFM TàD</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-neutral-800 text-sm text-neutral-300">
                        <tr>
                            <td class="px-4 py-2 font-medium">Citymapper</td>
                            <td class="px-4 py-2">Détection automatique de la position via GPS.</td>
                            <td class="px-4 py-2">Intégrer la géolocalisation pour réduire la friction de saisie.</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 font-medium">Uber</td>
                            <td class="px-2 py-2">Guides et aides optionnels fluides pour les novices.</td>
                            <td class="px-4 py-2">Mettre en place un guide de prise en main optionnel.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold accent-text mt-12 mb-4">💡 Concepts clés retenus</h3>
            <div class="space-y-4 mt-6">
                <div class="p-4 border-l-4 border-amber-400 bg-neutral-900/40 rounded-r-lg">
                    <h4 class="text-xl font-bold text-white mb-2">1. L'Assistant de Zone Intelligent</h4>
                    <p class="text-sm text-neutral-300">Pré-remplir automatiquement le départ grâce au GPS et contraindre l'affichage de la carte uniquement sur les arrêts valides restants.</p>
                </div>
                <div class="p-4 border-l-4 border-amber-400 bg-neutral-900/40 rounded-r-lg">
                    <h4 class="text-xl font-bold text-white mb-2">2. Le Diagnostic de Trajet Actionnable</h4>
                    <p class="text-sm text-neutral-300">Remplacer "Aucun service disponible" par un diagnostic clair (horaires, indisponibilité de zone) et proposer des arrêts alternatifs à proximité.</p>
                </div>
            </div>
        `,
        prototypage: `
            <p>La phase de Prototypage a englobé la conception Basse Fidélité (wireframes) et Haute Fidélité (maquettes UI) directement sur Figma.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Basse Fidélité (Wireframes)</h3>
            <p class="text-neutral-300">Création de User Flows détaillés pour la réservation et la modification de trajets. Architecture d'information optimisée par onglets clairs pour séparer recherche active et favoris.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Haute Fidélité (Maquettes UI)</h3>
            <p class="text-neutral-300">Application des codes graphiques d'IDFM avec un accent fort sur l'accessibilité (contrastes AAA, tailles de textes adaptées aux seniors) et l'ajout de feedbacks explicatifs non intrusifs.</p>
        `,
        tests: `
            <p>La phase finale a consisté en des tests utilisateurs modérés menés auprès d'un panel ciblé de 5 participants afin de mesurer l'efficacité des solutions apportées.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Résultats et Métriques :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4 text-neutral-300">
                <li>Le <strong>taux de réussite des réservations</strong> est passé de 65% (ancienne interface) à <strong>95%</strong> sur le nouveau prototype.</li>
                <li><strong>Itération nécessaire :</strong> Une confusion sur le bouton d'édition du trajet a nécessité de déplacer l'action vers l'écran principal. Après correction, le taux de succès sur la modification a atteint 90%.</li>
            </ul>
        `
    },
    
    // --- Projet 2 : Le Médoc à la Carte (Desktop/Mobile) ---
    "2": {
        analyse: `
            <p>L'analyse utilisateur sur le projet du Médoc à la Carte a été axée sur le tourisme œnologique en Gironde. Nous avons mené une analyse concurrentielle des plateformes de réservation de visites de châteaux pour en extraire les forces et faiblesses UX majeures.</p>
            
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Problématique de départ :</h3>
            <p class="text-neutral-300">Comment créer une expérience de découverte fluide qui équilibre l'information culturelle complexe des domaines viticoles et la simplicité de planification d'itinéraires géolocalisés ?</p>
        `,
        definition: `
            <p>La phase de synthèse a mis en avant deux Personas cibles : Marc, le connaisseur (expert cherchant des grands crus spécifiques) et Léa, l'organisatrice (qui recherche un itinéraire clé en main et simple pour toute sa famille).</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Points clés révélés :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4 text-neutral-300">
                <li>Difficulté majeure des touristes internationaux à consolider les informations (langues, horaires).</li>
                <li>Forte dépendance à la carte interactive pour concevoir une journée logique d'un point A à un point B sans perdre de temps sur la route.</li>
            </ul>
        `,
        ideation: `
            <p>L'idéation s'est concentrée sur des ateliers de "Crazy Eights" et de sketching rapide pour matérialiser le module de carte interactive multi-étapes sur mobile.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Solutions retenues :</h3>
            <ul class="list-disc list-inside space-y-2 ml-4 text-neutral-300">
                <li>Création d'un systeme de "Wishlist" pour mettre de côté des châteaux avant de générer automatiquement un tracé d'itinéraire idéal.</li>
                <li>Filtres sélectifs basés sur l'expérience (ateliers enfants, dégustation d'exception).</li>
            </ul>
        `,
        prototypage: `
            <p>Dans une approche Mobile-First, le prototypage s'est d'abord focalisé sur l'ergonomie de la carte interactive sur petit écran (zones de clic minimales de 44x44px). La Haute Fidélité a adopté une charte immersive aux teintes bordeaux, ocre et dorées.</p>
        `,
        tests: `
            <p>Les tests utilisateurs ont mesuré le temps nécessaire pour réserver un itinéraire personnalisé complet de 3 châteaux.</p>
            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Bilan :</h3>
            <p class="text-neutral-300">Une baisse de 40% du temps de planification par rapport aux plateformes traditionnelles. L'intitulé de la fonction de sauvegarde a été modifié suite aux tests car il manquait de clarté pour les utilisateurs novices.</p>
        `
    },
    
    // --- Projet 3 : Allociné (Desktop) ---
    "3": {
        analyse: `
            <p>Cette étude de cas ciblait la refonte de l'expérience de découverte de films sur la plateforme Desktop d'Allociné. L'analyse heuristique initiale a mis en évidence une forte saturation visuelle de publicités et un manque d'outils intuitifs de recommandation.</p>
        `,
        definition: `
            <p>Définition du Persona principal : Thomas, le cinéphile social, qui s'appuie fortement sur l'avis de son cercle d'amis et sur son humeur du moment pour choisir son programme du soir.</p>

            <h3 class="text-2xl font-bold accent-text mt-8 mb-4">Enseignements clés :</h3>
            <p class="text-neutral-300">La taxonomie classique par genre cinématographique (Action, Comédie...) ne suffit plus. Les utilisateurs expriment le besoin de filtrer par "Humeur" ou par critères sociaux ("Vu par mes amis").</p>
        `,
        ideation: `
            <p>Pistes conceptuelles explorées lors d'un Design Sprint : mise en avant de cartes de films au format héroïque avec bandes-annonces immersives lues automatiquement en arrière-plan sans son.</p>
        `,
        prototypage: `
            <p>Refonte globale de l'architecture de l'information pour nettoyer et aérer l'interface. Choix d'un thème "Cinéma" sombre unifié permettant aux affiches de films de ressortir de manière percutante.</p>
        `,
        tests: `
            <p>Tâche testée : "Trouver un film récent bien noté adapté à une soirée détente". Le taux de succès a augmenté de 25% grâce au nouveau moteur de filtres combinés et à la clarté du système de notation unifié.</p>
        `
    }
};


// --- Fonctions de Navigation ---

function getActivePage() {
    return document.querySelector('.page-content.is-visible');
}

function showPage(pageId, projectId = null, projectTitle = null, processId = null, processTitle = null) {
    const activePage = getActivePage();
    const nextPage = document.querySelector(`[data-page-content="${pageId}"]`);
    const TRANSITION_DURATION_MS = TRANSITION_DURATION;

    if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }

    if (!nextPage) {
        console.error(`Page ID '${pageId}' non trouvée.`);
        return;
    }

    if (activePage === nextPage) {
        if (pageId === 'work' && (currentProject.id !== null || activePage.id === 'page-project-detail' || activePage.id === 'page-process-detail')) {
            currentProject.id = null;
            currentProject.title = null;
        } else {
            return;
        }
    }

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

    if (activePage && activePage !== nextPage) {
        const initialHeight = activePage.offsetHeight;
        contentContainer.style.minHeight = `${initialHeight}px`;
        activePage.classList.remove('is-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(startContentUpdate, TRANSITION_DURATION_MS);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        startContentUpdate();
    }

    function startContentUpdate() {
        if (activePage && activePage !== nextPage) {
            activePage.classList.add('hidden');
        }

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

            if (projectVisual) {
                if (projectId === '1') {
                    projectVisual.classList.remove('hidden');
                } else {
                    projectVisual.classList.add('hidden');
                }
            }
        }

        if (pageId !== 'project-detail' && projectVisual) {
             projectVisual.classList.add('hidden');
        }
        
        nextPage.classList.remove('hidden');
        nextPage.classList.remove('is-visible');

        const targetHeight = nextPage.offsetHeight;
        contentContainer.style.minHeight = `${targetHeight}px`;

        setTimeout(() => {
            nextPage.classList.add('is-visible');
            setTimeout(() => {
                contentContainer.style.minHeight = 'auto'; 
            }, TRANSITION_DURATION_MS); 
        }, 10);
    }
}

// --- Zoom Image ---
function setupImageZoom() {
    const images = processContentDiv.querySelectorAll('img');
    images.forEach(img => {
        img.classList.add('cursor-pointer');
        img.addEventListener('click', function() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden';
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
    });
}

// --- Gestionnaire Universel d'Accessibilité (Clavier + Souris) ---
function handleAccessibilityClick(e, callback) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        callback();
    }
}

// --- Écouteurs d'Événements Glogaux ---

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;
        showPage(pageId);
    });
});

const triggerHome = () => showPage(homeLink.dataset.page);
homeLink.addEventListener('click', (e) => handleAccessibilityClick(e, triggerHome));
homeLink.addEventListener('keydown', (e) => handleAccessibilityClick(e, triggerHome));

// Dynamise l'attribution des écouteurs sur la carte actuellement visible
function bindActiveProjectCardClick() {
    const visibleCard = document.querySelector('.project-tab-content:not(.hidden) .project-card');
    if (visibleCard) {
        // Nettoyage pour éviter les doublons d'écouteurs
        visibleCard.replaceWith(visibleCard.cloneNode(true));
        
        // Récupération de la nouvelle instance propre de la carte
        const cleanCard = document.querySelector('.project-tab-content:not(.hidden) .project-card');
        
        const triggerProject = () => {
            const projectId = cleanCard.dataset.projectId;
            const projectTitle = cleanCard.dataset.projectTitle;
            showPage('project-detail', projectId, projectTitle);
        };
        cleanCard.addEventListener('click', (e) => handleAccessibilityClick(e, triggerProject));
        cleanCard.addEventListener('keydown', (e) => handleAccessibilityClick(e, triggerProject));
    }
}

backToWorkButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('work');
});

processCards.forEach(card => {
    const triggerProcess = () => {
        const processId = card.dataset.processId;
        const processTitle = card.dataset.processTitle;
        showPage('process-detail', currentProject.id, currentProject.title, processId, processTitle);
    };
    card.addEventListener('click', (e) => handleAccessibilityClick(e, triggerProcess));
    card.addEventListener('keydown', (e) => handleAccessibilityClick(e, triggerProcess));
});

backToProjectDetailButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('project-detail', currentProject.id, currentProject.title);
});

// --- Gestion des Onglets Interactifs (Correction du Clic incluse) ---
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('[data-project-tab]');
    const tabContents = document.querySelectorAll('.project-tab-content');

    // Initialisation au premier chargement pour le projet 1
    bindActiveProjectCardClick();

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTabId = button.dataset.projectTab;

            // 1. État visuel du bouton cliqué
            tabButtons.forEach(btn => btn.classList.remove('text-white', 'border-amber-400', 'bg-neutral-900/50'));
            button.classList.add('text-white', 'border-amber-400', 'bg-neutral-900/50');

            // 2. Masquer tous les projets
            tabContents.forEach(content => content.classList.add('hidden'));

            // 3. Afficher le projet voulu
            const activeContent = document.getElementById(`tab-content-${targetTabId}`);
            if (activeContent) {
                activeContent.classList.remove('hidden');
                // Étape essentielle : On re-branche l'écouteur de clic sur le projet fraîchement dévoilé
                bindActiveProjectCardClick();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    showPage('about');
});
