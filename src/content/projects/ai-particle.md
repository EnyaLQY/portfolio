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
    text: "<br><h5>When every automotive brand starts adding AI, how can the experience still feel distinctly BMW?</h5><br>As major automotive OEMs rush to launch in-vehicle generative AI features, product functions have become highly homogeneous, making brand differentiation difficult. To build exclusive differentiated experiences and fully convey BMW’s brand essence, we integrated AIGC generation capabilities with existing widget systems to design a new customizable AI component solution with consistent visual and interactive styling.<br><br>The goal was not just to demonstrate what AI could generate, but to explore how users could create, organize, and interact with dynamic AI-generated content within a familiar BMW experience."
  - type: "two-column"
    title: "Design Strategies"
    left:
      kind: "text"
      text: "With the interaction framework already established, I focused on how AI-generated particles should be organized and presented within the existing HMI system. The key question was not simply where to place a new AI feature, but: <strong>How should users understand, access, and manage a growing collection of AI-generated content without making the interface feel overwhelming?</strong><p>Rather than introducing GenAI as a completely separate new App, I explored how it could extend the existing information hierarchy within the particle configuration page while still giving users a clear mental model of what they could create and customize.</p> Unlike pre-defined fixed particles, GenAI particles could have different sizes, content types, and visual characteristics. I therefore explored how the layout could accommodate this flexibility while maintaining a consistent visual hierarchy. I considered factors such as:<ul><br><li>Particle size and hierarchy</li><li>Relationship between AI-generated and existing content</li><li>Visual consistency with the BMW design system</li><li>How the layout could scale as more content was introduced</li></ul>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/linghuo.jpg.webp"
        alt: ""
        caption: "Existing Particle Configuration Page"
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
    title: "GenAI UX Design"
    text: "At this stage, the challenge was no longer simply defining what the interface should look like. We had to make several decisions where user experience, visual hierarchy, and engineering constraints pulled in different directions. I treated the user experience as the primary evaluation criterion, while also considering implementation cost, reusability, and long-term scalability. For each decision, I explored alternative solutions, mapped their impact on the user journey and interface hierarchy, and brought the options into cross-functional discussions with designers and developers. Then two discussions became particularly important."
  - type: "paragraph"
    text: "<br><h5>Discussion 1: Where Should Users Enter GenAI?</h5><p>I explored two options for introducing GenAI into the launcher. The development team initially preferred a <strong>first-layer entry</strong> because a new second-layer entry would require additional implementation effort within a tight demo timeline. From a UX perspective, I advocated for a <strong>second-layer entry</strong> because it provided a clearer information hierarchy and a more scalable structure as GenAI capabilities expanded. <br><br>Rather than treating this as a UX-versus-engineering conflict, I worked with the development team to understand the underlying constraint. We found that the main issue was delivery time, rather than technical feasibility. I then discussed the trade-off with my team lead and facilitated a discussion with the development team to identify a practical solution. Together, we proposed focusing the initial demo on one or two representative use cases instead of implementing the full feature set.<br><br>This approach allowed me to preserve the UX direction while adapting the implementation scope—maintaining a clear, scalable experience without sacrificing the timeline needed to validate the concept in a real vehicle.</p>"
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/layer.png"
      alt: ""
  - type: "paragraph"
    text: "<br><br><h5>Discussion 2: How Should S/L Particles Be Organized?</h5><p>We explored two approaches. The first was <strong>a unified entry</strong>, where users could generate both S and L particles within the same conversation. This provided flexibility and allowed users to explore different formats in one place, but it also introduced more mixed content and increased the generation resources required by the system. <br><br>The second approach was to create <strong>dedicated entries for each particle size</strong>. I preferred this direction because it gave each entry a clearer purpose and made the user's intent more explicit. Instead of asking users to make an additional decision about size within the generation flow, I designed the structure to communicate the available options more clearly from the beginning. It also created a more modular system for development, allowing different particle types to evolve independently while keeping the underlying interaction logic reusable. This approach provided a cleaner information hierarchy while establishing a more maintainable foundation for future AI-generated particles.</p>"
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/layout.png"
      alt: ""  
  - type: "paragraph"
    title: "Prototyping Roadmap"
    text: "At the same time, I started preparing for hi-fi prototype. While conventional ProtoPie Message-Driven Prototype (MDP) workflows work for general cases, they suffer from performance degradation and instability when handling heavy visual assets, intensive data computation, and complex interactions, limiting scalability and maintainability. To solve these issues, I optimized the existing workflow with a Data-based MDP structure. By applying database-driven data management to centralize and structure states and data, this approach reduces interface coupling, modularizes functional logic, and maintains stable prototype performance for large-scale, complex interactive scenarios."
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/background.png"
      alt: ""
  - type: "paragraph"
    text: "<p>The interaction system adopts two core operation modes — tap and drag — serving different scenarios with independent logic and feedback rules.</p>"
  - type: "two-column"
    left:
      kind: "text"
      text: "<br><strong>Tap mode</strong> is designed for regular selection and components with secondary menus. <br><br>Upon tapping, the system checks slot availability: it auto-fills components sequentially for empty slots, and prompts users for replacement or removal when slots are full. This system-centric mode delivers efficient and consistent daily operations."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/tap.png"
        alt: ""
        caption: "Tap Mode"
  - type: "two-column"
    left:
      kind: "text"
      text: "<br><strong>Drag mode</strong> provides flexible spatial adjustment while supporting secondary menus. <br><br>It tracks drag trajectories in real time and identifies valid drop areas on release, triggering snap placement, content replacement or layout rearrangement accordingly. This mode focuses on precise spatial control and responsive real-time feedback."
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
  - type: embed
    title: "Official Trailer for GenAI Particle"
    src: https://www.youtube.com/embed/F7pbGJCueg4
    width: "80%"
    height: "400"
    caption: "iX3 captures a horse with the in-car camera and transforms the image into an AI-generated particle"
  - type: "paragraph"
    text: "<br><br><br><strong>Disclaimer:</strong> All materials are presented solely to demonstrate design thinking and process, and do not represent the actual product."
featured: true
---
