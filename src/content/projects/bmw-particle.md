---
title: "BMW - AI Particle Design"
category: "UX Design & Prototyping"
Topic: "Pre-development Project"
timeline: "2025.10 - 2025.11"
summary: "Integrating AIGC with BMW branding, we design customizable AI Particle framework and developed high-fidelity prototype for usability testing."
heroGallery:
  - src: "assets/img/portfolio/bmw-particle/PROJECT1.png"
    alt: ""
  - src: "assets/img/portfolio/bmw-particle/PARTICLE3.png"
    alt: ""
info:
  role: "UX Designer & Prototyper"
  tools: "Figma, ProtoPie, Coding (Python)"
blocks:
  - type: "paragraph"
    title: "Project Background"
    text: "As major automotive OEMs rush to launch in-vehicle generative AI features, product functions have become highly homogeneous, making brand differentiation difficult. To build exclusive differentiated experiences and fully convey BMW’s brand essence, we integrated AIGC generation capabilities with existing widget systems to design a new customizable AI component solution with consistent visual and interactive styling."
  - type: "paragraph"
    title: "Design Strategies"
    text: "During the design of AI-generated Particle and their configuration pages, we encountered a critical challenge: <br><br><ul><li>Conducting early-stage usability testing with real users and communicating complex interaction logic to stakeholders before development began.</li><li>Due to the project’s dynamic generation and multi-state logic, traditional tools like Figma fail to deliver product-fidelity interactive validation. </li></ul>Therefore, I adopted ProtoPie as a rapid prototyping tool to bridge the experience gap between design and development."
  # - type: "two-column"
  #   title: "Design Strategies"
  #   left:
  #     kind: "text"
  #     text: "During the design of AI-generated Particle and their configuration pages, we encountered a critical challenge: <br><br><ul><li>Conducting early-stage usability testing with real users and communicating complex interaction logic to stakeholders before development began.</li><li>Due to the project’s dynamic generation and multi-state logic, traditional tools like Figma fail to deliver product-fidelity interactive validation. </li></ul>Therefore, I adopted ProtoPie as a rapid prototyping tool to bridge the experience gap between design and development."
  #   right:
  #     kind: "image"
  #     image:
  #       src: "assets/img/portfolio/bmw-particle/mdp.png"
  #       alt: "Interaction Diagram"
  #       caption: "Different interaction approches"
  - type: "paragraph"
    text: "While conventional ProtoPie Message-Driven Prototype (MDP) workflows work for general cases, they suffer from performance degradation and instability when handling heavy visual assets, intensive data computation, and complex interactions, limiting scalability and maintainability. To solve these issues, I optimized the existing workflow with a Data-based MDP structure. By applying database-driven data management to centralize and structure states and data, this approach reduces interface coupling, modularizes functional logic, and maintains stable prototype performance for large-scale, complex interactive scenarios."
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/background.png"
      alt: ""
  - type: "paragraph"
    title: "GenAI UX Design"
    text: "To address two key design trade-offs, I prioritized user experience as the primary evaluation metric. I conducted multi-dimensional assessments covering user journeys, visual hierarchy, cross-device compatibility and engineering reusability, delivered multiple alternative solutions for cross-team reviews, balanced experience goals against implementation costs, and aligned designers and developers on a final actionable solution.<br><br>"
  - type: "paragraph"
    text: "<br><h5>Discussion 1: Hierarchy of GenAI entry</h5><p>From an engineering perspective, the development team favoured the 1st layer entry to reduce implementation costs. From a UX perspective, I advocated placing the feature within the 2nd layer. Although it moderately increases development workload, this approach avoids UI clutter caused by scattered functions and optimises information hierarchy. When large quantities of generated components are available, categorised organisation simplifies user search paths and yields better long-term experience.</p>"
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/layer.png"
      alt: ""
  - type: "paragraph"
    text: "<br><br><h5>Discussion 2: Layout for S/L sizes Particles</h5><p>Following the decision to adopt a 2nd layer entry, two layout approaches show notable differences in experience and resource consumption. A unified entry storing mixed S/L components offers users multiple sizing options in one conversation, yet consumes more Tokens. My preferred solution is separate dedicated entries for each size. This structure clarifies information hierarchy with intuitive user goals and cleaner visual. It also enables modular logic for development, improves component reusability and reduces maintenance overhead for future iterations.</p>"
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/layout.png"
      alt: ""  
  - type: "paragraph"
    title: "Interaction Roadmap"
    text: "The interaction system adopts two core operation modes — tap and drag — serving different scenarios with independent logic and feedback rules."
  - type: "two-column"
    left:
      kind: "text"
      text: "<p><strong>Tap mode</strong> is designed for regular selection and components with secondary menus. <br><br>Upon tapping, the system checks slot availability: it auto-fills components sequentially for empty slots, and prompts users for replacement or removal when slots are full. This system-centric mode delivers efficient and consistent daily operations.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/tap.png"
        alt: ""
        caption: "Tap Mode"
  - type: "two-column"
    left:
      kind: "text"
      text: "<p><strong>Drag mode</strong> provides flexible spatial adjustment while supporting secondary menus. <br><br>It tracks drag trajectories in real time and identifies valid drop areas on release, triggering snap placement, content replacement or layout rearrangement accordingly. This mode focuses on precise spatial control and responsive real-time feedback.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/drag.png"
        alt: ""
        caption: "Drag Mode"
  - type: "two-column"
    title: "Prototype Implementation"
    left:
      kind: "text"
      text: "<p>Benefiting from modularization and data structure planning, the Python SDK facilitates seamless integration with AI APIs. Newly generated components can be added into the existing framework effortlessly while reusing established interaction workflow.<br><br>Both interaction modes incorporate adaptation logic for components of varying sizes, including placement, replacement and space conflict handling. Python is used for data tracking and centralized scheduling, paired with animations to deliver precise feedback. Data-based MDP greatly improves system stability in complex interactive scenarios, enabling the prototype to maintain smooth and consistent experience under high-density interactions.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/code2.png"
        alt: ""
  - type: "paragraph"
    text: "<br>The prototype supports both text-to-image and image-to-image generation, with adjustable style options to enable targeted and repeated content creation. Structured prompt rules ensure all outputs adhere to BMW branding style regarding size and layout. During pioneer tests, we refined UI styling and features based on Chinese users’ needs and feedback. <br><br><ul><li>We localized the whole workflow, and changed plain icons to figures in order to intuitively illustrate the differences between the three function entry points. </li><li>We found the AI generation speed in dry run was slower than expected, so looping transition animations were introduced to ease waiting anxiety.</li><ul>"
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/cn-localization.png"
      alt: ""  
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/output.png"
      alt: ""  
  - type: "paragraph"
    text: "<br>These outcomes confirm that the design delivers intuitive, viable experiences amid complex interactive and generative scenarios and provides compelling empirical support for future product development. Importantly, many such issues would remain undiscovered if relying solely on static Figma prototypes, which highlights the necessity of high-fidelity interactive prototypes for early design validation."
  - type: "paragraph"
    text: "<br><strong>Disclaimer:</strong> All materials are presented solely to demonstrate design thinking and process, and do not represent the actual product."
featured: true
---
