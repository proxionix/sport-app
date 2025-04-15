// Programme complet d'entraînement Boxe & Musculation sur 12 semaines

export const fullProgram = {
  title: "Programme Intégré Boxe & Musculation sur 12 Semaines",
  description: "Programme conçu pour développer un physique esthétique et des compétences solides en boxe anglaise avant transition vers le kick-boxing.",
  targetDate: "2025-07-13", // Date des vacances
  initialStats: {
    weight: 83,
    chestSize: 105,
    armSize: 36,
    waistSize: 88,
    pullUpsMax: 5,
    benchPressMax: 60,
    enduranceRounds: 4
  },
  targetStats: {
    weight: [78, 80],
    chestSize: [108, 110],
    armSize: [39, 40],
    waistSize: [80, 82],
    pullUpsMax: [12, 15],
    benchPressMax: [85, 90],
    enduranceRounds: [8, 10]
  },
  exerciseDetails: {
    "echauffement-dynamique-semaine-1": {
      title: "Échauffement Dynamique - Semaine 1",
      objective: "Préparer le corps aux efforts intenses tout en activant les chaînes musculaires spécifiques à la boxe.",
      duration: "15 minutes",
      sequence: [
        {
          name: "Mobilité articulaire",
          duration: "5 minutes",
          steps: [
            "Rotations des poignets (10 dans chaque sens)",
            "Rotations des coudes (10 dans chaque sens)",
            "Rotations des épaules (10 dans chaque sens)",
            "Rotations du cou (5 dans chaque sens, lentement)",
            "Rotations du bassin (10 dans chaque sens)",
            "Rotations des genoux (10 dans chaque sens)",
            "Rotations des chevilles (10 dans chaque sens)"
          ]
        },
        {
          name: "Activation cardio-vasculaire",
          duration: "5 minutes",
          steps: [
            "Jogging sur place (1 minute)",
            "Jumping jacks (1 minute)",
            "Montées de genoux (1 minute)",
            "Talons-fesses (1 minute)",
            "Pas chassés (1 minute)"
          ]
        },
        {
          name: "Activation spécifique boxe",
          duration: "5 minutes",
          steps: [
            "Shadowboxing léger (2 minutes)",
            "Squats dynamiques (1 minute)",
            "Pompes sur les poings (1 minute)",
            "Gainage dynamique (1 minute)"
          ]
        }
      ],
      keyPoints: [
        "Respirez profondément pendant tout l'échauffement",
        "Augmentez progressivement l'intensité",
        "Concentrez-vous sur la qualité des mouvements",
        "Écoutez votre corps et adaptez si nécessaire"
      ],
      progression: "Cet échauffement évoluera chaque semaine pour s'adapter à votre niveau croissant de condition physique."
    },
    "developpe-couche-incline-4x10": {
      title: "Développé Couché Incliné 4×10",
      objective: "Développer la masse musculaire et la force des pectoraux supérieurs, essentiels pour les coups directs en boxe.",
      equipment: [
        "Banc incliné (30-45°)",
        "Barre et disques",
        "Poids de départ recommandé: 60% de votre poids corporel (environ 50kg pour vous)"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Allongez-vous sur le banc incliné",
            "Pieds bien à plat au sol",
            "Épaules et fessiers en contact avec le banc",
            "Saisissez la barre avec une prise légèrement plus large que la largeur des épaules"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Descendez la barre de manière contrôlée jusqu'à ce qu'elle touche le haut de votre poitrine",
            "Gardez les coudes à environ 45° par rapport à votre corps (pas écartés à 90°)",
            "Poussez la barre vers le haut en contractant les pectoraux",
            "Expirez pendant l'effort (phase de poussée)",
            "Ne verrouillez pas complètement les coudes en haut"
          ]
        },
        {
          name: "Tempo",
          steps: [
            "2 secondes pour descendre",
            "1 seconde de pause en bas",
            "1 seconde pour monter",
            "1 seconde de pause en haut"
          ]
        }
      ],
      structure: {
        series: 4,
        repetitions: 10,
        rest: "90 secondes entre les séries",
        warmup: "2 séries légères de 12 répétitions avant de commencer"
      },
      keyPoints: [
        "Gardez les poignets droits et solides",
        "Contractez les omoplates pour stabiliser les épaules",
        "Maintenez une légère cambrure lombaire naturelle",
        "Respirez profondément et régulièrement"
      ],
      progression: [
        "Semaine 2: Augmentez le poids de 5% si vous avez complété toutes les répétitions",
        "Semaine 3: Passez à 5×8 avec 7% de poids supplémentaire",
        "Semaine 4: Test de force maximale"
      ],
      adaptation: [
        "Avec vos longs bras, concentrez-vous sur:",
        "Un contrôle parfait de la descente",
        "Une prise légèrement plus large pour optimiser le recrutement musculaire",
        "Une attention particulière à la position des coudes pour protéger les épaules"
      ]
    },
    "tractions-assistees-4x8": {
      title: "Tractions Assistées 4×8",
      objective: "Renforcer progressivement le dos et les biceps pour améliorer la puissance des coups et la stabilité du haut du corps.",
      equipment: [
        "Barre de traction",
        "Élastique d'assistance ou machine assistée"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Placez l'élastique sur la barre et passez un pied ou un genou dedans",
            "Saisissez la barre avec une prise légèrement plus large que la largeur des épaules",
            "Bras tendus, épaules engagées vers le bas",
            "Corps suspendu, légèrement incliné vers l'arrière"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Inspirez et tirez votre corps vers le haut",
            "Concentrez-vous sur l'utilisation des muscles du dos (pas seulement les bras)",
            "Amenez votre menton au-dessus de la barre",
            "Contractez les omoplates au sommet du mouvement",
            "Descendez de manière contrôlée jusqu'à l'extension complète des bras"
          ]
        },
        {
          name: "Tempo",
          steps: [
            "2 secondes pour monter",
            "1 seconde de contraction en haut",
            "3 secondes pour descendre",
            "1 seconde en position basse avant de recommencer"
          ]
        }
      ],
      structure: {
        series: 4,
        repetitions: 8,
        rest: "120 secondes entre les séries",
        assistance: "Choisissez une assistance qui vous permet de faire 8 répétitions propres"
      },
      keyPoints: [
        "Gardez les épaules basses et loin des oreilles",
        "Engagez les muscles abdominaux tout au long du mouvement",
        "Concentrez-vous sur la contraction du dos en haut",
        "Évitez de balancer le corps ou d'utiliser l'élan"
      ],
      progression: [
        "Diminuez progressivement l'assistance au fil des semaines",
        "Semaine 3: Essayez de faire 2-3 répétitions sans assistance",
        "Semaine 4: Tentez un set complet sans assistance",
        "Objectif final: 3 séries de 8 répétitions sans assistance"
      ],
      adaptation: [
        "Avec vos longs bras et votre structure de départ, concentrez-vous sur:",
        "L'activation complète des muscles du dos en contractant d'abord les omoplates",
        "L'utilisation d'une prise neutre (paumes face à face) si disponible pour commencer",
        "L'engagement supplémentaire du core pour éviter l'hyper-extension lombaire"
      ]
    },
    "elevations-laterales-3x12": {
      title: "Élévations Latérales 3×12",
      objective: "Développer les deltoïdes latéraux pour améliorer la stabilité de l'épaule lors des coups directs et crochets.",
      equipment: [
        "Haltères légers (débutez avec 6-8 kg)"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Debout, pieds à largeur d'épaules",
            "Genoux légèrement fléchis",
            "Haltères tenus de chaque côté, paumes vers le corps",
            "Légère flexion des coudes (10-15°, maintenue durant tout le mouvement)"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Levez les bras latéralement jusqu'à ce qu'ils soient parallèles au sol",
            "Maintenez une légère flexion des coudes constante",
            "Gardez les poignets alignés avec les avant-bras (pas de flexion)",
            "Contrôlez la descente jusqu'à la position de départ",
            "Évitez d'utiliser l'élan du corps"
          ]
        },
        {
          name: "Variante avancée",
          steps: [
            "En haut du mouvement, effectuez une légère rotation externe pour que les petits doigts soient légèrement plus hauts que les pouces",
            "Cette rotation accentue l'activation des deltoïdes latéraux"
          ]
        }
      ],
      structure: {
        series: 3,
        repetitions: 12,
        rest: "60 secondes entre les séries",
        tempo: "2 secondes montée, 1 seconde pause haute, 2 secondes descente"
      },
      keyPoints: [
        "Concentrez-vous sur les deltoïdes latéraux, pas les trapèzes",
        "Gardez le haut du corps droit, évitez de vous pencher",
        "Respirez régulièrement (expirez en montant)",
        "Privilégiez la qualité du mouvement au poids soulevé"
      ],
      progression: [
        "Semaine 2: Si vous complétez facilement toutes les répétitions, augmentez de 1-2 kg",
        "Semaine 3: Passez à 3×15 avec le même poids",
        "Semaine 5: Intégrez des techniques d'intensification comme les répétitions partielles en fin de série"
      ],
      adaptation: [
        "Pour votre morphologie d'endomorphe avec des épaules naturellement larges:",
        "Concentrez-vous particulièrement sur la partie finale du mouvement",
        "Évitez de monter les épaules vers les oreilles (trapèzes)",
        "Maintenez une amplitude complète pour maximiser le développement musculaire"
      ]
    },
    "circuit-abdominal-boxeur": {
      title: "Circuit Abdominal Boxeur",
      objective: "Renforcer la ceinture abdominale pour améliorer la puissance de frappe et la protection du tronc.",
      duration: "15 minutes (3 tours)",
      sequence: [
        {
          name: "Crunchs croisés",
          duration: "30 secondes",
          steps: [
            "Allongé sur le dos, genoux fléchis",
            "Touchez le genou droit avec le coude gauche, alternez",
            "Simulez l'action de rotation du tronc lors d'un crochet"
          ]
        },
        {
          name: "Gainage frontal avec punch",
          duration: "45 secondes",
          steps: [
            "Position de planche sur les avant-bras",
            "Alternez des coups de poing vers l'avant",
            "Gardez les hanches stables"
          ]
        },
        {
          name: "Russian twists",
          duration: "30 secondes",
          steps: [
            "Assis, jambes légèrement surélevées",
            "Tournez le tronc de gauche à droite",
            "Simulez l'action de rotation pour les crochets"
          ]
        },
        {
          name: "Mountain climbers rapides",
          duration: "45 secondes",
          steps: [
            "Position de pompe haute",
            "Ramenez alternativement les genoux vers la poitrine",
            "Gardez un rythme soutenu"
          ]
        },
        {
          name: "Relevés de jambes suspendus",
          duration: "30 secondes",
          steps: [
            "Accroché à une barre ou allongé",
            "Levez les jambes jusqu'à former un angle de 90°",
            "Contrôlez la descente"
          ]
        }
      ],
      keyPoints: [
        "Respirez régulièrement pendant les exercices",
        "Contractez consciemment les abdominaux",
        "Maintenez une posture correcte pour éviter les blessures",
        "Augmentez progressivement la vitesse d'exécution"
      ],
      adaptation: [
        "Avec votre morphotype:",
        "Concentrez-vous particulièrement sur les obliques pour améliorer la rotation du tronc",
        "Augmentez la durée des exercices de gainage pour renforcer le core",
        "Travaillez les abdominaux bas pour améliorer la stabilité des jambes"
      ],
      progression: "Dans les semaines suivantes, nous augmenterons la durée des exercices et réduirons les temps de repos pour maximiser la définition abdominale avant vos vacances du 13 juillet."
    },
    "recuperation-active": {
      title: "Récupération Active",
      objective: "Faciliter l'élimination des déchets métaboliques, réduire les courbatures et préparer le corps pour la prochaine séance.",
      duration: "10-15 minutes",
      sequence: [
        {
          name: "Cardio léger",
          duration: "5 minutes",
          steps: [
            "Marche rapide ou jogging très léger",
            "Mouvements de bras amples et détendus",
            "Respirations profondes et régulières"
          ]
        },
        {
          name: "Mobilité dynamique douce",
          duration: "5 minutes",
          steps: [
            "Rotations d'épaules lentes et complètes",
            "Rotations de hanches contrôlées",
            "Flexions latérales du tronc",
            "Rotations du tronc debout"
          ]
        },
        {
          name: "Étirements légers",
          duration: "5 minutes",
          steps: [
            "Étirement des pectoraux (ouverture de poitrine)",
            "Étirement des dorsaux (bras tendus au-dessus de la tête)",
            "Étirement des épaules (bras croisé devant le corps)",
            "Étirement du dos (position du chat-vache)"
          ]
        }
      ],
      keyPoints: [
        "Gardez tous les mouvements lents et contrôlés",
        "Respirez profondément pour favoriser l'oxygénation",
        "Évitez tout mouvement douloureux",
        "Restez en dessous de 50% de votre effort maximal"
      ],
      progression: "Cette récupération active reste similaire tout au long du programme, avec des ajustements mineurs selon les groupes musculaires sollicités lors de la séance principale."
    },
    "echauffement-corde-a-sauter-15min": {
      title: "Échauffement Corde à Sauter - 15min",
      objective: "Préparer le système cardiovasculaire, améliorer la coordination et le jeu de jambes spécifique à la boxe.",
      equipment: [
        "Corde à sauter (idéalement à roulements à billes)",
        "Chronomètre",
        "Surface non glissante (tapis de boxe ou sol en caoutchouc)"
      ],
      sequence: [
        {
          name: "Échauffement progressif",
          duration: "3 minutes",
          steps: [
            "Saut à deux pieds, rythme lent (60-80 sauts/minute)",
            "Posture droite, épaules relâchées",
            "Poignets effectuant la rotation, pas les bras",
            "Atterrissage sur l'avant du pied pour absorber l'impact"
          ]
        },
        {
          name: "Technique de base",
          duration: "5 minutes",
          steps: [
            "Alternez 30 secondes de saut classique et 30 secondes de repos",
            "Concentrez-vous sur la respiration rythmée",
            "Gardez les coudes près du corps",
            "Sautez juste assez haut pour laisser passer la corde"
          ]
        },
        {
          name: "Variations de sauts",
          duration: "5 minutes",
          steps: [
            "Sauts en alternant les pieds (comme une course sur place)",
            "Sauts en déplacement (avant, arrière, côtés)",
            "Sauts avec garde de boxe (position de combat)",
            "Sauts en croisant et décroisant les pieds"
          ]
        },
        {
          name: "Finition dynamique",
          duration: "2 minutes",
          steps: [
            "Augmentez progressivement le rythme",
            "Terminez par 30 secondes d'effort maximal",
            "Récupération active en marchant"
          ]
        }
      ],
      keyPoints: [
        "Gardez le regard droit devant vous, pas vers vos pieds",
        "Maintenez une posture droite similaire à votre garde de boxe",
        "Respirez de manière rythmée et contrôlée",
        "Augmentez progressivement l'intensité"
      ],
      adaptation: [
        "Si vous débutez, commencez sans corde en simulant le mouvement",
        "Si vous manquez de coordination, alternez 20 secondes avec corde et 10 secondes de shadowboxing",
        "Pour votre taille (1m80), ajustez la longueur de corde: debout dessus, les poignées doivent arriver aux aisselles"
      ],
      progression: "Chaque semaine, augmentez la durée totale de 2-3 minutes et introduisez des variations plus complexes (double-unders, croisements multiples)."
    },
    "position-de-garde-fondamentaux": {
      title: "Position de Garde - Fondamentaux",
      objective: "Maîtriser la position de garde fondamentale qui servira de base à toutes les techniques offensives et défensives.",
      duration: "30 minutes",
      sequence: [
        {
          name: "Position des pieds",
          steps: [
            "Pieds écartés à largeur d'épaules",
            "Pied arrière (droit pour un droitier) tourné à 45° vers l'extérieur",
            "Poids du corps réparti 60% sur jambe arrière, 40% sur jambe avant",
            "Sur la plante des pieds, talons légèrement soulevés"
          ]
        },
        {
          name: "Position des jambes",
          steps: [
            "Jambes légèrement fléchies (pas droites, pas trop pliées)",
            "Genoux orientés vers l'extérieur",
            "Jambe arrière prête à pousser pour générer de la puissance",
            "Position athlétique permettant de se déplacer rapidement"
          ]
        },
        {
          name: "Position du tronc",
          steps: [
            "Buste légèrement tourné (épaule avant cachant le menton)",
            "Abdominaux contractés",
            "Épaules relâchées mais prêtes",
            "Colonne vertébrale droite, léger engagement du core"
          ]
        },
        {
          name: "Position des mains",
          steps: [
            "Poings fermés mais détendus",
            "Main avant (gauche pour un droitier) à hauteur des yeux",
            "Main arrière contre la joue, coude protégeant les côtes",
            "Pouce contre les autres doigts, pas à l'intérieur du poing"
          ]
        }
      ],
      keyPoints: [
        "Restez détendu dans votre garde (économisez l'énergie)",
        "Maintenez toujours vos mains en position haute",
        "Gardez les coudes près du corps pour protéger vos flancs",
        "Soyez prêt à bouger dans toutes les directions"
      ],
      adaptation: [
        "Avec votre morphotype (1m80, longs bras et jambes):",
        "Utilisez votre allonge à votre avantage en gardant une distance légèrement plus grande",
        "Maintenez une garde un peu plus haute pour protéger votre menton",
        "Fléchissez davantage les genoux pour abaisser votre centre de gravité"
      ]
    },
    "deplacements-de-base-pas-traine": {
      title: "Déplacements de Base - Pas Traîné",
      objective: "Maîtriser les déplacements fondamentaux en gardant l'équilibre et la position de garde intacte.",
      duration: "30 minutes",
      sequence: [
        {
          name: "Principes fondamentaux",
          steps: [
            "Ne jamais croiser les pieds (risque de déséquilibre)",
            "Toujours garder les pieds à distance appropriée",
            "Maintenir le centre de gravité bas et stable",
            "Garder la position de garde intacte pendant le déplacement"
          ]
        },
        {
          name: "Pas traîné avant",
          steps: [
            "Partir de la position de garde",
            "Avancer légèrement le pied avant (5-10 cm)",
            "Faire suivre immédiatement le pied arrière (même distance)",
            "Maintenir l'écart initial entre les pieds",
            "Reprendre instantanément la répartition du poids 60/40"
          ]
        },
        {
          name: "Pas traîné arrière",
          steps: [
            "Partir de la position de garde",
            "Reculer légèrement le pied arrière (5-10 cm)",
            "Faire suivre immédiatement le pied avant (même distance)",
            "Maintenir l'écart initial entre les pieds",
            "Reprendre instantanément la répartition du poids 60/40"
          ]
        },
        {
          name: "Pas traîné latéral",
          steps: [
            "Partir de la position de garde",
            "Déplacer le pied du côté où vous souhaitez aller",
            "Faire suivre l'autre pied immédiatement",
            "Maintenir l'alignement des pieds et l'angle du pied arrière",
            "Reprendre instantanément la position de garde"
          ]
        },
        {
          name: "Exercice pratique",
          steps: [
            "Tracez un carré imaginaire au sol (1,5m × 1,5m)",
            "Déplacez-vous le long des côtés du carré en pas traînés",
            "Changez de direction au signal (claquement, sonnerie)",
            "Augmentez progressivement la vitesse d'exécution"
          ]
        }
      ],
      keyPoints: [
        "Ne sautillez pas inutilement (dépense d'énergie excessive)",
        "Gardez toujours contact avec le sol (au moins un pied)",
        "Respirez normalement pendant les déplacements",
        "Maintenez vos mains en position de garde constamment"
      ],
      progression: [
        "Semaine 2: Intégrez des changements de direction soudains",
        "Semaine 3: Ajoutez des feintes pendant les déplacements",
        "Semaine 4: Combinez déplacements et frappes simples",
        "Semaine 5+: Intégrez des esquives pendant les déplacements"
      ]
    },
    "technique-du-jab-1-details": {
      title: "Technique du Jab (1) - Détails",
      objective: "Maîtriser le jab, coup fondamental de la boxe servant à maintenir la distance, préparer des combinaisons et analyser l'adversaire.",
      duration: "30-45 minutes",
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Adoptez votre position de garde standard",
            "Poids réparti 60% sur jambe arrière, 40% sur jambe avant",
            "Poing avant (gauche pour un droitier) à hauteur des yeux",
            "Coude avant légèrement rentré protégeant les côtes"
          ]
        },
        {
          name: "Mécanique du coup",
          steps: [
            "Extension du bras avant en ligne droite vers la cible",
            "Rotation légère de l'épaule avant vers l'avant",
            "Rotation du poing à l'impact (paume vers le bas)",
            "Légère poussée du pied avant pour ajouter de la puissance",
            "Maintien de la main arrière en position de garde contre la joue"
          ]
        },
        {
          name: "Points techniques essentiels",
          steps: [
            "Épaule avant remontée pour protéger le menton",
            "Coup partant en ligne droite, pas en arc",
            "Visualisation de la trajectoire passant par la cible",
            "Extension complète du bras sans verrouiller le coude",
            "Retour immédiat en position de garde après l'impact"
          ]
        }
      ],
      drills: [
        {
          name: "Jab dans le vide",
          steps: [
            "5 séries de 20 jabs lents, focus sur la technique parfaite",
            "5 séries de 20 jabs à vitesse moyenne, maintien de la technique",
            "5 séries de 20 jabs rapides, en gardant la précision"
          ]
        },
        {
          name: "Jab face au miroir",
          steps: [
            "Observez votre position de garde et l'exécution technique",
            "Vérifiez que l'épaule monte correctement pour protéger le menton",
            "Contrôlez que la main arrière reste en position de protection"
          ]
        },
        {
          name: "Variantes de jab à pratiquer",
          steps: [
            "Jab au corps: même principe mais dirigé vers le plexus",
            "Jab d'arrêt: timing précis pour stopper une avancée",
            "Jab en avançant: combiné avec un pas traîné avant",
            "Jab en reculant: protection tout en créant de l'espace"
          ]
        }
      ],
      keyPoints: [
        "Le jab n'est pas un coup puissant mais un coup rapide et précis",
        "Conservez votre équilibre pendant et après le coup",
        "Revenez toujours en position de garde après avoir jabé",
        "Respirez en expirant brièvement au moment de l'impact"
      ],
      adaptation: [
        "Avec votre grande allonge, utilisez le jab pour contrôler la distance",
        "Travaillez particulièrement le jab d'arrêt qui sera une arme importante avec vos longs bras",
        "Concentrez-vous sur l'extension complète sans compromettre votre garde"
      ],
      progression: "Objectif semaine 1: maîtriser la technique pure. Semaines suivantes: augmenter vitesse, précision et intégration dans les combinaisons."
    },
    "technique-du-direct-2-details": {
      title: "Technique du Direct (2) - Détails",
      objective: "Maîtriser le direct du poing arrière, coup puissant permettant d'attaquer à distance et de créer des ouvertures décisives.",
      duration: "30-45 minutes",
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Adoptez votre position de garde standard",
            "Poids réparti 60% sur jambe arrière, 40% sur jambe avant",
            "Les deux poings en position de garde correcte",
            "Regard fixé sur la cible (menton ou plexus)"
          ]
        },
        {
          name: "Mécanique du coup",
          steps: [
            "Pivot sur le pied arrière (talon se soulève, rotation sur la plante)",
            "Rotation de la hanche et de l'épaule arrière vers l'avant",
            "Extension du bras arrière en ligne droite vers la cible",
            "Rotation du poing à l'impact (paume vers le bas)",
            "Transfert du poids de l'arrière vers l'avant (60/40 → 40/60)"
          ]
        },
        {
          name: "Points techniques essentiels",
          steps: [
            "La puissance vient de la rotation du corps, pas seulement du bras",
            "Épaule arrière remontée pour protéger le menton pendant le coup",
            "Alignement du poing, du poignet et de l'avant-bras à l'impact",
            "Maintien de la main avant en position de garde pendant le coup",
            "Retour immédiat en position de garde initiale après l'impact"
          ]
        }
      ],
      drills: [
        {
          name: "Drill technique en 3 temps",
          steps: [
            "Temps 1: Pivot du pied et rotation de la hanche (sans bouger les bras)",
            "Temps 2: Ajoutez la rotation de l'épaule et l'extension partielle du bras",
            "Temps 3: Mouvement complet avec extension totale et rotation du poing"
          ]
        },
        {
          name: "Direct dans le vide",
          steps: [
            "5 séries de 15 directs lents, focus sur la technique parfaite",
            "5 séries de 15 directs à vitesse moyenne, maintien de la technique",
            "5 séries de 15 directs avec puissance, en gardant la précision"
          ]
        },
        {
          name: "Combinaison jab-direct",
          steps: [
            "Enchaînez jab suivi immédiatement du direct",
            "Travaillez le timing: le direct part quand le jab revient",
            "Maintenez l'équilibre pendant toute la combinaison",
            "Retournez en position de garde après la combinaison"
          ]
        }
      ],
      keyPoints: [
        "Respirez correctement: expirez fortement au moment de l'impact",
        "Gardez les épaules relâchées jusqu'au moment de l'impact",
        "Le direct est un coup rectiligne, pas un swing ou un crochet",
        "La distance est cruciale: travaillez votre perception de la portée"
      ],
      adaptation: [
        "Avec votre morphotype et vos longs bras:",
        "Augmentez légèrement la rotation du corps pour maximiser la puissance",
        "Travaillez particulièrement le retour en garde qui est plus lent avec des bras longs",
        "Utilisez votre allonge naturelle pour frapper à distance sans surexposer votre menton"
      ],
      progression: "Objectif semaine 1: maîtriser la technique pure. Semaines suivantes: augmenter puissance, vitesse et intégration dans des combinaisons plus complexes."
    },
    "shadowboxing-jab-direct-3x3min": {
      title: "Shadowboxing Jab-Direct - 3×3min",
      objective: "Intégrer les techniques du jab et du direct dans un travail d'ombre fluide pour développer coordination, timing et endurance spécifique.",
      duration: "15-20 minutes (échauffement inclus)",
      equipment: [
        "Chronomètre",
        "Espace dégagé de 2m × 2m minimum",
        "Miroir (idéalement)"
      ],
      structure: {
        rounds: 3,
        duration: "3 minutes par round",
        rest: "1 minute entre les rounds",
        focus: "Technique et fluidité plutôt que vitesse et puissance"
      },
      sequence: [
        {
          name: "Round 1: Basics",
          steps: [
            "Commencez en position de garde parfaite",
            "Travaillez uniquement le jab pendant 1 minute",
            "Intégrez le direct seul pendant 1 minute",
            "Alternez jab et direct sans combinaison pendant 1 minute",
            "Concentrez-vous sur la technique pure, sans vitesse excessive"
          ]
        },
        {
          name: "Round 2: Combinaisons simples",
          steps: [
            "Combinaison jab-direct (1-2) pendant 1 minute",
            "Combinaison jab-jab-direct (1-1-2) pendant 1 minute",
            "Combinaison jab-direct-jab (1-2-1) pendant 1 minute",
            "Ajoutez des déplacements simples (avant, arrière) entre les combinaisons"
          ]
        },
        {
          name: "Round 3: Déplacements et variations",
          steps: [
            "Combinaisons en avançant (pas traîné avant puis 1-2)",
            "Combinaisons en reculant (1-2 puis pas traîné arrière)",
            "Combinaisons avec décalage latéral (1-2 puis pas traîné côté)",
            "Enchaînements libres en variant puissance et vitesse"
          ]
        }
      ],
      keyPoints: [
        "Maintenez la position de garde entre les coups",
        "Respirez correctement (expiration à chaque coup)",
        "Variez le rythme et l'intensité",
        "Visualisez un adversaire et ses réactions",
        "Travaillez les feintes et les changements de niveau"
      ],
      adaptation: [
        "Pour votre niveau débutant, privilégiez la qualité à la quantité",
        "Avec votre morphotype, utilisez votre allonge naturelle à votre avantage",
        "Si vous vous sentez essoufflé, ralentissez le rythme mais maintenez la technique",
        "Face au miroir, vérifiez que votre menton reste protégé durant les frappes"
      ],
      progression: "Au fil des semaines, augmentez progressivement le nombre de rounds (jusqu'à 5×3min) et la complexité des combinaisons et déplacements."
    },
    "etirements-specifiques-boxe": {
      title: "Étirements Spécifiques Boxe",
      objective: "Améliorer la mobilité des articulations sollicitées en boxe, réduire les tensions musculaires et favoriser la récupération.",
      duration: "15-20 minutes",
      sequence: [
        {
          name: "Étirements du haut du corps",
          steps: [
            "Étirement des épaules: bras tendu devant vous, tirez-le contre votre poitrine avec l'autre bras (20s chaque côté)",
            "Étirement des triceps: bras plié derrière la tête, tirez le coude avec l'autre main (20s chaque côté)",
            "Étirement des pectoraux: bras en croix contre un mur ou un cadre de porte, tournez légèrement le buste (30s)",
            "Étirement des dorsaux: genoux au sol, bras tendus devant, abaissez le buste (30s)"
          ]
        },
        {
          name: "Étirements du tronc",
          steps: [
            "Rotation du buste: debout, mains sur les hanches, effectuez des rotations lentes (10 de chaque côté)",
            "Inclinaisons latérales: debout, un bras au-dessus de la tête, penchez-vous sur le côté (20s chaque côté)",
            "Étirement des obliques: assis, jambe croisée, tournez le buste (20s chaque côté)"
          ]
        },
        {
          name: "Étirements du bas du corps",
          steps: [
            "Étirement des quadriceps: debout, attrapez votre pied et ramenez-le vers les fessiers (20s chaque jambe)",
            "Étirement des ischio-jambiers: jambe tendue sur support, penchez-vous vers l'avant (30s chaque jambe)",
            "Étirement des adducteurs: en position de fente latérale, descendez progressivement (30s chaque côté)",
            "Étirement des mollets: en fente avant, talon arrière au sol, avancez le buste (20s chaque jambe)"
          ]
        },
        {
          name: "Relâchement final",
          steps: [
            "Position du cobra pour la mobilité dorsale (30s)",
            "Position de l'enfant pour détendre le dos (30s)",
            "Respirations profondes et relâchement mental (1 minute)"
          ]
        }
      ],
      keyPoints: [
        "Effectuez les étirements après l'entraînement, jamais à froid",
        "Maintenez chaque position sans rebondir",
        "Respirez profondément et régulièrement",
        "Allez jusqu'au point de tension, jamais jusqu'à la douleur",
        "Augmentez progressivement l'amplitude au fil des respirations"
      ],
      adaptation: [
        "Avec votre taille et vos longs membres, soyez particulièrement attentif à l'alignement postural",
        "Insistez sur les étirements des épaules et du dos pour maintenir une bonne mobilité de frappe",
        "Pour vos poignets et avant-bras, ajoutez des étirements spécifiques pour prévenir les blessures"
      ],
      progression: "Semaine après semaine, augmentez progressivement la durée des étirements statiques de 20s à 45s à mesure que votre souplesse s'améliore."
    },
    "squat-bulgare-3x12-par-jambe": {
      title: "Squat Bulgare 3×12 par jambe",
      objective: "Renforcer les jambes de manière unilatérale pour améliorer la stabilité, l'équilibre et la puissance des appuis en boxe.",
      equipment: [
        "Banc ou chaise stable (hauteur 40-50cm)",
        "Haltères (optionnel pour débuter, recommandé ensuite)",
        "Surface antidérapante"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Placez-vous debout à environ 60-70cm devant le banc",
            "Posez le dessus de votre pied arrière sur le banc",
            "Le pied avant est fermement ancré au sol, aligné vers l'avant",
            "Tenez les haltères le long du corps (ou mains sur les hanches pour débuter)",
            "Gardez le buste droit, les épaules en arrière, la tête droite"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Fléchissez la jambe avant en descendant verticalement",
            "Gardez le genou aligné avec le pied (pas d'effondrement vers l'intérieur)",
            "Descendez jusqu'à ce que la cuisse avant soit au moins parallèle au sol",
            "Poussez à travers le talon avant pour remonter à la position initiale",
            "Maintenez le buste droit tout au long du mouvement"
          ]
        },
        {
          name: "Respiration",
          steps: [
            "Inspirez pendant la descente",
            "Expirez pendant la montée (phase d'effort)"
          ]
        }
      ],
      structure: {
        series: 3,
        repetitions: "12 par jambe",
        rest: "60 secondes entre les séries (après avoir travaillé les deux jambes)",
        tempo: "2 secondes descente, 1 seconde pause bas, 2 secondes montée"
      },
      keyPoints: [
        "Concentrez-vous sur l'équilibre et la stabilité avant la charge",
        "Gardez le genou avant aligné avec le pied (pas de valgus)",
        "Contractez les abdominaux pour stabiliser le tronc",
        "Si vous ressentez une douleur au genou (pas une tension), ajustez la position"
      ],
      adaptation: [
        "Pour votre morphotype avec de longues jambes:",
        "Placez le pied avant légèrement plus loin devant vous",
        "Vous pourriez avoir besoin d'un support plus élevé pour le pied arrière",
        "Concentrez-vous particulièrement sur le maintien d'un dos droit"
      ],
      progression: [
        "Semaine 1: Sans poids ou avec poids légers pour maîtriser la technique",
        "Semaine 2: Ajoutez des haltères légers (5kg dans chaque main)",
        "Semaine 3: Augmentez la charge à 8-10kg par main",
        "Semaine 4: Testez votre force maximale avec des répétitions plus faibles"
      ]
    },
    "extensions-jambes-3x15": {
      title: "Extensions Jambes 3×15",
      objective: "Isoler et renforcer les quadriceps pour améliorer la stabilité du genou et la force explosive des jambes en boxe.",
      equipment: [
        "Machine d'extension des jambes",
        "Alternative: bande élastique résistante attachée à un point fixe"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Asseyez-vous sur la machine, dos bien calé contre le dossier",
            "Ajustez la position pour que l'axe de rotation soit aligné avec votre genou",
            "Placez vos pieds derrière le rouleau rembourré, prise à largeur de hanches",
            "Mains sur les poignées latérales pour stabiliser le haut du corps",
            "Angle initial du genou à environ 90°"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Étendez les jambes devant vous en contractant les quadriceps",
            "Étendez presque complètement sans verrouiller les genoux",
            "Maintenez brièvement la contraction à l'extension maximale",
            "Revenez lentement à la position initiale en contrôlant le mouvement",
            "Gardez les chevilles fléchies pendant tout le mouvement (orteils vers vous)"
          ]
        },
        {
          name: "Alternative avec bande élastique",
          steps: [
            "Asseyez-vous sur une chaise, attachez la bande élastique à un point fixe derrière vous",
            "Passez l'autre extrémité autour de vos chevilles",
            "Exécutez le même mouvement d'extension des jambes",
            "Augmentez la tension en vous éloignant du point d'ancrage"
          ]
        }
      ],
      structure: {
        series: 3,
        repetitions: 15,
        rest: "60-90 secondes entre les séries",
        tempo: "2 secondes montée, 1 seconde contraction, 3 secondes descente"
      },
      keyPoints: [
        "Concentrez-vous sur la qualité du mouvement plutôt que le poids",
        "Évitez de vous arc-bouter ou de soulever les fessiers du siège",
        "Contractez consciemment les quadriceps tout au long du mouvement",
        "Si vous ressentez une douleur au genou, réduisez l'amplitude ou le poids"
      ],
      adaptation: [
        "Pour votre morphotype avec de longues jambes:",
        "Ajustez soigneusement la machine à votre anatomie",
        "Vous pourriez avoir besoin de placer un coussin dans le dos pour un bon positionnement",
        "Privilégiez une exécution parfaite sur une amplitude complète plutôt que des charges lourdes"
      ],
      progression: [
        "Semaine 1: Poids modéré pour maîtriser la technique (50% de votre capacité estimée)",
        "Semaine 2: Augmentez légèrement le poids (60-65% de capacité)",
        "Semaine 3: Augmentez à 70-75% avec une exécution parfaite",
        "Semaine 4: Évaluez votre progression et ajustez en conséquence"
      ]
    },
    "souleve-de-terre-roumain-4x10": {
      title: "Soulevé de Terre Roumain 4×10",
      objective: "Renforcer les ischio-jambiers, les fessiers et le bas du dos pour améliorer la puissance de frappe et la stabilité en boxe.",
      equipment: [
        "Barre droite ou haltères",
        "Poids de départ recommandé: 40-50kg avec barre, ou 2×15kg avec haltères"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Tenez-vous debout, pieds écartés à largeur de hanches",
            "Tenez la barre ou les haltères devant vous, bras tendus",
            "Légère flexion des genoux (10-15°) à maintenir tout au long",
            "Épaules en arrière, dos droit, poitrine bombée",
            "Regard fixé droit devant, nuque alignée avec la colonne"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Poussez les hanches vers l'arrière en gardant le dos plat",
            "Descendez la barre/haltères en la(les) gardant proche(s) des jambes",
            "Continuez jusqu'à ressentir un étirement dans les ischio-jambiers",
            "Arrêtez la descente avant que le dos ne s'arrondisse (mi-cuisse environ)",
            "Contractez les fessiers pour revenir à la position initiale"
          ]
        },
        {
          name: "Points techniques essentiels",
          steps: [
            "Le mouvement est initié par les hanches, pas par les genoux",
            "Les genoux restent légèrement fléchis tout au long (angle constant)",
            "La barre/les haltères descendent et montent en ligne verticale",
            "Le dos reste plat ou légèrement cambré, jamais arrondi",
            "La tête reste alignée avec la colonne vertébrale"
          ]
        }
      ],
      structure: {
        series: 4,
        repetitions: 10,
        rest: "90 secondes entre les séries",
        tempo: "3 secondes descente, 1 seconde pause bas, 2 secondes montée"
      },
      keyPoints: [
        "Concentrez-vous sur l'étirement des ischio-jambiers",
        "Arrêtez la descente dès que vous sentez que votre dos commence à s'arrondir",
        "Respirez correctement: inspirez avant de descendre, expirez en remontant",
        "Gardez toujours la barre/les haltères près du corps"
      ],
      adaptation: [
        "Avec votre grande taille et vos longs bras:",
        "Vous pouvez descendre plus bas que la moyenne sans compromettre votre dos",
        "Assurez-vous de pousser suffisamment les hanches vers l'arrière",
        "Utilisez un miroir latéral pour vérifier votre posture au début"
      ],
      progression: [
        "Semaine 1: Maîtrisez la technique avec un poids modéré",
        "Semaine 2: Augmentez progressivement de 5-10% si la technique est parfaite",
        "Semaine 3: Continuez d'augmenter le poids tout en maintenant 10 répétitions propres",
        "Semaine 4: Testez votre progression avec une charge plus lourde sur moins de répétitions"
      ]
    },
    "mobilite-articulaire-20min": {
      title: "Mobilité Articulaire - 20min",
      objective: "Améliorer la mobilité des articulations clés pour la boxe, prévenir les blessures et optimiser l'amplitude des mouvements.",
      duration: "20 minutes",
      sequence: [
        {
          name: "Mobilité des épaules (5 minutes)",
          steps: [
            "Rotations des bras (10 avant, 10 arrière, 10 alternés)",
            "Circumductions des épaules (15 avant, 15 arrière)",
            "Wall slides: dos au mur, bras en 'W', glissez vers le haut (10 répétitions)",
            "Thread the needle: position quadrupédie, passez un bras sous l'autre (8 de chaque côté)",
            "Open book: allongé sur le côté, rotation du tronc et bras (10 de chaque côté)"
          ]
        },
        {
          name: "Mobilité de la hanche (5 minutes)",
          steps: [
            "Rotations des hanches (10 dans chaque sens)",
            "World's greatest stretch: position de fente basse avec rotation (8 de chaque côté)",
            "Fire hydrants: position quadrupédie, jambe levée sur le côté (12 de chaque côté)",
            "Hip circles: position debout sur une jambe, cercles avec le genou (10 par jambe)",
            "90/90 hip switch: transitions entre positions assises 90/90 (10 transitions)"
          ]
        },
        {
          name: "Mobilité de la colonne vertébrale (5 minutes)",
          steps: [
            "Cat-cow: alternance entre arrondi et cambré du dos (15 cycles)",
            "Thoracic bridge: allongé sur le côté, rotation du tronc avec bras tendu (8 de chaque côté)",
            "Spinal twist: assis jambes tendues, rotation du buste (8 de chaque côté)",
            "Scorpion: allongé sur le ventre, amenez pied vers main opposée (10 de chaque côté)",
            "Jefferson curl: flexion contrôlée vertèbre par vertèbre (8 répétitions)"
          ]
        },
        {
          name: "Mobilité des chevilles et poignets (5 minutes)",
          steps: [
            "Rotations des chevilles (20 dans chaque sens par cheville)",
            "Flexion dorsale active: genou au mur, talon au sol (30s par jambe)",
            "Alphabet avec les pieds: tracez les lettres avec vos orteils",
            "Rotations des poignets (20 dans chaque sens)",
            "Extension et flexion actives des poignets contre résistance légère (15 chaque)"
          ]
        }
      ],
      keyPoints: [
        "Effectuez tous les mouvements lentement et avec contrôle",
        "Respirez profondément tout au long des exercices",
        "Recherchez l'amplitude maximale sans douleur",
        "Progressez graduellement, n'essayez pas de forcer l'amplitude"
      ],
      adaptation: [
        "Pour votre morphotype avec de longs membres:",
        "Portez une attention particulière à la mobilité des épaules pour optimiser vos frappes",
        "Travaillez davantage la mobilité des hanches pour améliorer vos déplacements",
        "Les exercices de colonne vertébrale sont particulièrement importants pour éviter les tensions lombaires"
      ],
      progression: "Cette routine peut être maintenue tout au long du programme avec des augmentations progressives d'amplitude et de complexité des mouvements."
    },
    "preparation-seance-club-conseils": {
      title: "Préparation Séance Club - Conseils",
      objective: "Optimiser votre première séance au club de boxe en arrivant préparé mentalement et physiquement.",
      duration: "Préparation avant de partir au club",
      sequence: [
        {
          name: "Préparation mentale",
          steps: [
            "Définissez 2-3 objectifs précis pour votre séance (ex: travailler votre jab, comprendre les déplacements)",
            "Visualisez-vous en train de réussir ces objectifs pendant 3-5 minutes",
            "Adoptez une mentalité d'apprentissage: vous êtes là pour apprendre, pas pour impressionner",
            "Acceptez par avance que vous ferez des erreurs, c'est normal et nécessaire pour progresser"
          ]
        },
        {
          name: "Préparation physique",
          steps: [
            "Assurez-vous d'être bien hydraté (buvez 500ml d'eau 1h avant)",
            "Mangez léger 1h30-2h avant (privilégiez les glucides complexes et protéines légères)",
            "Préparez votre sac avec tout le matériel nécessaire",
            "Échauffez-vous légèrement avant de partir (mobilité articulaire basique)"
          ]
        },
        {
          name: "Matériel à préparer",
          steps: [
            "Gants de boxe (le club peut en prêter, mais amenez les vôtres si possible)",
            "Bandes de maintien pour les poignets",
            "Protège-dents (fortement recommandé même pour les débutants)",
            "Tenue: t-shirt respirant, short ou jogging, chaussures légères à semelle plate",
            "Serviette et bouteille d'eau"
          ]
        },
        {
          name: "Attitude à adopter",
          steps: [
            "Arrivez 15 minutes en avance pour vous présenter à l'entraîneur",
            "Mentionnez votre niveau (débutant) et vos objectifs (esthétique + kick-boxing)",
            "Écoutez attentivement les instructions et n'hésitez pas à poser des questions",
            "Respectez les autres pratiquants et les règles du club",
            "Donnez votre maximum mais respectez vos limites"
          ]
        }
      ],
      keyPoints: [
        "Première impression: soyez humble, respectueux et démontrez votre volonté d'apprendre",
        "Technique: concentrez-vous sur la qualité d'exécution plutôt que la puissance",
        "Communication: n'hésitez pas à signaler si quelque chose n'est pas clair",
        "Endurance: gérez votre énergie, la première séance peut être éprouvante"
      ],
      adaptation: [
        "Avec votre morphotype de grand gabarit avec longs bras:",
        "Mentionnez-le à l'entraîneur qui pourra adapter ses conseils",
        "Soyez particulièrement attentif aux conseils sur la garde (souvent plus haute pour les grands)",
        "Vous aurez un avantage d'allonge, mais attention à ne pas trop vous pencher en avant"
      ],
      followUp: "Après la séance, prenez 5 minutes pour noter dans votre journal les points clés appris et vos impressions."
    },
    "cours-au-club-de-boxe": {
      title: "Cours au Club de Boxe",
      objective: "Participer activement à votre séance hebdomadaire au club pour bénéficier de l'expertise d'un entraîneur et progresser techniquement.",
      duration: "60-90 minutes (selon le club)",
      sequence: [
        {
          name: "Arrivée et installation",
          steps: [
            "Arrivez 15 minutes avant le début du cours",
            "Présentez-vous à l'entraîneur si c'est votre première fois",
            "Mettez en place votre équipement (bandes, gants)",
            "Effectuez quelques mouvements de mobilité si l'échauffement n'a pas encore commencé"
          ]
        },
        {
          name: "Participation active",
          steps: [
            "Suivez attentivement les instructions de l'entraîneur",
            "Concentrez-vous sur l'exécution technique plutôt que sur la puissance",
            "Observez les pratiquants plus expérimentés pour apprendre",
            "Posez des questions pertinentes pendant les pauses",
            "Hydratez-vous régulièrement entre les exercices"
          ]
        },
        {
          name: "Points d'attention spécifiques",
          steps: [
            "Portez une attention particulière aux corrections sur votre garde et vos déplacements",
            "Demandez des conseils spécifiques sur les techniques travaillées cette semaine",
            "Si possible, faites valider votre exécution du jab et du direct",
            "Sollicitez des retours sur vos points forts et axes d'amélioration"
          ]
        },
        {
          name: "Fin de séance",
          steps: [
            "Participez activement à la phase d'étirements et de retour au calme",
            "Remerciez votre entraîneur et vos partenaires",
            "Prenez quelques notes mentales sur les points clés à retenir",
            "Hydratez-vous et récupérez avant de rentrer"
          ]
        }
      ],
      keyPoints: [
        "Respectez le protocole et l'étiquette du club",
        "Soyez à l'écoute de votre corps pour éviter les blessures",
        "Adaptez l'intensité selon votre niveau actuel",
        "Intégrez les corrections techniques immédiatement"
      ],
      adaptation: [
        "Utilisez cette séance hebdomadaire pour poser des questions sur les exercices que vous pratiquez seul",
        "N'hésitez pas à mentionner votre objectif de transition vers le kick-boxing",
        "Demandez des conseils spécifiques pour votre morphotype (grand avec longs bras)"
      ]
    },
    "journal-entrainement": {
      title: "Journal d'Entraînement",
      objective: "Consigner vos progrès, observations et points techniques pour analyser votre évolution et planifier efficacement.",
      duration: "10-15 minutes après chaque séance importante",
      structure: {
        section1: "Informations générales (date, type d'entraînement, durée)",
        section2: "Contenu de la séance (exercices, séries, répétitions, poids)",
        section3: "Sensations et observations techniques",
        section4: "Points à améliorer",
        section5: "Objectifs pour la prochaine séance"
      },
      sequence: [
        {
          name: "Remplir les informations générales",
          steps: [
            "Date et heure de la séance",
            "Type d'entraînement (boxe, musculation, mixte)",
            "Durée totale",
            "Niveau d'énergie avant séance (1-10)",
            "Niveau de fatigue après séance (1-10)"
          ]
        },
        {
          name: "Détailler le contenu technique",
          steps: [
            "Techniques travaillées (jab, direct, déplacements, etc.)",
            "Combinaisons pratiquées",
            "Nouveaux éléments appris",
            "Corrections reçues par l'entraîneur",
            "Exercices spécifiques et leurs paramètres"
          ]
        },
        {
          name: "Analyser vos sensations",
          steps: [
            "Points forts de la séance",
            "Difficultés rencontrées",
            "Sensations physiques (tensions, douleurs, facilités)",
            "État mental durant l'entraînement",
            "Progrès ressentis par rapport aux séances précédentes"
          ]
        },
        {
          name: "Identifier les axes d'amélioration",
          steps: [
            "Aspects techniques à travailler",
            "Limitations physiques à adresser",
            "Éléments à clarifier avec l'entraîneur",
            "Ajustements nécessaires pour la prochaine séance"
          ]
        },
        {
          name: "Définir les objectifs",
          steps: [
            "1-3 objectifs spécifiques pour la prochaine séance",
            "Moyens concrets pour atteindre ces objectifs",
            "Objectifs à moyen terme (semaine/mois)"
          ]
        }
      ],
      keyPoints: [
        "Soyez honnête dans vos évaluations",
        "Incluez des détails spécifiques plutôt que des généralités",
        "Consignez à la fois les aspects positifs et négatifs",
        "Relisez régulièrement vos entrées précédentes pour mesurer vos progrès",
        "Utilisez des photos ou vidéos pour compléter vos notes"
      ],
      adaptation: {
        digital: "Application de prise de notes ou tableur (avantages: recherche, organisation)",
        analog: "Carnet dédié (avantages: pas de distractions, simplicité)",
        template: "Créez un modèle standard pour faciliter la saisie et la comparaison"
      },
      example: "Jeudi 18/04/2025 - Club de boxe - 90min - Énergie pré: 8/10 - Fatigue post: 7/10. Techniques travaillées: jab, direct, esquive rotative. Points forts: timing du jab amélioré. À améliorer: rotation des hanches sur le direct. Conseil entraîneur: garder le menton baissé lors des esquives. Objectif prochain cours: améliorer la coordination jab-direct."
    },
    "developpe-couche-4x8": {
      title: "Développé Couché 4×8",
      objective: "Développer la force et la masse musculaire des pectoraux, épaules et triceps pour augmenter la puissance des coups directs.",
      equipment: [
        "Banc de développé couché",
        "Barre droite et disques",
        "Poids recommandé: 70-75% de votre 1RM (environ 55-60kg pour débuter)"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Allongez-vous sur le banc, pieds à plat sur le sol",
            "Positionnez vos yeux sous la barre",
            "Saisissez la barre à une largeur légèrement supérieure à la largeur des épaules",
            "Rétractez vos omoplates pour créer une base stable",
            "Léger arc lombaire naturel (pas excessif)"
          ]
        },
        {
          name: "Descente contrôlée",
          steps: [
            "Décollez la barre des supports en tendant les bras",
            "Inspirez et descendez la barre en contrôle vers le milieu de la poitrine",
            "Maintenez les coudes à environ 45-60° par rapport au corps (pas à 90°)",
            "Touchez légèrement la poitrine (sternum) avec la barre",
            "Gardez les poignets droits et solides"
          ]
        },
        {
          name: "Poussée",
          steps: [
            "Poussez la barre vers le haut en suivant une légère courbe en J",
            "Expirez pendant l'effort",
            "Contractez les pectoraux, les épaules et les triceps",
            "Poussez jusqu'à l'extension des bras sans verrouiller les coudes",
            "Maintenez la contraction une seconde au sommet"
          ]
        }
      ],
      structure: {
        series: 4,
        repetitions: 8,
        rest: "2 minutes entre les séries",
        warmup: "2-3 séries d'échauffement avec poids progressifs"
      },
      keyPoints: [
        "Maintenir une trajectoire constante à chaque répétition",
        "Garder les pieds fermement ancrés au sol pour la stabilité",
        "Contracter les fessiers et les abdominaux pour stabiliser le tronc",
        "Garder les épaules basses et en arrière (pas de haussement)",
        "Focaliser sur la contraction des pectoraux, pas juste sur le mouvement"
      ],
      adaptation: [
        "Avec vos longs bras, vous aurez une amplitude plus importante:",
        "Contrôlez particulièrement la phase de descente",
        "Une prise légèrement plus large peut être plus confortable pour vos épaules",
        "Soyez attentif à toucher toujours au même point sur votre poitrine"
      ],
      progression: [
        "Semaine 1: Maîtrisez la technique avec un poids modéré",
        "Semaine 2: Augmentez le poids de 2.5-5kg si toutes les répétitions sont complètes",
        "Semaine 3: Visez 5×8 avec le même poids",
        "Semaine 4: Test de force maximale pour évaluer les progrès"
      ],
      safety: "Utilisez toujours un pareur pour les séries lourdes ou demandez à quelqu'un de vous surveiller. Ne jamais hésiter à demander de l'aide si une répétition devient trop difficile."
    },
    "rowing-haltere-3x10-par-bras": {
      title: "Rowing Haltère 3×10 par bras",
      objective: "Développer les muscles du dos de manière unilatérale pour améliorer l'équilibre musculaire et la stabilité dans les coups de boxe.",
      equipment: [
        "Un haltère (15-20kg pour débuter)",
        "Un banc ou une plateforme stable"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Placez un genou et la main du même côté sur le banc",
            "Le pied de l'autre jambe est fermement au sol",
            "Saisissez l'haltère avec la main libre",
            "Dos plat et parallèle au sol, tête dans l'alignement de la colonne",
            "Haltère suspendu à bout de bras, épaule légèrement étirée"
          ]
        },
        {
          name: "Mouvement",
          steps: [
            "Inspirez et tirez l'haltère vers le haut, coude serré près du corps",
            "Montez l'haltère jusqu'à ce que votre coude dépasse légèrement votre dos",
            "Contractez l'omoplate à la fin du mouvement",
            "Maintenez une seconde en position haute",
            "Redescendez l'haltère en contrôle jusqu'à l'extension complète du bras"
          ]
        },
        {
          name: "Points techniques essentiels",
          steps: [
            "Gardez le dos parfaitement immobile (pas de rotation)",
            "Tirez avec le coude, pas avec la main",
            "Maintenez le poignet droit et solide",
            "Contractez consciemment les muscles du dos",
            "Gardez une respiration régulière (expiration à l'effort)"
          ]
        }
      ],
      structure: {
        series: 3,
        repetitions: "10 par bras",
        rest: "60 secondes entre les bras, 90 secondes entre les séries",
        tempo: "2 secondes montée, 1 seconde contraction, 3 secondes descente"
      },
      keyPoints: [
        "Concentrez-vous sur la qualité du mouvement, pas le poids",
        "Visez une contraction maximale du grand dorsal et des rhomboïdes",
        "Évitez d'utiliser l'élan ou de balancer le torse",
        "Variante avancée: rotation du poignet pendant la montée pour activer différentes fibres musculaires"
      ],
      adaptation: [
        "Avec votre morphotype et vos longs bras:",
        "Assurez-vous que votre banc est suffisamment haut",
        "Vous bénéficierez d'une amplitude complète, exploitez-la",
        "Contrôlez particulièrement la phase de descente qui sera plus longue"
      ],
      progression: [
        "Semaine 1: Établissez la technique parfaite avec un poids modéré",
        "Semaine 2: Augmentez le poids de 2.5kg si la technique est maîtrisée",
        "Semaine 3: Expérimentez avec des techniques d'intensification comme les répétitions partielles",
        "Semaine 4: Évaluez vos progrès et ajustez le poids en conséquence"
      ]
    },
    "dips-3xmax": {
      title: "Dips 3×Max",
      objective: "Renforcer les triceps, les pectoraux inférieurs et les épaules pour améliorer la puissance d'extension des bras lors des directs et crochets.",
      equipment: [
        "Barres parallèles ou chaises robustes",
        "Support de poids (chaîne ou ceinture) pour progression future"
      ],
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Saisissez les barres parallèles avec une prise ferme",
            "Bras tendus, épaules basses (pas haussées vers les oreilles)",
            "Corps droit, abdominaux contractés",
            "Jambes légèrement fléchies ou croisées selon votre préférence",
            "Poitrine légèrement inclinée vers l'avant (15-20°) pour plus d'activation des pectoraux"
          ]
        },
        {
          name: "Descente",
          steps: [
            "Inspirez et fléchissez les coudes pour descendre le corps",
            "Gardez les coudes près du corps (pas écartés)",
            "Descendez jusqu'à ce que les coudes atteignent environ 90°",
            "Maintenez les épaules basses et engagées (pas de haussement)",
            "Contrôlez la descente sans rebondir en bas"
          ]
        },
                {
          name: "Remontée",
          steps: [
            "Poussez sur les barres en étendant les coudes",
            "Expirez pendant l'effort de poussée",
            "Contractez consciemment les triceps pendant la montée",
            "Revenez à la position initiale sans verrouiller complètement les coudes",
            "Enchaînez directement la répétition suivante sans pause en haut"
          ]
        },
        {
          name: "Variante pour débutants",
          steps: [
            "Utilisez un support pour les pieds pour réduire la charge",
            "Pliez davantage les genoux pour ajuster la difficulté",
            "Réduisez l'amplitude si nécessaire en début de progression",
            "Visez 8-12 répétitions avec assistance plutôt que 3-5 sans"
          ]
        }
      ],
      structure: {
        series: 3,
        repetitions: "Maximum (visez 8-12 répétitions)",
        rest: "90-120 secondes entre les séries",
        tempo: "2 secondes descente, 1 seconde pause bas, 1 seconde montée"
      },
      keyPoints: [
        "La qualité prime sur la quantité de répétitions",
        "Évitez de balancer le corps pour faciliter le mouvement",
        "Arrêtez la série dès que la technique se dégrade",
        "Focalisez-vous sur la contraction des triceps"
      ],
      adaptation: [
        "Avec votre morphotype et vos longs bras:",
        "L'amplitude de mouvement sera plus importante, contrôlez bien la descente",
        "Vous pourriez ressentir plus de tension aux épaules - ne descendez pas trop bas au début",
        "Avancez légèrement le buste pour réduire la tension sur les épaules si nécessaire"
      ],
      progression: [
        "Semaine 1: Établissez votre maximum de répétitions avec technique parfaite",
        "Semaine 2: Visez 1-2 répétitions de plus par série",
        "Semaine 3: Tentez d'atteindre 3 séries de 12+ répétitions",
        "Semaine 4+: Commencez à ajouter du poids si vous dépassez 15 répétitions par série"
      ]
    },
    "circuit-explosif-boxeur-4-tours": {
      title: "Circuit Explosif Boxeur - 4 tours",
      objective: "Développer la puissance explosive, l'endurance spécifique à la boxe et la coordination neuromusculaire.",
      duration: "20-25 minutes",
      equipment: [
        "Corde à sauter",
        "Medicine ball léger (3-5kg)",
        "Surface dégagée",
        "Chronomètre"
      ],
      sequence: [
        {
          name: "Burpees Shadow-boxing",
          duration: "45 secondes",
          steps: [
            "Effectuez un burpee complet",
            "À la position debout, enchaînez 4 coups rapides (jab-direct-jab-direct)",
            "Retournez immédiatement au burpee suivant",
            "Maintenez un rythme régulier et explosif"
          ]
        },
        {
          name: "Pompes explosives",
          duration: "45 secondes",
          steps: [
            "Position de pompe classique",
            "Descendez en contrôle",
            "Poussez de façon explosive pour que les mains quittent légèrement le sol",
            "Réceptionnez doucement et enchaînez la répétition suivante"
          ]
        },
        {
          name: "Rotation explosive avec medicine ball",
          duration: "45 secondes",
          steps: [
            "Position de garde, pieds écartés largeur d'épaules",
            "Tenez le medicine ball à hauteur de poitrine",
            "Effectuez une rotation explosive du tronc d'un côté",
            "Revenez au centre puis répétez de l'autre côté",
            "Simulez la rotation du corps lors d'un crochet"
          ]
        },
        {
          name: "Mountain climbers rapides",
          duration: "45 secondes",
          steps: [
            "Position de gainage sur les mains",
            "Alternez rapidement les genoux vers la poitrine",
            "Gardez les hanches stables et basses",
            "Maintenez un rythme rapide et constant"
          ]
        },
        {
          name: "Récupération active",
          duration: "30 secondes",
          steps: [
            "Marche sur place",
            "Secouez les bras pour relâcher la tension",
            "Respirations profondes",
            "Préparez-vous mentalement pour le prochain tour"
          ]
        }
      ],
      structure: {
        rounds: 4,
        exercise: "45 secondes par exercice",
        rest: "15 secondes entre les exercices, 30 secondes entre les tours",
        intensity: "80-90% de l'effort maximal"
      },
      keyPoints: [
        "Gardez une technique correcte même sous fatigue",
        "Respirez régulièrement, ne retenez pas votre souffle",
        "Adaptez l'intensité si nécessaire, mais poussez vos limites",
        "Concentrez-vous sur l'explosivité des mouvements"
      ],
      adaptation: [
        "Pour votre niveau débutant:",
        "Commencez avec 3 tours si nécessaire",
        "Réduisez la durée à 30 secondes par exercice si 45 secondes est trop intense",
        "Augmentez progressivement l'intensité au fil des semaines"
      ],
      progression: [
        "Semaine 2: Augmentez à 5 tours",
        "Semaine 3: Augmentez à 50 secondes d'effort, 10 secondes de repos",
        "Semaine 4: Ajoutez des variations plus complexes aux exercices",
        "Semaines 5+: Incorporez des poids ou résistances supplémentaires"
      ]
    },
    "techniques-defensives-esquives-laterales": {
      title: "Techniques Défensives - Esquives Latérales",
      objective: "Maîtriser les esquives latérales pour éviter les coups directs tout en restant en position de contre-attaque.",
      duration: "30-40 minutes",
      sequence: [
        {
          name: "Principes fondamentaux",
          steps: [
            "L'esquive latérale permet d'éviter principalement les coups droits (jab/direct)",
            "Elle consiste à déplacer la tête sur le côté tout en gardant les pieds ancrés",
            "La position de garde est maintenue pendant toute l'esquive",
            "Elle doit être courte et contrôlée, sans déséquilibre"
          ]
        },
        {
          name: "Esquive vers l'extérieur (côté avant)",
          steps: [
            "Partez de la position de garde",
            "Fléchissez légèrement les genoux pour abaisser votre centre de gravité",
            "Inclinez le buste vers votre côté avant (gauche pour un droitier)",
            "Déplacez la tête juste assez pour éviter un coup droit imaginaire",
            "Gardez les deux pieds ancrés au sol et les mains en position de garde",
            "Revenez immédiatement en position de garde après l'esquive"
          ]
        },
        {
          name: "Esquive vers l'intérieur (côté arrière)",
          steps: [
            "Partez de la position de garde",
            "Fléchissez légèrement les genoux",
            "Inclinez le buste vers votre côté arrière (droite pour un droitier)",
            "Cette esquive est plus risquée car vous vous déplacez vers le côté puissant de l'adversaire",
            "Gardez particulièrement votre main avant haute pour vous protéger",
            "Revenez rapidement en position de garde"
          ]
        },
        {
          name: "Drill d'esquive latérale",
          steps: [
            "Face à un miroir, simulez un jab adverse en avançant légèrement",
            "Pratiquez l'esquive vers l'extérieur, vérifiez votre équilibre et garde",
            "Répétez 20 fois lentement, puis 20 fois à vitesse moyenne",
            "Faites de même avec l'esquive vers l'intérieur",
            "Combinez les deux directions de manière aléatoire"
          ]
        },
        {
          name: "Contre-attaque après esquive",
          steps: [
            "Esquive vers l'extérieur suivie d'un crochet du côté opposé",
            "Esquive vers l'intérieur suivie d'un crochet du même côté",
            "Pratiquez le timing: l'esquive et la contre-attaque doivent former un mouvement fluide",
            "Commencez lentement puis augmentez progressivement la vitesse"
          ]
        }
      ],
      keyPoints: [
        "Ne vous penchez pas trop, juste assez pour éviter le coup",
        "Gardez toujours les yeux sur votre adversaire imaginaire",
        "Restez sur vos appuis, prêt à contre-attaquer ou à bouger",
        "L'esquive doit être un mouvement économique, pas exagéré"
      ],
      adaptation: [
        "Avec votre grande taille:",
        "Vous devrez peut-être vous baisser davantage pour éviter les coups",
        "Travaillez particulièrement votre stabilité lors des esquives",
        "Utilisez vos longs bras pour contre-attaquer efficacement après l'esquive"
      ],
      progression: [
        "Semaine 1-2: Maîtrisez la technique pure sans contre-attaque",
        "Semaine 3-4: Intégrez les contre-attaques et travaillez le timing",
        "Semaine 5+: Ajoutez des enchaînements défense-attaque complexes"
      ]
    },
    "technique-du-crochet-avant-3-details": {
      title: "Technique du Crochet Avant (3) - Détails",
      objective: "Maîtriser le crochet du poing avant, coup puissant à mi-distance permettant de contourner la garde adverse.",
      duration: "30-45 minutes",
      execution: [
        {
          name: "Position initiale",
          steps: [
            "Adoptez votre position de garde standard",
            "Poids légèrement plus équilibré (50/50) ou transféré vers l'avant",
            "Fléchissez légèrement les genoux pour plus de stabilité",
            "Gardez le buste légèrement tourné comme en position de garde"
          ]
        },
        {
          name: "Mécanique du coup",
          steps: [
            "Pivotez légèrement sur le pied avant (environ 45°)",
            "Rotation de la hanche et de l'épaule avant",
            "Pliez le coude à environ 90° et maintenez cet angle",
            "Effectuez un mouvement horizontal avec le bras avant",
            "À l'impact, le poing est orienté paume vers le bas ou vers soi",
            "Le coude est à la même hauteur que le poing"
          ]
        },
        {
          name: "Points techniques essentiels",
          steps: [
            "La puissance vient de la rotation du corps, pas seulement du bras",
            "Le coup est horizontal, pas diagonal ni ascendant",
            "Le poing voyage sur un arc de cercle, pas en ligne droite",
            "Gardez la main arrière en position de garde pour vous protéger",
            "Maintenez votre menton protégé par l'épaule avant pendant le coup"
          ]
        }
      ],
      drills: [
        {
          name: "Drill technique en miroir",
          steps: [
            "Face au miroir, exécutez le mouvement au ralenti en observant chaque détail",
            "Vérifiez la rotation du pied, de la hanche et de l'épaule",
            "Contrôlez que votre coude reste à 90° pendant tout le mouvement",
            "Assurez-vous que votre main arrière reste en position de garde"
          ]
        },
        {
          name: "Crochet avant dans le vide",
          steps: [
            "5 séries de 15 crochets lents, focus sur la technique parfaite",
            "5 séries de 15 crochets à vitesse moyenne, maintien de la technique",
            "5 séries de 15 crochets avec puissance, en gardant la précision"
          ]
        },
        {
          name: "Drill d'enchaînement",
          steps: [
            "Pratiquez la combinaison jab-crochet avant (1-3)",
            "Travaillez sur la fluidité de la transition entre les deux coups",
            "Assurez-vous de ne pas télégraphier le crochet après le jab",
            "Variez la vitesse et la puissance de l'enchaînement"
          ]
        }
      ],
      keyPoints: [
        "Ne balancez pas le corps lors du crochet, restez équilibré",
        "Respirez correctement: expirez brièvement pendant l'exécution du coup",
        "Le crochet est un coup de proximité, exécutez-le à la bonne distance",
        "Ramenez rapidement le poing en position de garde après le coup"
      ],
      adaptation: [
        "Avec vos longs bras:",
        "Veillez à bien plier le coude pour un crochet compact et efficace",
        "Concentrez-vous particulièrement sur la rotation de la hanche pour générer de la puissance",
        "Travaillez le positionnement pour ne pas vous retrouver trop près ni trop loin de la cible"
      ],
      progression: "Objectif semaine 1: maîtriser la technique pure. Semaines suivantes: intégrer le crochet avant dans des combinaisons plus complexes et améliorer sa puissance et sa précision."
    },
    "travail-au-sac-jab-direct-5x2min": {
      title: "Travail au Sac - Jab/Direct - 5×2min",
      objective: "Développer la technique, la précision et l'endurance spécifique en appliquant le jab et le direct sur une cible résistante.",
      duration: "20-25 minutes (échauffement et récupération inclus)",
      equipment: [
        "Sac de frappe lourd",
        "Gants de boxe",
        "Bandes de maintien",
        "Chronomètre"
      ],
      structure: {
        rounds: 5,
        duration: "2 minutes par round",
        rest: "1 minute entre les rounds",
        focus: "Technique et précision plutôt que puissance brute"
      },
      sequence: [
        {
          name: "Round 1: Jab isolé",
          steps: [
            "Travaillez uniquement le jab pendant 2 minutes",
            "Variez la puissance (30% léger, 60% moyen, 90% puissant)",
            "Alternez jab au visage et jab au corps",
            "Travaillez les déplacements (avant, arrière) combinés au jab",
            "Concentrez-vous sur la précision et le retour en garde"
          ]
        },
        {
          name: "Round 2: Direct isolé",
          steps: [
            "Travaillez uniquement le direct pendant 2 minutes",
            "Insistez sur la rotation de la hanche et l'engagement du corps",
            "Variez la puissance comme pour le jab",
            "Alternez direct au visage et direct au corps",
            "Vérifiez que votre main avant reste en position de garde"
          ]
        },
        {
          name: "Round 3: Combinaison jab-direct (1-2)",
          steps: [
            "Enchaînez systématiquement jab-direct",
            "Travaillez le timing: le direct part quand le jab revient",
            "Variez la puissance de chaque coup dans la combinaison",
            "Ajoutez des déplacements après la combinaison",
            "30 dernières secondes: combinaisons à cadence élevée"
          ]
        },
        {
          name: "Round 4: Combinaisons avancées",
          steps: [
            "Jab-jab-direct (1-1-2)",
            "Jab-direct-jab (1-2-1)",
            "Direct-jab (2-1)",
            "Alternez ces combinaisons de façon fluide",
            "Dernière minute: travaillez à rythme élevé"
          ]
        },
        {
          name: "Round 5: Round libre jab/direct",
          steps: [
            "Utilisez tous les coups et combinaisons travaillés",
            "Visualisez un adversaire qui vous attaque/recule",
            "Variez distance, angle et déplacements",
            "Finissez par 30 secondes d'intensité maximale"
          ]
        }
      ],
      keyPoints: [
        "Maintenez votre distance appropriée par rapport au sac",
        "Frappez avec les deux premières jointures des poings",
        "Gardez les poignets alignés lors de l'impact",
        "Respirez rythmiquement (expiration brève à chaque coup)",
        "Gardez toujours votre garde haute entre les frappes"
      ],
      adaptation: [
        "Avec votre taille et allonge:",
        "Travaillez à exploiter votre distance optimale (plus grande que la moyenne)",
        "Concentrez-vous sur l'extension complète du jab sans compromettre votre équilibre",
        "Pour le direct, insistez sur la rotation complète pour maximiser la puissance"
      ],
      progression: [
        "Semaine 2: Augmentez à 6×2min avec combinaisons plus variées",
        "Semaine 3: Intégrez des déplacements plus complexes avec les combinaisons",
        "Semaine 4-5: Ajoutez des changements de rythme et des feintes",
        "Semaine 6+: Travaillez des scénarios spécifiques (contre-attaque, pressing, etc.)"
      ]
    },
    "exercice-de-reflexes-balle-tennis": {
      title: "Exercice de Réflexes - Balle Tennis",
      objective: "Améliorer les réflexes, le temps de réaction et la coordination œil-main essentiels pour la défense en boxe.",
      duration: "15-20 minutes",
      equipment: [
        "Balle de tennis (ou petite balle rebondissante)",
        "Mur ou surface dure pour les rebonds",
        "Espace dégagé d'environ 2m × 2m"
      ],
      sequence: [
        {
          name: "Échauffement - Familiarisation",
          duration: "3 minutes",
          steps: [
            "Lancez doucement la balle contre le mur et attrapez-la à deux mains",
            "Variez la force et l'angle des lancers",
            "Habituez-vous au rebond et au timing",
            "Augmentez progressivement la vitesse des lancers"
          ]
        },
        {
          name: "Drill de base - Une main",
          duration: "5 minutes",
          steps: [
            "Position de garde de boxe",
            "Lancez la balle avec votre main avant contre le mur",
            "Attrapez-la avec la même main tout en maintenant la position de garde",
            "Alternez entre main avant et main arrière",
            "Conservez une position de garde correcte pendant tout l'exercice"
          ]
        },
        {
          name: "Drill avancé - Alternance des mains",
          duration: "5 minutes",
          steps: [
            "Position de garde de boxe",
            "Lancez la balle avec votre main avant",
            "Attrapez-la avec votre main arrière",
            "Relancez avec votre main arrière",
            "Attrapez avec votre main avant",
            "Continuez cette alternance en maintenant un rythme fluide"
          ]
        },
        {
          name: "Drill défensif",
          duration: "5 minutes",
          steps: [
            "Demandez à un partenaire de lancer la balle vers vous (ou lancez-la vous-même contre le mur)",
            "Au lieu d'attraper la balle, esquivez-la ou déviez-la légèrement avec votre gant",
            "Pratiquez différentes techniques défensives (esquive latérale, blocages)",
            "Revenez immédiatement en position de garde après chaque esquive",
            "Augmentez progressivement la vitesse des lancers"
          ]
        }
      ],
      keyPoints: [
        "Restez léger sur vos appuis pendant tout l'exercice",
        "Gardez votre garde haute même lorsque vous attrapez la balle",
        "Respirez normalement, ne retenez pas votre souffle",
        "Concentrez-vous sur la réaction rapide et non sur la force"
      ],
      adaptation: [
        "Si l'exercice est trop facile, réduisez la distance au mur",
        "Si c'est trop difficile, augmentez légèrement la distance",
        "Pour un défi supplémentaire, utilisez des balles de différentes tailles",
        "Variante avancée: lancez deux balles simultanément pour un défi extrême"
      ],
      progression: [
        "Semaine 1-2: Maîtrisez les exercices de base",
        "Semaine 3-4: Intégrez des mouvements de pieds pendant les exercices",
        "Semaine 5-6: Combinez avec des frappes entre les attrapes",
        "Semaine 7+: Travaillez avec des lancers irréguliers ou multiples"
      ]
    },
    "preparation-mentale-visualisation": {
      title: "Préparation Mentale - Visualisation",
      objective: "Développer la capacité de visualisation pour améliorer l'exécution technique, la confiance et la concentration en boxe.",
      duration: "15-20 minutes",
      sequence: [
        {
          name: "Installation",
          duration: "2-3 minutes",
          steps: [
            "Trouvez un endroit calme où vous ne serez pas dérangé",
            "Asseyez-vous confortablement ou allongez-vous",
            "Fermez les yeux et prenez plusieurs respirations profondes",
            "Relâchez consciemment les tensions musculaires",
            "Concentrez-vous uniquement sur votre respiration pendant quelques instants"
          ]
        },
        {
          name: "Visualisation technique",
          duration: "5-7 minutes",
          steps: [
            "Imaginez-vous en train d'exécuter parfaitement les techniques apprises (jab, direct)",
            "Visualisez chaque détail: position des pieds, rotation des hanches, mouvement des bras",
            "Ressentez les sensations physiques comme si vous exécutiez réellement les mouvements",
            "Visualisez-vous en train de corriger des erreurs techniques spécifiques",
            "Répétez mentalement 10-15 fois chaque technique en la perfectionnant"
          ]
        },
        {
          name: "Visualisation tactique",
          duration: "5-7 minutes",
          steps: [
            "Imaginez-vous face à un adversaire",
            "Visualisez différentes situations: adversaire qui avance, qui recule, qui est plus grand/petit",
            "Imaginez vos réactions optimales à chaque situation",
            "Visualisez-vous en train d'appliquer les combinaisons apprises de manière efficace",
            "Ressentez la satisfaction de réussir vos enchaînements et votre timing"
          ]
        },
        {
          name: "Visualisation de performance",
          duration: "3-5 minutes",
          steps: [
            "Imaginez-vous atteignant vos objectifs spécifiques",
            "Visualisez-vous avec les qualités d'un boxeur accompli: rapide, précis, puissant",
            "Ressentez les émotions positives: confiance, détermination, concentration",
            "Visualisez-vous surmontant des difficultés avec calme et maîtrise",
            "Terminez par l'image de vous-même ayant atteint le niveau souhaité"
          ]
        }
      ],
      keyPoints: [
        "Impliquez tous vos sens dans la visualisation (vue, ouïe, ressenti physique)",
        "Soyez aussi précis et détaillé que possible",
        "Maintenez une attitude positive tout au long de l'exercice",
        "Pratiquez régulièrement pour améliorer votre capacité de visualisation",
        "Associez des mots-clés ou des sensations à certains mouvements pour les ancrer"
      ],
      adaptation: [
        "Si vous avez du mal à visualiser, commencez par des mouvements simples",
        "Utilisez des vidéos de boxeurs pour alimenter votre visualisation",
        "Alternez entre visualisation les yeux fermés et ouverts",
        "Vous pouvez enregistrer les instructions pour vous guider dans l'exercice"
      ],
      progression: [
        "Semaine 1-2: Concentrez-vous sur les techniques de base",
        "Semaine 3-4: Intégrez des visualisations tactiques plus complexes",
        "Semaine 5-6: Ajoutez des éléments de stress ou de pression dans vos visualisations",
        "Semaine 7+: Créez des scénarios complets d'entraînement ou de compétition"
      ]
    },
    "tableau-de-suivi-hebdomadaire": {
      title: "Tableau de Suivi Hebdomadaire",
      objective: "Évaluer vos progrès, identifier les points forts et axes d'amélioration, et planifier la semaine à venir.",
      duration: "30-45 minutes",
      structure: {
        section1: "Bilan des performances physiques",
        section2: "Évaluation technique",
        section3: "Analyse des sensations et du ressenti",
        section4: "Objectifs pour la semaine suivante",
        section5: "Ajustements nutritionnels et récupération"
      },
      sequence: [
        {
          name: "Bilan des performances physiques",
          steps: [
            "Notez les performances en musculation (poids soulevés, répétitions)",
            "Évaluez votre endurance cardiovasculaire (durée, intensité)",
            "Mesurez les indicateurs physiques clés (poids, tour de bras, etc.)",
            "Évaluez votre niveau d'énergie global sur la semaine (1-10)",
            "Notez tout changement physique visible ou ressenti"
          ]
        },
        {
          name: "Évaluation technique en boxe",
          steps: [
            "Évaluez chaque technique travaillée (1-5 étoiles)",
            "Identifiez les 3 plus grandes améliorations techniques",
            "Listez les 3 principales difficultés techniques",
            "Notez vos progrès en termes de combinaisons et fluidité",
            "Évaluez votre précision et puissance sur le sac"
          ]
        },
        {
          name: "Analyse des sensations",
          steps: [
            "Notez votre niveau de motivation général (1-10)",
            "Évaluez la qualité de votre récupération entre les séances",
            "Identifiez les séances les plus satisfaisantes et pourquoi",
            "Notez les moments de difficulté et leurs causes possibles",
            "Évaluez votre adhérence au programme (pourcentage de séances réalisées)"
          ]
        },
        {
          name: "Définition des objectifs",
          steps: [
            "Fixez 3 objectifs techniques précis pour la semaine à venir",
            "Établissez 2 objectifs de performance physique mesurables",
            "Choisissez 1 aspect mental à améliorer",
            "Planifiez vos séances avec des ajustements si nécessaire",
            "Définissez comment mesurer concrètement vos progrès"
          ]
        },
        {
          name: "Ajustements nutritionnels et récupération",
          steps: [
            "Évaluez votre alimentation de la semaine (points forts/faibles)",
            "Planifiez 2-3 ajustements nutritionnels pour la semaine suivante",
            "Évaluez la qualité de votre sommeil et stratégies d'amélioration",
            "Planifiez des sessions spécifiques de récupération si nécessaire",
            "Notez tout complément ou stratégie qui semble bien fonctionner"
          ]
        }
      ],
      keyPoints: [
        "Soyez honnête dans votre auto-évaluation",
        "Utilisez des données objectives quand c'est possible (poids, répétitions, etc.)",
        "Identifiez les patterns sur plusieurs semaines",
        "Célébrez les victoires, même petites",
        "Restez constructif dans l'analyse des difficultés"
      ],
      adaptation: {
        template: "Créez un modèle standard sous forme de tableau ou utilisez une application de suivi",
        consistency: "Faites cet exercice le même jour chaque semaine pour établir une routine",
        documentation: "Prenez des photos de votre exécution technique pour comparer d'une semaine à l'autre",
        sharing: "Considérez partager vos résultats avec un coach ou un partenaire d'entraînement pour obtenir des retours"
      },
      example: "Semaine 1: Progrès notable sur jab (3/5→4/5). Difficultés avec rotation hanches sur direct. Poids stable à 83kg. Tour de bras +0.5cm. Objectifs semaine 2: améliorer rotation hanches, augmenter développé couché à 65kg, travailler fluidité enchaînements."
    },
    "plan-nutritionnel-phase-1-semaines-1-4": {
      title: "Plan Nutritionnel - Phase 1 (Semaines 1-4)",
      objective: "Établir une alimentation équilibrée qui soutient le développement musculaire tout en amorçant une légère perte de graisse.",
      structure: {
        calories: "Léger déficit calorique (-300 kcal/jour par rapport à maintenance)",
        macros: "Protéines 2g/kg, Glucides 3-4g/kg, Lipides 0.8-1g/kg",
        timing: "3 repas principaux + 2 collations",
        hydration: "3-4 litres d'eau par jour"
      },
      sequence: [
        {
          name: "Objectifs nutritionnels de la Phase 1",
          steps: [
            "Établir des habitudes alimentaires saines et durables",
            "Augmenter l'apport en protéines pour soutenir le développement musculaire",
            "Amorcer une légère perte de graisse (0.5-0.7kg par semaine)",
            "Optimiser l'énergie disponible pour les entraînements",
            "Améliorer la qualité générale de l'alimentation"
          ]
        },
        {
          name: "Repas type: Petit-déjeuner",
          steps: [
            "Protéines: 3-4 œufs (entiers ou blancs) ou 150g de yaourt grec",
            "Glucides: 60-80g de flocons d'avoine ou 2 tranches de pain complet",
            "Lipides: 1 cuillère à café d'huile d'olive ou 30g d'avocat",
            "Micronutriments: Fruits frais (100g de baies) ou légumes (épinards dans omelette)",
            "Hydratation: 500ml d'eau + café ou thé non sucré"
          ]
        },
        {
          name: "Repas type: Déjeuner",
          steps: [
            "Protéines: 150-180g de poulet, poisson ou légumineuses",
            "Glucides: 80-100g (poids cuit) de riz, quinoa ou patate douce",
            "Légumes: Minimum 200g de légumes variés colorés",
            "Lipides: 1 cuillère à soupe d'huile pour cuisson/assaisonnement",
            "Hydratation: 500ml d'eau pendant le repas"
          ]
        },
        {
          name: "Repas type: Dîner",
          steps: [
            "Protéines: 150-180g de bœuf maigre, poisson ou tofu",
            "Glucides: 60-80g de pâtes complètes ou légumineuses",
            "Légumes: Grande portion de légumes verts (200g minimum)",
            "Lipides: Huile d'olive, avocat ou oléagineux (10-15g)",
            "Timing: Idéalement 2-3h avant le coucher"
          ]
        },
        {
          name: "Collations stratégiques",
          steps: [
            "Collation pré-entraînement (1h avant): 1 banane + 20g de protéine whey ou 150g de yaourt grec",
            "Collation post-entraînement: 30g de protéine whey + 1 fruit ou 200ml de lait d'amande + 30g de protéine",
            "Alternatives: 30g d'oléagineux + 1 fruit ou 2 œufs durs + 1 fruit",
            "Éviter: Aliments ultra-transformés, sucres raffinés, alcool"
          ]
        },
        {
          name: "Hydratation et suppléments",
          steps: [
            "3-4 litres d'eau répartis sur la journée",
            "Suppléments de base: Multivitamines, Oméga-3 (2-3g/jour), Créatine (5g/jour)",
            "Pré-entraînement: Café noir (ou pré-workout commercial occasionnellement)",
            "Électrolytes: Pincée de sel dans l'eau post-entraînement intense"
          ]
        }
      ],
      keyPoints: [
        "Priorité aux aliments entiers non transformés",
        "Assurer un apport protéique suffisant (environ 160-170g/jour pour vous)",
        "Adapter les glucides selon le niveau d'activité du jour",
        "Privilégier les graisses de qualité (poissons gras, avocats, huile d'olive)",
        "Planifier les repas à l'avance pour éviter les choix impulsifs"
      ],
      adaptation: [
        "Adaptez les portions en fonction de votre faim et niveau d'énergie",
        "Ajustez les calories si la perte de poids est trop rapide (>1kg/semaine)",
        "Cycle de glucides: plus élevés les jours d'entraînement intense",
        "Considérez un repas libre (pas débridé) par semaine pour la durabilité"
      ],
      progression: "À la fin de la Phase 1, réévaluez votre composition corporelle et ajustez le plan pour la Phase 2 en fonction des résultats."
    }
  },
  weeks: [
    {
      weekNumber: 1,
      dateRange: {
        start: "2025-04-15",
        end: "2025-04-21"
      },
      objectives: [
        "Établir la routine d'entraînement",
        "Maîtriser la position de garde et les déplacements de base",
        "Apprendre les coups fondamentaux (1-2)",
        "Débuter le conditionnement physique spécifique"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Fondations Haut du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 1",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-1"
            },
            {
              title: "Développé Couché Incliné 4×10",
              completed: false,
              detailSlug: "developpe-couche-incline-4x10"
            },
            {
              title: "Tractions Assistées 4×8",
              completed: false,
              detailSlug: "tractions-assistees-4x8"
            },
            {
              title: "Élévations Latérales 3×12",
              completed: false,
              detailSlug: "elevations-laterales-3x12"
            },
            {
              title: "Circuit Abdominal Boxeur",
              completed: false,
              detailSlug: "circuit-abdominal-boxeur"
            },
            {
              title: "Récupération Active",
              completed: false,
              detailSlug: "recuperation-active"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Technique de Base",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 15min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-15min"
            },
            {
              title: "Position de Garde - Fondamentaux",
              completed: false,
              detailSlug: "position-de-garde-fondamentaux"
            },
            {
              title: "Déplacements de Base - Pas Traîné",
              completed: false,
              detailSlug: "deplacements-de-base-pas-traine"
            },
            {
              title: "Technique du Jab (1) - Détails",
              completed: false,
              detailSlug: "technique-du-jab-1-details"
            },
            {
              title: "Technique du Direct (2) - Détails",
              completed: false,
              detailSlug: "technique-du-direct-2-details"
            },
            {
              title: "Shadowboxing Jab-Direct - 3×3min",
              completed: false,
              detailSlug: "shadowboxing-jab-direct-3x3min"
            },
            {
              title: "Étirements Spécifiques Boxe",
              completed: false,
              detailSlug: "etirements-specifiques-boxe"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Bas du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 1",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-1"
            },
            {
              title: "Squat Bulgare 3×12 par jambe",
              completed: false,
              detailSlug: "squat-bulgare-3x12-par-jambe"
            },
            {
              title: "Extensions Jambes 3×15",
              completed: false,
              detailSlug: "extensions-jambes-3x15"
            },
            {
              title: "Soulevé de Terre Roumain 4×10",
              completed: false,
              detailSlug: "souleve-de-terre-roumain-4x10"
            },
            {
              title: "Mobilité Articulaire - 20min",
              completed: false,
              detailSlug: "mobilite-articulaire-20min"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Conseils",
              completed: false,
              detailSlug: "preparation-seance-club-conseils"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Explosivité & Force",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 1",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-1"
            },
            {
              title: "Développé Couché 4×8",
              completed: false,
              detailSlug: "developpe-couche-4x8"
            },
            {
              title: "Rowing Haltère 3×10 par bras",
              completed: false,
              detailSlug: "rowing-haltere-3x10-par-bras"
            },
            {
              title: "Dips 3×Max",
              completed: false,
              detailSlug: "dips-3xmax"
            },
            {
              title: "Circuit Explosif Boxeur - 4 tours",
              completed: false,
              detailSlug: "circuit-explosif-boxeur-4-tours"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Techniques & Cardio",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 15min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-15min"
            },
            {
              title: "Techniques Défensives - Esquives Latérales",
              completed: false,
              detailSlug: "techniques-defensives-esquives-laterales"
            },
            {
              title: "Technique du Crochet Avant (3) - Détails",
              completed: false,
              detailSlug: "technique-du-crochet-avant-3-details"
            },
            {
              title: "Travail au Sac - Jab/Direct - 5×2min",
              completed: false,
              detailSlug: "travail-au-sac-jab-direct-5x2min"
            },
            {
              title: "Exercice de Réflexes - Balle Tennis",
              completed: false,
              detailSlug: "exercice-de-reflexes-balle-tennis"
            },
            {
              title: "Préparation Mentale - Visualisation",
              completed: false,
              detailSlug: "preparation-mentale-visualisation"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Planification",
          exercises: [
            {
              title: "Mobilité Articulaire - 20min",
              completed: false,
              detailSlug: "mobilite-articulaire-20min"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Plan Nutritionnel - Phase 1 (Semaines 1-4)",
              completed: false,
              detailSlug: "plan-nutritionnel-phase-1-semaines-1-4"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 2,
      dateRange: {
        start: "2025-04-22",
        end: "2025-04-28"
      },
      objectives: [
        "Perfectionnement des techniques de base",
        "Introduction aux combinaisons simples",
        "Augmentation progressive des charges en musculation",
        "Développement de l'endurance spécifique"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Renforcement Haut du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 2",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-2"
            },
            {
              title: "Développé Couché Incliné 4×8",
              completed: false,
              detailSlug: "developpe-couche-incline-4x8"
            },
            {
              title: "Tractions 3×Max",
              completed: false,
              detailSlug: "tractions-3xmax"
            },
            {
              title: "Élévations Latérales 3×15",
              completed: false,
              detailSlug: "elevations-laterales-3x15"
            },
            {
              title: "Circuit Abdominal Boxeur Avancé",
              completed: false,
              detailSlug: "circuit-abdominal-boxeur-avance"
            },
            {
              title: "Récupération Active",
              completed: false,
              detailSlug: "recuperation-active"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Combinaisons",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 20min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-20min"
            },
            {
              title: "Révision Position de Garde et Déplacements",
              completed: false,
              detailSlug: "revision-position-de-garde-et-deplacements"
            },
            {
              title: "Combinaison 1-2-3 - Technique",
              completed: false,
              detailSlug: "combinaison-1-2-3-technique"
            },
            {
              title: "Shadowboxing avec Combinaisons - 4×3min",
              completed: false,
              detailSlug: "shadowboxing-avec-combinaisons-4x3min"
            },
            {
              title: "Travail au Sac - Combinaisons - 5×2min",
              completed: false,
              detailSlug: "travail-au-sac-combinaisons-5x2min"
            },
            {
              title: "Étirements Spécifiques Boxe",
              completed: false,
              detailSlug: "etirements-specifiques-boxe"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Force Bas du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 2",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-2"
            },
            {
              title: "Squat Bulgare 4×10 par jambe",
              completed: false,
              detailSlug: "squat-bulgare-4x10-par-jambe"
            },
            {
              title: "Fentes Avant 3×12 par jambe",
              completed: false,
              detailSlug: "fentes-avant-3x12-par-jambe"
            },
            {
              title: "Soulevé de Terre Roumain 4×8",
              completed: false,
              detailSlug: "souleve-de-terre-roumain-4x8"
            },
            {
              title: "Mollets Debout 3×20",
              completed: false,
              detailSlug: "mollets-debout-3x20"
            },
            {
              title: "Mobilité Articulaire - 20min",
              completed: false,
              detailSlug: "mobilite-articulaire-20min"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Défense",
              completed: false,
              detailSlug: "preparation-seance-club-focus-defense"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Puissance & Explosivité",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 2",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-2"
            },
            {
              title: "Test de Force - Haut du Corps",
              completed: false,
              detailSlug: "test-de-force-haut-du-corps"
            },
            {
              title: "Développé Militaire 4×8",
              completed: false,
              detailSlug: "developpe-militaire-4x8"
            },
            {
              title: "Tirage Vertical 4×10",
              completed: false,
              detailSlug: "tirage-vertical-4x10"
            },
            {
              title: "Circuit Explosif Boxeur - 5 tours",
              completed: false,
              detailSlug: "circuit-explosif-boxeur-5-tours"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Défense & Contre-attaque",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 20min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-20min"
            },
            {
              title: "Techniques Défensives - Esquives Rotatives",
              completed: false,
              detailSlug: "techniques-defensives-esquives-rotatives"
            },
            {
              title: "Combinaison 1-2-3-2 - Technique",
              completed: false,
              detailSlug: "combinaison-1-2-3-2-technique"
            },
            {
              title: "Contre-attaques après Esquives - Drills",
              completed: false,
              detailSlug: "contre-attaques-apres-esquives-drills"
            },
            {
              title: "Travail au Sac - Défense/Attaque - 6×2min",
              completed: false,
              detailSlug: "travail-au-sac-defense-attaque-6x2min"
            },
            {
              title: "Exercice de Réflexes Avancé",
              completed: false,
              detailSlug: "exercice-de-reflexes-avance"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Analyse Progrès",
          exercises: [
            {
              title: "Mobilité Articulaire - 25min",
              completed: false,
              detailSlug: "mobilite-articulaire-25min"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Analyse Vidéo Technique Boxe",
              completed: false,
              detailSlug: "analyse-video-technique-boxe"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      dateRange: {
        start: "2025-04-29",
        end: "2025-05-05"
      },
      objectives: [
        "Introduction des techniques de crochet",
        "Développement de la puissance des coups",
        "Augmentation des charges en musculation",
        "Travail des combinaisons avancées"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Puissance Haut du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 3",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-3"
            },
            {
              title: "Développé Couché Incliné 5×8",
              completed: false,
              detailSlug: "developpe-couche-incline-5x8"
            },
            {
              title: "Tractions Lestées 4×6",
              completed: false,
              detailSlug: "tractions-lestees-4x6"
            },
            {
              title: "Développé Haltères 4×10",
              completed: false,
              detailSlug: "developpe-halteres-4x10"
            },
            {
              title: "Circuit Abdominal Intensif",
              completed: false,
              detailSlug: "circuit-abdominal-intensif"
            },
            {
              title: "Récupération Active",
              completed: false,
              detailSlug: "recuperation-active"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Crochet & Puissance",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 20min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-20min"
            },
            {
              title: "Technique du Crochet Arrière (4) - Détails",
              completed: false,
              detailSlug: "technique-du-crochet-arriere-4-details"
            },
            {
              title: "Exercices de Rotation du Tronc pour Crochet",
              completed: false,
              detailSlug: "exercices-de-rotation-du-tronc-pour-crochet"
            },
            {
              title: "Combinaison 1-3-2 - Technique",
              completed: false,
              detailSlug: "combinaison-1-3-2-technique"
            },
            {
              title: "Travail au Sac - Focus Crochet - A6×2min",
              completed: false,
              detailSlug: "travail-au-sac-focus-crochet-6x2min"
            },
            {
              title: "Étirements Spécifiques Boxe",
              completed: false,
              detailSlug: "etirements-specifiques-boxe"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Force & Stabilité Bas du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 3",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-3"
            },
            {
              title: "Squat Bulgare Lesté 4×10 par jambe",
              completed: false,
              detailSlug: "squat-bulgare-leste-4x10-par-jambe"
            },
            {
              title: "Fentes Marchées 3×16 pas",
              completed: false,
              detailSlug: "fentes-marchees-3x16-pas"
            },
            {
              title: "Extensions Jambes 4×12",
              completed: false,
              detailSlug: "extensions-jambes-4x12"
            },
            {
              title: "Mollets Assis 4×15",
              completed: false,
              detailSlug: "mollets-assis-4x15"
            },
            {
              title: "Mobilité Articulaire - 20min",
              completed: false,
              detailSlug: "mobilite-articulaire-20min"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Crochets",
              completed: false,
              detailSlug: "preparation-seance-club-focus-crochets"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Force & Explosivité",
          exercises: [
            {
              title: "Échauffement Dynamique - Semaine 3",
              completed: false,
              detailSlug: "echauffement-dynamique-semaine-3"
            },
            {
              title: "Développé Couché 5×6",
              completed: false,
              detailSlug: "developpe-couche-5x6"
            },
            {
              title: "Rowing Barre T 4×8",
              completed: false,
              detailSlug: "rowing-barre-t-4x8"
            },
            {
              title: "Tirage Vertical Prise Serrée 4×8",
              completed: false,
              detailSlug: "tirage-vertical-prise-serree-4x8"
            },
            {
              title: "Circuit Explosif Avancé - 4 tours",
              completed: false,
              detailSlug: "circuit-explosif-avance-4-tours"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Combinaisons Avancées",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 25min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-25min"
            },
            {
              title: "Révision Techniques Défensives",
              completed: false,
              detailSlug: "revision-techniques-defensives"
            },
            {
              title: "Combinaison 1-2-3-4 - Technique",
              completed: false,
              detailSlug: "combinaison-1-2-3-4-technique"
            },
            {
              title: "Shadow Boxing Avancé - 5×3min",
              completed: false,
              detailSlug: "shadow-boxing-avance-5x3min"
            },
            {
              title: "Travail au Sac - Combinaisons - 6×2min",
              completed: false,
              detailSlug: "travail-au-sac-combinaisons-avancees-6x2min"
            },
            {
              title: "Exercice de Réflexes - Double End Bag",
              completed: false,
              detailSlug: "exercice-de-reflexes-double-end-bag"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Préparation Mentale",
          exercises: [
            {
              title: "Mobilité Articulaire - 25min",
              completed: false,
              detailSlug: "mobilite-articulaire-25min"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Préparation Mentale - Routine de Performance",
              completed: false,
              detailSlug: "preparation-mentale-routine-de-performance"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 4,
      dateRange: {
        start: "2025-05-06",
        end: "2025-05-12"
      },
      objectives: [
        "Évaluation des progrès du premier mois",
        "Introduction des uppercuts",
        "Test des performances en force et endurance",
        "Perfectionnement des combinaisons"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Évaluation Force Haut du Corps",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Test de Force - Développé Couché",
              completed: false,
              detailSlug: "test-de-force-developpe-couche"
            },
            {
              title: "Test de Force - Tractions",
              completed: false,
              detailSlug: "test-de-force-tractions"
            },
            {
              title: "Circuit Abdominal Complet",
              completed: false,
              detailSlug: "circuit-abdominal-complet"
            },
            {
              title: "Récupération Active",
              completed: false,
              detailSlug: "recuperation-active"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Uppercuts",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 25min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-25min"
            },
            {
              title: "Technique de l'Uppercut Avant (5) - Détails",
              completed: false,
              detailSlug: "technique-de-uppercut-avant-5-details"
            },
            {
              title: "Technique de l'Uppercut Arrière (6) - Détails",
              completed: false,
              detailSlug: "technique-de-uppercut-arriere-6-details"
            },
            {
              title: "Combinaison 1-2-5 - Technique",
              completed: false,
              detailSlug: "combinaison-1-2-5-technique"
            },
            {
              title: "Travail au Sac - Focus Uppercuts - 6×2min",
              completed: false,
              detailSlug: "travail-au-sac-focus-uppercuts-6x2min"
            },
            {
              title: "Étirements Spécifiques Boxe",
              completed: false,
              detailSlug: "etirements-specifiques-boxe"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Évaluation Force Bas du Corps",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Test de Force - Squat Bulgare",
              completed: false,
              detailSlug: "test-de-force-squat-bulgare"
            },
            {
              title: "Test de Force - Soulevé de Terre Roumain",
              completed: false,
              detailSlug: "test-de-force-souleve-de-terre-roumain"
            },
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Uppercuts",
              completed: false,
              detailSlug: "preparation-seance-club-focus-uppercuts"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Nouveau Cycle Force",
          exercises: [
            {
              title: "Échauffement Spécifique Force",
              completed: false,
              detailSlug: "echauffement-specifique-force"
            },
            {
              title: "Développé Couché Incliné 5×5",
              completed: false,
              detailSlug: "developpe-couche-incline-5x5"
            },
            {
              title: "Pull-Ups Lestés 5×5",
              completed: false,
              detailSlug: "pull-ups-lestes-5x5"
            },
            {
              title: "Développé Militaire 4×6",
              completed: false,
              detailSlug: "developpe-militaire-4x6"
            },
            {
              title: "Circuit Explosif Puissance - 5 tours",
              completed: false,
              detailSlug: "circuit-explosif-puissance-5-tours"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Évaluation Technique",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 25min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-25min"
            },
            {
              title: "Évaluation Technique - 6 Coups de Base",
              completed: false,
              detailSlug: "evaluation-technique-6-coups-de-base"
            },
            {
              title: "Test d'Endurance Boxe - 8×2min",
              completed: false,
              detailSlug: "test-endurance-boxe-8x2min"
            },
            {
              title: "Combinaisons Complexes - Drills",
              completed: false,
              detailSlug: "combinaisons-complexes-drills"
            },
            {
              title: "Étirements Complets",
              completed: false,
              detailSlug: "etirements-complets"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Bilan & Planification Phase 2",
          exercises: [
            {
              title: "Mobilité Articulaire - 30min",
              completed: false,
              detailSlug: "mobilite-articulaire-30min"
            },
            {
              title: "Tableau de Suivi Mensuel",
              completed: false,
              detailSlug: "tableau-de-suivi-mensuel"
            },
            {
              title: "Plan Nutritionnel - Phase 2 (Semaines 5-8)",
              completed: false,
              detailSlug: "plan-nutritionnel-phase-2-semaines-5-8"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 5,
      dateRange: {
        start: "2025-05-13",
        end: "2025-05-19"
      },
      objectives: [
        "Début de la phase de densification musculaire",
        "Amélioration des enchaînements techniques",
        "Augmentation de l'intensité des séances",
        "Travail de la vitesse d'exécution"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Hypertrophie Haut du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Phase 2",
              completed: false,
              detailSlug: "echauffement-dynamique-phase-2"
            },
            {
              title: "Développé Couché 4×10-8-8-6",
              completed: false,
              detailSlug: "developpe-couche-4x10-8-8-6"
            },
            {
              title: "Développé Incliné Haltères 4×10",
              completed: false,
              detailSlug: "developpe-incline-halteres-4x10"
            },
            {
              title: "Rowing Barre T Supination 4×10",
              completed: false,
              detailSlug: "rowing-barre-t-supination-4x10"
            },
            {
              title: "Tractions Pyramide 8-6-4-6-8",
              completed: false,
              detailSlug: "tractions-pyramide-8-6-4-6-8"
            },
            {
              title: "Circuit Abdominal Spécifique Boxe",
              completed: false,
              detailSlug: "circuit-abdominal-specifique-boxe"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Vitesse & Précision",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - Intervalles",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-intervalles"
            },
            {
              title: "Exercices de Vitesse - Shadowboxing",
              completed: false,
              detailSlug: "exercices-de-vitesse-shadowboxing"
            },
            {
              title: "Travail de Précision sur Cible",
              completed: false,
              detailSlug: "travail-de-precision-sur-cible"
            },
            {
              title: "Combinaisons à Haute Vitesse - 6×2min",
              completed: false,
              detailSlug: "combinaisons-a-haute-vitesse-6x2min"
            },
            {
              title: "Travail au Sac - Vitesse & Puissance - 6×2min",
              completed: false,
              detailSlug: "travail-au-sac-vitesse-puissance-6x2min"
            },
            {
              title: "Étirements Spécifiques Boxe",
              completed: false,
              detailSlug: "etirements-specifiques-boxe"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Hypertrophie Bas du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Phase 2",
              completed: false,
              detailSlug: "echauffement-dynamique-phase-2"
            },
            {
              title: "Squat Bulgare 4×12 par jambe",
              completed: false,
              detailSlug: "squat-bulgare-4x12-par-jambe"
            },
            {
              title: "Fentes Marchées Lestées 3×20 pas",
              completed: false,
              detailSlug: "fentes-marchees-lestees-3x20-pas"
            },
            {
              title: "Soulevé de Terre Roumain 4×12",
              completed: false,
              detailSlug: "souleve-de-terre-roumain-4x12"
            },
            {
              title: "Montées sur Banc 3×15 par jambe",
              completed: false,
              detailSlug: "montees-sur-banc-3x15-par-jambe"
            },
            {
              title: "Mollets Supersets 4×(15+15)",
              completed: false,
              detailSlug: "mollets-supersets-4x15-15"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Vitesse",
              completed: false,
              detailSlug: "preparation-seance-club-focus-vitesse"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Explosivité & Densification",
          exercises: [
            {
              title: "Échauffement Dynamique - Phase 2",
              completed: false,
              detailSlug: "echauffement-dynamique-phase-2"
            },
            {
              title: "Développé Couché Incliné Explosif 4×8",
              completed: false,
              detailSlug: "developpe-couche-incline-explosif-4x8"
            },
            {
              title: "Rowing Haltère Alterné 4×10 par bras",
              completed: false,
              detailSlug: "rowing-haltere-alterne-4x10-par-bras"
            },
            {
              title: "Dips Lestés 4×8",
              completed: false,
              detailSlug: "dips-lestes-4x8"
            },
            {
              title: "Curl Biceps EZ-Bar 4×10",
              completed: false,
              detailSlug: "curl-biceps-ez-bar-4x10"
            },
            {
              title: "Extensions Triceps Poulie 4×12",
              completed: false,
              detailSlug: "extensions-triceps-poulie-4x12"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Enchaînements Tactiques",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - 30min",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-30min"
            },
            {
              title: "Tactiques d'Enchaînements - Théorie",
              completed: false,
              detailSlug: "tactiques-enchainements-theorie"
            },
            {
              title: "Combinaisons Stratégiques - Pratique",
              completed: false,
              detailSlug: "combinaisons-strategiques-pratique"
            },
            {
              title: "Shadowboxing Tactique - 6×3min",
              completed: false,
              detailSlug: "shadowboxing-tactique-6x3min"
            },
            {
              title: "Travail au Sac - Stratégies - 6×2min",
              completed: false,
              detailSlug: "travail-au-sac-strategies-6x2min"
            },
            {
              title: "Exercice de Réflexes - Balle Tennis Avancé",
              completed: false,
              detailSlug: "exercice-de-reflexes-balle-tennis-avance"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Préparation Mentale",
          exercises: [
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Préparation Mentale - Visualisation Avancée",
              completed: false,
              detailSlug: "preparation-mentale-visualisation-avancee"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 6,
      dateRange: {
        start: "2025-05-20",
        end: "2025-05-26"
      },
      objectives: [
        "Intensification du travail d'hypertrophie",
        "Perfectionnement des techniques de défense",
        "Amélioration des enchaînements fluides",
        "Augmentation de l'endurance spécifique"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Volume Haut du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Phase 2",
              completed: false,
              detailSlug: "echauffement-dynamique-phase-2"
            },
            {
              title: "Superset: Développé Incliné 4×10 / Élévations Latérales 4×12",
              completed: false,
              detailSlug: "superset-developpe-incline-elevations-laterales"
            },
            {
              title: "Superset: Tractions 4×8 / Face Pull 4×15",
              completed: false,
              detailSlug: "superset-tractions-face-pull"
            },
            {
              title: "Superset: Dips 4×10 / Curl Biceps 4×12",
              completed: false,
              detailSlug: "superset-dips-curl-biceps"
            },
            {
              title: "Circuit Abdominal Intensif - 4 tours",
              completed: false,
              detailSlug: "circuit-abdominal-intensif-4-tours"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Défense Avancée",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - Variations",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-variations"
            },
            {
              title: "Techniques Défensives Avancées - Théorie",
              completed: false,
              detailSlug: "techniques-defensives-avancees-theorie"
            },
            {
              title: "Blocages et Parades - Pratique",
              completed: false,
              detailSlug: "blocages-et-parades-pratique"
            },
            {
              title: "Esquives Complètes - Drills",
              completed: false,
              detailSlug: "esquives-completes-drills"
            },
            {
              title: "Contre-attaques Défensives - 6×2min",
              completed: false,
              detailSlug: "contre-attaques-defensives-6x2min"
            },
            {
              title: "Shadowboxing Défensif - 5×3min",
              completed: false,
              detailSlug: "shadowboxing-defensif-5x3min"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Volume Bas du Corps",
          exercises: [
            {
              title: "Échauffement Dynamique - Phase 2",
              completed: false,
              detailSlug: "echauffement-dynamique-phase-2"
            },
            {
              title: "Superset: Squat Bulgare 4×12 / Extension Jambes 4×15",
              completed: false,
              detailSlug: "superset-squat-bulgare-extension-jambes"
            },
            {
              title: "Superset: Soulevé de Terre Roumain 4×10 / Curl Jambes 4×12",
              completed: false,
              detailSlug: "superset-souleve-de-terre-roumain-curl-jambes"
            },
            {
              title: "Superset: Fentes Sautées 3×10 / Mollets Debout 3×20",
              completed: false,
              detailSlug: "superset-fentes-sautees-mollets-debout"
            },
            {
              title: "Gainage Dynamique - 4 tours",
              completed: false,
              detailSlug: "gainage-dynamique-4-tours"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Défense",
              completed: false,
              detailSlug: "preparation-seance-club-focus-defense"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Définition & Force",
          exercises: [
            {
              title: "Échauffement Dynamique - Phase 2",
              completed: false,
              detailSlug: "echauffement-dynamique-phase-2"
            },
            {
              title: "Développé Couché Barre 5×5",
              completed: false,
              detailSlug: "developpe-couche-barre-5x5"
            },
            {
              title: "Tirage Vertical Prise Large 4×10",
              completed: false,
              detailSlug: "tirage-vertical-prise-large-4x10"
            },
            {
              title: "Développé Militaire 4×8",
              completed: false,
              detailSlug: "developpe-militaire-4x8"
            },
            {
              title: "Circuit Épaules Complet - 3 tours",
              completed: false,
              detailSlug: "circuit-epaules-complet-3-tours"
            },
            {
              title: "Circuit Explosif HIIT - 5 tours",
              completed: false,
              detailSlug: "circuit-explosif-hiit-5-tours"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Endurance & Fluidité",
          exercises: [
            {
              title: "Échauffement Corde à Sauter - Pyramide",
              completed: false,
              detailSlug: "echauffement-corde-a-sauter-pyramide"
            },
            {
              title: "Fluidité des Enchaînements - Drills",
              completed: false,
              detailSlug: "fluidite-des-enchainements-drills"
            },
            {
              title: "Travail d'Endurance Spécifique - Shadowboxing 8×3min",
              completed: false,
              detailSlug: "travail-endurance-specifique-shadowboxing-8x3min"
            },
            {
              title: "Travail au Sac - Endurance - 8×2min",
              completed: false,
              detailSlug: "travail-au-sac-endurance-8x2min"
            },
            {
              title: "Circuit de Récupération Active",
              completed: false,
              detailSlug: "circuit-de-recuperation-active"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Mobilité",
          exercises: [
            {
              title: "Mobilité Articulaire Approfondie",
              completed: false,
              detailSlug: "mobilite-articulaire-approfondie"
            },
            {
              title: "Étirements Passifs Prolongés",
              completed: false,
              detailSlug: "etirements-passifs-prolonges"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 7,
      dateRange: {
        start: "2025-05-27",
        end: "2025-06-02"
      },
      objectives: [
        "Développement de la puissance maximale",
        "Introduction aux stratégies de combat",
        "Perfectionnement des techniques avancées",
        "Amélioration de la définition musculaire"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Puissance Maximale Haut du Corps",
          exercises: [
            {
              title: "Échauffement Spécifique Puissance",
              completed: false,
              detailSlug: "echauffement-specifique-puissance"
            },
            {
              title: "Développé Couché 5×5 (85% 1RM)",
              completed: false,
              detailSlug: "developpe-couche-5x5-85-pourcent"
            },
            {
              title: "Développé Incliné 4×6 (80% 1RM)",
              completed: false,
              detailSlug: "developpe-incline-4x6-80-pourcent"
            },
            {
              title: "Tractions Lestées 5×5",
              completed: false,
              detailSlug: "tractions-lestees-5x5"
            },
            {
              title: "Pull-Over Poulie 3×12",
              completed: false,
              detailSlug: "pull-over-poulie-3x12"
            },
            {
              title: "Circuit Abdominal Avancé",
              completed: false,
              detailSlug: "circuit-abdominal-avance"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Stratégies de Combat",
          exercises: [
            {
              title: "Échauffement Complet - 20min",
              completed: false,
              detailSlug: "echauffement-complet-20min"
            },
            {
              title: "Stratégies de Combat - Théorie",
              completed: false,
              detailSlug: "strategies-de-combat-theorie"
            },
            {
              title: "Contrôle de la Distance - Pratique",
              completed: false,
              detailSlug: "controle-de-la-distance-pratique"
            },
            {
              title: "Création d'Angles - Drills",
              completed: false,
              detailSlug: "creation-angles-drills"
            },
            {
              title: "Timing et Contre-timing - Exercices",
              completed: false,
              detailSlug: "timing-et-contre-timing-exercices"
            },
            {
              title: "Mise en Application au Sac - 6×3min",
              completed: false,
              detailSlug: "mise-en-application-au-sac-6x3min"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Puissance Maximale Bas du Corps",
          exercises: [
            {
              title: "Échauffement Spécifique Puissance",
              completed: false,
              detailSlug: "echauffement-specifique-puissance"
            },
            {
              title: "Squat Bulgare Lourd 5×5 par jambe",
              completed: false,
              detailSlug: "squat-bulgare-lourd-5x5-par-jambe"
            },
            {
              title: "Soulevé de Terre Roumain 5×5 (85% 1RM)",
              completed: false,
              detailSlug: "souleve-de-terre-roumain-5x5-85-pourcent"
            },
            {
              title: "Fentes Marchées Lestées 3×20 mètres",
              completed: false,
              detailSlug: "fentes-marchees-lestees-3x20-metres"
            },
            {
              title: "Extensions Jambes 3×15",
              completed: false,
              detailSlug: "extensions-jambes-3x15"
            },
            {
              title: "Circuit Pliométrique Jambes - 3 tours",
              completed: false,
              detailSlug: "circuit-pliometrique-jambes-3-tours"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Stratégie",
              completed: false,
              detailSlug: "preparation-seance-club-focus-strategie"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Définition & Explosivité",
          exercises: [
            {
              title: "Échauffement Dynamique Complet",
              completed: false,
              detailSlug: "echauffement-dynamique-complet"
            },
            {
              title: "Circuit Haute Intensité - 5 tours",
              completed: false,
              detailSlug: "circuit-haute-intensite-5-tours"
            },
            {
              title: "Superset: Dips Lestés 4×8 / Pull-Ups 4×8",
              completed: false,
              detailSlug: "superset-dips-lestes-pull-ups"
            },
            {
              title: "Superset: Élévations Latérales 4×15 / Face Pull 4×15",
              completed: false,
              detailSlug: "superset-elevations-laterales-face-pull"
            },
            {
              title: "Circuit Biceps/Triceps - 3 tours",
              completed: false,
              detailSlug: "circuit-biceps-triceps-3-tours"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Techniques Avancées",
          exercises: [
            {
              title: "Échauffement Avancé - 25min",
              completed: false,
              detailSlug: "echauffement-avance-25min"
            },
            {
              title: "Combinaisons 5 Coups et Plus - Technique",
              completed: false,
              detailSlug: "combinaisons-5-coups-et-plus-technique"
            },
            {
              title: "Défense et Riposte Instantanée - Drills",
              completed: false,
              detailSlug: "defense-et-riposte-instantanee-drills"
            },
            {
              title: "Travail au Sac - Techniques Avancées - 8×3min",
              completed: false,
              detailSlug: "travail-au-sac-techniques-avancees-8x3min"
            },
            {
              title: "Shadowboxing Complet - 6×3min",
              completed: false,
              detailSlug: "shadowboxing-complet-6x3min"
            },
            {
              title: "Exercices de Réflexes Avancés",
              completed: false,
              detailSlug: "exercices-de-reflexes-avances"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Analyse Technique",
          exercises: [
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Analyse Vidéo - Points Forts/Faibles",
              completed: false,
              detailSlug: "analyse-video-points-forts-faibles"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 8,
      dateRange: {
        start: "2025-06-03",
        end: "2025-06-09"
      },
      objectives: [
        "Évaluation des progrès à mi-parcours",
        "Tests de performance physique et technique",
        "Ajustement du programme pour la phase finale",
        "Révision des techniques et stratégies"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Tests Mi-parcours Haut du Corps",
          exercises: [
            {
              title: "Échauffement Progressif Complet",
              completed: false,
              detailSlug: "echauffement-progressif-complet"
            },
            {
              title: "Test Développé Couché - Max Reps 80% 1RM",
              completed: false,
              detailSlug: "test-developpe-couche-max-reps-80-pourcent"
            },
            {
              title: "Test Tractions - Maximum",
              completed: false,
              detailSlug: "test-tractions-maximum"
            },
            {
              title: "Test Développé Militaire - 8RM",
              completed: false,
              detailSlug: "test-developpe-militaire-8rm"
            },
            {
              title: "Test Dips - Maximum",
              completed: false,
              detailSlug: "test-dips-maximum"
            },
            {
              title: "Circuit Récupération Active",
              completed: false,
              detailSlug: "circuit-recuperation-active"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Évaluation Technique",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Test Technique - 6 Coups de Base",
              completed: false,
              detailSlug: "test-technique-6-coups-de-base"
            },
            {
              title: "Test Défense - Réactions & Esquives",
              completed: false,
              detailSlug: "test-defense-reactions-esquives"
            },
            {
              title: "Test Combinaisons - Exécution & Fluidité",
              completed: false,
              detailSlug: "test-combinaisons-execution-fluidite"
            },
            {
              title: "Test Endurance Spécifique - 10×2min",
              completed: false,
              detailSlug: "test-endurance-specifique-10x2min"
            },
            {
              title: "Récupération & Étirements",
              completed: false,
              detailSlug: "recuperation-etirements"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Tests Mi-parcours Bas du Corps",
          exercises: [
            {
              title: "Échauffement Progressif Complet",
              completed: false,
              detailSlug: "echauffement-progressif-complet"
            },
            {
              title: "Test Squat Bulgare - Max Reps 80% 1RM",
              completed: false,
              detailSlug: "test-squat-bulgare-max-reps-80-pourcent"
            },
            {
              title: "Test Soulevé de Terre Roumain - 5RM",
              completed: false,
              detailSlug: "test-souleve-de-terre-roumain-5rm"
            },
            {
              title: "Test Explosivité - Saut Vertical",
              completed: false,
              detailSlug: "test-explosivite-saut-vertical"
            },
            {
              title: "Circuit Récupération Active",
              completed: false,
              detailSlug: "circuit-recuperation-active"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Évaluation",
              completed: false,
              detailSlug: "preparation-seance-club-evaluation"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement Détaillé",
              completed: false,
              detailSlug: "journal-entrainement-detaille"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Récupération Active",
          exercises: [
            {
              title: "Échauffement Léger",
              completed: false,
              detailSlug: "echauffement-leger"
            },
            {
              title: "Circuit Léger Haut du Corps",
              completed: false,
              detailSlug: "circuit-leger-haut-du-corps"
            },
            {
              title: "Circuit Léger Bas du Corps",
              completed: false,
              detailSlug: "circuit-leger-bas-du-corps"
            },
            {
              title: "Travail Correctif Personnalisé",
              completed: false,
              detailSlug: "travail-correctif-personnalise"
            },
            {
              title: "Mobilité Complète",
              completed: false,
              detailSlug: "mobilite-complete"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe Domicile - Révision Générale Techniques",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Révision Technique - Coups de Base",
              completed: false,
              detailSlug: "revision-technique-coups-de-base"
            },
            {
              title: "Révision Défense - Toutes Techniques",
              completed: false,
              detailSlug: "revision-defense-toutes-techniques"
            },
            {
              title: "Shadowboxing Complet - 5×3min",
              completed: false,
              detailSlug: "shadowboxing-complet-5x3min"
            },
            {
              title: "Travail au Sac Léger - 5×2min",
              completed: false,
              detailSlug: "travail-au-sac-leger-5x2min"
            },
            {
              title: "Étirements Complets",
              completed: false,
              detailSlug: "etirements-complets"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Bilan Mi-parcours & Planification",
          exercises: [
            {
              title: "Tableau de Suivi Mensuel",
              completed: false,
              detailSlug: "tableau-de-suivi-mensuel"
            },
            {
              title: "Analyse des Résultats de Tests",
              completed: false,
              detailSlug: "analyse-des-resultats-de-tests"
            },
            {
              title: "Plan Nutritionnel - Phase 3 (Semaines 9-12)",
              completed: false,
              detailSlug: "plan-nutritionnel-phase-3-semaines-9-12"
            },
            {
              title: "Ajustement du Programme - Phase Finale",
              completed: false,
              detailSlug: "ajustement-du-programme-phase-finale"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 9,
      dateRange: {
        start: "2025-06-10",
        end: "2025-06-16"
      },
      objectives: [
        "Début de la phase de définition musculaire intensive",
        "Perfectionnement de la fluidité technique",
        "Augmentation de l'endurance spécifique",
        "Introduction des techniques de kick-boxing"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Définition Haut du Corps",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Superset: Développé Incliné 4×12 / Élévations Latérales 4×15",
              completed: false,
              detailSlug: "superset-developpe-incline-elevations-laterales-phase-3"
            },
            {
              title: "Superset: Pull-Ups 4×Max / Face Pull 4×15",
              completed: false,
              detailSlug: "superset-pull-ups-face-pull-phase-3"
            },
            {
              title: "Superset: Dips 4×12 / Curl Biceps 4×15",
              completed: false,
              detailSlug: "superset-dips-curl-biceps-phase-3"
            },
            {
              title: "Circuit Abdominal Complet - 4 tours",
              completed: false,
              detailSlug: "circuit-abdominal-complet-4-tours"
            },
            {
              title: "Cardio HIIT - 15min",
              completed: false,
              detailSlug: "cardio-hiit-15min"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Fluidité & Enchainements",
          exercises: [
            {
              title: "Échauffement Complet - 25min",
              completed: false,
              detailSlug: "echauffement-complet-25min"
            },
            {
              title: "Fluidité des Mouvements - Drills",
              completed: false,
              detailSlug: "fluidite-des-mouvements-drills"
            },
            {
              title: "Combinaisons Fluides - 5-6 Coups",
              completed: false,
              detailSlug: "combinaisons-fluides-5-6-coups"
            },
            {
              title: "Transitions Attaque-Défense-Contre",
              completed: false,
              detailSlug: "transitions-attaque-defense-contre"
            },
            {
              title: "Shadowboxing Fluidité - 6×3min",
              completed: false,
              detailSlug: "shadowboxing-fluidite-6x3min"
            },
            {
              title: "Travail au Sac - Enchaînements - 8×2min",
              completed: false,
              detailSlug: "travail-au-sac-enchainements-8x2min"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Définition Bas du Corps",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Superset: Squat Bulgare 4×15 / Extensions Jambes 4×20",
              completed: false,
              detailSlug: "superset-squat-bulgare-extensions-jambes-phase-3"
            },
            {
              title: "Superset: Soulevé de Terre Roumain 4×12 / Curl Jambes 4×15",
              completed: false,
              detailSlug: "superset-souleve-de-terre-roumain-curl-jambes-phase-3"
            },
            {
              title: "Superset: Fentes Marchées 3×24 / Mollets 3×25",
              completed: false,
              detailSlug: "superset-fentes-marchees-mollets-phase-3"
            },
            {
              title: "Circuit Métabolique Jambes - 4 tours",
              completed: false,
              detailSlug: "circuit-metabolique-jambes-4-tours"
            },
            {
              title: "Cardio HIIT - 15min",
              completed: false,
              detailSlug: "cardio-hiit-15min"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Fluidité",
              completed: false,
              detailSlug: "preparation-seance-club-focus-fluidite"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Musculation - Circuit Complet Définition",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Circuit Complet Corps - 5 tours",
              completed: false,
              detailSlug: "circuit-complet-corps-5-tours"
            },
            {
              title: "Superset Épaules Complet - 3 tours",
              completed: false,
              detailSlug: "superset-epaules-complet-3-tours"
            },
            {
              title: "Superset Bras Complet - 3 tours",
              completed: false,
              detailSlug: "superset-bras-complet-3-tours"
            },
            {
              title: "Circuit Abdominal Avancé - 3 tours",
              completed: false,
              detailSlug: "circuit-abdominal-avance-3-tours"
            },
            {
              title: "Cardio HIIT - 20min",
              completed: false,
              detailSlug: "cardio-hiit-20min"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe & Kick-Boxing Introduction",
          exercises: [
            {
              title: "Échauffement Complet - 25min",
              completed: false,
              detailSlug: "echauffement-complet-25min"
            },
            {
              title: "Introduction Coups de Pied Bas - Technique",
              completed: false,
              detailSlug: "introduction-coups-de-pied-bas-technique"
            },
            {
              title: "Mobilité Spécifique Jambes",
              completed: false,
              detailSlug: "mobilite-specifique-jambes"
            },
            {
              title: "Intégration Poings-Pieds - Drills Basiques",
              completed: false,
              detailSlug: "integration-poings-pieds-drills-basiques"
            },
            {
              title: "Travail au Sac - Boxe 6×2min",
              completed: false,
              detailSlug: "travail-au-sac-boxe-6x2min"
            },
            {
              title: "Étirements Spécifiques Kick-Boxing",
              completed: false,
              detailSlug: "etirements-specifiques-kick-boxing"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération & Mobilité",
          exercises: [
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            },
            {
              title: "Mobilité Spécifique Hanches",
              completed: false,
              detailSlug: "mobilite-specifique-hanches"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 10,
      dateRange: {
        start: "2025-06-17",
        end: "2025-06-23"
      },
      objectives: [
        "Intensification de la définition musculaire",
        "Perfectionnement de la technique générale de boxe",
        "Amélioration des capacités cardio-vasculaires",
        "Approfondissement des techniques de kick-boxing"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Définition Intense Haut du Corps",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Tri-set Pectoraux: Développé Incliné / Écarté / Push-Up - 4 tours",
              completed: false,
              detailSlug: "tri-set-pectoraux"
            },
            {
              title: "Tri-set Dos: Pull-Up / Rowing / Pull-Over - 4 tours",
              completed: false,
              detailSlug: "tri-set-dos"
            },
            {
              title: "Tri-set Épaules: Presse / Élévations / Face Pull - 4 tours",
              completed: false,
              detailSlug: "tri-set-epaules"
            },
            {
              title: "Superset Bras: Curl Biceps / Extension Triceps - 4 tours",
              completed: false,
              detailSlug: "superset-bras"
            },
            {
              title: "Circuit de Définition Abdominale - 4 tours",
              completed: false,
              detailSlug: "circuit-de-definition-abdominale"
            },
            {
              title: "Cardio HIIT - 20min",
              completed: false,
              detailSlug: "cardio-hiit-20min"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Perfectionnement Technique",
          exercises: [
            {
              title: "Échauffement Complet - 25min",
              completed: false,
              detailSlug: "echauffement-complet-25min"
            },
            {
              title: "Perfectionnement Technique - Jab/Direct",
              completed: false,
              detailSlug: "perfectionnement-technique-jab-direct"
            },
            {
              title: "Perfectionnement Technique - Crochets",
              completed: false,
              detailSlug: "perfectionnement-technique-crochets"
            },
            {
              title: "Perfectionnement Technique - Uppercuts",
              completed: false,
              detailSlug: "perfectionnement-technique-uppercuts"
            },
            {
              title: "Shadowboxing Technique - 6×3min",
              completed: false,
              detailSlug: "shadowboxing-technique-6x3min"
            },
            {
              title: "Travail au Sac - Précision - 8×2min",
              completed: false,
              detailSlug: "travail-au-sac-precision-8x2min"
            },
            {
              title: "Étirements Dynamiques",
              completed: false,
              detailSlug: "etirements-dynamiques"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Définition Intense Bas du Corps",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Tri-set Quadriceps: Squat Bulgare / Extensions / Fentes - 4 tours",
              completed: false,
              detailSlug: "tri-set-quadriceps"
            },
            {
              title: "Tri-set Ischio/Fessiers: Soulevé Roumain / Curl Jambes / Hip Thrust - 4 tours",
              completed: false,
              detailSlug: "tri-set-ischio-fessiers"
            },
            {
              title: "Superset Mollets: Debout / Assis - 4 tours",
              completed: false,
              detailSlug: "superset-mollets"
            },
            {
              title: "Circuit Métabolique Complet - 4 tours",
              completed: false,
              detailSlug: "circuit-metabolique-complet"
            },
            {
              title: "Cardio HIIT - 20min",
              completed: false,
              detailSlug: "cardio-hiit-20min"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Technique",
              completed: false,
              detailSlug: "preparation-seance-club-focus-technique"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Circuit Cardio & Définition",
          exercises: [
            {
              title: "Échauffement Dynamique - 15min",
              completed: false,
              detailSlug: "echauffement-dynamique-15min"
            },
            {
              title: "Circuit Cardio-Musculation 1 - 3 tours",
              completed: false,
              detailSlug: "circuit-cardio-musculation-1"
            },
            {
              title: "Circuit Cardio-Musculation 2 - 3 tours",
              completed: false,
              detailSlug: "circuit-cardio-musculation-2"
            },
            {
              title: "Circuit Définition Finale - Corps Complet",
              completed: false,
              detailSlug: "circuit-definition-finale-corps-complet"
            },
            {
              title: "Circuit Abdominal Intensif - 3 tours",
              completed: false,
              detailSlug: "circuit-abdominal-intensif"
            },
            {
              title: "Étirements Complets",
              completed: false,
              detailSlug: "etirements-complets"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe & Kick-Boxing Approfondissement",
          exercises: [
            {
              title: "Échauffement Complet - 25min",
              completed: false,
              detailSlug: "echauffement-complet-25min"
            },
            {
              title: "Coups de Pied Bas - Perfectionnement",
              completed: false,
              detailSlug: "coups-de-pied-bas-perfectionnement"
            },
            {
              title: "Introduction Coups de Pied Moyens - Technique",
              completed: false,
              detailSlug: "introduction-coups-de-pied-moyens-technique"
            },
            {
              title: "Combinaisons Poings-Pieds - Drills",
              completed: false,
              detailSlug: "combinaisons-poings-pieds-drills"
            },
            {
              title: "Travail au Sac Mixte - 8×2min",
              completed: false,
              detailSlug: "travail-au-sac-mixte-8x2min"
            },
            {
              title: "Étirements Spécifiques Kick-Boxing",
              completed: false,
              detailSlug: "etirements-specifiques-kick-boxing"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Récupération Active & Mobilité",
          exercises: [
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            },
            {
              title: "Mobilité Spécifique Jambes & Hanches",
              completed: false,
              detailSlug: "mobilite-specifique-jambes-hanches"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Préparation Mentale - Visualisation Kick-Boxing",
              completed: false,
              detailSlug: "preparation-mentale-visualisation-kick-boxing"
            }
          ]
        }
      ]
    },
    {
      weekNumber: 11,
      dateRange: {
        start: "2025-06-24",
        end: "2025-06-30"
      },
      objectives: [
        "Accentuation de la définition musculaire finale",
        "Consolidation des acquis techniques en boxe",
        "Développement de l'endurance maximale",
        "Progression en kick-boxing"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Définition Finale Haut du Corps",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Giant-Set Pectoraux - 3 tours",
              completed: false,
              detailSlug: "giant-set-pectoraux"
            },
            {
              title: "Giant-Set Dos - 3 tours",
              completed: false,
              detailSlug: "giant-set-dos"
            },
            {
              title: "Giant-Set Épaules - 3 tours",
              completed: false,
              detailSlug: "giant-set-epaules"
            },
            {
              title: "Giant-Set Bras - 3 tours",
              completed: false,
              detailSlug: "giant-set-bras"
            },
            {
              title: "Circuit Abdominal Final - 4 tours",
              completed: false,
              detailSlug: "circuit-abdominal-final"
            },
            {
              title: "Cardio HIIT - 25min",
              completed: false,
              detailSlug: "cardio-hiit-25min"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Endurance & Technique",
          exercises: [
            {
              title: "Échauffement Intensif - 25min",
              completed: false,
              detailSlug: "echauffement-intensif-25min"
            },
            {
              title: "Shadowboxing Endurance - 8×3min",
              completed: false,
              detailSlug: "shadowboxing-endurance-8x3min"
            },
            {
              title: "Travail de Précision Technique",
              completed: false,
              detailSlug: "travail-de-precision-technique"
            },
            {
              title: "Combinaisons Avancées - Drills",
              completed: false,
              detailSlug: "combinaisons-avancees-drills"
            },
            {
              title: "Travail au Sac - Endurance - 10×2min",
              completed: false,
              detailSlug: "travail-au-sac-endurance-10x2min"
            },
            {
              title: "Étirements Spécifiques Boxe",
              completed: false,
              detailSlug: "etirements-specifiques-boxe"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Définition Finale Bas du Corps",
          exercises: [
            {
              title: "Échauffement Phase Finale",
              completed: false,
              detailSlug: "echauffement-phase-finale"
            },
            {
              title: "Giant-Set Quadriceps - 3 tours",
              completed: false,
              detailSlug: "giant-set-quadriceps"
            },
            {
              title: "Giant-Set Ischio/Fessiers - 3 tours",
              completed: false,
              detailSlug: "giant-set-ischio-fessiers"
            },
            {
              title: "Giant-Set Mollets & Stabilisateurs - 3 tours",
              completed: false,
              detailSlug: "giant-set-mollets-stabilisateurs"
            },
            {
              title: "Circuit Métabolique Final - 4 tours",
              completed: false,
              detailSlug: "circuit-metabolique-final"
            },
            {
              title: "Cardio HIIT - 25min",
              completed: false,
              detailSlug: "cardio-hiit-25min"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Cours Hebdomadaire",
          exercises: [
            {
              title: "Préparation Séance Club - Focus Endurance",
              completed: false,
              detailSlug: "preparation-seance-club-focus-endurance"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement",
              completed: false,
              detailSlug: "journal-entrainement"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Circuit Ultime Définition",
          exercises: [
            {
              title: "Échauffement Complet - 20min",
              completed: false,
              detailSlug: "echauffement-complet-20min"
            },
            {
              title: "Circuit Ultime Haut du Corps - 3 tours",
              completed: false,
              detailSlug: "circuit-ultime-haut-du-corps"
            },
            {
              title: "Circuit Ultime Bas du Corps - 3 tours",
              completed: false,
              detailSlug: "circuit-ultime-bas-du-corps"
            },
            {
              title: "Circuit Ultime Full Body - 3 tours",
              completed: false,
              detailSlug: "circuit-ultime-full-body"
            },
            {
              title: "Circuit Abdominal Final - 3 tours",
              completed: false,
              detailSlug: "circuit-abdominal-final"
            },
            {
              title: "Cardio HIIT - 15min",
              completed: false,
              detailSlug: "cardio-hiit-15min"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe & Kick-Boxing Consolidation",
          exercises: [
            {
              title: "Échauffement Complet - 25min",
              completed: false,
              detailSlug: "echauffement-complet-25min"
            },
            {
              title: "Révision Complète Boxe Anglaise",
              completed: false,
              detailSlug: "revision-complete-boxe-anglaise"
            },
            {
              title: "Perfectionnement Kick-Boxing",
              completed: false,
              detailSlug: "perfectionnement-kick-boxing"
            },
            {
              title: "Enchaînements Mixtes Poings-Pieds",
              completed: false,
              detailSlug: "enchainements-mixtes-poings-pieds"
            },
            {
              title: "Travail au Sac Mixte - 10×2min",
              completed: false,
              detailSlug: "travail-au-sac-mixte-10x2min"
            },
            {
              title: "Étirements Complets",
              completed: false,
              detailSlug: "etirements-complets"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Préparation Semaine Finale",
          exercises: [
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            },
            {
              title: "Tableau de Suivi Hebdomadaire",
              completed: false,
              detailSlug: "tableau-de-suivi-hebdomadaire"
            },
            {
              title: "Planification Tests Finaux",
              completed: false,
              detailSlug: "planification-tests-finaux"
            },
            {
              title: "Récupération Active Profonde",
              completed: false,
              detailSlug: "recuperation-active-profonde"
            }
          ]
        }
      ]
    },

    {
      weekNumber: 12,
      dateRange: {
        start: "2025-07-01",
        end: "2025-07-07"
      },
      objectives: [
        "Évaluation finale des progrès",
        "Tests de performance physique et technique",
        "Peaufinage de la définition musculaire",
        "Préparation au kick-boxing post-vacances"
      ],
      days: [
        {
          dayName: "Lundi",
          title: "Musculation - Tests Finaux Haut du Corps",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Test Final - Développé Couché",
              completed: false,
              detailSlug: "test-final-developpe-couche"
            },
            {
              title: "Test Final - Tractions",
              completed: false,
              detailSlug: "test-final-tractions"
            },
            {
              title: "Test Final - Développé Militaire",
              completed: false,
              detailSlug: "test-final-developpe-militaire"
            },
            {
              title: "Test Final - Dips",
              completed: false,
              detailSlug: "test-final-dips"
            },
            {
              title: "Circuit de Récupération",
              completed: false,
              detailSlug: "circuit-de-recuperation"
            }
          ]
        },
        {
          dayName: "Mardi",
          title: "Boxe Domicile - Évaluation Finale Technique",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Test Final - Technique Boxe Anglaise",
              completed: false,
              detailSlug: "test-final-technique-boxe-anglaise"
            },
            {
              title: "Test Final - Combinaisons",
              completed: false,
              detailSlug: "test-final-combinaisons"
            },
            {
              title: "Test Final - Défense & Esquives",
              completed: false,
              detailSlug: "test-final-defense-esquives"
            },
            {
              title: "Évaluation Kick-Boxing - Bases",
              completed: false,
              detailSlug: "evaluation-kick-boxing-bases"
            },
            {
              title: "Récupération & Étirements",
              completed: false,
              detailSlug: "recuperation-etirements"
            }
          ]
        },
        {
          dayName: "Mercredi",
          title: "Musculation - Tests Finaux Bas du Corps",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Test Final - Squat Bulgare",
              completed: false,
              detailSlug: "test-final-squat-bulgare"
            },
            {
              title: "Test Final - Soulevé de Terre Roumain",
              completed: false,
              detailSlug: "test-final-souleve-de-terre-roumain"
            },
            {
              title: "Test Final - Explosivité",
              completed: false,
              detailSlug: "test-final-explosivite"
            },
            {
              title: "Circuit de Récupération",
              completed: false,
              detailSlug: "circuit-de-recuperation"
            }
          ]
        },
        {
          dayName: "Jeudi",
          title: "Boxe Club - Dernière Séance",
          exercises: [
            {
              title: "Préparation Séance Club - Bilan",
              completed: false,
              detailSlug: "preparation-seance-club-bilan"
            },
            {
              title: "Cours au Club de Boxe",
              completed: false,
              detailSlug: "cours-au-club-de-boxe"
            },
            {
              title: "Journal d'Entraînement Final",
              completed: false,
              detailSlug: "journal-entrainement-final"
            }
          ]
        },
        {
          dayName: "Vendredi",
          title: "Définition Finale - Corps Complet",
          exercises: [
            {
              title: "Échauffement Complet",
              completed: false,
              detailSlug: "echauffement-complet"
            },
            {
              title: "Circuit Définition Finale - Corps Complet",
              completed: false,
              detailSlug: "circuit-definition-finale-corps-complet"
            },
            {
              title: "Circuit Définition Finale - Haut du Corps",
              completed: false,
              detailSlug: "circuit-definition-finale-haut-du-corps"
            },
            {
              title: "Circuit Définition Finale - Bas du Corps",
              completed: false,
              detailSlug: "circuit-definition-finale-bas-du-corps"
            },
            {
              title: "Circuit Abdominal Ultra-Définition",
              completed: false,
              detailSlug: "circuit-abdominal-ultra-definition"
            },
            {
              title: "Cardio HIIT Final - 20min",
              completed: false,
              detailSlug: "cardio-hiit-final-20min"
            }
          ]
        },
        {
          dayName: "Samedi",
          title: "Boxe & Kick-Boxing Bilan Final",
          exercises: [
            {
              title: "Échauffement Complet - 25min",
              completed: false,
              detailSlug: "echauffement-complet-25min"
            },
            {
              title: "Test Endurance Finale - Boxe Anglaise",
              completed: false,
              detailSlug: "test-endurance-finale-boxe-anglaise"
            },
            {
              title: "Test Final - Kick-Boxing Bases",
              completed: false,
              detailSlug: "test-final-kick-boxing-bases"
            },
            {
              title: "Travail au Sac Final - 6×3min",
              completed: false,
              detailSlug: "travail-au-sac-final-6x3min"
            },
            {
              title: "Planification Post-Vacances Kick-Boxing",
              completed: false,
              detailSlug: "planification-post-vacances-kick-boxing"
            },
            {
              title: "Récupération & Étirements Complets",
              completed: false,
              detailSlug: "recuperation-etirements-complets"
            }
          ]
        },
        {
          dayName: "Dimanche",
          title: "Bilan Final & Préparation Vacances",
          exercises: [
            {
              title: "Mobilité Articulaire Complète",
              completed: false,
              detailSlug: "mobilite-articulaire-complete"
            },
            {
              title: "Tableau de Suivi Final",
              completed: false,
              detailSlug: "tableau-de-suivi-final"
            },
            {
              title: "Plan de Maintien Pendant Vacances",
              completed: false,
              detailSlug: "plan-de-maintien-pendant-vacances"
            },
            {
              title: "Plan Nutritionnel Vacances",
              completed: false,
              detailSlug: "plan-nutritionnel-vacances"
            }
          ]
        }
      ]
    }
  ]
};
