const BASE = (import.meta.env.BASE_URL || "/").endsWith("/")
  ? (import.meta.env.BASE_URL || "/")
  : `${import.meta.env.BASE_URL}/`;

export const assetPath = (path) => `${BASE}${path.replace(/^\//, "")}`;

export const myProjects = [
  {
    id: 1,
    title: "Delhi Metro Rail App",
    description:
      "Public navigator metro application with 10M+ installs, in-app purchases, ads, FCM, and AI-powered voice assistant features for hands-free access.",
    subDescription: [
      "Engineered responsive cross-platform navigation with Flutter, rendering interactive canvas polylines and station networks.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time schedule alerts, route disruptions, and transit updates.",
      "Implemented high-performing mobile monetization through AdMob and scalable in-app purchase flows.",
      "Designed voice assistant integration with speech recognition for accessible, hands-free route searches.",
    ],
    href: "https://www.linkedin.com/in/girijesh-paliwal-05454b190/",
    logo: assetPath("assets/logos/flutter.svg"),
    image: assetPath("assets/projects/delhi-metro.jpg"),
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: assetPath("assets/logos/flutter.svg"),
      },
      {
        id: 2,
        name: "Dart",
        path: assetPath("assets/logos/dart.svg"),
      },
      {
        id: 3,
        name: "Firebase",
        path: assetPath("assets/logos/firebase.svg"),
      },
      {
        id: 4,
        name: "Android",
        path: assetPath("assets/logos/android.svg"),
      },
    ],
  },
  {
    id: 2,
    title: "CoachBook Backend & API",
    description:
      "Scalable coaching reservation API with timezone-aware scheduling, athlete/coach booking flows, Stripe Connect payouts, FCM alerts, and cron automation.",
    subDescription: [
      "Built a high-performance RESTful API using Laravel 12 and PHP 8.2 with Sanctum token authentication and RBAC.",
      "Automated global payouts and athlete/coach subscription billing using Stripe Connect webhooks.",
      "Optimized database query performance and caching, reducing API latency by 45% with 99.9% uptime.",
      "Implemented timezone-aware booking calculations and background queue workers for automated notifications.",
    ],
    href: "mailto:girjeshpaliwal880@gmail.com?subject=CoachBook%20Backend%20Inquiry",
    logo: assetPath("assets/logos/laravel.svg"),
    image: assetPath("assets/projects/coachbook.jpg"),
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: assetPath("assets/logos/laravel.svg"),
      },
      {
        id: 2,
        name: "Stripe",
        path: assetPath("assets/logos/stripe.svg"),
      },
      {
        id: 3,
        name: "SQLite",
        path: assetPath("assets/logos/sqlite.svg"),
      },
      {
        id: 4,
        name: "Git",
        path: assetPath("assets/logos/git.svg"),
      },
    ],
  },
  {
    id: 3,
    title: "Serve-It App",
    description:
      "Cross-platform service booking app with real-time notifications, socket-based chat, and scalable BLoC architecture for Android and iOS.",
    subDescription: [
      "Architected scalable mobile client with Flutter and BLoC pattern for predictable state management.",
      "Delivered real-time bi-directional messaging with WebSockets ensuring message delivery latency under 200ms.",
      "Achieved a 99.8% crash-free session rate with strict error boundaries and automated unit testing.",
      "Integrated push notifications and background sync for live service updates and booking tracking.",
    ],
    href: "https://www.linkedin.com/in/girijesh-paliwal-05454b190/",
    logo: assetPath("assets/logos/flutter.svg"),
    image: assetPath("assets/projects/serve-it.jpg"),
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: assetPath("assets/logos/flutter.svg"),
      },
      {
        id: 2,
        name: "Dart",
        path: assetPath("assets/logos/dart.svg"),
      },
      {
        id: 3,
        name: "Firebase",
        path: assetPath("assets/logos/firebase.svg"),
      },
      {
        id: 4,
        name: "Git",
        path: assetPath("assets/logos/git.svg"),
      },
    ],
  },
  {
    id: 4,
    title: "Metro Route Map — Ahmedabad",
    description:
      "Ahmedabad regional transport utility with bus route search, timetables, metro navigation, nearest station tools, multilingual support, and 50K+ Google Play downloads.",
    subDescription: [
      "Published native Android application with 50,000+ active downloads on the Google Play Store.",
      "Engineered offline route calculation, BRTS bus timetables, and nearest metro station locator.",
      "Integrated multilingual support for Gujarati, Hindi, and English to cater to regional commuters.",
      "Optimized offline SQLite caching to provide zero-latency transit navigation without network connectivity.",
    ],
    href: "https://play.google.com/store/apps/details?id=com.traintimetable.brts.ahmedabadmetro&hl=en_IN",
    logo: assetPath("assets/logos/android.svg"),
    image: assetPath("assets/projects/ahmedabad-metro.jpg"),
    tags: [
      {
        id: 1,
        name: "Android",
        path: assetPath("assets/logos/android.svg"),
      },
      {
        id: 2,
        name: "Kotlin",
        path: assetPath("assets/logos/kotlin.svg"),
      },
      {
        id: 3,
        name: "SQLite",
        path: assetPath("assets/logos/sqlite.svg"),
      },
      {
        id: 4,
        name: "Git",
        path: assetPath("assets/logos/git.svg"),
      },
    ],
  },
  {
    id: 5,
    title: "7Sales Management App",
    description:
      "Enterprise sales and attendance application with live location tracking, offline logging, Bluetooth punch-in/out, AI face detection, and real-time server sync.",
    subDescription: [
      "Developed background geolocation tracking and geofencing for sales field executive management.",
      "Implemented on-device AI face detection and Bluetooth beacons for fraud-proof attendance check-ins.",
      "Built resilient offline-first SQLite sync engine handling 5,000+ logs daily with conflict resolution.",
      "Improved field reporting turnaround time and data accuracy by 25% across enterprise teams.",
    ],
    href: "https://www.linkedin.com/in/girijesh-paliwal-05454b190/",
    logo: assetPath("assets/logos/flutter.svg"),
    image: assetPath("assets/projects/7sales.jpg"),
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: assetPath("assets/logos/flutter.svg"),
      },
      {
        id: 2,
        name: "Android",
        path: assetPath("assets/logos/android.svg"),
      },
      {
        id: 3,
        name: "Firebase",
        path: assetPath("assets/logos/firebase.svg"),
      },
      {
        id: 4,
        name: "Git",
        path: assetPath("assets/logos/git.svg"),
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=919024652541&text=hi&type=phone_number&app_absent=0",
    icon: assetPath("assets/socials/whatsApp.svg"),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/girijesh-paliwal-05454b190/",
    icon: assetPath("assets/socials/linkedIn.svg"),
  },
  {
    name: "GitHub",
    href: "https://github.com/GirijeshDev",
    icon: assetPath("assets/socials/github.svg"),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_girijesh___/",
    icon: assetPath("assets/socials/instagram.svg"),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/girijesh.paliwal/",
    icon: assetPath("assets/socials/facebook.svg"),
  },
];

