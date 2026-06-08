// État global pour stocker le projet actuellement affiché
let currentProject = {
    id: null,
    title: null
};

// --- Sélection des Éléments DOM ---\nconst navLinks = document.querySelectorAll('.nav-link');
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
const TRANSITION_DURATION = 500; // Aligné avec le CSS (0.5s)

// --- ÉLÉMENTS DOM POUR LE ZOOM ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-modal-btn');

// --- Données des Études de Cas ---
const projectProcessDetails = {
    idfm: {
        title: "Île-de-France Mobilités",
        figma: "https://figma.com",
        analyse: `
            <h3 class="text-xl font-bold text-white mb-4">Analyse & Recherche Utilisateur</h3>
            <p>Notre analyse terrain a révélé des frictions majeures sur l'application actuelle lors des correspondances et de l'achat de recharges Navigo.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div class="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                    <h4 class="font-bold text-amber-400 mb-2">Points de friction</h4>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-neutral-400">
                        <li>Temps de chargement NFC trop long</li>
                        <li>Calcul d'itinéraire confus en cas de perturbation</li>
                    </ul>
                </div>
                <div class="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                    <h4 class="font-bold text-amber-400 mb-2">Chiffres Clés</h4>
                    <p class="text-2xl font-bold text-white font-mono">64%</p>
                    <p class="text-xs text-neutral-500">des utilisateurs abandonnent l'achat via l'app lors des heures de pointe.</p>
                </div>
            </div>
        `,
        definition: `<h3 class="text-xl font-bold text-white mb-4">Définition du Problème</h3><p>Comment pourrions-nous simplifier l'accès aux titres de transport urgents pour un usager stressé en situation de mobilité ?</p>`,
        ideation: `<h3 class="text-xl font-bold text-white mb-4">Idéation & Ateliers</h3><p>Création de parcours utilisateurs simplifiés basés sur l'accès en 1-clic aux titres favoris.</p>`,
        prototypage: `<h3 class="text-xl font-bold text-white mb-4">Prototypage Haute Fidélité</h3><p>Design d'une interface en mode sombre optimisée pour le contraste en extérieur.</p><img src="https://placehold.co/800x450/161616/ffffff?text=Interface+Mockup" alt="Mockup IDFM" class="w-full rounded-xl my-4 border border-neutral-800">`,
        tests: `<h3 class="text-xl font-bold text-white mb-4">Tests & Itérations</h3><p>Tests d'utilisabilité sur un panel de 12 usagers réguliers. Taux de succès des tâches en hausse de 40%.</p>`
    }
};

// --- Système de Navigation Fluiide (SPA) ---
function showPage(pageId, projectId = null, projectTitle = null, processId = null, processTitle = null) {
    if (contentContainer) {
        contentContainer.style.minHeight = `${contentContainer.offsetHeight}px`;
    }

    pageContents.forEach(page => {
        page.classList.remove('is-visible');
        setTimeout(() => page.classList.add('hidden'), 250);
    });

    setTimeout(() => {
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            
            // Logique d'affichage dynamique de contenu
            if (pageId === 'project-detail' && projectId) {
                currentProject.id = projectId;
                currentProject.title = projectTitle;
                projectDetailTitle.textContent = projectTitle;
                
                if (projectProcessDetails[projectId]) {
                    figmaLinkButton.href = projectProcessDetails[projectId].figma;
                    figmaLinkButton.classList.remove('hidden');
                } else {
                    figmaLinkButton.classList.add('hidden');
                }
                projectVisual.innerHTML = `<img src="https://placehold.co/1200x500/121212/ffffff?text=${encodeURIComponent(projectTitle)}" alt="${projectTitle}" class="w-full h-full object-cover">`;
            }

            if (pageId === 'process-detail' && projectId && processId) {
                currentProjectNameSpan.textContent = currentProject.title;
                processDetailTitle.textContent = processTitle;
                
                const projectData = projectProcessDetails[projectId];
                if (projectData && projectData[processId]) {
                    processContentDiv.innerHTML = projectData[processId];
                    setupImageZoom();
                } else {
                    processContentDiv.innerHTML = `<p class="text-neutral-500 italic">Contenu en cours de rédaction pour l'étape : ${processTitle}.</p>`;
                }
            }

            targetPage.classList.remove('hidden');
            setTimeout(() => {
                targetPage.classList.add('is-visible');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if (contentContainer) {
                    contentContainer.style.minHeight = '';
                }
            }, 50);
        }
    }, 250);

    navLinks.forEach(link => {
        if (link.dataset.page === pageId) {
            link.classList.add('text-white');
            link.classList.remove('text-neutral-400');
        } else {
            link.classList.remove('text-white');
            link.classList.add('text-neutral-400');
        }
    });
}

// --- Gestion du Zoom Image ---
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

// --- Écouteurs d'Événements Réfactorisés ---

// Liens de la barre de navigation principale
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
    });
});

// Logo d'accueil
const triggerHome = () => showPage(homeLink.dataset.page);
homeLink.addEventListener('click', (e) => handleAccessibilityClick(e, triggerHome));
homeLink.addEventListener('keydown', (e) => handleAccessibilityClick(e, triggerHome));

// Cartes de projets (Page Portfolio)
projectCards.forEach(card => {
    const triggerProject = () => {
        const projectId = card.dataset.projectId;
        const projectTitle = card.dataset.projectTitle;
        showPage('project-detail', projectId, projectTitle);
    };
    card.addEventListener('click', (e) => handleAccessibilityClick(e, triggerProject));
    card.addEventListener('keydown', (e) => handleAccessibilityClick(e, triggerProject));
});

// Bouton Retour aux projets
backToWorkButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('work');
});

// Étapes méthodologiques (Boutons de processus UX)
processCards.forEach(card => {
    const triggerProcess = () => {
        const processId = card.dataset.processId;
        const processTitle = card.dataset.processTitle;
        showPage('process-detail', currentProject.id, currentProject.title, processId, processTitle);
    };
    card.addEventListener('click', (e) => handleAccessibilityClick(e, triggerProcess));
    card.addEventListener('keydown', (e) => handleAccessibilityClick(e, triggerProcess));
});

// Bouton Retour à l'étude de cas principale
backToProjectDetailButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('project-detail', currentProject.id, currentProject.title);
});

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    showPage('about');
});