export const experiences = [
  {
    title: "Software Developer — Flutter / Android Native",
    job: "Appspundit Infotech Pvt Ltd",
    date: "Jun 2022 — Present",
    contents: [
      "Designing, developing, and deploying scalable mobile applications with Flutter, React Native, Firebase, and REST APIs.",
      "Delivering production-grade mobile applications with a strong focus on 60fps UI performance, memory optimization, and store release readiness.",
      "Collaborating across cross-functional product teams to implement clean architecture, BLoC/Provider state management, and real-time socket communication.",
      "Spearheading end-to-end releases on the Google Play Store and Apple App Store, handling compliance, CI/CD, and post-launch analytics.",
    ],
  },
  {
    title: "Mobile Software Developer",
    job: "Freelance.com",
    date: "Feb 2021 — May 2022",
    contents: [
      "Built custom mobile applications for diverse global clients across Android and iOS platforms.",
      "Maintained 100% on-time project delivery with outstanding client satisfaction ratings and measurable user retention gains.",
      "Integrated secure payment gateways (Stripe, Razorpay), push notification services, and third-party RESTful web services.",
      "Optimized app startup time, bundle size, and responsiveness across varied device form factors and OS versions.",
    ],
  },
  {
    title: "Android Developer",
    job: "TCG Development Pvt Ltd",
    date: "Sep 2020 — Jan 2021",
    contents: [
      "Started professional mobile engineering, turning functional requirements into responsive native Android application features.",
      "Contributed to core architecture of a crypto C2C/B2C exchange mobile app with secure wallet workflows.",
      "Implemented native Android UI/UX layouts, background workers, and SQLite local storage solutions.",
    ],
  },
];

export const reviews = [
  {
    name: "Engineering Director",
    username: "@appspundit",
    body: "Girijesh optimized our app's core architecture and APIs, reducing crash rates significantly while boosting startup speed.",
    img: "https://robohash.org/appspundit?set=set4",
  },
  {
    name: "Product Manager",
    username: "@tcgdevelopment",
    body: "A rare mobile developer who excels in Flutter cross-platform and native integration. Outstanding delivery on complex voice assistant features.",
    img: "https://robohash.org/tcg?set=set4",
  },
  {
    name: "Transit Project Lead",
    username: "@delhimetro_team",
    body: "Exceptional mastery of Flutter animations, polyline navigation, and real-time FCM integration for multi-million user apps.",
    img: "https://robohash.org/delhimetro?set=set4",
  },
  {
    name: "Platform Architect",
    username: "@coachbook_api",
    body: "Delivered our scheduling and Stripe Connect backend with seamless performance, rock-solid security, and 99.9% uptime.",
    img: "https://robohash.org/coachbook?set=set4",
  },
  {
    name: "Lead UI/UX Designer",
    username: "@serveit_mobile",
    body: "Girijesh brings pixel-perfect fidelity to Figma designs and creates fluid, natural mobile interactions that users love.",
    img: "https://robohash.org/serveit?set=set4",
  },
  {
    name: "Operations Lead",
    username: "@7sales_enterprise",
    body: "The offline sync engine and AI face detection features he built transformed our field team's daily productivity completely.",
    img: "https://robohash.org/7sales?set=set4",
  },
];
